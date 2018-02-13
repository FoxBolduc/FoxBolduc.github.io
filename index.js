function showSchool(){
    var showDiv = document.getElementById("schoolProjects");
    var showButton = document.getElementById("schoolButton");
    var hideDiv = document.getElementById("personalProjects");
    var hideButton = document.getElementById("personalButton");
    showButton.style.color = "rgb(117,172, 243)";
    hideButton.style.color = "#505050";
    showDiv.style.display = "block";
    hideDiv.style.display = "none";
}

function showPersonal(){
    var showDiv = document.getElementById("personalProjects");
    var showButton= document.getElementById("personalButton");
    var hideDiv = document.getElementById("schoolProjects");
    var hideButton = document.getElementById("schoolButton");
    showButton.style.color = "rgb(117,172, 243)";
    hideButton.style.color = "#505050";
    showDiv.style.display = "block";
    hideDiv.style.display = "none";
}

function onLoad(){
    showSchool();
}