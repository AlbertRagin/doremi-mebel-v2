// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer style={{ background: 'var(--color-text)', color: 'white', padding: '40px 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
          <div>
            <h3 style={{ margin: '0 0 16px', fontSize: '1.4rem' }}>Doremi Мебель</h3>
            <p>Изготовление мебели на заказ в Лениногорске и районе</p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px' }}>Контакты</h4>
            <p>📍 г. Лениногорск, ул. Энгельса, 5а</p>
            <p>📞 <a href="tel:+79991234567" style={{ color: 'white', textDecoration: 'none' }}>+7 (917) 890-04-81</a></p>
            <p>💬 <a href="https://vk.com/doremi_mebel" target="_blank" rel="noreferrer" style={{ color: 'white', textDecoration: 'none' }}>Написать в VK</a></p>
          </div>
          <div>
            <h4 style={{ margin: '0 0 12px' }}>Режим работы</h4>
            <p>Пн–Пт: 9:00–19:00</p>
            <p>Сб-Вс: 9:00-17:00</p>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #444', marginTop: '32px', paddingTop: '20px', textAlign: 'center', fontSize: '0.9rem', color: '#aaa' }}>
          <p>ООО «ДОРЕМИ», ОГРНИП 1650388456 — работаем по договору с гарантией</p>
        </div>
      </div>
    </footer>
  );
}