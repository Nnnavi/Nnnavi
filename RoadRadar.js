function  roadRadar(input) {

    let area={
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };
    let difference=0;
    for (let i of input){
        input = {
           place: input[1],
           speed : +input[0]
       };

        switch(input.place) {
            case 'motorway' :
                if ((input.speed>area.motorway.valueOf())){
                difference=(Number(input.speed))-(Number(area.motorway));
                print(difference);
                break;
            }
            case 'interstate' :
                if ((input.speed>area.interstate.valueOf())){
                    difference=(Number(input.speed))-(Number(area.interstate));
                    print(difference);
                    break;
                }
            case 'city' :
                if ((input.speed>area.city.valueOf())){
                    difference=(Number(input.speed))-(Number(area.city));
                    print(difference);
                    break;
                }
            case 'residential' :
                if ((input.speed>area.residential.valueOf())){
                    difference=(Number(input.speed))-(Number(area.residential));
                    print(difference);
                    break;
                }




        }
    }
    function  print(difference) {
        if (difference<20 && difference>0) {
            console.log('speeding');
        }
        else if (difference>20 && difference<40) {
            console.log('excessive speeding');
        }
        else if(difference>40) {
            console.log('reckless driving');
        }

    }




}
roadRadar([40, 'city']);