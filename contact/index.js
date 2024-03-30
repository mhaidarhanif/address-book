const contactContainerElement = document.getElementById("contact-container");

function renderContactById() {
  const contacts = loadContacts();

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = Number(params.get("id"));

  const contact = contacts.find((contact) => contact.id === id);

  contactContainerElement.innerHTML = `
<h2>${contact.fullName}</h2>
<p>${contact.email}</p>
<p>${contact.phone}</p>
<div>
  <button onclick="deleteContactById(${contact.id})">Delete</button>
</div>
  `;
}

function deleteContactById(id) {
  const contacts = loadContacts();

  const updatedContacts = contacts.filter(
    (contact) => contact.id !== Number(id)
  );

  saveContacts(updatedContacts);
  window.location.replace("/");
}

window.addEventListener("load", renderContactById);
