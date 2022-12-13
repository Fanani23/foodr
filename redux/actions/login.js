import axios from "axios";
import Router from "next/router";

export const loginAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: "LOGIN_PENDING" });
    const result = await axios.post(`http://localhost:2103/users/login`, data);
    const user = result.data;
    console.log(user);
    localStorage.setItem("token", user.token);
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
    Router.push("/home-login");
  } catch (error) {
    console.log("Login failed");
    console.log(error);
  }
};
