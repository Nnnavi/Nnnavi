function solve(steps,footprint,speed) {
    speed=speed*0.277777778; //превръщаме км в час в метра в секунда
let distance = steps*footprint;
  //  console.log(distance);
    let breaks = Math.trunc(distance/500);
 //   console.log(breaks);
   let time =  distance/speed+breaks*60; // времето в секунди
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin < 10 ? "0" : "") + (timeMin ) + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}
solve(4000, 0.60, 5);