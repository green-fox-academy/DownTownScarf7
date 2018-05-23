export{};
'use strict';

class BlogPost {
  authorName: string;
  title: string;
  text: string;
  publicationDate: string;
}

let blog1 = new BlogPost,
    blog2 = new BlogPost,
    blog3 = new BlogPost;


blog1.authorName = 'John Doe';
blog1.title = 'Lorem Ipsum';
blog1.text = 'Lorem ipsum dolor sit amet';
blog1.publicationDate = '2000.05.04';
blog2.authorName = 'Tim Urban';
blog2.title = 'Wait but why';
blog2.text = 'A popular long-form, stick-figure-illustrated blog about almost everything.';
blog2.publicationDate = '2010.10.10';
blog3.authorName = 'William Turton';
blog3.title = 'One Engineer Is Trying to Get IBM to Reckon With Trump';
blog3.text = 'Lorem ipsum dolor sit amet';
blog3.publicationDate = '2017.03.28';
