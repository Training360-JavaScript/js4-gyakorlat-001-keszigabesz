const sorterPromise = array => {
    return new Promise((resolve, reject) => {
        if (array.every(i => (typeof i === "string"))) {
            resolve(array.sort());
        } else {
            reject('Error: Not all elements are string type!');
        }
    });
};





export default sorterPromise;