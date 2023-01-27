const user = {
  name: "John Doe",
  email: "doejohn@email.com",
  friends: [
    {
      name: "Mary",
      address: {
        street: "Same Streent",
        number: 89,
      },
    },
  ],
  age: 42,
  phone: {
    coutryCode: "+55",
    ddd: "22",
    number: "998765432",
  },
};
//user/friends, ai dentro do arrey vamos pegar a posição 0/vamos pegar a propriedade phone/ddd
// esse modelo vai dar erro
// console.log(user.friends[0], phone.ddd);

//(Encadeamento opcional)
// com este metodo ele vai analisando se aquela propriesade existe, e se ela não existir ela nao dara erro.
console.log(user?.friends[0].phone?.ddd);

//outra forma de ser aplicado

console.log(user.brothers?.[5].name);
