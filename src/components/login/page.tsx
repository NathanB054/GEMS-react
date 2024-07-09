import logo from "../../assets/Mae-Fah-Luang-University-2-768x779.png";
import "./style.sass";
import { Button } from "react-native";
const Login = ()=>{
    return<>
        <div className="flex justify-center items-center w-screen h-screen bg">
            <div>
            <img src={logo} alt="mfu-logo" className="lg:w-52 md:w-40 w-32"   />
            <Button title="Signin"/>
            </div>
        </div>
    </>
}
export default Login;