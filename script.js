const url = "https://randomuser.me/api/";

let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  fetch(url)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
});
