const contactContainerElement = document.getElementById("contact-container");

function getCurrentContactId() {
  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = Number(params.get("id"));

  return id;
}

function renderContactById() {
  const id = getCurrentContactId();
  const contact = loadContactById(id);

  contactContainerElement.innerHTML = `
<h2>${contact.fullName}</h2>
<p>${contact.email}</p>
<p>${contact.phone}</p>
<div>
  <button onclick="renderContactEditFormById(${contact.id})">Edit</button>
  <button onclick="deleteContactById(${contact.id})">Delete</button>
</div>
  `;
}

function renderContactEditFormById(id) {
  const contact = loadContactById(id);

  contactContainerElement.innerHTML = `
  <form id="edit-contact-form" method="post">
  <div>
    <label for="full-name">Full name:</label>
    <input
      id="full-name"
      name="fullName"
      type="text"
      placeholder="Elon Musk"
      value="${contact.fullName}"
    />
  </div>
  <div>
    <label for="email">Email address:</label>
    <input
      id="email"
      name="email"
      type="email"
      placeholder="elon@elon.com"
      value="${contact.email}"
    />
  </div>
  <div>
    <label for="phone">Phone number:</label>
    <input id="phone" name="phone" type="phone" placeholder="+1234567890"
    value="${contact.phone}"
    />
  </div>
  <div>
    <label for="age">Age:</label>
    <input id="age" name="age" type="number" placeholder="30"
    value="${contact.age}" />
  </div>
  <button type="submit">Save</button>
</form>`;
}

function editContactById(id) {}

function deleteContactById(id) {
  const contacts = loadContacts();

  const updatedContacts = contacts.filter(
    (contact) => contact.id !== Number(id)
  );

  saveContacts(updatedContacts);
  window.location.replace("/");
}

window.addEventListener("load", renderContactById);
