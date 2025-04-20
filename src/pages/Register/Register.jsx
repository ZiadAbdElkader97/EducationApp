import "./Register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "student", // default: طالب
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("كلمتا المرور غير متطابقتين");
      return;
    }

    console.log("تم إنشاء الحساب:", formData);
    navigate("/login");
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>إنشاء حساب</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">الاسم الكامل</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="أدخل اسمك الكامل"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="أدخل بريدك الإلكتروني"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="password">كلمة المرور</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="أدخل كلمة المرور"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="أعد إدخال كلمة المرور"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <div className="role-select">
            <label>نوع المستخدم:</label>
            <div className="radio-group">
              <label>
                <input
                  type="radio"
                  name="role"
                  value="student"
                  checked={formData.role === "student"}
                  onChange={handleChange}
                />
                طالب
              </label>
              <label>
                <input
                  type="radio"
                  name="role"
                  value="staff"
                  checked={formData.role === "staff"}
                  onChange={handleChange}
                />
                عضو هيئة تدريس
              </label>
            </div>
          </div>

          <button type="submit" className="register-btn">
            إنشاء الحساب
          </button>
        </form>
      </div>
    </div>
  );
}
