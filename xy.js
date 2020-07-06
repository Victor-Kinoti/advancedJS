// Sending Data to the server using fetch()
// using jsonpalceholder for the Data

//GET- queryStrings
// "http://jsonplaceholder.typicode.com/posts?userId=1&postId=65"
// "http://jsonplaceholder.typicode.com/todos?userId=2"

//POST
//"http://jsonplaceholder.typicode.com/posts"

const root = "http://jsonplaceholder.typicode.com/";
let uri = root + 'posts';

let formdata = new FormData();
formdata.append('userId', 3);
formdata.append('title', 'This is title');
formdata.append('body', 'this is the body posted');

let options = {
  method: 'POST',
  mode: 'cors',
  body: formdata
};
let req = new Request(uri, options);

fetch(req)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("Bad HTTP request!");
    }
  })
  .then((j) => {
    console.log(j);
  })
  .catch((err) => {
    console.log("ERROR: ", err.message);
  });