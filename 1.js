function  solve(days) {
    let drinksPer100 = {
        coffee: 40,
        cola: 8,
        tea: 20,
        energy: 30
    };

    let cupOfCoffee = 1.5 * drinksPer100.coffee;
    let bottleOfCola = 2.5 * drinksPer100.cola;
    let cupOfTea = 3.5 * drinksPer100.tea;
    let bottleOfEnergy = 5 * drinksPer100.energy;

    // console.log(cupOfCoffee);
    //console.log(bottleOfCola);
    //console.log(cupOfTea);
    //  console.log(bottleOfEnergy);

    let oneDay = 3 * cupOfCoffee + 2 * bottleOfCola + 3 * cupOfTea;

    let studyPeriod = days * oneDay;

    //console.log(studyPeriod);

    // console.log(oneDay);
    let every5Days = Math.floor(days / 5);
    //console.log(every5Days);
    if (days >=5) {
        studyPeriod += (every5Days * (3 * bottleOfEnergy));
      // studyPeriod-=oneDay;
    }
    let every9Days = Math.floor(days/9);
    //console.log(every9Days);
    if (days>=9){
        studyPeriod+=(every9Days*(4*bottleOfCola+2*bottleOfEnergy));
       // studyPeriod-=oneDay;

    }
    console.log(`${studyPeriod} milligrams of caffeine were consumed`);
    //100 ot 100
}
solve(8);