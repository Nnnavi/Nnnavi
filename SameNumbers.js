function  solve(number) {
    let arr = [];
    let remainder = 1;
    let counter = 0;

    for (let i = 0; remainder > 0; i++) {
        remainder = number % 10;
        if (remainder <= 0) {
            break;
        }
        arr.push(remainder);
        number = number / 10;
        number = Math.trunc(number);
        counter++;
        

    }
    let equal = true;
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = arr.length; j > 0; j--) {
            if (arr[i] === arr[j]) {
                count++;

                if (arr[i] !== arr[0]) {
                    equal = false;
                }
            }

        }
    }






    let sum = arr.reduce((a, b) => a + b);
    console.log(equal);
    console.log(sum);
}
solve(15);