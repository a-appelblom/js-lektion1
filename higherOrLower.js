let score = 0;
let prevNum = Math.floor(Math.random() * 100) + 1;

alert(
  "Welcome to Higher or Lower!\nType 'h' for higher or 'l' for lower \nYou win at 15 points"
);

while (score < 15) {
  let num = Math.floor(Math.random() * 100) + 1;
  let guess = prompt(`Higher or lower than ${prevNum}?`);
  if ((num > prevNum && guess === "h") || (num < prevNum && guess === "l")) {
    score++;
    alert(`Correct! \n The number was:${num} \n Current score: ` + score);
  } else if (guess === null) {
    alert("You quit the game!");
    break;
  } else {
    alert("Too bad" + `\n The number was:${num}`);
  }
  prevNum = num;
}
alert(`You won! \n Your score was: ${score}`);
