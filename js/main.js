var ids = [];
var currentValue = 0;

function addItem(){
    currentValue = document.getElementById("input-value");
    if(currentValue.value === null || currentValue.value === ""){
        alert("Please input some value!");
        return false;
    }
    
    var li = "<li><label><input type='checkbox' name='vehicle' value='Bike'>"+currentValue.value+"</label>"+
        "<button class='btn delete-btn'></button>"+
        "<button class='btn edit-btn'></button>"+
        "</li>";
    
    var fixedItem = document.getElementById("fixed");
    fixedItem.insertAdjacentHTML('afterEnd', li);
    currentValue.value = null;
}

function deleteItem(item){
    item.parentNode.removeChild(item);
} 