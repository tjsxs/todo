var fixedItem = document.getElementById("list");
var archive = document.getElementById("archive");


// Create li HTML elements for list item
var generateItem = function(){
    
    if(document.getElementById("input-value").value == ""){
        return null;
    }
    
    var listItem = document.createElement("li");
    
    var label = document.createElement("label");
        label.textContent ="aha";
    
    var checkBox = document.createElement("input");
        checkBox.type="checkbox";
        checkBox.className="checkbox";
    
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
};



//Delete item
function deleteItem(item){
    item.parentNode.parentNode.removeChild(item.parentNode);
}

// Edit list Item
function editItem(item){
    var li = item.parentNode,
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

// Completed items
function completed(item){
    var li = item.parentNode;
    
    if(item.checked){
        archive.insertBefore(li, archive.firstChild);
    }else{
        fixedItem.insertBefore(li, fixedItem.firstChild);
    }
    
}

// Event listeners
window.onload = function(){
    document.getElementById("submit-btn").addEventListener("click", generateItem);
    document.getElementById("list").addEventListener("click", listener);
    document.getElementById("archive").addEventListener("click", listener);
}

// Listner function
function listener (e){
    var item = e.target;
    
    if(item.className == "btn delete-btn"){
        deleteItem(item);
    }
    else if(item.className == "btn edit-btn"){
        editItem(item);
        
    }else if(item.className == "checkbox"){
        completed(item);
    }
}