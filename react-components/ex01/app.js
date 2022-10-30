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

console.warn(`01. Folosind metoda map pe arrayul skills,
returneaza si afiseaza in consola un array in
care fiecare consoana este scrisa cu litera mare(vocalele nu)`);

const vowels = ['a', 'e', 'i', 'o', 'u'];
const arr1 = person.skills.map((skill) => {
  const letters = skill.split('');
  letters.forEach((letter, index, letters) => {
    if (!vowels.includes(letter)) {
      letters[index] = letters[index].toUpperCase();
    }
  });

  return letters.join('');
});

console.log(arr1);

console.warn(
  `02. Folosind map pe arrayul friends, returneaza un array
  in care fiecare pozitie contine propozitia “Ma numesc {name}
  {surname} si am {age} ani.”`,
);

const arr2 = person.friends.map(({ name, surname, age }) => {
  return `Ma numesc ${name} ${surname} si am ${age} ani.`;
});
console.log(arr2);

console.warn(`03. Folosind map pe arrayul friends, returneaza
un array in care fiecare pozitie contine propozitia
“Diferenta de varsa dintre {friendName} si {personName} este {diff}”`);

const arr3 = person.friends.map(({ name, age }) => {
  const ageDiff = Math.abs(person.age - age);

  return `Diferenta de varsta dintre ${person.name} si ${name} este ${ageDiff}.`;
});
console.log(arr3);

console.warn(
  `04. Returneaza si afiseaza un array in care fiecare pozitie contine
  diferenta dintre varsta persoanei si lungimea cuvantului de pe arrayul skill`,
);

const arr4 = person.skills.map((skill) => {
  const skillLength = skill.length;

  return Math.abs(person.age - skillLength);
});
console.log(arr4);

console.warn(
  `05. Folosind metoda map pe arrayul skills, returneaza un array care
  contine cuvintele cu prima si ultima litera mari. `,
);
const arr5 = person.skills.map((skill) => {
  const letters = skill.split('');

  letters[0] = letters[0].toUpperCase();
  letters[letters.length - 1] = letters[letters.length - 1].toUpperCase();

  return letters.join('');
});
console.log(arr5);

console.warn(
  `06. Folosind metoda map pe arrayul skills, returneaza un array care
  contine cuvintele inversate (exemplu: lmth)`,
);

const arr6 = person.skills.map((skill) => {
  return skill.split('').reverse().join('');
});
console.log(arr6);

console.warn(`07. Folosind metoda map pe arrayul friends, returneaza un array care sa contina propozitiile
“{friendName} are {age} ani.”`);

const arr7 = person.friends.map((friend) => {
  return `${friend.name} are ${friend.age} ani.`;
});
console.log(arr7);

console.warn(
  `08. Folosind metoda map pe arrayul friends, returneaza un array care
  contine numele inversat al prietenilor pe fiecare pozitie (exemplu:
Stevenson Steven)`,
);

const arr8 = person.friends.map((friend) => {
  return `${friend.surname} ${friend.name}`;
});
console.log(arr8);

console.warn(
  `09. Folosind metoda map pe arrayul friends, returneaza un array care
  contine pe fiecare pozitie diferenta dintre lungimea totala al numelui
  complet (fara spatii) si varsta prietenului de pe iteratie`,
);

const arr9 = person.friends.map((friend) => {
  const nameLength = friend.name.length + friend.surname.length;
  const age = friend.age;

  return nameLength - age;
});
console.log(arr9);

console.warn(
  `10. Folosind metoda map pe arrayul skills returneaza un array care
  contine diferenta dintre lungimea fiecarui skill si varsta prietenului `,
);

// Please help with a hint/solution ca nu stiu cum sa il rezolv pe acesta.
// Stiu sigur ca solutia mea nu e corecta si m-a parasit logica.

const arr10 = person.friends.map((friend) => {
  const age = friend.age;
  return age;
});
console.log(arr10);

const arr11 = person.skills.map((skill) => {
  const skillLength = skill.length;

  for (let i = 0; i < arr10.length - 1; i++) return skillLength - arr10[i];
});
console.log(arr11);
