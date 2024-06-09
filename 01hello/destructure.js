// const data = [
//     {
//         id: 1,
//         title: "The Lord of the Rings",
//         publicationDate: "1954-07-29",
//         author: "J. R. R. Tolkien",
//         genres: [
//             "fantasy",
//             "high-fantasy",
//             "adventure",
//             "fiction",
//             "novels",
//             "literature",
//         ],
//         hasMovieAdaptation: true,
//         pages: 1216,
//         translations: {
//             spanish: "El señor de los anillos",
//             chinese: "魔戒",
//             french: "Le Seigneur des anneaux",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.52,
//                 ratingsCount: 630994,
//                 reviewsCount: 13417,
//             },
//             librarything: {
//                 rating: 4.53,
//                 ratingsCount: 47166,
//                 reviewsCount: 452,
//             },
//         },
//     },
//     {
//         id: 2,
//         title: "The Cyberiad",
//         publicationDate: "1965-01-01",
//         author: "Stanislaw Lem",
//         genres: [
//             "science fiction",
//             "humor",
//             "speculative fiction",
//             "short stories",
//             "fantasy",
//         ],
//         hasMovieAdaptation: false,
//         pages: 295,
//         translations: {},
//         reviews: {
//             goodreads: {
//                 rating: 4.16,
//                 ratingsCount: 11663,
//                 reviewsCount: 812,
//             },
//             librarything: {
//                 rating: 4.13,
//                 ratingsCount: 2434,
//                 reviewsCount: 0,
//             },
//         },
//     },
//     {
//         id: 3,
//         title: "Dune",
//         publicationDate: "1965-01-01",
//         author: "Frank Herbert",
//         genres: ["science fiction", "novel", "adventure"],
//         hasMovieAdaptation: true,
//         pages: 658,
//         translations: {
//             spanish: "",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.25,
//                 ratingsCount: 1142893,
//                 reviewsCount: 49701,
//             },
//         },
//     },
//     {
//         id: 4,
//         title: "Harry Potter and the Philosopher's Stone",
//         publicationDate: "1997-06-26",
//         author: "J. K. Rowling",
//         genres: ["fantasy", "adventure"],
//         hasMovieAdaptation: true,
//         pages: 223,
//         translations: {
//             spanish: "Harry Potter y la piedra filosofal",
//             korean: "해리 포터와 마법사의 돌",
//             bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
//             portuguese: "Harry Potter e a Pedra Filosofal",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.47,
//                 ratingsCount: 8910059,
//                 reviewsCount: 140625,
//             },
//             librarything: {
//                 rating: 4.29,
//                 ratingsCount: 120941,
//                 reviewsCount: 1960,
//             },
//         },
//     },
//     {
//         id: 5,
//         title: "A Game of Thrones",
//         publicationDate: "1996-08-01",
//         author: "George R. R. Martin",
//         genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
//         hasMovieAdaptation: true,
//         pages: 835,
//         translations: {
//             korean: "왕좌의 게임",
//             polish: "Gra o tron",
//             portuguese: "A Guerra dos Tronos",
//             spanish: "Juego de tronos",
//         },
//         reviews: {
//             goodreads: {
//                 rating: 4.44,
//                 ratingsCount: 2295233,
//                 reviewsCount: 59058,
//             },
//             librarything: {
//                 rating: 4.36,
//                 ratingsCount: 38358,
//                 reviewsCount: 1095,
//             },
//         },
//     },
// ];

// function getBooks() {
//     return data;
// }

// function getBook(id) {
//     return data.find((d) => d.id === id);
// }
// const books = getBook(3)
// const { id, title, author, reviews, reviewsCount, hasMovieAdaptation, pages, genres, translations, publicationDate } = books
// // console.log(genres[0])
// const [PrimaryGenre, SecondaryGenre, ...other] = genres
// // console.log(PrimaryGenre, SecondaryGenre, other)
// const newGenre = [...genres, "manmay"]
// console.log(newGenre)
// const updatebook = { ...books, moviePublicationcount: { 2021: 23, 2023: 21 }, income: "2344" }

// console.log(updatebook)
// const summary = `${title} has id ${id} of author ${author} having genres ${genres} contains ${pages} pages and published in a year ${getyr(publicationDate)}`
// console.log(summary)
// function getyr(str) {
//     return str.split("-")[0]
// }
// const books_s = getBooks()
// // console.log(getyr(publicationDate))
// function TotalReviewCount(book) {
//     const goodreads = book.reviews.goodreads.reviewsCount
//     const librarything = book.reviews.librarything?.reviewsCount ?? 0;
//     return goodreads + librarything
// }
// // ?. =nan
// console.log(TotalReviewCount(books))
// // console.log(genres)
// const arr = [1, 4, 7, 2, 5]
// const arr2 = arr.map(el => el * 2)
// // console.log(arr2)
// const titles = books_s.map(x => x.title)
// // console.log(titles)
// const essential_data = books_s.map(x => {
//     return {
//         title: x.title,
//         author: x.author,
//         reviewsCount: TotalReviewCount(x)
//     }
// })
// // console.log(essential_data)
// const longbook = books_s.filter(x => x.pages > 500).filter(x => x.hasMovieAdaptation)
// // console.log(longbook)
// const adventureBook = books_s.filter(x => x.genres.includes("adventure"))
// console.log(adventureBook)

// const SumOfAllPages = books_s.reduce((sum, x) => x.pages + sum, 0)
// console.log(SumOfAllPages)
// const arr3 = [3, 5, 7, 1, 2, 9]
// const arr5 = arr3.slice().sort((a, b) => a - b)
// console.log(arr3)
// console.log(arr5)
// const SortedBypage = books_s.sort((a, b) => a.pages - b.pages)
// console.log(SortedBypage)
// const NewBook = {
//     id: 6,
//     title: "harry potter the greatest",
//     author: "priyadarsan"
// }
// const Updated_Book = [...books_s, NewBook]
// console.log(Updated_Book)

// const Updated_book_after_del = Updated_Book.filter(x => x.id !== 3)
// console.log(Updated_book_after_del)
// const Book_after_update = Updated_book_after_del.map(x => x.id === 1 ? { ...x, pages: 1 } : x)
// console.log(Book_after_update)
const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
    order: function (Starterindex, mainindex) {
        return [this.starterMenu[Starterindex], this.mainMenu[mainindex]]
    }
}
console.log(restaurant.order(1, 2))
let [positionOne, positionTwo] = restaurant.categories;
// console.log(positionOne, positionTwo);

[positionOne, positionTwo] = [positionTwo, positionOne];
// console.log(positionOne, positionTwo);
// const arr = [1, 2, 4, 5, 6]
// const [a, b, c, d, e] = arr
// console.log(a, b, c, d, e)


// let [main, , secondary] = restaurant.categories
// [main, secondary] = [secondary, main]
// // console.log(restaurant.categories)
// console.log(main, secondary)
// console.log(main, secondary)
// const edibles = ["food", "fruits"];

// let [positionOne, positionTwo] = edibles;
// const temp = positionOne;

// positionOne = positionTwo;
// positionTwo = temp;
// console.log(positionOne, positionTwo);
// const edibles = ["food", "fruits"];