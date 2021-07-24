document.body.classList.add(localStorage.getItem('pagecolor'));
var el = document.querySelectorAll(".color-switcher li"),
classeslist = []
for (var i=0;i<el.length;i++){
classeslist.push(el[i].getAttribute('data-color'));
el[i].addEventListener('click',function() {
    document.body.classList.remove(...classeslist);
    document.body.classList.add(this.getAttribute("data-color"));
    localStorage.setItem('pagecolor',this.getAttribute("data-color"))
},false)
}