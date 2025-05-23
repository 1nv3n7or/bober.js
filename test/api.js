function fetchData(callback) {
  setTimeout(() => {
    callback(null, { data: "Hello, World!" });
  }, 1000);
}

async function fetchDataAsync() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: "Hello, Async World!" });
    }, 1000);
  });
}

module.exports = { fetchData, fetchDataAsync };
