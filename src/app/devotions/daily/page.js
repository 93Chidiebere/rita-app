import Link from "next/link";
import { ArrowLeft, Heart, Clock, ListOrdered, Target } from "lucide-react";

export default function WeeklyNovenaIntro() {
  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '32px', minHeight: 'calc(100vh - 144px)' }}>
      
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link href="/devotions" className="btn-icon">
          <ArrowLeft size={20} />
        </Link>
      </header>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
        <div style={{ 
          width: '100px', 
          height: '100px', 
          background: 'var(--color-pink-50)', 
          borderRadius: '32px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-pink-800)'
        }}>
          <Heart size={48} />
        </div>
        <div>
          <h1 style={{ fontSize: '28px', color: 'var(--color-pink-900)', fontWeight: '800', marginBottom: '8px' }}>Daily Devotion</h1>
          <p style={{ color: '#71717a', fontSize: '15px' }}>St. Rita of Cascia Prayers</p>
        </div>
      </div>

      <div className="card" style={{ 
        padding: '24px', 
        display: 'flex', 
        justifyContent: 'space-between',
        background: 'var(--color-pink-50)',
        marginTop: '16px'
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Clock size={20} style={{ color: 'var(--color-pink-800)' }} />
          <span style={{ fontSize: '12px', color: '#71717a' }}>Estimated Time</span>
          <span style={{ fontWeight: '700', color: 'var(--color-pink-900)' }}>15 min</span>
        </div>
        <div style={{ width: '1px', background: 'var(--color-pink-100)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <ListOrdered size={20} style={{ color: 'var(--color-pink-800)' }} />
          <span style={{ fontSize: '12px', color: '#71717a' }}>Steps</span>
          <span style={{ fontWeight: '700', color: 'var(--color-pink-900)' }}>8</span>
        </div>
        <div style={{ width: '1px', background: 'var(--color-pink-100)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
          <Target size={20} style={{ color: 'var(--color-pink-800)' }} />
          <span style={{ fontSize: '12px', color: '#71717a' }}>Focus</span>
          <span style={{ fontWeight: '700', color: 'var(--color-pink-900)' }}>Patience</span>
        </div>
      </div>

      <div style={{ textAlign: 'center', padding: '0 16px', color: 'var(--color-pink-900)', lineHeight: 1.6 }}>
        Join us in prayer and seek the intercession of St. Rita of Cascia, the saint of the impossible.
      </div>

      <div style={{ marginTop: 'auto', paddingBottom: '24px' }}>
        <Link href="/devotions/daily/play" className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '16px', borderRadius: '16px' }}>
          Start Prayer &gt;
        </Link>
      </div>

    </main>
  );
}
