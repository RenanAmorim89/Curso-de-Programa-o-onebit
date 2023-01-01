alert("It's good to have you here, feel free on our page!");

let isReady = prompt("Are you ready to start? (yes/no)");

if (isReady === "no") {
  alert("Thank you see you later.");
}

while (isReady === "yes") {
  let options = prompt(
    "OK. let's start select one of four options!\n 1\n 2\n 3\n 4\n closes"
  );
  if (options === "1") {
    alert("OK. cool, you chose option 1");
  }
  if (options === "2") {
    alert("OK. cool, you chose option 2");
  }
  if (options === "3") {
    alert("OK. cool, you chose option 3");
  }
  if (options === "4") {
    alert("OK. cool, you chose option 4");
  }
  if (options === "closes") {
    alert("thank you for visiting us...");
    break;
  }
}
