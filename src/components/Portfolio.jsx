// src/components/Portfolio.jsx
const projects = [
  {
    title: "Кухня в стиле лофт, 3.2 м, МДФ + стекло",
    img: "/images/loft.jpg"
  },
  {
    title: "Встроенный шкаф в спальню, 2.5 м",
    img: "/images/shkaf.jpg"
  },
  {
    title: "Гарнитур для гостиной, матовый пластик",
    img: "/images/garnitura.jpg"
  },
  {
    title: "Угловая кухня с барной стойкой",
    img: "/images/kvs_photo1-scaled.jpg"
  },
  {
    title: "Комплект для детской: стол, шкаф, кровать",
    img: "/images/detskaya.jpg"
  },
  {
    title: "Узкая прихожая с зеркалом и подсветкой",
    img: "/images/prihozhaya.jpg"
  }
];

export default function Portfolio() {
  return (
    <section className="section" id="portfolio">
      <div className="container">
        <h2 className="section-title">Наши работы в Лениногорске</h2>
        <p style={{ textAlign: 'center', marginBottom: '32px', color: '#666' }}>
          Реальные проекты — без рендеров и обмана
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
          {projects.map((project, i) => (
            <div
              key={i}
              style={{
                border: '1px solid #eee',
                borderRadius: '8px',
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            >
              <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                  src={project.img}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                {/* Фолбэк, если фото нет */}
                <div
                  style={{
                    display: 'none',
                    width: '100%',
                    height: '100%',
                    background: '#f5f5f5',
                    color: '#999',
                    fontSize: '0.9rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    padding: '8px'
                  }}
                >
                  Фото пока нет
                </div>
              </div>
              <div style={{ padding: '16px' }}>
                <p style={{ margin: 0, fontSize: '1rem' }}>{project.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}