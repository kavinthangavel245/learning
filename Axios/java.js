// axios 
// .get("https://swapi.tech/api/people/1/")
// .then((res) => {
//     console.log("resolved",res);

// })
// .catch((err) => {
//     console.log("rejected",err);
// });
//  using async function

const getData = async (id) => {
    try {
        const res = await axios.get(`https://swapi.tech/api/people/${id}/ `);
        console.log(res.data);
    }
    catch (err) {
        console.log("rejected", err);
    }
};
getData(5);
getData(1);