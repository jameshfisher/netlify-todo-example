import GoTrue from "gotrue-js";

window.auth = new GoTrue({
  APIUrl: "https://netlify-todo-example.netlify.com/.netlify/identity",
  audience: "",
  setCookie: false
});
