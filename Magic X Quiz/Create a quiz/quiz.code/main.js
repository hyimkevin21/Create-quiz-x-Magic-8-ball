// Guess the song

document.getElementById("Mark-btn").addEventListener("click", btnClicked);

// HTML Variables
let quest1span = document.getElementById("quest1-in");
let quest2span = document.getElementById("quest2-in");
let quest3span = document.getElementById("quest3-in");
let quest4span = document.getElementById("quest4-in");

let quest1res = document.getElementById("quest1-res");
let quest2res = document.getElementById("quest2-res");
let quest3res = document.getElementById("quest3-res");
let quest4res = document.getElementById("quest4-res");

//Count Variables

function btnClicked() {
  let i = 0;

  //Question 1
  if (quest1span.value == "A" || quest1span.value == "a") {
    quest1span.style.border = "5px solid green";
    quest1res.innerHTML = "Correct!";
    quest1res.style.color = "green";
    i++;
  } else {
    quest1span.style.border = "5px solid red";
    quest1res.innerHTML = "Wrong :(";
    quest1res.style.color = "red";
  }

  // Question 2
  if (quest2span.value == "B" || quest2span.value == "b") {
    quest2span.style.border = "5px solid green";
    quest2res.innerHTML = "Correct!";
    quest2res.style.color = "green";
    i++;
  } else {
    quest2span.style.border = "5px solid red";
    quest2res.innerHTML = "Wrong :(";
    quest2res.style.color = "red";
  }

  // Question 3
  if (
    quest3span.value == "C" ||
    quest3span.value == "c" ||
    quest3span.value == "A" ||
    quest3span.value == "a"
  ) {
    quest3span.style.border = "5px solid green";
    quest3res.innerHTML = "Correct!";
    quest3res.style.color = "green";
    i++;
  } else {
    quest3span.style.border = "5px solid red";
    quest3res.innerHTML = "Wrong :(";
    quest3res.style.color = "red";
  }

  // Question 4
  if (quest4span.value == "A" || quest4span.value == "a") {
    quest4span.style.border = "5px solid green";
    quest4res.innerHTML = "Correct!";
    quest4res.style.color = "green";
    i++;
  } else {
    quest4span.style.border = "5px solid red";
    quest4res.innerHTML = "Wrong :(";
    quest4res.style.color = "red";
  }

  let score = i;
  let percent = i * 25;
  console.log(i, score, percent);

  //soloution
  document.getElementById("score-in").innerHTML = `${score}/4 or ${percent}%`;
}
