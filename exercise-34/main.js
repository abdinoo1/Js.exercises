// ADD ITEM
function additem(){
    const list = document.querySelector("#list");
    const additem = document.createElement("li");
    additem.textContent = "New item";
    list.appendChild(additem)
}

// REMOVE ITEM

function removeitem(){
    const list = document.querySelector("#list");
    if(list.lastChild){
        list.removeChild(list.lastChild)
    }
}