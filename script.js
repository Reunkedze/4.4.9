let authorization;

const registration = () => {
  fetch("https://blog.kata.academy/api/users", {
    method: "POST",
    headers: {
      Authorization:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0ZGFjMWYxYzMxZGUxMWIwMGJjYzJkNSIsInVzZXJuYW1lIjoicmR6IiwiZXhwIjoxNjk3MjQ1MDUzLCJpYXQiOjE2OTIwNjEwNTN9.oQU0HTb9sMH0go9qJx9E4fZ2qDl0LEgLCqujQ2ZS74w",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: '{"user":{"username":"rdz","email":"reunok2000@gmail.com","password":"1234"}}',
  }).catch((e) => {
    console.log(e);
  });
};

const login = () => {
  fetch("https://blog.kata.academy/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: '{"user":{"email":"reunok2000@gmail.com","password":"1234"}}',
  })
    .then((r) => {
      return r.json();
    })
    .then((d) => {
      authorization = d.user.token;
    });
};

const getUserInfo = () => {
  fetch("https://blog.kata.academy/api/user", {
    headers: {
      Authorization: `Bearer ${authorization}`,
    },
  })
    .then((r) => r.text())
    .then((d) => {
      document.querySelector("body").insertAdjacentHTML("afterbegin", d);
    });
};

const task = async () => {
  await registration();
  await login();
  await getUserInfo();
};

task();
