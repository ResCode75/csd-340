//Rachel Shaw - module 10.3 assignment - 2/21/2025
function changeImage(){
    var image1 = document.getElementById("changeable1");
    //check source of image 1, change if it is the broken heart image
    if (image1.src == "https://rescode75.github.io/csd-340/Module%2010/mod10images/UndertaleHeart.jpeg"){
        image1.src = "mod10images//UndertaleHeartbreak.jpg";
    }
    else{
        console.log(image1.src);
        image1.src = "https://rescode75.github.io/csd-340/Module%2010/mod10images/UndertaleHeart.jpeg";
    }

    
} 

