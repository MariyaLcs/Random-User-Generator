const url = "https://randomuser.me/api/";

let btn = document.querySelector("#btn"),
  fullNameDisp = document.querySelector("#fullname"),
  avatar = document.querySelector("#avatar"),
  username = document.querySelector("#username"),
  city = document.querySelector("#city"),
  email = document.querySelector("#email");

btn.addEventListener("click", function () {
  fetch(url)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(displayErrors);
});

function displayErrors(err) {
  console.log("INSIDE displayErrors!");
  console.log(err);
}

function parseJSON(res) {
  return res.json().then(function (parsedData) {
    return parsedData.results[0];
  });
}

function updateProfile(data) {
  let fullName = `${data.name.first} ${data.name.last}`;
  fullNameDisp.innerHTML = fullName;
  avatar.src = data.picture.medium;
  username.innerText = data.login.username;
  city.innerText = data.location.city;
  email.innerText = data.email;
}

function handleErrors(res) {
  if (!res.ok) {
    throw Error(res.status);
  }
  return res;
}
