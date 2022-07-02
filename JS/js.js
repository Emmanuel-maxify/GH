
    document.getElementById("close").onclick = function(){
        document.getElementById('nav-links').style.display = "block";
        document.getElementById("close").style.display = "none";
        document.getElementById("menu").style.display = "block"; 
    }
    document.getElementById("menu").onclick = function(){
        document.getElementById('nav-links').style.display = "none";
        document.getElementById("menu").style.display = "none";
        document.getElementById("close").style.display = "block"; 
    }