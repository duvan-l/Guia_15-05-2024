const miPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Promise rechazada"));
  }, 2000);
});


miPromise.catch((error) => {
  console.error("Error:", error.message);
});
