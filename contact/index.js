function renderContactById() {
  const contacts = loadContacts();

  const queryString = window.location.search;
  const params = new URLSearchParams(queryString);
  const id = params.get("id");

  const contact = contacts.find((contact) => contact.id === id);

  console.log({ contact });
}

window.addEventListener("load", renderContactById);
