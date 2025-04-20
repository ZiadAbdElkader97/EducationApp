import "./Home.css";
import { Link } from "react-router-dom";
import home_1 from "../../assets/imgs/home-1.jpg";
import home_2 from "../../assets/imgs/home-2.png";
import home_3 from "../../assets/imgs/home-3.jpeg";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className="Home">
        <div className="home_container">
          <div className="hero-section">
            <h1>مرحبًا بك في دليل المعامل والمكاتب</h1>
            <p>اكتشف الأماكن داخل المباني بسهولة وسرعة</p>
            <div className="buttons">
              <Link to="/login" className="login_btn">
                تسجيل الدخول
              </Link>
              <Link to="/register" className="register_btn">
                إنشاء حساب
              </Link>
            </div>
          </div>

          {/* القسم التعريفي بالموقع */}
          <section className="about-section">
            <h2>لماذا تستخدم هذا الدليل؟</h2>
            <p>
              هذا الموقع يساعدك على الوصول إلى جميع المعامل والمكاتب داخل الكلية
              بسهولة، سواء كنت طالبًا أو عضو هيئة تدريس أو زائرًا.
            </p>
          </section>

          {/* كروت فيها معلومات */}
          <section className="cards-section">
            <div className="info-card">
              <img src={home_1} alt="معامل" />
              <h3>خريطة المعامل</h3>
              <p>اعرف مكان كل معمل وأي مبنى فيه بسرعة وسهولة.</p>
            </div>
            <div className="info-card">
              <img src={home_3} alt="مكاتب" />
              <h3>أماكن المكاتب</h3>
              <p>اكتشف أماكن أعضاء هيئة التدريس داخل الكلية.</p>
            </div>
            <div className="info-card">
              <img src={home_2} alt="بحث سريع" />
              <h3>بحث سريع</h3>
              <p>ابحث برقم أو اسم المكان أو المبنى مباشرةً.</p>
            </div>
          </section>

          <footer className="footer">
            <div className="footer-content">
              <div className="footer-links">
                <li>
                  <Link to="/">الصفحة الرئيسية</Link>
                </li>
                <li>
                  <Link to="">الخدمات</Link>
                </li>
                <li>
                  <Link to="">عن الجامعة</Link>
                </li>
                <li>
                  <Link to="">اتصل بنا</Link>
                </li>
                <li>
                  <Link to="">الأسئلة الشائعة</Link>
                </li>
              </div>
              <div className="footer-social">
                <span>تابعنا علي :</span>
                <a href="#">
                  <i><FaFacebook /></i>
                </a>
                <a href="#">
                  <i><FaTwitter /></i>
                </a>
                <a href="#">
                  <i><FaInstagram /></i>
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              © {new Date().getFullYear()} جميع الحقوق محفوظة - دليل المعامل
              والمكاتب
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
