// src/components/CtaSection.jsx
export default function CtaSection() {
  return (
    <section className="section" id="contact">
      <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h2 className="section-title">Готовы к новой мебели?</h2>
        <p style={{ marginBottom: '32px' }}>
          Оставьте заявку — и мы пришлём каталог + примеры по вашему бюджету
        </p>
        {/* Заглушка формы — подключим Formspree на следующем шаге */}
<form
  action="https://formspree.io/f/xpqqawoz"  // ← ВСТАВЬ СВОЙ ENDPOINT СЮДА!
  method="POST"
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    textAlign: 'left'
  }}
>
  <input
    type="text"
    name="name"
    placeholder="Ваше имя"
    required
    style={{
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '6px'
    }}
  />
  <input
    type="tel"
    name="phone"
    placeholder="Телефон или Telegram \ Макс"
    required
    style={{
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '6px'
    }}
  />
  <select
    name="service"
    style={{
      padding: '12px',
      border: '1px solid #ccc',
      borderRadius: '6px'
    }}
  >
    <option value="">Что вас интересует?</option>
    <option value="Кухня">Кухня</option>
    <option value="Шкаф-купе">Шкаф-купе</option>
    <option value="Прихожая">Прихожая</option>
    <option value="Детская">Детская мебель</option>
    <option value="Другое">Другое</option>
  </select>
  <button
    type="submit"
    className="btn"
    style={{ width: '100%', padding: '14px' }}
  >
    Получить каталог
  </button>
</form>
      </div>
    </section>
  );
}