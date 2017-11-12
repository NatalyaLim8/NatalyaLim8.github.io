function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy_sound.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);