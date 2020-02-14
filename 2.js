function  solve(capacity,passengers) {
// апацитет на един вагон
  //  console.log(capacity);
    // пътници за всеки вагон
   // console.log(passengers);
    //състояние на влака след напълване
    let state=[];
    //останали некачени пътници от един вагон
    let transfer=0;
   let allPassengers = passengers.reduce((a,b)=>a+b);
   // console.log(allPassengers);
    let totalCapacity=passengers.length*capacity;
   // console.log(totalCapacity);


    for (let i=0;i<passengers.length;i++){
        if (passengers[i]<=capacity){
            state[i]=passengers[i];

        }
        else if (passengers[i]>capacity){
            state[i]=capacity;
            transfer=passengers[i]-capacity;
            //console.log(transfer);
            passengers[i+1]+=transfer;
           // console.log(transfer);
           if (i===passengers.length-2 && passengers[i]>capacity) {
               transfer=passengers[i]-capacity;
           }


        }
        //if (i!==passengers.length-1){

       // }

    }
    //console.log(transfer);
    // console.log(transfer);
   // console.log(state.length);
    console.log(state);
    if (allPassengers<=totalCapacity){
        console.log(`All passengers aboard`);
       // transfer===0 ||
    }
    if( allPassengers>totalCapacity){
        console.log(`Could not fit ${transfer} passengers`);
       // transfer>0 ||
    }
    //100 ot 100
}
solve(6,    [5,15,2]);