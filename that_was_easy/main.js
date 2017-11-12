function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy_sound.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);
$(document).keypress(delegateKeypress);

function delegateKeypress(event){
    console.log(event.charCode);
    if (event.charCode == 32){
        $("#easy").trigger("click");
    }
}