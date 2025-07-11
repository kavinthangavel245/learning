// fetch("https://swapi.tech/api/people/1/")
// .then((res) => {
//     console.log("response received",res);
//      return res.json()
// })
// .then((data) =>{
//     console.log("data received",data);
//     return fetch("https://swapi.tech/api/people/2/");

// })
// .then((res ) => {
//     console.log("second request:",res);
//     return res.json();
    
// })
// .then((data) =>{
//     console.log("data received",data);
// })
// .catch((err) =>{
//     console.log("error occurred".err);
// });
// Fetch API using async/await
// This code fetches data from the Star Wars API for two people and logs the results.

const loadStarWarsPeople = async() => {
    try{
    const res = await fetch("https://swapi.tech/api/people/1/");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.tech/api/people/2/");
    const data2 = await res2.json();
    console.log(data2);
    }
    catch(err){
        console.log("Error occurred:", err);
    }
};
loadStarWarsPeople();