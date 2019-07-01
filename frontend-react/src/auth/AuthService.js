import axios from "axios";

class AuthService {
  service = axios.create({
    baseURL: "http://localhost:5001/auth",
    withCredentials: true
  });

  signup = (
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
        // repairtype: homeservices
        //   .concat(vehiclesservices)
        //   .concat(consumerservices)
        //   .join(", "),
        streetname: streetname,
        lat: lat,
        lng: lng,
        description: description,
        imageUrl: imageUrl
      })
      .then(response => response.data);
  };

  //USER LOGIN!!!! NEW 01/07
  // signup = (
  //   mobile,
  //   email,
  //   username,
  //   password,
    
  // ) => {
  //   return this.service
  //     .post("/signup/user", {
  //        username: username,
  //       password: password,
  //       mobile: mobile,
  //       email: email,
        
  //     })
  //     .then(response => response.data);
  // };



  login = (username, password) => {
    return this.service
      .post("/login", { username: username, password: password })
      .then(response => response.data);
  };

  currentUser = () => {
    return this.service.get("/currentuser").then(response => response.data);
  };

  logout = () => {
    return this.service.get("/logout").then(response => {
      console.log(response)
      return response.message;
    });
  };
}

export default AuthService;
