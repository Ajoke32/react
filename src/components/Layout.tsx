import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import {Outlet} from "react-router-dom";


const Layout = () => {
    return (
        <div style={{height:"100vh",display:"flex",flexDirection:"column",justifyContent: "space-between"}}>
            <Header/>
                <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;
