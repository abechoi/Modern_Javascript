const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {

      //console.log(request, request.readyState);
      if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText)
        //console.log(request, request.responseText);
        //callback(undefined, data);
        resolve(data);
      }else if(request.readyState === 4){
        //console.log("Error: failed to fetch.")
        //callback("Could not fetch data", undefined);
        reject("failed to fetch...");
      }
  });
  //request.open("GET", "https://jsonplaceholder.typicode.com/todos/");
  request.open("GET", resource);
  request.send();
  });
};
// getTodos("todos/luigi.json")
//   .then(data => console.log("promise resolved: ", data))
//   .catch(err => console.log("promise rejected:", err));

// chaining
getTodos("todos/luigi.json").then(data => {
  console.log("promise 1 resolved: ", data);
  return getTodos("todos/mario.json");
}).then(data => {
  console.log("promise 2 resolved: ", data);
  return getTodos("todos/abe.json");
}).then(data => console.log("promise 3 resolved: ", data))
  .catch(err => console.log("promise rejected: ", err));

// fetch api
fetch("todos/luigi.json").then(response => {
  console.log("resolved: ", response);
  //response.json(); // returns a promise that is resolved or rejected, so prepend "return" and append a then().
  return response.json();
}).then(data => console.log(data))
  .catch(err => console.log("rejected: ", err));

// async & await
const getItems = async (req, res) => { // async makes getItems a promise
  const response = await fetch("todos/abe.json"); // await is used over .then(), response waits to be declared

  if(response.status !== 200){
    throw new Error("failed to fetch...");
  }

  const data = await response.json();
  return data;
};

getItems()
  .then(data => console.log("resolved: ", data))
  .catch(err => console.log("rejected: ", err.message));
