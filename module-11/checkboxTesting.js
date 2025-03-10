function deleteSelected(){
    checked = Array.from(document.querySelectorAll(":checked"));
    console.log(checked);

    for (i = 0; i <checked.length; i++){
        checked.splice(1, i);
    }

    console.log(checked);

}

function deleteItem2(){
    if(document.querySelector('input'.checked)){
        ('input').remove();
    }
}

function deleteItem(){
    list.pop();
    displaycheckbox();
}

function displaycheckbox(){
    checklist = [];

    checklist.push(`<form action= "javascript:;" onsubmit="deleteItem(this)>`)
    //label is important (learned that the hard way)
    for (i = 0; i < list.length; i++){
        checklist.push(`<input type = "checkbox" id = "item${i}" name = "item${i}" value = "${list[i]}">  <label for="item${i}">${list[i]}</label> <br>`);
        console.log(checklist);
    }
    checklist.push(`</form>`)

    //display the checklist >:)
    document.getElementById('displayArea').innerHTML = checklist.join("");
}
