import Link from "next/link";
import { ArrowLeft, ChevronLeft, ChevronRight, Bell } from "lucide-react";

export default function CalendarPage() {
  const currentYear = new Date().getFullYear();
  
  // Generating days for May (May has 31 days)
  // Assuming May 1st starts on Friday for 2026 layout
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);
  const emptyPrefix = Array.from({ length: 5 }, (_, i) => null); // padding for layout

  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" className="btn-icon">
            <ArrowLeft size={20} />
          </Link>
          <h1 style={{ fontSize: '24px', color: 'var(--color-pink-900)', fontWeight: '700' }}>Calendar</h1>
        </div>
        <button className="btn-icon" aria-label="Reminders" style={{ color: 'var(--color-pink-500)' }}>
          <Bell size={20} />
        </button>
      </header>

      <div className="card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <button style={{ color: '#a1a1aa' }}><ChevronLeft size={24} /></button>
          <span style={{ fontWeight: '700', color: 'var(--color-pink-900)', fontSize: '18px' }}>May {currentYear}</span>
          <button style={{ color: '#a1a1aa' }}><ChevronRight size={24} /></button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', gap: '8px' }}>
          {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
            <span key={`${day}-${idx}`} style={{ fontSize: '12px', color: '#a1a1aa', fontWeight: '500' }}>{day}</span>
          ))}
          
          {emptyPrefix.map((_, i) => <div key={`empty-${i}`} />)}
          
          {daysInMonth.map(date => {
            const isFeastDay = date === 22;
            const isNovena = date >= 13 && date <= 21;
            
            return (
              <div key={date} style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center',
                height: '40px',
                width: '40px',
                margin: '0 auto',
                borderRadius: '50%',
                background: isFeastDay ? 'var(--color-pink-800)' : isNovena ? 'var(--color-pink-50)' : 'transparent',
                color: isFeastDay ? 'white' : isNovena ? 'var(--color-pink-800)' : 'var(--color-pink-900)',
                fontWeight: (isFeastDay || isNovena) ? '700' : '500',
                fontSize: '14px',
                position: 'relative'
              }}>
                {date}
                {isNovena && <div style={{ position: 'absolute', bottom: '4px', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--color-pink-500)' }} />}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '0 8px' }}>
        <h3 style={{ fontSize: '16px', fontWeight: '700', color: 'var(--color-pink-900)', marginBottom: '16px' }}>Upcoming Events</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '4px', height: '40px', background: 'var(--color-pink-500)', borderRadius: '2px' }} />
            <div>
              <p style={{ fontWeight: '600', color: 'var(--color-pink-900)', fontSize: '15px' }}>St. Rita Novena</p>
              <p style={{ fontSize: '13px', color: '#71717a' }}>May 13 - May 21</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <div style={{ width: '4px', height: '40px', background: 'var(--color-pink-800)', borderRadius: '2px' }} />
            <div>
              <p style={{ fontWeight: '600', color: 'var(--color-pink-900)', fontSize: '15px' }}>Feast of St. Rita</p>
              <p style={{ fontSize: '13px', color: '#71717a' }}>May 22</p>
            </div>
          </div>
        </div>
      </div>

    </main>
  );
}
