const list = [];



//add user input to list
function addToList(){
    list.push(document.getElementById("input").value);

    //clears input field
    document.getElementById("input").value = "";

    displaycheckboxtest();
    

}

//use .value to return
function deleteSelected(){
    checked = document.querySelectorAll(':checked')
    console.log(checked);

    checked.forEach(checkbox => {
        //get the index of the item that matches checked item
        x = list.indexOf(checkbox.value);
        list.splice(x, 1);
        checkbox.parentElement.remove();
        console.log(list);
        
    });
}


//create a checkbox element for each item in the list
function displaycheckboxtest(){
    checklist = [];

    checklist.push(`<ul style="list-style-type: none;">`)
    //label is important (learned that the hard way)
    for (i = 0; i < list.length; i++){
        checklist.push(`<li> <input type = "checkbox" id = "item${i}" name = "item${i}" value = "${list[i]}">  <label for="item${i}">${list[i]}</label> </li>`);
    }

    checklist.push(`</ul>`)

    console.log(checklist);
    

    //display the checklist >:)
    document.getElementById('displayArea').innerHTML = checklist.join("");
}







    


