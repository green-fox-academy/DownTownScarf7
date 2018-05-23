export{};
'use strict';

class PostIt {
  bacgroundColor: string;
  text: string;
  textColor: string;
}

let post1 = new PostIt,
    post2 = new PostIt,
    post3 = new PostIt;
post1.bacgroundColor = 'orange';
post1.text = 'Idea 1';
post1.textColor = 'blue';
post2.bacgroundColor = 'pink';
post2.text = 'Awesome';
post2.textColor = 'black';
post3.bacgroundColor = 'yellow';
post3.text = 'Superb!';
post3.textColor = 'green';
