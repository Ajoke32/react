import {useTypedSelector} from "../hooks";
import {Navigate, Outlet} from "react-router-dom";



const ProtectedRoute = () => {
    const {loggedIn} = useTypedSelector(s=>s.user)


    return <>
        {loggedIn?<Outlet />:<Navigate to="/login"></Navigate>}
    </>
};

export default ProtectedRoute;
