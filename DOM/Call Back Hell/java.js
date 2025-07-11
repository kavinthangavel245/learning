// const delayedColorChange = (newColor, delay, doNext) => {
//     setTimeout( () => {
//         document.body.style.backgroundColor = newColor;
//         console.log("changed to new color: " + newColor);
//         doNext && doNext();
//     },delay)
// }

// delayedColorChange("red",1000,() => {
//     delayedColorChange("blue",1000,() => {
//         delayedColorChange("green",1000,() => {
//             delayedColorChange("yellow",1000,() => {
//                 delayedColorChange("pink",1000,() => {
//                     delayedColorChange("purple",1000,() => {
//                         console.log("All colors changed!");
//                     });
//                 });
//             });
//         });
//     });
// })

/*fakeRequest Using Callbacks*/
// function fakeRequestPromise(url) {
//     console.log("Request made to: " + url);
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const success = Math.random() > 0.3; // 70% chance of success
//             if (success) {
//                 resolve(`Here is your fake data from ${url}`);
//             } else {
//                 reject("Request failed!");
//             }
//         }, 1000);
//         });
//     }



// fakeRequestPromise('yelp.com/api/coffee/page1')
//             .then((data) => {
//                 console.log("It worked! (page 1)");
//                 return fakeRequestPromise('yelp.com/api/coffee/page2');
//                 console.log(data); // This will log the data from page 1
//             })
//             .then((data) => {
//                 console.log("It worked! (page 2)");
//                 return fakeRequestPromise('yelp.com/api/coffee/page3');
//                 console.log(data); // This will log the data from page 2
//             })
//             .then((data) => {
//                 console.log("It worked! (page 3)");
//                 console.log(data); // This will log the data from page 3
//             })
//             .catch((err) => {
//                 console.log("A request failed ❌");
//                 console.log("Error: ", err);
//             });

// const delayedColorChange = (newColor, delay) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             document.body.style.backgroundColor = newColor;
//             console.log("changed to new color: " + newColor);
//             resolve();
//         }, delay);
//     });
// }
//     delayedColorChange("red",1000)
//         .then(() => delayedColorChange("blue", 1000))
//         .then(() => delayedColorChange("green", 1000))
//         .then(() => delayedColorChange("yellow", 1000)) 
//         .then(() => delayedColorChange("pink", 1000))
//         .then(() => delayedColorChange("purple", 1000))
//         .then(() => console.log("All colors changed!"))
//         .catch((err) => {   
//             console.error("An error occurred:", err);
//         });                 

// async and await example
function fakeRequestPromise(url) {
    console.log("Request made to: " + url);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3; // 70% chance of success
            if (success) {
                resolve(`Here is your fake data from ${url}`);
            } else {
                reject("Request failed!");
            }
        }, 1000);
    });
}


async function loadPages(){
    try{
        await fakeRequestPromise("page1");
        console.log("Page 1 loaded successfully!");
        await fakeRequestPromise("page2");
        console.log("Page 2 loaded successfully!");
        await fakeRequestPromise("page3");
        console.log("Page 3 loaded successfully!");
    }
    catch(err){
        console.log("error",err);
    }
}
loadPages();