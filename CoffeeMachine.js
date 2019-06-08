function coffeeMachine(input) {
    let totalSum=0;
    for (let tokens of input){
        let [coins,drink,type,milk,sugar]=tokens.split(', ');
        //набиваме входа в масив, разделяме го по запетайка и празно пространство
        let price = 0.80;
        if (tokens.includes('decaf')){
            price+=0.10;
            }
        if (tokens.includes('milk')){
            price+=0.10;
        }
        if (Number(tokens.split(', ').pop())>0){
            //ака взимаме последни елемент, който със сигурност е захар - понеже може да нямаме избор на разновидност за кафе, ако се избира чай и става с един елемент по-малко
            price+=0.10;
        }
        let difference = Math.abs(price-Number(coins));
        if (+coins>=price){
            console.log(`You ordered ${drink}. Price: $${price.toFixed(2)} Change: $${difference.toFixed(2)}`);
            totalSum+=price;

        }
        else if (+coins<price){
            console.log(`Not enough money for ${drink}. Need $${difference.toFixed(2)} more.`);

        }
    }
    console.log(`Income Report: $${totalSum.toFixed(2)}`);
}
coffeeMachine(['8.00, coffee, decaf, 4', '1.00, tea, 2']);