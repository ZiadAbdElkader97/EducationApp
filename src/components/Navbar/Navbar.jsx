import "./Navbar.css";
import logo from "../../assets/imgs/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="navbar_container">
        <div className="navbar">
          <div className="logo">
            <img src={logo} alt="شعار الموقع" />
          </div>
          <div className="nav-links">
            <li>
              <Link to="/dashboard">لوحة تحكم الأدمن</Link>
            </li>
            <li>
              <Link to="/">الصفحة الرئيسية</Link>
            </li>
            <li>
              <Link to="/services">الخدمات</Link>
            </li>
            <li>
              <Link to="/about">عن الجامعة</Link>
            </li>
            <li>
              <Link to="/contact">اتصل بنا</Link>
            </li>
            <li>
              <Link to="/faq">الأسئلة الشائعة</Link>
            </li>
          </div>
          <div className="search_section">
            <Link to="/search" className="search-link">
              🔍 البحث عن مكان
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
