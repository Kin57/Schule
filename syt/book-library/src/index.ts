type Book = {
    readonly isbn: string,
    title: string,
    author: string,
    cover?: string,
    year: number
}
let mybook1: Book = {
    isbn: "",
    title: "bible",
    author: "me",
    cover: "a",
    year: 0
}
let mybook2: Book = {
    isbn: "",
    title: "bible",
    author: "me",
    cover: "a",
    year: 0
}

let mylibrary: Book[] = [
    mybook1,
    mybook2
]
console.log('***************')
for(let i = 0; i < mylibrary.length; i++){
    console.log(mylibrary[i].isbn)
    console.log(mylibrary[i].title)
    console.log(mylibrary[i].author)
    console.log(mylibrary[i].cover)
    console.log(mylibrary[i].year)
    console.log('***************')
}