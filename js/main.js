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
    
    var editButton = document.createElement("input");
        editButton.type="button";
        editButton.className="btn edit-btn";
    
    var deleteButton = document.createElement("input");
        deleteButton.type="button";
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
    editButton.addEventListener("click", editItem);
}


// Event listner for button
document.getElementById("submit-btn").addEventListener("click", generateItem);

//Delete item
function deleteItem(){
    this.parentNode.parentNode.removeChild(this.parentNode);
}

// Edit list Item
function editItem(){
    //var temp = this.parentNode.children[1];
    var li = this.parentNode,
        liChild = li.childNodes[1],
        ip = document.createElement("input"),
        label = document.createElement("label");
    
    if(liChild.tagName == "LABEL"){
        ip.value = liChild.textContent;
        ip.type="text";
        ip.className="on-edit";
        li.replaceChild(ip, li.childNodes[1]);
        li.className = "temp-li";
    }else{
        label.textContent = liChild.value;
        li.replaceChild(label, li.childNodes[1]);
        li.className = "";
    }
}