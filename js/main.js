var siteNameInput = document.getElementById("name");
var siteUrlInput = document.getElementById("mail");
var infoList = [];
if (localStorage.getItem("infos")) {
  infoList = JSON.parse(localStorage.getItem("infos"));
  showData();
}
function addInfo() {
  var info = {
    sitee: siteNameInput.value,
    url: siteUrlInput.value,
  };
  infoList.push(info);
  localStorage.setItem("infos", JSON.stringify(infoList));
  showData();
}
function showData() {
  var data = "";
  for (var i = 0; i < infoList.length; i++) {
    data += `<tr>
    <th>${i + 1}</th>
    <th>${infoList[i].sitee}</th>
    <th><button class="btn px-5 btn-warning"><a class="text-white" href="https://${
      infoList[i].url
    }/">Visit</a></button></th>
    <th><button onclick="Deleted(${i})" class="btn btn-danger px-5">Delete</button></th>
  </tr>`;
  }
  document.getElementById("myData").innerHTML = data;
}
function Deleted(ind) {
  infoList.splice(ind, 1);
  localStorage.setItem("infos", JSON.stringify(infoList));
  showData();
}
function clearForm() {
  siteNameInput.value = "";
  siteUrlInput.value = "";
}
