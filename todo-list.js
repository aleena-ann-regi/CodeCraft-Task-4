const inputBox = document.getElementById("Name");
const listcontainer = document.getElementById("list");
function add(){
    if(inputBox.value === ''){
        alert("You Must Write Something")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7" ;
        li.appendChild(span);
    }
    inputBox.value = "";
    save();

}
listcontainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("check");
        save();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save();

    }

},false);

function save(){
    localStorage.setItem("data",listcontainer.innerHTML)
}
function show(){
    listcontainer.innerHTML = localStorage.getItem("data");
}
show();