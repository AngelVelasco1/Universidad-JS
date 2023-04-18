/* Basic Example */
const dobleAsync = num => {
    return new Promise((resolve, reject) => {
        if (!isNaN(num)) {
            const result = num * 2;
            resolve(result);
        }
        else {
            reject(new Error("Invalid Value"))
        }
    })
};

dobleAsync(10)
    .then(result => {
        console.log(`The result number is ${result}`);
    })
    .catch(error => {
        console.error(error.message);
    })