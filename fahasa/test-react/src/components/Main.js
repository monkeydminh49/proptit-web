import "../styles/Main.css"
import Footer from './Footer';
import { useState } from 'react';

let displayCategories = false;

function SideBar() {
    const _categories = [{
        "id": 1,
        "name": "Sách tiếng Việt",
        "display": true,
    }, {
        "id": 2,
        "name": "Sách tiếng Anh",
        "display": true,
    }, {
        "id": 3,
        "name": "Sách thiếu nhi",
        "display": true,
    }, {
        "id": 4,
        "name": "Sách kinh tế",
        "display": false,
    }, {
        "id": 5,
        "name": "Sách kỹ năng sống",
        "display": false,
    }, {
        "id": 6,
        "name": "Sách văn học",
        "display": false,
    }]

    const [categories, setCategories] = useState(_categories)

    function toggleDisplayCategories() {
        displayCategories = !displayCategories;
        setCategories(currentCategories => {
            return currentCategories.map((category, index) => {
                if (index >= 3) category.display = displayCategories;
                return category;
            })
        })

    }


    return (
        <div className="SideBar">
            <div className="sideBar-title">
                NHÓM SẢN PHẨM
            </div>
            {categories.map(category => {
                return (
                    <div className="sideBar-item" style={{ display: (category.display) ? `block` : `none` }} key={category.id}>
                        {category.name}
                    </div>
                )
            })}
            <button className="seemore-btn" onClick={() => {
                toggleDisplayCategories()
            }}>Xem thêm</button>
        </div >
    )
}

function MainContent() {
    return (
        <div className="MainContent">
            <div className="sale-wrapper">
                <BookList />
            </div>
        </div>
    )
}

function BookList() {
    const books = [{
        "id": 1,
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "price": 100000,
        "episode": "1",
        "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    }, {
        "id": 1,
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "price": 100000,
        "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    }, {
        "id": 1,
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "price": 100000,
        "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    }, {
        "id": 1,
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "price": 100000,
        "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    }, {
        "id": 1,
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "price": 100000,
        "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    }, {
        "id": 1,
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "price": 100000,
        "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    }, {
        "id": 1,
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "price": 100000,
        "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    }, {
        "id": 1,
        "title": "Harry Potter",
        "author": "J.K. Rowling",
        "price": 100000,
        "image": "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
        "description": "Harry Potter and the Philosopher's Stone is a fantasy novel written by British author J. K. Rowling. The first novel in the Harry Potter series and Rowling's debut novel, it follows Harry Potter, a young wizard who discovers his magical heritage on his eleventh birthday, when he receives a letter of acceptance to Hogwarts School of Witchcraft and Wizardry. Harry makes close friends and a few enemies during his first year at the school, and with the help of his friends, Harry faces an attempted comeback by the dark wizard Lord Voldemort, who killed Harry's parents, but failed to kill Harry when he was just 15 months old."
    }]
    return (
        books.map(book => {
            return (
                <div className="sale-item" key={book.id}>
                    <img className="sale-item-img"
                        src={book.image}
                        alt="" />
                    <span className="sale-item-name">{book.title}</span>
                    <div className="sale-price-wrapper">
                        <span className="sale-price price">{book.price}</span>
                        {(book.episode) ? <span className="book-episode">Tập 1</span> : null}
                    </div>
                    <span className="item-price">77.000đ</span>
                    <div className="rating">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="rating-number">(0)</span>
                    </div>
                    {/* <span className="progress">Đã Bán 0</span> */}
                    <div className="sale-percent">50%</div>
                </div>
            )
        })
    )
}


export default function Main() {
    return (
        <div className="Main">
            <div className="current-location"></div>
            <div className="Content">
                <SideBar />
                <MainContent />
            </div>
            <Footer />
        </div>

    )
}