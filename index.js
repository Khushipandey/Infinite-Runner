var character = document.getElementById("character");
var block = document.getElementById("block");
var count = 0;

function jump(){
    if(character.classList != "animate"){
        character.classList.add("animate");
        count++;
    }
    
    setTimeout(function() {
        character.classList.remove("animate");
    }, 500);
}

var checkDead = setInterval(function() {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft < 20 && blockLeft > 0 &&
        characterTop >= 130){
            block.style.animation = "none";
            block.style.display = "none";
            document.getElementById('score').innerHTML = "Score: " + count;
            document.getElementById('call-to-action').innerHTML = "<p>Game Ended.</p><a href= 'index.html'>Replay?</a>";
        } 
})