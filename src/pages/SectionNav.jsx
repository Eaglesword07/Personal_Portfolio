/**
 * SectionNav.jsx
 *
 * Mobile:   compact tabs — number top-right, label bottom-left, arrow bottom-right
 * Desktop:  full-width columns — same layout, larger type, bordered columns
 *
 * Props:
 *   sections      – [{ id, num, label }]
 *   activeSection – string id
 *   onTabClick    – (id) => void
 *   dark          – boolean, renders the dark variant (bottom nav)
 */

const SectionNav = ({ sections, activeSection, onTabClick, dark = false }) => {
  return (
    <nav
      className="sticky top-0 z-20 border-b"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${sections.length}, 1fr)`,
        background: dark ? '#111' : '#fff',
        borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
      }}
    >
      {sections.map(({ id, num, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => onTabClick(id)}
            className="relative text-left border-r last:border-r-0 transition-colors duration-200"
            style={{
              borderColor: dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)',
              background: isActive ? (dark ? '#fff' : '#111') : 'transparent',
              padding: '10px 16px 10px 16px',
              minHeight: 64,
            }}
          >
            {/* Number — top right */}
            <span
              className="absolute top-2 right-8 text-[11px] font-light"
              style={{ color: isActive ? '#e05a3a' : (dark ? '#555' : '#aaa') }}
            >
              {num}
            </span>

            {/* Diagonal arrow — top right corner */}
            <span
              className="absolute top-2 right-2 text-xs"
              style={{ color: isActive ? '#e05a3a' : (dark ? '#555' : '#aaa') }}
            >
              ↘
            </span>

            {/* Label — bottom left */}
            <span
              className="block mt-6 font-light"
              style={{
                fontSize: 'clamp(14px, 2vw, 22px)',
                color: isActive ? '#fff' : (dark ? '#fff' : '#111'),
              }}
            >
              {label}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default SectionNav;