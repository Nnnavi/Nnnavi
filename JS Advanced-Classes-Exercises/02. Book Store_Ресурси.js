class BookStore {
    constructor(name) {
        this.name = name;
        this.books = [];
        this._workers = [];
    }

    get workers() {
        return this._workers;
    }

    stockBooks(newBooks) {
        newBooks.forEach((book) => {
            let [title, author] = book.split('-');
            this.books.push({ title, author });
        });

        return this.books;
    }

    hire(name, position) {
        let worker = this.workers.filter(w => w.name === name)[0];
        if (!worker) {
            worker = {
                name: name,
                position: position,
                booksSold: 0
            };
            this.workers.push(worker);
        } else {
            throw new Error('This person is our employee');
        }
        return `${name} started work at ${this.name} as ${position}`
    }

    fire(name) {
        let worker = this.workers.filter(w => w.name === name)[0];
        if (!worker) {
            throw new Error(`${name} doesn't work here`);
        }
        let index = this.workers.indexOf(worker);
        this.workers.splice(index, 1);
        return `${name} is fired`;
    }

    sellBook(title, workerName) {
        let book = this.books.filter(b => b.title === title)[0];
        if (!book) {
            throw new Error('This book is out of stock');
        }

        let worker = this.workers.filter((w) => w.name === workerName)[0];
        if(!worker){
            throw new Error(`${workerName} is not working here`)
        }

        this.books = this.books.filter(b => b.title !== title);
        this.workers.filter(w => w.name === workerName).map(w => w.booksSold++);
    }

    printWorkers() {
        let result = "";
        this.workers.forEach(w => {
            result += `Name:${w.name} Position:${w.position} BooksSold:${w.booksSold}\n`;
        });
        return result.trim();
    }
}

let expect=require('chai').expect;

describe("Tests with correct data", function() {

    describe("constructor", function() {
        it("TODO …", function() {
            let bookStore=new BookStore();
            expect(bookStore.name).to.be.equal(undefined);

        });
        it('test stockBook',function () {
            let bookStore=new BookStore('SoftuniBookStore');
            let expected = bookStore.stockBooks(['PodIgoto-IvanVazov','NovaZemia-IvanVazov']);
            expect(expected).to.eql([
                {
                    "author": "IvanVazov",
                    "title": "PodIgoto"
                },
                {
                    "author": "IvanVazov",
                    "title": "NovaZemia"
                }
            ]);
        });
        it('testing hire',function () {
            let bookStore=new BookStore('SoftuniBookStore');
            let expected=bookStore.hire('Ivan','seller');
            expect(expected).to.be.equal('Ivan started work at SoftuniBookStore as seller');
        });
        it('testing fire', function () {
            let bookStore=new BookStore('SoftuniBookStore');
            bookStore.hire('Ivan','seller');
            let expected = bookStore.fire('Ivan');
            expect(expected).to.be.equal('Ivan is fired');
        });
        it('testing sellBook',function () {
            let bookStore=new BookStore('SoftuniBookStore');
            bookStore.hire('Ivan','seller');
            bookStore.stockBooks(['PodIgoto-IvanVazov','NovaZemia-IvanVazov']);
            let expected = bookStore.sellBook('Neshto','Ivan');
            expect(expected).to.throw();
        });
        it('test workers', function () {
            let bookStore=new BookStore('SoftuniBookStore');
            bookStore.hire('Ivan','seller');
            let expected= bookStore.printWorkers();
            expect(expected).to.be.equal('Name:Ivan Position:seller BooksSold:0');
        });
        it('test workers ',function () {
            let bookStore=new BookStore('SoftuniBookStore');
            bookStore.hire('Ivan','seller');
            bookStore.stockBooks(['PodIgoto-IvanVazov','NovaZemia-IvanVazov']);
            bookStore.sellBook('PodIgoto','Ivan');
            let expected= bookStore.workers[0];

            expect(expected).to.throw('Error: This book is out of stock');
        });
        it('test fire with wrong data',function () {
            let bookStore=new BookStore('SoftuniBookStore');
            bookStore.hire('Ivan','seller');
            let expected=bookStore.fire('Petar');
            expect(expected).to.throw('Error: Petar doesn\'t work here');
        });
        it('test hire with wrong data', function () {
            let bookStore=new BookStore('SoftuniBookStore');
            bookStore.hire('Ivan','seller');
            let expected= bookStore.hire('Ivan','seller');
            expect(expected).to.not.throw(Error,'This person is our employee');
        });
        it('',function () {
            let bookStore=new BookStore('SoftuniBookStore');
            bookStore.stockBooks([true]);
            let expected= bookStore.stockBooks(true);
            expect(expected).to.throw(Error);
        });

    });
    // TODO: …
});
