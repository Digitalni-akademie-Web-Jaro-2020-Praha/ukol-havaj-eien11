const osoba1 = {
  jmeno: 'Alena',
  uspory: 43000,
};
const osoba2 = {
  jmeno: 'Karolína',
  uspory: 48000,
};

const goOnHoliday = (person1, person2) => {
  if (person1.uspory + person2.uspory >= 100000) {
    if (person1.uspory >= 50000 && person2.uspory >= 50000) {
      return 'Kamaradky mohou jet na dovolenou a obe maji nasporeno dost penze.';
    } if (person1.uspory >= 50000 && person2.uspory <= 50000) {
      return `${person1.jmeno} ma nasetreno dost penez. ${person2.jmeno} chybi nasetrit ${50000 - person2.uspory}. `;
    } if (person2.uspory >= 50000 && person1.uspory <= 50000) {
      return `${person2.jmeno} ma nasetreno dost penez. ${person1.jmeno} chybi nasetrit ${50000 - person1.uspory}. `;
    }
  }
  return `Kamaradky musi nasetrit dohromady ${100000 - person1.uspory - person2.uspory}. ${person1.jmeno} chybi nasetrit ${50000 - person1.uspory}, ${person2.jmeno} chybi nasetrit ${50000 - person2.uspory}`;
};

console.log(
  goOnHoliday(osoba1, osoba2),
);
