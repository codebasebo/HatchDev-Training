class Book {
    public id: number;
    public title: string;
    public author: string;
    public isBorrowed: boolean = false

    constructor(id: number, title: string, author: string) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    
    
}

class Member {
    public borrowedBooks: Book[] = [];
    public id: number;
    public name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

class Library {
  private books: Book[] = [];
  private members: Member[] = [];

  addBook(book: Book) {
    this.books.push(book);
  }

  borrowBook(memberId: number, bookId: number) {
    // Check if the book is available and the member exists
    let book: Book | undefined;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === bookId && !this.books[i].isBorrowed) {
        book = this.books[i];
        break;
      }
    }
    
    
    let member: Member | undefined;
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].id === memberId) {
        member = this.members[i];
        break;
      }
    }

    if (book && member) {
      book.isBorrowed = true;
      member.borrowedBooks.push(book);
    }
  }

  registerMember(member: Member) {
    this.members.push(member);
  }

  returnBook(memberId: number, bookId: number) {
    
    let member: Member | undefined;
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].id === memberId) {
        member = this.members[i];
        break;
      }
    }
    
  
    let book: Book | undefined;
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === bookId) {
        book = this.books[i];
        break;
      }
    }

    if (member && book) {
      book.isBorrowed = false;
      
      const updatedBorrowedBooks: Book[] = [];
      for (let i = 0; i < member.borrowedBooks.length; i++) {
        if (member.borrowedBooks[i].id !== bookId) {
          updatedBorrowedBooks.push(member.borrowedBooks[i]);
        }
      }
      member.borrowedBooks = updatedBorrowedBooks;
    }
  }

  listAvailableBooks(): Book[] {
    
    const availableBooks: Book[] = [];
    for (let i = 0; i < this.books.length; i++) {
      if (!this.books[i].isBorrowed) {
        availableBooks.push(this.books[i]);
      }
    }
    return availableBooks;
  }

  listBorrowedBooks(): Book[] {
    const borrowedBooks: Book[] = [];
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].isBorrowed) {
        borrowedBooks.push(this.books[i]);
      }
    }
    return borrowedBooks;
  }

}

const lib = new Library();

const book1 = new Book(1, "1984", "George Orwell");
const member1 = new Member(1, "Alice");

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