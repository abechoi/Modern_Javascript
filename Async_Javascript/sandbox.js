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
}).catch(err => console.log("rejected: ", err));