// src/components/ShowroomVideo.jsx
export default function ShowroomVideo() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section-title">Приходите в наш салон!</h2>
        <p style={{ textAlign: 'center', marginBottom: '32px', color: '#666' }}>
          Посмотрите образцы материалов, обсудите проект с замерщиком и почувствуйте качество вживую
        </p>
        <div style={{
          position: 'relative',
          paddingBottom: '56.25%', // 16:9
          height: 0,
          overflow: 'hidden',
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <iframe
            src="https://rutube.ru/play/embed/d1545353784ae5a903c29afdf20013ec" alt="Видеообзор салона — 3:37 минут. Посмотрите, как мы работаем!"// ← URL СЮДА с рутуба(есть и ютуб)
            title="Видео обзор магазина Мебели ДоРеМи в Лениногорске"
            allow="fullscreen"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '8px'
            }}
          ></iframe>
        </div>
        <p style={{ textAlign: 'center', marginTop: '24px' }}>
          Адрес: г. Лениногорск, ул. Энгельса, 5 а  
          <br />
          Работаем ежедневно с 9:00 до 17:00
        </p>
      </div>
    </section>
  );
}