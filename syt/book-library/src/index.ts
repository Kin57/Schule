type Book = {
    readonly isbn: string, title: string, author: string, cover?: string, year: number
}
let mybook1: Book = {
    isbn: "9780807286005",
    title: "Harry Potter and the Pilosophers Stone",
    author: "J.K. Rowling",
    cover: "",
    year: 2001
}
let mybook2: Book = {
    isbn: "9780044403371", title: "The Hobbit", author: "J.R.R. Tolkien", cover: "", year: 1937
}
let mybook3: Book = {
    isbn: "9780044403371",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    cover: "",
    year: 2001
}
let mybook4: Book = {
    isbn: "9780044403371", title: "The Hobbit", author: "J.R.R. Tolkien", cover: "", year: 1937
}
let mybook5: Book = {
    isbn: "9780044403371", title: "The Hobbit", author: "J.R.R. Tolkien", cover: "", year: 1937
}

let mylibrary: Book[] = [mybook1, mybook2]

for (let i = 0; i < mylibrary.length; i++) {
    console.log('isbn: ' + mylibrary[i].isbn)
    console.log('title: ' + mylibrary[i].title)
    console.log('author: ' + mylibrary[i].author)
    console.log('cover: ' + mylibrary[i].cover)
    console.log('year: ' + mylibrary[i].year)
    console.log('***************')
}