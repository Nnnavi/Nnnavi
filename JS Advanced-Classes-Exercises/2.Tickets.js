function tickets(ticketArray,sortingCriteria) {
    class Ticket{
        constructor(destination,price,status){
            this.destination=destination;
            this.price=price;
            this.status=status;
        }
    }
    let unsortedTickets=[];
    for(let ticket of ticketArray){
        let [destination,price,status]=ticket.split('|');
        console.log(price);
        price=+price;

        unsortedTickets.push(new Ticket(destination,price,status));
    }
    let sortedTickets={};
    switch (sortingCriteria) {
        case "destination": sortedTickets=unsortedTickets.sort((a,b)=>{
            return a.destination.localeCompare(b.destination)
        });break;
        case "price": sortedTickets=unsortedTickets.sort((a,b)=>{
            return a.price-b.price;
        });break;
        case "status": sortedTickets=unsortedTickets.sort((a,b)=>{
            return a.status.localeCompare(b.status)
        });break;
    }
    return sortedTickets;


}