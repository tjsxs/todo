var ids = [];
var currentValue = 0;

function addItem(){
    currentValue = document.getElementById("input-value");
    if(currentValue.value === null || currentValue.value === ""){
        alert("Please input some value!");
        return false;
    }
    
    var newID = ranGenerator();
    
    var li = "<li id='item-"+ newID +"' onClick='deleteItem(this.id);'>" + currentValue.value + "</li>";
    
    var fixedItem = document.getElementById("fixed");
    fixedItem.insertAdjacentHTML('afterEnd', li);
    currentValue.value = null;
}

function deleteItem(itemID){
    var itemToDelete = document.getElementById(itemID);
    itemToDelete.parentNode.removeChild(itemToDelete);
}


function ranGenerator(){
    var ranID = Math.round(Math.random() * 1000);
    
    for(var key in ids){
        if(ids[key] === ranID){
            ranID = ranGenerator();
        }
    }
    ids.push(ranID);
    return ranID;
}