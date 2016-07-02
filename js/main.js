var ids = [];
var currentValue = 0;

function addItem(){
    currentValue = document.getElementById("input-value");
    if(currentValue.value === null || currentValue.value === ""){
        alert("Please input some value!");
        return false;
    }
    
    var newID = ranGenerator();
    
    var li = "<li id='item-"+ newID +"' onClick='deleteItem(this);'>" + currentValue.value + "</li>";
    
    var fixedItem = document.getElementById("fixed");
    fixedItem.insertAdjacentHTML('afterEnd', li);
    currentValue.value = null;
}

function deleteItem(item){
    //var itemToDelete = document.getElementById(itemID);
    item.parentNode.removeChild(item);
}

function ranGenerator(){
    var ranID;
    
    while(true){
        ranID = Math.round(Math.random() * 1000);
        var found = false;
        for(var i=0; i<ids.length; i++){
            if(ranID === ids[i]){
                found = true;
                break;
            }
        }
        if(found == false){
            ids.push(ranID);
            break;
        }
    }
    return ranID;
}