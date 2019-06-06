import axios from "axios";

class AuthService {
  service = axios.create({
    baseURL: "http://localhost:5001/auth",
    withCredentials: true
  });

  signup = (username, password, email, mobile) => {
    return this.service
      .post("/user/signup", {
        username: username,
        password: password,
        mobile: mobile,
        email: email
      })
      .then(response => response.data);
  };

  login = (username, password) => {
    return this.service
      .post("/user/login", { username: username, password: password })
      .then(response => response.data);
  };

  currentUser = () => {
    return this.service
      .get("/user/currentuser")
      .then(response => response.data);
  };
}

export default AuthService;
