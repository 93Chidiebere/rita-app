import Link from "next/link";
import { ArrowLeft, Heart, RefreshCw, Book, CalendarDays, Church, Target } from "lucide-react";

export default function DevotionsPage() {
  const devotions = [
    { name: "Daily Devotion", icon: Heart, href: "/devotions/daily/play" },
    { name: "15 Thursdays Devotion", icon: RefreshCw, href: "/devotions/fifteen-thursdays" },
    { name: "9 Days Novena", icon: Book, href: "/devotions/nine-days-novena" },
    { name: "Feast day events and Other Prayers", icon: CalendarDays, href: "/devotions/other-prayers" },
    { name: "Yearly Programs", icon: Church, href: "/devotions/yearly" },
    { name: "Retreats", icon: Target, href: "/devotions/retreats" },
  ];

  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      <header style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingBottom: '8px' }}>
        <Link href="/" className="btn-icon">
          <ArrowLeft size={20} />
        </Link>
        <h1 style={{ fontSize: '24px', color: 'var(--color-pink-900)', fontWeight: '700' }}>All Devotions</h1>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        {devotions.map((item, index) => {
          const Icon = item.icon;
          return (
            <Link href={item.href} key={index} className="card" style={{ padding: '32px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', background: index === 0 ? 'var(--color-pink-50)' : 'var(--color-white)' }}>
              <div className="btn-icon">
                <Icon size={24} />
              </div>
              <span style={{ fontWeight: '600', color: 'var(--color-pink-900)', fontSize: '15px' }}>{item.name}</span>
            </Link>
          )
        })}
      </div>
      
    </main>
  );
}
