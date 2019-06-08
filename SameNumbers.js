function  solve(number) {
    let numberAsArr = number.toString().split('');
    //console.log(numberAsArr);
    let sum = +numberAsArr[0];
    let digitAsString = numberAsArr[0];
    let digitCheck= true;
    for (let i = 1; i < numberAsArr.length; i++) {
        sum += +numberAsArr[i];
        if (digitAsString === numberAsArr[i]){
            digitCheck=true;
        }else{
            digitCheck=false;
        }
    }

    console.log(digitCheck);
    console.log(sum);

}
solve(15);