import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="flex h-[300px]">
                <div className="flex flex-col gap-1 items-center justify-center bg-[#1F2937] text-white  w-1/2">
                    <h1 className="text-2xl mb-2">CONTACT US</h1>
                    <p>123 ABS Street, Uni 21, Bangladesh</p>
                    <p>+88 123456789</p>
                    <p>Mon - Fri: 08:00 - 22:00</p>
                    <p>Sat - Sun: 10:00 - 23:00</p>
                </div>
                <div className="flex flex-col gap-1 bg-[#111827] text-white items-center justify-center  w-1/2">
                    <h1 className="text-2xl mb-2">Follow US</h1>
                    <p>Join us on social media</p>
                    <div className="flex gap-3 mt-1">
                        <Link><FaFacebookF /></Link>
                        <Link><FaInstagram /></Link>
                        <Link><FaTwitter /></Link>
                    </div>
                </div>
            </div>
            <div className="flex justify-center bg-black text-white p-3">
                <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
            </div>
        </div>
    );
};

export default Footer;