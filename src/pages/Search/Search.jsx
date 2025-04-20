import "./Search.css";
import { useState } from "react";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  const fakeData = [
    {
      id: 1,
      name: "معمل البرمجة",
      number: "101",
      floor: "الأول",
      direction: "يمين السلم",
      order: "1",
      building: "مبنى الحاسب",
      image: "/images/lab1.jpg",
    },
    {
      id: 2,
      name: "مكتب الدكتور أحمد",
      number: "203",
      floor: "الثاني",
      direction: "يسار المصعد",
      order: "2",
      building: "مبنى الإدارة",
      image: "/images/office1.jpg",
    },
  ];

  const handleSearch = () => {
    const filtered = fakeData.filter((item) => {
      const term = searchTerm.toLowerCase();
      return (
        item.name.toLowerCase().includes(term) ||
        item.number.includes(term) ||
        item.building.toLowerCase().includes(term)
      );
    });
    setResults(filtered);
  };

  return (
    <div className="search-page">
      <h2>ابحث عن مكان</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="اكتب اسم المكان أو رقمه أو اسم المبنى"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>بحث</button>
      </div>

      {results.length > 0 ? (
        <table className="results-table">
          <thead>
            <tr>
              <th>الصورة</th>
              <th>اسم المكان</th>
              <th>رقم</th>
              <th>الدور</th>
              <th>الاتجاه</th>
              <th>المبنى</th>
              <th>الترتيب</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item) => (
              <tr key={item.id}>
                <td>
                  <img src={item.image} alt={item.name} />
                </td>
                <td>{item.name}</td>
                <td>{item.number}</td>
                <td>{item.floor}</td>
                <td>{item.direction}</td>
                <td>{item.building}</td>
                <td>{item.order}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="no-results">لا توجد نتائج بعد.</p>
      )}
    </div>
  );
}
