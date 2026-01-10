// src/components/Benefits.jsx
const benefits = [
  { title: "Бесплатный замер", desc: "Приедем в удобное время и сделаем точные замеры" },
  { title: "Сроки от 7 дней", desc: "Быстро изготавливаем без потери качества" },
  { title: "Цена фиксируется", desc: "Всё прописано в договоре — никаких доплат" },
  { title: "Гарантия 2 года", desc: "Качественно и с заботой о деталях" },
];

export default function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Почему выбирают нас</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
          {benefits.map((b, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--color-accent)' }}>
                {b.title}
              </h3>
              <p>{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}