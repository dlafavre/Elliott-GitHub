const birthdate = new Date('May 6, 2020');
const now = new Date();
const ageInMilliseconds = now - birthdate;
const millisecondsPerDay = 1000 * 60 * 60 * 24;
const ageInDays = Math.floor(ageInMilliseconds / millisecondsPerDay);
const ageInYears = Math.floor(ageInDays / 365);

const ageElement = document.getElementById('age');
ageElement.textContent = `Age Today: ${ageInYears} years, ${ageInDays % 365} days`;
