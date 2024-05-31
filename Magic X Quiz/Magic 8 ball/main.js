//Magic 8 ball
//button event lister
document.getElementById("Magic-btn").addEventListener("click", btnClicked);

//HTML
awnserEL = document.getElementById("awnser-in");

function btnClicked() {
  // Text Input
  let question = document.getElementById("question-in").value;
  console.log(question);

  //function
  let randnum = Math.random();
  console.log(randnum);
  if (randnum < 0.2) {
    awnserEL.innerHTML = "without a doupt";
  } else if (randnum < 0.4) {
    awnserEL.innerHTML = "As I see it, yes.";
  } else if (randnum < 0.6) {
    awnserEL.innerHTML = "Concentrate and ask again.";
  } else if (randnum < 0.8) {
    awnserEL.innerHTML = "Don't count on it.";
  } else {
    awnserEL.innerHTML = "Outlook not so good.";
  }

  // Test
  if (
    question === "Does a magic 8 ball actually work" ||
    question === "does a magic 8 ball actually work"
  ) {
    awnserEL.innerHTML = "How dare you doupt me>:(";
  }
  if (
    question === "Is java script awesome" ||
    question === "is java script awesome"
  ) {
    awnserEL.innerHTML = "Of course!";
  }
  if (
    question === "Hello" ||
    question === "hello" ||
    question === "Hi" ||
    question === "hi"
  ) {
    awnserEL.innerHTML = "Hey there!";
  }
}
