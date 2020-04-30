const url = "https://randomuser.me/api/";

let btn = document.querySelector("#btn"),
  fullNameDisp = document.querySelector("#fullname");

btn.addEventListener("click", function () {
  fetch(url)
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let fullName =
        data.results[0].name.first + " " + data.results[0].name.last;
      fullNameDisp.innerHTML = fullName;
    })
    .catch(function (err) {
      console.log(err);
    });
});
