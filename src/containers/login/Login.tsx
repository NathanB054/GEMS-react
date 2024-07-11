import axios from "axios";
import { jwtDecode } from 'jwt-decode';
export const sencodetobackend = async (code: string) => {
//   console.log("code : ", code);
  try {
    const response = await axios.post(
      "http://localhost:8886/users/signin",
      {
        code: code,
      },
      { headers: { "Access-Control-Allow-Origin": "*" } }
    );
    // console.log("Backend response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to send code to backend:", error);
  }
};

export const getUserinfo = async function (token?:string) {
    if (!token) {
        return {"role":null}
    }
    try {
        const response = await axios.get(
            "http://localhost:8886/users/getUser",
           {headers:{"x-auth-token":token}}
          );
        const user = jwtDecode<{
            email: string;
            name: string;
            role: string;
        }>(response.data);
        return user;
    } catch (error) {
        console.error(error);
        throw error;
    }

}