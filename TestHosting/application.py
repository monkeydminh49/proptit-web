from flask import Flask, request, render_template
from flask_sqlalchemy import SQLAlchemy


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///data.db'
db = SQLAlchemy(app)
app.app_context().push()


class Book(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(80), nullable=False)
    author = db.Column(db.String(80), nullable=False)

    def __repr__(self):
        return f"Book: {self.title} - {self.author}"


@app.route('/')
def index():
    # return render_template('index.html')
    return 'Hello World!'


@app.route('/books')
def get_books():
    books = Book.query.all()
    output = []

    for book in books:
        book_data = {'title': book.title, 'author': book.author}
        output.append(book_data)

    return {"books": output}


@app.route('/books/<id>')
def get_book(id):
    book = Book.query.get_or_404(id)
    return {"title": book.title, "author": book.author}


@app.route('/books', methods=['POST'])
def add_book():
    book = Book(title=request.json['title'], author=request.json['author'])
    db.session.add(book)
    db.session.commit()
    return {'id': book.id}


@app.route('/books/<id>', methods=['DELETE'])
def delete_book(id):
    book = Book.query.get(id)
    if book is None:
        return {"error": "not found"}
    db.session.delete(book)
    db.session.commit()
    return {"message": "success"}


if __name__ == '__main__':
    app.run(debug=True, port=7777)
