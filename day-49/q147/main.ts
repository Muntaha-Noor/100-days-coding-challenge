const asyncOperation = (callback: (error: Error | null, result?: number) => void ) => {
    setTimeout(() => {
        const randomNumber = Math.random();
        if(randomNumber < 0.5) {
            callback(new Error('Random number is leass than 0.5'));
        } else {
            callback(null, randomNumber);
        }
    }, 1000);
};

asyncOperation((error, result) => {
    if(error) {
        console.error('An error occurred:', error.message);
    } else {
        console.log('Operation succeeded. Result:', result);
    }
});