const delayedHello = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hello, World!");
  }, 2000);
});

delayedHello.then((message) => {
  console.log(message);
});
