const getUsers = () => {
  const users = localStorage.getItem("users");
  return JSON.parse(users);
};

const setUsers = (users) => {
  localStorage.setItem("users", JSON.stringify(users));
};

const displayUsers = () => {
  const users = getUsers();
  users.forEach((user) => {
    console.log(`${user.id}. ${user.name} ${user.email}`);
  });
};

const getInitialUsers = async () => {
  const existingUsers = getUsers();

  if (!existingUsers) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    setUsers(users);
  }
};

const addNewContact = () => {
  const existingUsers = getUsers();

  existingUsers.push({
    id: existingUsers[existingUsers.length - 1].id + 1,
    name: "New User",
    email: "newuser@example.com",
  });

  setUsers(existingUsers);
};

const requestAddNewContact = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    body: JSON.stringify({
      name: "New User",
      email: "newuser@example.com",
    }),
    headers: {
      "Content-type": "application/json",
    },
  });

  const data = await response.json();
  console.log(data);
};

const run = async () => {
  await getInitialUsers();
  addNewContact();
  displayUsers();
};

run();
