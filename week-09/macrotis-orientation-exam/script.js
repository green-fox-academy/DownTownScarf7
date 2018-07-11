// Enable strict mode
'use strict';

// Make new HTTP request
const http = new XMLHttpRequest();
// Variable for edit buttons's ID
let attrId = null;

// When the whole HTML file has loaded, execute the following
window.onload = () => {
  // Function to remove 'selected' class
  // Used with CSS
  const removeSelected = () => {
    // Save the element with the 'selected' class into a variable
    const selected = document.querySelector('.selected');
    // If what we saved exists (it's not undefined)
    if (selected) {
      // Remove the selected class from it
      selected.classList.remove('selected');
    }
  }
  // ################################### Edit buttons onclick events ###################################
  // Select the table element and execute the following function every time we click in it
  document.querySelector('table').addEventListener('click', event => {
    // If what we clicked on has the class 'btn' (these are the edit buttons)
    if (event.target.classList.contains('btn')) {
      // Execute the function I described above
      removeSelected();
      // Add the 'selected' class to the parent element of the element we clicked on
      event.target.parentNode.classList.add('selected');
      // Change my variable to the one I stored in the the edit button
      attrId = event.target.dataset.id;
      // Create new request
      const http2 = new XMLHttpRequest();
      // Set the request method to 'GET' and target to this url
      http2.open('GET', `http://localhost:3000/api/attractions/${event.target.dataset.id}`);
      // We are requesting a JSON
      http2.setRequestHeader("Content-Type", "application/json");
      // When our request loads
      http2.onload = () => {
        // Shorthand keys from response
        const { attr_name, city, price, longitude, lattitude, category, duration, recommended_age } = JSON.parse(http2.responseText).attractions[0];
        // For each key select all input elements on the page and according to which key we are looking at currently change that input's value to that key's value
        [attr_name, city, price, longitude, lattitude, category, duration, recommended_age].forEach((element, index) => {
          document.querySelectorAll('input')[index].value = element;
        });
      }
      // Send my request
      http2.send();
    }
  });

  // ################################### Submit button onlick event ###################################
  // Select the element with the 'submit' ID and execute the following function if it's clicked
  document.querySelector('#submit').addEventListener('click', event => {
    // Prevent default behaviour of the event
    event.preventDefault();
    // Select all elements that are inputs but doesn't have the class 'btn'
    const inputs = document.querySelectorAll('input:not(.btn)');
    // Open this url with the POST method
    http.open('POST', `http://localhost:3000/api/add`);
    // We are working with JSON
    http.setRequestHeader("Content-Type", "application/json");
    // ################## If we have an ID (edit post instead of adding a new one) ##################
    if (attrId) {
      // When our request loads
      http.onload = () => {
        // Save the parent element of the element which has a dataset: id in it which equals to my saved ID, into a variable
        // The edit buttons contain different id-s in their datasets (which I placed in them upon creation)
        // Their parent element is the tr (table row)
        const tr = document.querySelector(`[data-id="${attrId}"]`).parentNode;
        // Delete everything in this element
        tr.innerHTML = '';
        // Create a button
        const btnEdit = document.createElement('button');
        // Save the id in my response into the dataset of my button
        // (This is what I just read out above)
        btnEdit.dataset.id = (JSON.parse(http.responseText).id);
        // Add the 'btn' and the 'edit' classes to my button
        btnEdit.classList.add('btn', 'edit');
        // Change the button's text to 'Edit'
        btnEdit.innerText = 'Edit';
        // For each input field we have create a new 'td' element, place it in our selected row and change it's text into currently selected field's value
        inputs.forEach(field => {
          tr.appendChild(document.createElement('td')).innerText = field.value;
        });
        // Place our edit button into our selected row
        tr.appendChild(btnEdit);
        // Function I defined earlier
        removeSelected();
      }
      // Execute the http request and send the data to our server
      // Send this data as JSON
      http.send(JSON.stringify({
        id: attrId,
        name: inputs[0].value,
        city: inputs[1].value,
        price: inputs[2].value,
        longitude: inputs[3].value,
        lattitude: inputs[4].value,
        category: inputs[5].value,
        duration: inputs[6].value,
        recommended_age: inputs[7].value,
      }));
      // ################## If we don't have an ID (add a new row) ##################
    } else {
      // When our request loads
      http.onload = () => {
        // Create a new row
        const tr = document.createElement('tr');
        // Create a new button
        const btnEdit = document.createElement('button');
        // Store the post's id in our button's dataset
        btnEdit.dataset.id = (JSON.parse(http.responseText).id);
        // Add the 'btn' and the 'edit' classes to our button
        btnEdit.classList.add('btn', 'edit');
        // Change our button's text to 'Edit'
        btnEdit.innerText = 'Edit';
        // Place our new row into the table's body
        document.querySelector('tbody').appendChild(tr);
        // For each input field we have create a new 'td' element, place it in our selected row and change it's text into currently selected field's value
        inputs.forEach(element => {
          tr.appendChild(document.createElement('td')).innerText = element.value;
        });
        // Place our button into our new row
        tr.appendChild(btnEdit);
        // Function I defined earlier
        removeSelected();
      }
      // Execute the http request and send the data to our server
      // Send this data as JSON
      http.send(JSON.stringify({
        name: inputs[0].value,
        city: inputs[1].value,
        price: inputs[2].value,
        longitude: inputs[3].value,
        lattitude: inputs[4].value,
        category: inputs[5].value,
        duration: inputs[6].value,
        recommended_age: inputs[7].value,
      }));
    }
  });

  // ################################### Cancel button's onclick events ###################################
  // Add a click event to our element which has the id 'cancel'
  document.querySelector('#cancel').addEventListener('click', event => {
    // Calling the function I defined earlier
    removeSelected();
    // Select all elements that are inputs but doesn't have the class 'btn'
    // Delete everything typed into them
    document.querySelectorAll('input:not(.btn)').forEach(field => {
      field.value = '';
    });
    // Erase saved ID
    attrId = null;
  });

  // ################################### Create table ###################################
  // Connect with 'METHOD' to 'URL' being 'ASYNC'
  http.open('GET', 'http://localhost:3000/api/attractions', true);
  // What I'm going to work with is JSON
  http.setRequestHeader("Content-Type", "application/json");
  // When my request loads
  http.onload = () => {
    // Create variable for response, null is just a placeholder
    let res = null;
    // Try to do whatever I write inside, if there is a problem, stop and execute whatever is inside the 'catch' after this
    try {
      // Whatever I got as a response is a text
      // Change it into JSON
      // Change res to be equal to this JSON's 'attractions' key
      res = JSON.parse(http.responseText).attractions;
    }
    // Do this if there is an error
    catch (err) {
      // Log the error to the console
      console.log(err);
      // Return nothing in the onload function, a function will end as soon as it returns. This will stop anything else from being executed after this line
      return;
    }
    // If we get a response
    if (res) {
      // For each object inside the response
      res.forEach(element => {
        // Rename keys from response, this just makes my life easier
        const { id, attr_name, city, price, longitude, lattitude, category, duration, recommended_age } = element;
        // Create new row
        const tr = document.createElement('tr');
        // Create new edit button
        const btnEdit = document.createElement('button');
        // Store ID in button
        btnEdit.dataset.id = (id);
        // Add classes to edit button
        btnEdit.classList.add('btn', 'edit');
        // Set edit button's text
        btnEdit.innerText = 'Edit';
        // Place our new row into the body of the table (tbody is already in the HTML)
        document.querySelector('tbody').appendChild(tr);
        // For each key create a td element, place it into our new row and set it's text to the value of our keys
        [attr_name, city, price, longitude, lattitude, category, duration, recommended_age].forEach(value => {
          tr.appendChild(document.createElement('td')).innerText = value;
        });
        // Place our edit button into our new row
        tr.appendChild(btnEdit);
      });
    }
  }
  // Send request, do everything we wrote so far
  http.send();
}
