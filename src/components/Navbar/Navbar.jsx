import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import { CiMenuBurger } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="navbar_container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="شعار الموقع" />
          </div>

          <div className={`nav-links ${isOpen ? "open" : ""}`}>
            <li>
              <Link to="/dashboard" onClick={toggleMenu}>
                لوحة تحكم الأدمن
              </Link>
            </li>
            <li>
              <Link to="/" onClick={toggleMenu}>
                الصفحة الرئيسية
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>
                الخدمات
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                عن الجامعة
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                اتصل بنا
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={toggleMenu}>
                الأسئلة الشائعة
              </Link>
            </li>
          </div>
          <div className="search_section">
            <Link to="/search" className="search-link">
              🔍 البحث عن مكان
            </Link>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <CiMenuBurger />
          </div>
        </div>
      </div>
    </>
  );
}
