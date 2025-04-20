import "./Contact.css";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا تقدر تضيف منطق إرسال البيانات للـ API أو حفظها في قاعدة البيانات
    alert("تم إرسال رسالتك بنجاح!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-us-page">
      <h1>اتصل بنا</h1>
      <p className="intro">
        إذا كان لديك أي استفسارات أو تحتاج إلى مساعدة، لا تتردد في التواصل معنا
        عبر النموذج أدناه.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">الاسم الكامل</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">البريد الإلكتروني</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">الرسالة</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          إرسال
        </button>
      </form>

      <section className="contact-info">
        <h2>معلومات الاتصال</h2>
        <p>
          للتواصل مع فريق الدعم، يمكنك إرسال رسالة عبر النموذج أعلاه أو استخدام
          الوسائل التالية:
        </p>
        <ul>
          <li>📞 الهاتف: 123-456-7890</li>
          <li>📧 البريد الإلكتروني: support@university.com</li>
          <li>🏢 العنوان: شارع الجامعة، المدينة، الدولة</li>
        </ul>
      </section>
    </div>
  );
}
