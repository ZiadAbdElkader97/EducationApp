import "./Dashboard.css";
import { useState } from "react";

export default function Dashboard() {
  const [formData, setFormData] = useState({
    name: "",
    number: "",
    floor: "",
    direction: "",
    order: "",
    image: null,
    building: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    for (const key in formData) {
      data.append(key, formData[key]);
    }

    // هنا هتبعته لـ API
    console.log("تم إرسال البيانات:", formData);
    alert("تمت إضافة المكان بنجاح");
  };

  return (
    <div className="admin-dashboard">
      <h2>لوحة تحكم الأدمن - إضافة مكان جديد</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <label>اسم المكان:</label>
        <input
          type="text"
          name="name"
          placeholder="مثال: معمل الشبكات"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label>رقم المكان:</label>
        <input
          type="text"
          name="number"
          placeholder="مثال: 203"
          value={formData.number}
          onChange={handleChange}
          required
        />

        <label>الدور:</label>
        <input
          type="text"
          name="floor"
          placeholder="مثال: الأول"
          value={formData.floor}
          onChange={handleChange}
          required
        />

        <label>الاتجاه:</label>
        <input
          type="text"
          name="direction"
          placeholder="مثال: يمين السلم"
          value={formData.direction}
          onChange={handleChange}
          required
        />

        <label>الترتيب:</label>
        <input
          type="number"
          name="order"
          placeholder="مثال: 1"
          value={formData.order}
          onChange={handleChange}
          required
        />

        <label>اسم المبنى:</label>
        <input
          type="text"
          name="building"
          placeholder="مثال: مبنى الحاسب"
          value={formData.building}
          onChange={handleChange}
          required
        />

        <label>صورة المكان:</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleChange}
          required
        />

        <button type="submit" className="submit-btn">
          حفظ المكان
        </button>
      </form>
    </div>
  );
}
