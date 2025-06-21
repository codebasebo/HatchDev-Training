var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.isBorrowed = false;
        this.id = id;
        this.title = title;
        this.author = author;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name) {
        this.borrowedBooks = [];
        this.id = id;
        this.name = name;
    }
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.borrowBook = function (memberId, bookId) {
        // Check if the book is available and the member exists
        var book;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].id === bookId && !this.books[i].isBorrowed) {
                book = this.books[i];
                break;
            }
        }
        var member;
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].id === memberId) {
                member = this.members[i];
                break;
            }
        }
        if (book && member) {
            book.isBorrowed = true;
            member.borrowedBooks.push(book);
        }
    };
    Library.prototype.registerMember = function (member) {
        this.members.push(member);
    };
    Library.prototype.returnBook = function (memberId, bookId) {
        var member;
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].id === memberId) {
                member = this.members[i];
                break;
            }
        }
        var book;
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].id === bookId) {
                book = this.books[i];
                break;
            }
        }
        if (member && book) {
            book.isBorrowed = false;
            var updatedBorrowedBooks = [];
            for (var i = 0; i < member.borrowedBooks.length; i++) {
                if (member.borrowedBooks[i].id !== bookId) {
                    updatedBorrowedBooks.push(member.borrowedBooks[i]);
                }
            }
            member.borrowedBooks = updatedBorrowedBooks;
        }
    };
    Library.prototype.listAvailableBooks = function () {
        var availableBooks = [];
        for (var i = 0; i < this.books.length; i++) {
            if (!this.books[i].isBorrowed) {
                availableBooks.push(this.books[i]);
            }
        }
        return availableBooks;
    };
    Library.prototype.listBorrowedBooks = function () {
        var borrowedBooks = [];
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].isBorrowed) {
                borrowedBooks.push(this.books[i]);
            }
        }
        return borrowedBooks;
    };
    return Library;
}());
var lib = new Library();
var book1 = new Book(1, "1984", "George Orwell");
var member1 = new Member(1, "Alice");
lib.addBook(book1);
lib.registerMember(member1);
console.log(lib.listAvailableBooks());
console.log(lib.listBorrowedBooks());
lib.borrowBook(1, 1);
console.log(lib.listAvailableBooks());
console.log(lib.listBorrowedBooks());
lib.returnBook(1, 1);
console.log(lib.listAvailableBooks());
console.log(lib.listBorrowedBooks());
