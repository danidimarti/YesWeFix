import axios from "axios";

class AuthService {
  service = axios.create({
    baseURL: "http://localhost:5001/auth",
    withCredentials: true
  });

  shopSignup = (
    shopname,
    streetname,
    mobile,
    vehiclesservices,
    consumerservices,
    homeservices,
    description,
    imageUrl,
    email,
    username,
    password,
    lat,
    lng
  ) => {
    return this.service
      .post("/signup", {
        shopname: shopname,
        username: username,
        password: password,
        mobile: mobile,
        email: email,
        repairtype: homeservices
          .concat(vehiclesservices)
          .concat(consumerservices)
          .join(", "),
        streetname: streetname,
        lat: lat,
        lng: lng,
        description: description,
        imageUrl: imageUrl
      })
      .then(response => response.data);
  };

  userSignup = (
    mobile,
    email,
    username,
    password,
    
  ) => {
    
    return this.service
      .post("/signup", {
     
        username: username,
        password: password,
        mobile: mobile,
        email: email,
        
      })
      .then(response => response.data);
  };

  shopLogin = (username, password) => {
    return this.service
      .post("/login", { username: username, password: password })
      .then(response => response.data);
  };

  userLogin = (username, password) => {
    return this.service
      .post("/login", { username: username, password: password })
      .then(response => {
        localStorage.setItem("loggedIn", true);
        return response.data;
      });
  };

  currentUser = () => {
    return this.service.get("/currentuser").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => {
      console.log(response);
      localStorage.removeItem("loggedIn");
      return response.message;
    });
  };

  //REQUESTS
  request = (userId, shopId, subject, description, imageUrl) => {
    return this.service
      .post("/request", {
        userId: userId,
        shopId: shopId,
        subject: subject,
        description: description,
        imageUrl: imageUrl
      })
      .then(response => response.data);
  };
}

export default AuthService;
