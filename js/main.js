var ids = [];
var currentValue = 0;

function addItem(){
    currentValue = document.getElementById("input-value");
    if(currentValue.value === null || currentValue.value === ""){
        alert("Please input some value!");
        return false;
    }
    
    var li = "<li onClick='deleteItem(this);'>" + currentValue.value + "</li>";
    
    var fixedItem = document.getElementById("fixed");
    fixedItem.insertAdjacentHTML('afterEnd', li);
    currentValue.value = null;
}

function deleteItem(item){
    item.parentNode.removeChild(item);
} 