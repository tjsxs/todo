var ids = [];
var currentValue = 0;
var fixedItem = document.getElementById("list");


// Create li HTML elements for list item
var generateItem = function(){
    
    var listItem = document.createElement("li");
    
    var label = document.createElement("label");
        label.textContent ="aha";
    
    var checkBox = document.createElement("input");
        checkBox.type="checkbox";
    
    var editButton = document.createElement("button");
        editButton.className="btn edit-btn";
    
    var deleteButton = document.createElement("button");
        deleteButton.className="btn delete-btn";
    
    var editInput = document.createElement("input");
        editInput.type="text";
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    label.innerHTML = document.getElementById("input-value").value;
    listItem.appendChild(deleteButton);
    listItem.appendChild(editButton);
    
    fixedItem.insertBefore(listItem, fixedItem.firstChild);
    document.getElementById("input-value").value="";  
    
    deleteButton.addEventListener("click", deleteItem);
}


// Event listner for button
document.getElementById("submit-btn").addEventListener("click", generateItem);

//Delete item
function deleteItem(){
    this.parentNode.parentNode.removeChild(this.parentNode);
}