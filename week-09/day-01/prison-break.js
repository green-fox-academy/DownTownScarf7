'use strict';
// Create a prison function, that has your name as a private fugutive variable
// The function should return an object that has two methods:
//  - visit() // logs "[yourname] is visited [x] time(s)" to the console.
//    - the [x] times displayes the numbers the function is called
//    - If the fugitive variable is empty, then display "Nobody is here anymore"
//  - escape() // logs "BREAKING NEWS, [yourname] escaped the prison" to the console.
//    - it should empties the fugitive variable

const prison = (name) => {
  let fugitive = name,
    visits = 0;

  const visit = () => {
    visits++;
    console.log(fugitive ? `${fugitive} is visited ${visits} time(s)` : `Nobody is here anymore`);
  }

  const escape = () => {
    console.log(`BREAKING NEWS, ${fugitive} escaped the prison`);
    fugitive = null;
  }

  return { visit, escape };
}

const javaScript = prison('Bence Vidosits');

javaScript.visit(); // Sad Panda is visited 1 time(s)
javaScript.visit(); // Sad Panda is visited 2 time(s)
javaScript.escape(); // BREAKING NEWS, Sad Panda escaped the prison
javaScript.visit(); // Nobody is here anymore
