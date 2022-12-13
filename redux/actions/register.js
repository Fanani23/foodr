import axios from "axios";
import Router from "next/router";
import Swal from "sweetalert2";

export const registerAction = (data) => async (dispatch) => {
  try {
    dispatch({ type: "REGISTER_PENDING" });
    const result = await axios.post(
      `http://localhost:2103/users/register`,
      data
    );
    const user = result.data;
    console.log(user);
    dispatch({ type: "REGISTER_SUCCESS", payload: user });
    Router.push("/verification");
    Swal.fire("Success", "Register account success", "success");
  } catch (error) {
    Swal.fire("Warning", "Register account failed", "error");
    console.log(error);
  }
};
