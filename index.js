function showSchool(){
    var showDiv = document.getElementById("schoolProjects");
    var hideDiv = document.getElementById("personalProjects");
    showDiv.style.display = "block";
    hideDiv.style.display = "none";
}

function showPersonal(){
    var showDiv = document.getElementById("personalProjects");
    var hideDiv = document.getElementById("schoolProjects");
    showDiv.style.display = "block";
    hideDiv.style.display = "none";
}

function onLoad(){
    showPersonal();
}