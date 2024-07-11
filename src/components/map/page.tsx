import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';


const Map = ()=>{
    const [cookies, setCookie] = useCookies(['token']);
    const navigate = useNavigate();
    const handleSignout = () => {
        setCookie('token', '');
        if (cookies.token) {
          navigate('/map', { replace: true });
        } else {
          navigate('/', { replace: true });
        }
      };

    return <>Map
    <div className=" bg-red-600 rounded-full w-16 h-7 text-center text-white" onClick={handleSignout} >
        signout
    </div>
    </>
}
export default Map;