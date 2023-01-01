const firstName = prompt("Enter Recruit's First Name");
const lastName = prompt("Enter the Recruit's Middle Name");
const fieldOfStudy = prompt("What is the Recruit's Field of Study?");
const yearOfBirth = prompt("What is the Recruit's Year of Birth?");

alert(
  "Successfully Registered Recruit!\n" +
    "\nFull name: " +
    firstName +
    " " +
    lastName +
    "\nField of Study: " +
    fieldOfStudy +
    "\nAge: " +
    (2022 - yearOfBirth)
);
