const contacts = [
  {
    id: 1,
    fullName: "M Haidar Hanif",
    age: 30,
    phone: "+621234567890",
    email: "haidar@haidar.com",
  },
  {
    id: 2,
    fullName: "Elon Musk",
    age: 52,
    phone: "+1234567890",
    email: "elon@elon.com",
  },
  {
    id: 3,
    fullName: "Jeff Bezos",
    age: 60,
    phone: "+1234567890",
    email: "jeff@jeff.com",
  },
];

const contactsContainerElement = document.getElementById("contacts-container");

function renderContacts() {
  const contactItemElements = contacts.map(
    (contact) => `<li>
  <h2>${contact.fullName}</h2>
  <p>${contact.email}</p>
  <p>${contact.phone}</p>
</li>
`
  );
  const contactItems = contactItemElements.join("");
  contactsContainerElement.innerHTML = contactItems;
}

function addContact(fullName, age, phone) {
  const lastId = contacts[contacts.length - 1].id;

  contacts.push({ id: lastId + 1, fullName, age, phone });

  renderContacts();
}

function deleteContactById(id) {
  // delete
}

function updateContactById(id) {
  // delete
}

function searchContact(keyword) {
  // find / filter
}

renderContacts();
