const person = {
  name: 'Dragos',
  surname: 'Iordache',
  age: 32,
  petOwner: false,
  skills: [
    'html',
    'javascript',
    'css',
    'java',
    'c++',
    'node',
    'jquery',
    'node.js',
  ],
  friends: [
    {
      name: 'Larry',
      surname: 'Larryson',
      age: 30,
    },
    {
      name: 'Steven',
      surname: 'Stevenson',
      age: 31,
    },
    {
      name: 'Carol',
      surname: 'Carolson',
      age: 29,
    },
  ],
};

const dropChars = (string, charCount = 2) => {
  return string.slice(0, string.length - charCount);
};

console.warn(
  `01. Folosind obiectul person si reduce, afiseaza in consola
  un string care contine skillurile de pe pozitiile pare ale
  arrayului, separate prin virgula`,
);

const string1 = person.skills.reduce((string1, skill, index) => {
  if (index % 2 === 0) {
    string1 += `${skill}, `;
  }

  return string1;
}, '');
console.log(string1.slice(0, string1.length - 2));

console.warn(`02. In mod similar, afiseaza skillurile care NU incep cu j.
`);
const string2 = person.skills.reduce((string2, skill) => {
  if (!skill.startsWith('j')) {
    string2 += `${skill}, `;
  }

  return string2;
}, '');
console.log(dropChars(string2));

console.warn(
  `03. Folosind reduce afiseaza propozitia: "Prietenii mei se numesc xxx yyy,
  xxx yyy, xxx yyy."`,
);
const sentence = person.friends.reduce(
  (sentence, { name, surname }, index, friends) => {
    const punctuation = index === friends.length - 1 ? '.' : ', ';

    sentence += `${name} ${surname}${punctuation}`;

    return sentence;
  },
  'Prietenii mei se numesc ',
);
console.log(sentence);

console.warn(
  `04. Folosind reduce, afiseaza numarul total de ani pe care il au
  persoanele din arrayul friends, doar daca varsta este mai mare sau egala
  cu 30 de ani.`,
);
const sumYears = person.friends.reduce((sumYears, { age }) => {
  if (age >= 30) {
    sumYears += age;
  }
  return sumYears;
}, 0);
console.log(sumYears);

console.warn(
  `05. Folosind reduce, afiseaza suma anilor de nastere a persoanelor. `,
);
const sumBirthYears = person.friends.reduce((sumBirthYears, { age }) => {
  const currentYear = new Date().getFullYear();

  sumBirthYears += currentYear - age;

  return sumBirthYears;
}, 0);
console.log(sumBirthYears);

console.warn(
  `06. Afiseaza fraza: "Intre Dragos si Larry este o diferenta de xx ani.
  Intre Dragos si Steven... ", doar daca varsta prietenului este impara.`,
);
const sentence2 = person.friends
  .reduce((sentence2, { age, name }) => {
    sentence2 += `Intre ${
      person.name
    } si ${name} este o diferenta de ${Math.abs(person.age - age)} ani. `;

    return sentence2;
  }, '')
  .trim();
console.log(sentence2);
