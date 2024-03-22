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

function renderContacts() {
  for (let index = 0; index < contacts.length; index++) {
    const contact = contacts[index];
    const ageCategory = contact.age > 30 ? "is old enough" : "is still young";

    console.log(
      `${contact.id}. ${contact.fullName} (${contact.phone}) ${ageCategory}`
    );
  }
  console.log("");
}

function addContact(fullName, age, phone) {
  const lastId = contacts[contacts.length - 1].id;

  contacts.push({ id: lastId + 1, fullName, age, phone });

  renderContacts();
}

function seachContact(keyword) {
  // find / filter
}

renderContacts();
addContact("Mark", 40, "+123");
addContact("Bill", 60, "+1456");
