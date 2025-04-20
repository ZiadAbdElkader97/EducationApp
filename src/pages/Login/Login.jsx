import "./Login.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // هنا ممكن تضيف التحقق من البيانات لاحقاً
    console.log("تسجيل الدخول:", email, password);
    navigate("/"); // بعد تسجيل الدخول يرجع للصفحة الرئيسية
  };

  const handleGuest = () => {
    console.log("تسجيل الدخول كزائر");
    navigate("/"); // أو تروح على صفحة البحث مباشرة مثلاً
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>تسجيل الدخول</h2>
        <form onSubmit={handleLogin}>
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            placeholder="أدخل بريدك الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password">كلمة المرور</label>
          <input
            type="password"
            id="password"
            placeholder="أدخل كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="login-btn">
            دخول
          </button>
        </form>

        <div className="guest-login">
          <p>أو يمكنك</p>
          <button onClick={handleGuest} className="guest-btn">
            الدخول كزائر
          </button>
        </div>
      </div>
    </div>
  );
}
