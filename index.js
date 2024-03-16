const contacts = [
  {
    id: 1,
    fullName: "M Haidar Hanif",
    age: 30,
    phone: "+621234567890",
  },
  {
    id: 2,
    fullName: "Elon Musk",
    age: 52,
    phone: "+1234567890",
  },
  {
    id: 3,
    fullName: "Jeff Bezos",
    age: 60,
    phone: "+1234567890",
  },
];

for (let index = 0; index < contacts.length; index++) {
  const contact = contacts[index];
  const ageCategory = contact.age > 30 ? "is old enough" : "is still young";

  console.log(
    `${contact.id}. ${contact.fullName} (${contact.phone}) ${ageCategory}`
  );
}
