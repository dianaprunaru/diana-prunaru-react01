const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: true,
  friends: {
    larry: {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    steven: {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    carol: {
      name: 'Carol',
      age: 29,
      surname: 'Carolson',
    },
  },
};

console.warn(
  `01. Folosind Object.values(), afiseaza o lista inversata cu numele complet inversat al prietenilor. `,
);

const values1 = Object.values(person.friends);
values1.reverse();
values1.forEach(({ name, surname }) => {
  console.log(`${surname} ${name}`);
});

console.warn(`02. Afiseaza propozitia: “Prietenii mei sunt Larry, Steven si Carol.” folosind Object.values()
`);
console.log(
  Object.values(person.friends).reduce((carry, { name }, index, friends) => {
    let punctuation = ', ';
    punctuation = friends.length - 1 === index ? '.' : punctuation;
    punctuation = friends.length - 2 === index ? ' si ' : punctuation;

    carry = `${carry}${name}${punctuation}`;

    return carry;
  }, 'Prietenii mei sunt '),
);

console.warn(
  `03. Prin aceeasi metoda, afiseaza propozitia: “Diferenta de varsta
  intre Larry si Dragos este de xxx ani.” etc…`,
);
const sentences = values1.map(({ name, age }) => {
  const diff = Math.abs(person.age - age);
  return `Diferenta de varsta dintre ${name} si ${person.name} este de ${diff} ani.`;
});
console.log(sentences.toString());

console.warn(
  `04. Prin aceeasi metoda, afiseaza o lista cu numele complet al prietenilor. `,
);

const values2 = Object.values(person.friends);
values2.forEach(({ name, surname }) => {
  console.log(`${name} ${surname}`);
});

console.warn(
  `05. Afiseaza propozitia: “Prietenii mei sunt Larry Larryson, Steven
  Stevenson si Carol Carolson.” folosind Object.values()`,
);
const sentence = values2.reduce((carry, { name, surname }, index, friends) => {
  let punctuation = ', ';
  punctuation = friends.length - 1 === index ? '.' : punctuation;
  punctuation = friends.length - 2 === index ? ' si ' : punctuation;

  carry = `${carry}${name} ${surname}${punctuation}`;

  return carry;
}, 'Prietenii mei sunt ');
console.log(sentence);

console.warn(
  `06. In mod similar, afiseaza propozitia  “Larry are xx ani. Steven are …”`,
);
const sentence2 = values2.map(({ name, age }) => {
  return `${name} are ${age} ani.`;
});
console.log(sentence2.toString());
