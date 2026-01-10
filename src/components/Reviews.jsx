// src/components/Reviews.jsx
const reviews = [
  {
    name: "Анна, Лениногорск",
    text: "Заказала кухню в январе — сделали за 12 дней! Цвет и фурнитура точно как в 3D-проекте. Очень довольна!"
  },
  {
    name: "Игорь, д. Новошешминск",
    text: "Шкаф-купе вместил всё, что не помещалось в спальне. Цена оказалась ниже, чем у конкурентов."
  },
  {
    name: "Елена, ул. Ленина",
    text: "Замерщик приехал в тот же день, проект утвердили за пару часов. Сборка — чётко, без пыли и шума."
  }
];

export default function Reviews() {
  return (
    <section className="section" style={{ background: 'var(--color-light)' }}>
      <div className="container">
        <h2 className="section-title">Нам доверяют в Лениногорске</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {reviews.map((r, i) => (
            <div
              key={i}
              style={{
                background: 'white',
                padding: '24px',
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
              }}
            >
              <p style={{ fontStyle: 'italic', marginBottom: '16px' }}>"{r.text}"</p>
              <p style={{ fontWeight: '600', color: 'var(--color-accent)' }}>{r.name}</p>
            </div>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: '32px', color: '#666' }}>
          <em>Хотите оставить отзыв? Напишите нам — и получите скидку 1 000 ₽ на следующий заказ!</em>
        </p>
      </div>
    </section>
  );
}