function SubSum(enteredArray,startIndex,endIndex){
    if(!typeof enteredArray===Array){
        throw new Error('NaN');
    }
    else if(startIndex<0){
        startIndex=0;
    }
    else if(endIndex>=enteredArray.length){
        endIndex=enteredArray.length-1;
    }
    let sum=enteredArray.slice(startIndex,endIndex+1).reduce((a,b)=>a+b);

    console.log(sum);
    return sum;







}
SubSum('text', 0, 2);
