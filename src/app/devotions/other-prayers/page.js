"use client";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function OtherPrayers() {
  return (
    <main style={{ padding: '20px', minHeight: '100vh', background: 'var(--color-background)' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
        <Link href="/" style={{ color: 'var(--color-pink-900)', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '500' }}>
          <ChevronLeft size={24} />
          Back
        </Link>
      </div>

      <h1 style={{ fontSize: '28px', color: 'var(--color-pink-900)', fontWeight: '800', marginBottom: '16px' }}>
        Feast day events and Other Prayers
      </h1>
      
      <div className="card" style={{ padding: '24px', background: 'var(--color-white)' }}>
        <p style={{ color: '#71717a', fontSize: '16px', lineHeight: 1.6 }}>
          These prayers are currently being updated. Please check back soon!
        </p>
      </div>
    </main>
  );
}
