import GoTrue from "gotrue-js";

const auth = new GoTrue({
  APIUrl: "https://netlify-todo-example.netlify.com/.netlify/identity",
  audience: "",
  setCookie: false
});
