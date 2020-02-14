function objectDemo() {
  let human = {
      name: "Ivo",
      age: 25,
      sex:"male"
  };
  human.hobby="sport";
  human["weight"]=81;
human.age=26;
delete human.sex;


for (let kvp in human) {
    console.log(human[kvp]);
}
}
objectDemo();