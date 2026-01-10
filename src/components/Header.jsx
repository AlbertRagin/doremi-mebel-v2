// // // src/components/Header.jsx
// export default function Header() {
//   return (
//     <header style={{ padding: '20px 0', borderBottom: '1px solid #eee' }}>
//       <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
//         <div style={{ fontSize: '1.5rem', fontWeight: '600' }}>
//           Doremi Мебель
//         </div>
//         <nav >
//           <a href="#portfolio" style={{ marginRight: '24px', textDecoration: 'none', color: 'inherit' }}>Работы</a>
//           <a href="#contact" style={{ marginRight: '24px', textDecoration: 'none', color: 'inherit' }}>Контакты</a>
//           <a
//             href="tel:+7 (917) 890-04-81"
//             style={{
//               background: 'var(--color-accent)',
//               color: 'white',
//               padding: '8px 16px',
//               borderRadius: 'var(--border-radius)',
//               textDecoration: 'none'
//             }}
//           >
//             📞 Заказать звонок
//           </a>
//         </nav>
//       </div>
//     </header>
//   );
// }

// src/components/Header.jsx
// import React from 'react';

// export default function Header() {
//   return (
//     <header style={{
//       padding: '20px 0',
//       borderBottom: '1px solid #eee',
//       background: 'white',
//       position: 'sticky',
//       top: 0,
//       zIndex: 100
//     }}>
//       <div className="container" style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         flexWrap: 'wrap',
//         gap: '16px'
//       }}>
//         {/* Логотип */}
//         <div style={{ fontSize: '1.5rem', fontWeight: '600', whiteSpace: 'nowrap' }}>
//           Doremi Мебель
//         </div>

//         {/* Навигация + кнопка */}
//         <div style={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: '24px',
//           flexWrap: 'wrap',
//           justifyContent: 'flex-end'
//         }}>
//           <nav style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
//             <a href="#portfolio" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem' }}>Работы</a>
//             <a href="#contact" style={{ textDecoration: 'none', color: 'inherit', fontSize: '1rem' }}>Контакты</a>
//           </nav>

//           {/* Кнопка звонка */}
//           <a
//             href="tel:+7 (917) 890-04-81"
//             className="btn"
//             style={{
//               whiteSpace: 'nowrap',
//               padding: '8px 16px',
//               fontSize: '0.95rem'
//             }}
//           >
//             📞 Заказать звонок
//           </a>
//         </div>
//       </div>
//     </header>
//   );
// }

// src/components/Header.jsx
export default function Header() {
  return (
    <header
      style={{
        padding: '16px 0',
        borderBottom: '1px solid #eee',
        background: 'white',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'nowrap', // ← ЗАПРЕЩАЕМ перенос
          whiteSpace: 'nowrap', // ← ЗАПРЕЩАЕМ разрыв слов
          gap: '20px'
        }}
      >
        {/* Логотип */}
        <div
          style={{
            fontSize: '1rem',
            fontWeight: '650',
            lineHeight: 1
          }}
        >
          Doremi
        </div>

        {/* Правая часть: навигация + кнопка */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '18px',
            whiteSpace: 'nowrap'
          }}
        >
          <nav style={{ display: 'flex', gap: '18px' }}>
            <a
              href="#portfolio"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}
            >
              Работы
            </a>
            <a
              href="#contact"
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.95rem',
                fontWeight: '500'
              }}
            >
              Контакты
            </a>
          </nav>

          <a
            href="tel:+7 (917) 890-04-81"
            className="btn"
            style={{
              padding: '7px 14px',
              fontSize: '0.9rem',
              minWidth: '120px',
              textAlign: 'center'
            }}
          >
            📞 Звонок
          </a>
        </div>
      </div>
    </header>
  );
}

// // src/components/Header.jsx
// export default function Header() {
//   return (
//     <header
//       style={{
//         padding: '14px 0',
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
//           whiteSpace: 'nowrap'
//         }}
//       >
//         {/* Логотип — короткий */}
//         <div
//           style={{
//             fontSize: '1.25rem',
//             fontWeight: '600',
//             lineHeight: 1
//           }}
//         >
//           Doremi Мебель
//         </div>

//         {/* Только кнопка — без навигации */}
//         <a
//           href="tel:+79991234567"
//           className="btn"
//           style={{
//             padding: '6px 12px',
//             fontSize: '0.9rem',
//             minWidth: '90px',
//             textAlign: 'center'
//           }}
//         >
//           📞 Заказать звонок
//         </a>
//       </div>
//     </header>
//   );
// }