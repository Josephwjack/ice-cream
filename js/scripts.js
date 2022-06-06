$(document).ready(function() {
  $("#flavors").text(function(event) {
    

    let flavors = ["chocolate", "strawberry", "rocky road", "cookie dough", "mint chocolate chip"];
    let list = document.getElementById("flavors");

  
    flavors.forEach((item) => {
      let li = document.createElement("li");
      li.innerText = item;
      list.appendChild(li);
    });
  });
});
