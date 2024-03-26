let contacts = [
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
  <div>
    <button onclick="deleteContactById(${contact.id})">Delete</button>
  </div>
</li>
`
  );
  const contactItems = contactItemElements.join("");
  contactsContainerElement.innerHTML = contactItems;
}

function addContact(event) {
  event.preventDefault();

  const contactFormData = new FormData(addContactFormElement);

  const lastId = contacts[contacts.length - 1].id;

  const newContact = {
    id: lastId + 1,
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    age: Number(contactFormData.get("age")),
  };

  contacts.push(newContact);

  renderContacts();
}

function deleteContactById(id) {
  const updatedContacts = contacts.filter(
    (contact) => contact.id !== Number(id)
  );

  contacts = updatedContacts;

  renderContacts();
}

function searchContact(keyword) {
  // find / filter
}

function updateContactById(id) {
  // delete
}

renderContacts();

addContactFormElement.addEventListener("submit", addContact);
