import axios from "axios";
import Router from "next/router";
import Swal from "sweetalert2";

export const verificationAccount = (data) => async (dispatch) => {
  try {
    dispatch({ type: "VERIFICATION_PENDING" });
    const result = await axios.post(
      `http://localhost:2103/users/verification`,
      data
    );
    const otp = result.data.data;
    console.log(otp);
    dispatch({ type: "VERIFICATION_SUCCESS", payload: otp });
    Router.push("/login");
    Swal.fire("Success", "Verification account success", "success");
  } catch (error) {
    Swal.fire("Warning", "Verification account failed", "error");
    console.log(error);
  }
};
