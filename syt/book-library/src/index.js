var mybook1 = {
    isbn: "9780807286005",
    title: "Harry Potter and the Pilosophers Stone",
    author: "J.K. Rowling",
    cover: "",
    year: 2001
};
var mybook2 = {
    isbn: "9780044403371",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "",
    year: 1937
};
var mybook3 = {
    isbn: "9780044403371",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    cover: "",
    year: 2001
};
var mybook4 = {
    isbn: "9780044403371",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "",
    year: 1937
};
var mybook5 = {
    isbn: "9780044403371",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    cover: "",
    year: 1937
};
var mylibrary = [
    mybook1,
    mybook2
];
for (var i = 0; i < mylibrary.length; i++) {
    console.log('isbn: ' + mylibrary[i].isbn);
    console.log('title: ' + mylibrary[i].title);
    console.log('author: ' + mylibrary[i].author);
    console.log('cover: ' + mylibrary[i].cover);
    console.log('year: ' + mylibrary[i].year);
    console.log('***************');
}
