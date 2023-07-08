import "../styles/Main.css"
import Footer from './Footer';
import { useState } from 'react';

let displayCategories = false;

function SideBar() {
    const _categories = [{
        "id": 1,
        "name": "Graphic Novels, Anime & Manga",
        "display": true,
    }, {
        "id": 2,
        "name": "Romance",
        "display": true,
    }, {
        "id": 3,
        "name": "Fantasy",
        "display": true,
    }, {
        "id": 4,
        "name": "Contemporary Fiction",
        "display": true,
    }, {
        "id": 5,
        "name": "Thrillers",
        "display": true,
    }, {
        "id": 6,
        "name": "Classics",
        "display": true,
    }, {
        "id": 7,
        "name": "Science Fiction",
        "display": true,
    }, {
        "id": 8,
        "name": "Crime",
        "display": true,
    }, {
        "id": 9,
        "name": "Historical Fiction",
        "display": false,
    }, {
        "id": 10,
        "name": "Adventure",
        "display": false,
    }, {
        "id": 11,
        "name": "Honor",
        "display": false,
    }, {
        "id": 12,
        "name": "Fiction: Special Features",
        "display": false,
    }, {
        "id": 13,
        "name": "Sagas",
        "display": false,
    }, {
        "id": 14,
        "name": "Religious & Spiritual Fiction",
        "display": false,
    },
    {
        "id": 15,
        "name": "Myth & Legend Told As Fiction",
        "display": false,
    },
    ]

    const _ageGroups = [{
        "id": 1,
        "range": "8 - 12",
    }, {
        "id": 2,
        "range": "12 - 17",
    }, {
        "id": 3,
        "range": "12+",
    }, {
        "id": 4,
        "range": "10 - 13",
    }, {
        "id": 5,
        "range": "10 - 17",
    }, {
        "id": 6,
        "range": "16 - 17",
    }, {
        "id": 7,
        "range": "7 - 12",
    }, {
        "id": 8,
        "range": "Tiếng anh",
    }]

    const [categories, setCategories] = useState(_categories)

    function toggleDisplayCategories() {
        displayCategories = !displayCategories
        setCategories(currentCategories => {
            return currentCategories.map((category, index) => {
                if (index >= 3) category.display = displayCategories
                return category
            })
        })

    }




    return (
        <div className="SideBar">
            <div className="sideBar-title">
                NHÓM SẢN PHẨM
            </div>
            <div className="sideBar-items">
                <div className="all-group-product" >
                    <div className="all-group-product-title">Tất Cả Nhóm Sản Phẩm</div>
                    <div className="foreign-books">Foreign Books</div>
                    <div className="fiction">Fiction</div>
                    <div className="fiction-items">
                        {categories.map(category => {
                            return (
                                <div className="fiction-item" style={{ display: (category.display) ? `block` : `none` }} key={category.id}>
                                    {category.name}
                                </div>
                            )
                        })}
                    </div>
                    <button className="seemore-btn" onClick={() => {
                        toggleDisplayCategories()
                    }}>{displayCategories ? "Rút gọn" : "Xem thêm"}</button>
                </div>
                <div className="price">
                    <div className="price-title">GIÁ</div>
                    <div className="price1">
                        <input type="checkbox" name="price1" id="price1" />
                        <label htmlFor="price1">0đ - 150,000đ</label>
                    </div>
                    <div className="price2">
                        <input type="checkbox" name="price2" id="price2" />
                        <label htmlFor="price2">150,000đ - 300,000đ</label>
                    </div>
                    <div className="price3">
                        <input type="checkbox" name="price3" id="price3" />
                        <label htmlFor="price3">300,000đ - 500,000đ</label>
                    </div>
                    <div className="price4">
                        <input type="checkbox" name="price4" id="price4" />
                        <label htmlFor="price4">500,000đ - 700,000đ</label>
                    </div>
                    <div className="price5">
                        <input type="checkbox" name="price5" id="price5" />
                        <label htmlFor="price5">700,000đ - trở lên</label>
                    </div>
                </div>
                <div className="provider">
                    <div className="provider-title">NHÀ CUNG CẤP</div>
                    <div className="provider1">
                        <input type="checkbox" name="provider1" id="provider1" />
                        <label htmlFor="provider1">Penguin Books</label>
                    </div>
                    <div className="provider2">
                        <input type="checkbox" name="provider2" id="provider2" />
                        <label htmlFor="provider2">Grantham Book Services</label>
                    </div>
                    <div className="provider3">
                        <input type="checkbox" name="provider3" id="provider3" />
                        <label htmlFor="provider3">HarperCollins Publishers</label>
                    </div>
                    <div className="provider4">
                        <input type="checkbox" name="provider4" id="provider4" />
                        <label htmlFor="provider4">Macmillan US</label>
                    </div>
                    <div className="provider5">
                        <input type="checkbox" name="provider5" id="provider5" />
                        <label htmlFor="provider5">Random House</label>
                    </div>
                    <div className="provider6">
                        <input type="checkbox" name="provider6" id="provider6" />
                        <label htmlFor="provider6">Macmillan Publishers</label>
                    </div>
                    <div className="provider7">
                        <input type="checkbox" name="provider7" id="provider7" />
                        <label htmlFor="provider7">Usborne</label>
                    </div>
                    <div className="provider8">
                        <input type="checkbox" name="provider8" id="provider8" />
                        <label htmlFor="provider8">Hachette Book Group</label>
                    </div>
                </div>

                <button className="seemore-btn" onClick={() => {
                    toggleDisplayCategories()
                }}>{displayCategories ? "Rút gọn" : "Xem thêm"}</button>

                <div className="age-range">
                    <div className="age-range-title">ĐỘ TUỔI</div>
                    {_ageGroups.map(ageGroup => {
                        return (
                            <div className={`age${ageGroup.id}`} key={ageGroup.id}>
                                <input type="checkbox" name={`age${ageGroup.id}`} id={`age${ageGroup.id}`} />
                                <label htmlFor={`age${ageGroup.id}`}>{ageGroup.range}</label>
                            </div>
                        )
                    })}
                </div>

                <div className="language">
                    <div className="language-title">NGÔN NGỮ</div>
                    <div className="language1">
                        <input type="checkbox" name="language1" id="language1" />
                        <label htmlFor="language1">Tiếng Anh</label>
                    </div>
                </div>

                <div className="form">
                    <div className="form-title">HÌNH THỨC</div>
                    <div className="form1">
                        <input type="checkbox" name="form1" id="form1" />
                        <label htmlFor="form1">Bìa Mềm</label>
                    </div>
                    <div className="form2">
                        <input type="checkbox" name="form2" id="form2" />
                        <label htmlFor="form2">Bìa Cứng</label>
                    </div>
                    <div className="form3">
                        <input type="checkbox" name="form3" id="form3" />
                        <label htmlFor="form3">CD/DVD</label>
                    </div>
                </div>
            </div>
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