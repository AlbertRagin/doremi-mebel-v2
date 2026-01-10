// src/components/Hero.jsx
// export default function Hero() {
//   return (
//     <section className="section" style={{ background: 'var(--color-light)', textAlign: 'center' }}>
//       <div className="container">
//         <h1 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>
//           Мебель мечты — без переплат
//         </h1>
//         <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 32px' }}>
//           Изготавливаем кухни, шкафы и гарнитуры под ваш интерьер в Лениногорске — точно в срок и без сюрпризов.
//         </p>
//         <div>
//           <button className="btn" style={{ marginRight: '12px' }}>
//             Заказать бесплатный замер
//           </button>
//           <button className="btn btn-outline">
//             Посмотреть работы
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/components/Hero.jsx
export default function Hero() {
  return (
    <section
      className="section"
      style={{
        background: 'url(/images/hero.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        textAlign: 'center',
        padding: '120px 20px',
        color: 'white', // ← делаем текст белым для контраста
        textShadow: '0 2px 4px rgba(0,0,0,0.6)' // ← добавляем лёгкую тень для лучшей читаемости
      }}
    >
      <div className="container">
        <h1 style={{ fontSize: '2.8rem', marginBottom: '16px', color: '#2e2e2eff' }}>
          Мебель мечты — без переплат
        </h1>
        <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto 32px', color: '#303030ff' }}>
          Изготовим кухни, шкафы и гарнитуры под ваш интерьер — точно в срок и без сюрпризов
        </p>
        <div>
          <button className="btn" style={{ marginRight: '12px' }}>
            Заказать бесплатный замер
          </button>
          <button className="btn btn-outline">
            Посмотреть работы
          </button>
        </div>
      </div>
    </section>
  );
}

// // src/components/Header.jsx
// export default function Header() {
//   return (
//     <header
//       style={{
//         padding: '16px 0',
//         borderBottom: '1px solid #eee',
//         background: 'white',
//         position: 'sticky',
//         top: 0,
//         zIndex: 100
//       }}
//     >
//       <div
//         className="container"
//         style={{
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//           flexWrap: 'nowrap',
//           whiteSpace: 'nowrap',
//           gap: '20px'
//         }}
//       >
//         {/* Логотип — теперь адаптивный */}
//         <div
//           style={{
//             fontSize: '1.35rem',
//             fontWeight: '600',
//             lineHeight: 1
//           }}
//         >
//           Doremi Мебель
//         </div>

//         {/* Правая часть */}
//         <div
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '18px',
//             whiteSpace: 'nowrap'
//           }}
//         >
//           <nav style={{ display: 'flex', gap: '18px' }}>
//             <a
//               href="#portfolio"
//               style={{
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 fontSize: '0.95rem',
//                 fontWeight: '500'
//               }}
//             >
//               Работы
//             </a>
//             <a
//               href="#contact"
//               style={{
//                 textDecoration: 'none',
//                 color: 'inherit',
//                 fontSize: '0.95rem',
//                 fontWeight: '500'
//               }}
//             >
//               Контакты
//             </a>
//           </nav>

//           <a
//             href="tel:+79991234567"
//             className="btn"
//             style={{
//               padding: '7px 12px',
//               fontSize: '0.9rem',
//               minWidth: '110px',
//               textAlign: 'center'
//             }}
//           >
//             📞 Заказать звонок
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }