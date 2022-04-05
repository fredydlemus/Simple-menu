document.getElementById("open-button").addEventListener("click", 
    function(){
        document.getElementById("sidebar").classList.add("visible");
    }
);

document.getElementById("close-button").addEventListener("click",
    function(){
        document.getElementById("sidebar").classList.remove("visible");
    }   
);