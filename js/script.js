"use strict";

let API_URL = fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
 
  .then((result) => {
    let filteredUsers = result.filter((item) => item.company.name === "Johns Group");
    console.log(filteredUsers);
  })
  .catch((error) => console.error(error));
