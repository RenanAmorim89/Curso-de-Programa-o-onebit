function checkAge(age) {
  return new Promise((resolve, reject) => {
    if (age) {
      resolve(age > 18);
    } else {
      reject(new Error("age is required"));
    }
  });
}

function getAge(birthday) {
  return new Promise((resolve, reject) => {
    if (birthday) {
      const birthYear = new Date(birthday).getFullYear();
      const currentYear = new Date().getFullYear();
      resolve(currentYear - birthYear);
    } else {
      reject(new Error("birthday is required"));
    }
  });
}

// Este tipo de codigo ficaria inviavel
// getAge("1999-09-02")
//   .then((age) => {
//     checkAge(age)
//       .then((isOver18) => {
//         if (isOver18) {
//           console.log("Maior de idade");
//         } else {
//           console.log("Menor de idade");
//         }
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

getAge("1999-09-02")
  .then((age) => {
    return checkAge(age);
  })
  .then((isOver18) => {
    if (isOver18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de Idade");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
//OBS: O 'return' é muito importante, sempre que quisermos ecadiar, vamos precisar dele

//Outra Forma de fazer é usando Arrow function direto.
getAge("1999-09-02")
  .then((age) => checkAge(age))
  .then((isOver18) => {
    if (isOver18) {
      console.log("Maior de idade");
    } else {
      console.log("Menor de Idade");
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
