const goOnHoliday = (person1, person2) => {
  if (person1.uspory + person2.uspory >= 100000) {
    if (person1.uspory >= 50000 && person2.uspory >= 50000) {
      return 'Kamaradky mohou jet na dovolenou a obe maji nasporeno dost penez.';
    } if (person1.uspory >= 50000 && person2.uspory <= 50000) {
      return `Kamaradky mohou jet na dovolenou. ${person1.jmeno} ma nasetreno dost penez. ${person2.jmeno} musi nasetrit ${50000 - person2.uspory}.`;
    } if (person2.uspory >= 50000 && person1.uspory <= 50000) {
      return `Kamaradky mohou jet na dovolenou. ${person2.jmeno} ma nasetreno dost penez. ${person1.jmeno} musi nasetrit ${50000 - person1.uspory}.`;
    }
  } else if (person1.uspory <= 50000 && person2.uspory <= 50000) {
    return `Kamaradky musi dohromady nasetrit ${100000 - person1.uspory - person2.uspory}. ${person1.jmeno} musi nasetrit ${50000 - person1.uspory}, ${person2.jmeno} musi nasetrit ${50000 - person2.uspory}.`;
  } else if (person1.uspory >= 50000) {
    return `Kamaradky musi dohromady nasetrit ${100000 - person1.uspory - person2.uspory}. ${person2.jmeno} musi nasetrit ${50000 - person2.uspory}, ${person1.jmeno} uz setrit nemusi a muze naopak kamardce ${person1.uspory - 50000} pujcit.`;
  } return `Kamaradky musi dohromady nasetrit ${100000 - person1.uspory - person2.uspory}. ${person1.jmeno} musi nasetrit ${50000 - person1.uspory}, ${person2.jmeno} uz setrit nemusi a muze naopak kamardce ${person2.uspory - 50000} pujcit.`;
};

class Person {
  constructor(jmeno, uspory) {
    this.jmeno = jmeno;
    this.uspory = uspory;
  }
}

const osoba1 = new Person('Alena', 53000);
const osoba2 = new Person('Karolina', 68000);


const testGoOnHoliday = (osoba1, osoba2, vystup1, vystup2, vystup3, vystup4, vystup5, vystup6) => {
  if (goOnHoliday(osoba1, osoba2) !== vystup1) {
    return false;
  }
  osoba1.uspory = 49000;
  if (goOnHoliday(osoba1, osoba2) !== vystup2) {
    return false;
  }
  osoba2.uspory = 49000;
  if (goOnHoliday(osoba1, osoba2) !== vystup3) {
    return false;
  }
  osoba1.uspory = 53000;
  if (goOnHoliday(osoba1, osoba2) !== vystup4) {
    return false;
  }
  osoba2.uspory = 0;
  if (goOnHoliday(osoba1, osoba2) !== vystup5) {
    return false;
  }
  osoba2.uspory = 68000;
  osoba1.uspory = 10000;
  if (goOnHoliday(osoba1, osoba2) !== vystup6) {
    return false;
  }
  return true;
};

const runTest = (id, osoba1, osoba2, vystup1, vystup2, vystup3, vystup4, vystup5, vystup6) => {
  if (testGoOnHoliday(osoba1, osoba2, vystup1, vystup2, vystup3, vystup4, vystup5, vystup6)) {
    console.log(`%c ☑ Test ${id} passed`, 'color:green');
  } else {
    console.log(`%c ❌ Test ${id} failed`, 'color:red');
  }
};

runTest(1, osoba1, osoba2,
  'Kamaradky mohou jet na dovolenou a obe maji nasporeno dost penez.',
  'Kamaradky mohou jet na dovolenou. Karolina ma nasetreno dost penez. Alena musi nasetrit 1000.',
  'Kamaradky musi dohromady nasetrit 2000. Alena musi nasetrit 1000, Karolina musi nasetrit 1000.',
  'Kamaradky mohou jet na dovolenou. Alena ma nasetreno dost penez. Karolina musi nasetrit 1000.',
  'Kamaradky musi dohromady nasetrit 47000. Karolina musi nasetrit 50000, Alena uz setrit nemusi a muze naopak kamardce 3000 pujcit.',
  'Kamaradky musi dohromady nasetrit 22000. Alena musi nasetrit 40000, Karolina uz setrit nemusi a muze naopak kamardce 18000 pujcit.');
