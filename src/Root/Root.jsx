import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";

const Root = () => {
    return (
        <div >
            <section className="max-w-screen-xl mx-auto">
                <Navbar></Navbar>
                <Outlet></Outlet>
            </section>
            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default Root;