// cw1
const getFootballData = async () => {
    const link = "https://www.thesportsdb.com/api/v1/json/123/searchteams.php?t=Arsenal";
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);
}

getFootballData();


// cw2
const randomPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve("success");
            } else {
                reject("fail");
            }     
        }, 2000);
    });
};

const checkPromise = async () => {
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};


// cw3
checkPromise();
const getData = async () => {
    try {
        const res = await fetch("https://youtu.be/dQw4w9WgXcQ?list=RDdQw4w9WgXcQ");
        const data = await res.json();
        console.log(data);
    } 
    catch (err) {
        console.log(err);
    }
};

getData();
