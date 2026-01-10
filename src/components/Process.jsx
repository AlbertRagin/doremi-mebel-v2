// src/components/Process.jsx
const steps = [
  { num: "01", title: "Замер", desc: "Приедем бесплатно, измерим помещение и обсудим пожелания" },
  { num: "02", title: "3D-проект", desc: "Сделаем визуализацию — вы увидите мебель у себя дома" },
  { num: "03", title: "Изготовление", desc: "Производим на нашем цеху в Лениногорске — срок от 7 дней" },
  { num: "04", title: "Установка", desc: "Соберём аккуратно, уберём мусор и дадим гарантию 2 года" }
];

export default function Process() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Как мы работаем</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: 'var(--color-accent)',
                color: 'white',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px',
                fontSize: '1.4rem',
                fontWeight: 'bold'
              }}>
                {step.num}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px' }}>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}