import "./FAQ.css";

export default function FAQ() {
  const faqs = [
    {
      question: "ما هي شروط التسجيل في الجامعة؟",
      answer:
        "تتطلب الجامعة من المتقدمين أن يكونوا حاصلين على شهادة الثانوية العامة أو ما يعادلها، ويجب اجتياز اختبار القبول المخصص لكل تخصص.",
    },
    {
      question: "كيف يمكنني تسجيل الدخول إلى حسابي؟",
      answer:
        "يمكنك تسجيل الدخول إلى حسابك عن طريق الضغط على زر 'تسجيل الدخول' في الصفحة الرئيسية وإدخال بياناتك الشخصية (البريد الإلكتروني وكلمة المرور).",
    },
    {
      question: "هل يمكنني تغيير التخصص بعد التسجيل؟",
      answer:
        "نعم، يمكن للطلاب تغيير التخصص في بداية كل فصل دراسي، ولكن يجب أن يتم ذلك وفقًا لقوانين الجامعة وسياسات الأقسام الأكاديمية.",
    },
    {
      question: "هل يوجد دعم للطلاب ذوي الاحتياجات الخاصة؟",
      answer:
        "نعم، تقدم الجامعة دعمًا كاملًا للطلاب ذوي الاحتياجات الخاصة عبر مراكز متخصصة، مع تكييف المواد الدراسية وتوفير المرافق المناسبة لهم.",
    },
    {
      question: "كيف يمكنني الوصول إلى الحرم الجامعي؟",
      answer:
        "الحرم الجامعي يقع في قلب المدينة ويمكن الوصول إليه عبر وسائل النقل العامة أو باستخدام سيارتك الخاصة. كما يوجد مواقف للسيارات داخل الحرم الجامعي.",
    },
  ];

  return (
    <div className="faq-page">
      <h1>الأسئلة الشائعة</h1>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question">{faq.question}</button>
            <div className="faq-answer">{faq.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
