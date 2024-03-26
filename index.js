const contacts = [
  {
    id: 1,
    fullName: "M Haidar Hanif",
    phone: "+621234567890",
    email: "haidar@haidar.com",
    age: 30,
  },
  {
    id: 2,
    fullName: "Elon Musk",
    phone: "+1234567890",
    email: "elon@elon.com",
    age: 52,
  },
  {
    id: 3,
    fullName: "Jeff Bezos",
    phone: "+1234567890",
    email: "jeff@jeff.com",
    age: 60,
  },
];

const addContactFormElement = document.getElementById("add-contact-form");

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

function addContact(fullName, email, phone, age) {
  const lastId = contacts[contacts.length - 1].id;

  contacts.push({ id: lastId + 1, fullName, email, phone, age });

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

addContactFormElement.addEventListener("submit", (event) => {
  event.preventDefault();

  const contactFormData = new FormData(addContactFormElement);

  const newContactData = {
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    age: Number(contactFormData.get("age")),
  };

  console.log(newContactData);

  // addContact(fullName, email, phone, age)
});
