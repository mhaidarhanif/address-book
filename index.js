const searchInputElement = document.getElementById("search-input");
const addContactFormElement = document.getElementById("add-contact-form");
const contactsContainerElement = document.getElementById("contacts-container");

function searchContacts(contacts, keyword) {
  searchInputElement.value = keyword;

  const filteredContacts = contacts.filter((contact) =>
    contact.fullName.toLowerCase().includes(keyword.toLowerCase())
  );

  return filteredContacts;
}

function renderContacts() {
  const contacts = loadContacts();

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const keyword = params.get("q");

  const contactsToRender = keyword
    ? searchContacts(contacts, keyword)
    : contacts;

  const contactItemElements = contactsToRender.map(
    (contact) => `<li>
  <a href="/contact/?id=${contact.id}">
    <h2>${contact.fullName}</h2>
    <p>${contact.email}</p>
    <p>${contact.phone}</p>
  </a>
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

  const contacts = loadContacts();

  const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;

  const newContact = {
    id: newId,
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    age: Number(contactFormData.get("age")),
  };

  // Update by adding a new object in the array
  const updatedContacts = [...contacts, newContact];
  saveContacts(updatedContacts);

  addContactFormElement.reset();
  renderContacts();
}

function deleteContactById(id) {
  const contacts = loadContacts();

  const updatedContacts = contacts.filter(
    (contact) => contact.id !== Number(id)
  );

  saveContacts(updatedContacts);
  renderContacts();
}

addContactFormElement.addEventListener("submit", addContact);

window.addEventListener("load", renderContacts);
