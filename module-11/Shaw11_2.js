const list = [];


//add user input to list
function addToList(){
    list.push(document.getElementById("input").value);

    //tell user they've added an item
    window.alert("Item " + "'" + document.getElementById("input").value + "'" + " added as item " + (list.length))

    //clears input field
    document.getElementById("input").value = "";
    

}

//delete last item added to the list
function deleteItem(){
    list.pop();
    displaycheckbox();
}

//create checkbox for each item added to the list and place in display area
function displaycheckbox(){
    
    const checklist = list.map(item => `<label for="item-${item}">
       
        <input type="checkbox" name="item" id="${item}" value="item ${item}")> ${item}
        </label> <br>`
        
    ).join(' ');
   
    document.querySelector("#displayArea").innerHTML = checklist;
}







    


