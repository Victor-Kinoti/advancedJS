//Promise.all()
//When you want to run the code after all
//promises are resolved
//EG: fetching remote data from multiple locations

let p1 = () => Promise.resolve("Got the list of users");
let p2 = () => Promise.resolve("Got the list of tweets");
let p3 = () => Promise.resolve("Got the weather");

Promise.all([p1(), p2(), p3()]).then((resultarray) => {
  console.log(resultarray[0], " ", resultarray[2], " ", resultarray[1]);
});
