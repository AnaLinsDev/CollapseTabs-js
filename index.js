var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      this.style.borderRadius = "0px"
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.borderRadius = "0px 0px 30px 30px"
      this.style.borderRadius = "30px 30px 0px 0px"
    } 
  });
}
