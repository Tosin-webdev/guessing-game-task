const generateRandomInteger = (min, max) => {
  let a = 2;
  let i;

  while ((i = Infinity)) {
    let randomNumber = Math.floor(min + Math.random() * (max - min + 1));
    prompt("what is your username");
    let prediction = prompt(
      "predict the generated number between the given range 1 - " + a
    );
    if (prediction == randomNumber) {
      alert("Correct! You have been awarded a point");
      alert("stage " + a);
      a++;
      ++max;
      i++;
    } else {
      return alert("Gameover!! prediction was incorrect.");
    }
  }
};

generateRandomInteger(1, 2);
