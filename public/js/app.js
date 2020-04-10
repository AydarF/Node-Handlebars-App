fetch("http://localhost:3000/weather?address=").then(response => {
  response.json().then(data => {
    if (data.error) {
      console.log("Error: ", data.error);
    } else {
      console.log(data.location);
      console.log(data.forecast);
    }
  });
});
