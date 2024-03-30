const searchInputElement = document.getElementById("search-input");
const addContactFormElement = document.getElementById("add-contact-form");
const contactsContainerElement = document.getElementById("contacts-container");

function saveContacts(contacts) {
  localStorage.setItem("address-book", JSON.stringify(contacts));
}

function loadContacts() {
  const contacts = localStorage.getItem("address-book");
  if (!contacts) {
    saveContacts([]);
  }

  try {
    return JSON.parse(contacts);
  } catch (error) {
    console.error("Failed to laod contacts", error);
  }
}

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

  const contacts = loadContacts();

  const newId = contacts.length ? contacts[contacts.length - 1].id + 1 : 1;

  const newContact = {
    id: newId,
    fullName: contactFormData.get("fullName"),
    email: contactFormData.get("email"),
    phone: contactFormData.get("phone"),
    age: Number(contactFormData.get("age")),
  };

  const updatedContacts = [...contacts, newContact];
  saveContacts(updatedContacts);

  addContactFormElement.reset();
  renderContacts();
}

function deleteContactById(id) {
  const updatedContacts = contacts.filter(
    (contact) => contact.id !== Number(id)
  );

  contacts = updatedContacts;
  renderContacts();
}

function updateContactById(id) {
  // update
}

window.addEventListener("load", renderContacts);

addContactFormElement.addEventListener("submit", addContact);
