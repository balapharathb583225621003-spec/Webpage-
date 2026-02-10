function addRepo() {
  let name = document.getElementById("repoName").value;
  let desc = document.getElementById("repoDesc").value;

  if (name === "") {
    alert("Enter repository name");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = "<strong>" + name + "</strong><br>" + desc;

  document.getElementById("repoList").appendChild(li);

  document.getElementById("repoName").value = "";
  document.getElementById("repoDesc").value = "";
}
