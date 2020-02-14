class Library{
    constructor(libraryName){
        this.libraryName=libraryName;
        this.subscribers=[];
        this.subscriptionTypes={
            normal:libraryName.length,
            special:(libraryName.length)*2,
            vip:Number.MAX_SAFE_INTEGER
        }
    }

    subscribe(name,type){
        this.name=name;
        this.type=type;
        let books=[];
    if(this.type!==this.subscriptionTypes.normal||this.type!==this.subscriptionTypes.special||this.type!==this.subscriptionTypes.vip){
        throw new Error(`The type ${this.type} is invalid`);
    }
    if(!this.subscribers.filter(()=>this.name)){
        let newSubscriber = {
               name:this.name,
                type:this.type,
               books: books
        };
        this.subscribers.push(newSubscriber);
    }
    else{
       let newSubscriber= this.subscribers.find(()=>this.name);
       newSubscriber.type=this.type;
    }
    };
    unsubscribe(name){
    this.name=name;
    if(this.subscribers.find(()=>this.name)){
    this.subscribers=this.subscribers.filter(()=>!this.name);
    }
    else{
    throw new Error(`There is no such subscriber as ${name}"`);
    }
    return this.subscribers;
    }


    receiveBook(subscriberName,bookTitle,bookAuthor){
            this.subscriberName=subscriberName;
            this.bookTitle=bookTitle;
            this.bookAuthor=bookAuthor;
        if(this.subscribers.find(()=>!this.subscriberName)){
            throw new Error(`There is no such subscriber as ${this.subscriberName}`);
        }
        else if( this.subscribers.find(()=>this.subscriberName)){
            let newSubscriber=this.subscribers.find(()=>this.subscriberName);
        if(newSubscriber.type.value>newSubscriber.books.length){
            newSubscriber.books.push({title:bookTitle,author:bookAuthor});
        }
        else{
            throw new Error(`You have reached your subscription limit ${newSubscriber.type.value}!`);
        }
        }

        return newSubscriber.name;
    }
    showInfo(){
       for(let i=0;i<this.subscribers.length;i++){
         result+= `Subscriber: ${this.name}, Type: ${this.type}\\n
        Received books: ${this.bookTitle} by ${this.bookAuthor},`;
       }
       console.log(result);


    }

}
let lib = new Library('Lib');

lib.subscribe('Peter', 'normal');
lib.subscribe('John', 'special');

lib.receiveBook('John', 'A Song of Ice and Fire', 'George R. R. Martin');
lib.receiveBook('Peter', 'Lord of the rings', 'J. R. R. Tolkien');
lib.receiveBook('John', 'Harry Potter', 'J. K. Rowling');

console.log(lib.showInfo());
