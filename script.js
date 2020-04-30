const url = "https://randomuser.me/api/";

let btn = document.querySelector("#btn"),
  fullNameDisp = document.querySelector("#fullname"),
  avatar = document.querySelector("#avatar");

btn.addEventListener("click", function () {
  fetch(url)
    .then(parseJSON)
    .then(function (data) {
      let fullName = data.name.first + " " + data.name.last;
      fullNameDisp.innerHTML = fullName;
      avatar.src = data.picture.medium;
    })
    .catch(function (err) {
      console.log(err);
    });
});

function parseJSON(res) {
  return res.json().then(function (data) {
    return data.results[0];
  });
}
