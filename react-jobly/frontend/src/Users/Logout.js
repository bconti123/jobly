const Logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  window.location = "/";
};

export default Logout;
