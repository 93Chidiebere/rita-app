"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Calendar as CalendarIcon, ChevronRight, Heart, RefreshCw, Book, CalendarDays } from "lucide-react";

export default function Home() {
  const [greeting, setGreeting] = useState("Good Day");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good Morning");
    else if (hour < 18) setGreeting("Good Afternoon");
    else setGreeting("Good Evening");

    setCurrentDate(new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    }));
  }, []);

  return (
    <main style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      
      {/* Header Section */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <p style={{ color: 'var(--color-pink-800)', fontWeight: '600', marginBottom: '4px' }}>{greeting}</p>
          <h1 style={{ fontSize: '32px', color: 'var(--color-pink-900)', fontWeight: '800', marginBottom: '16px' }}>Welcome!</h1>
          <p style={{ color: '#71717a', fontSize: '15px', lineHeight: 1.5 }}>
            Mama Rita,<br/>
            Wonder worker. <span style={{ color: 'var(--color-pink-500)' }}>♥</span>
          </p>
        </div>
        
        <div style={{ 
          width: '120px', 
          height: '140px', 
          position: 'relative', 
          borderRadius: '24px', 
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
        }}>
          <Image
            src="/ST.Rita.jfif"
            alt="St. Rita of Cascia"
            fill
            style={{ objectFit: 'cover' }}
            priority
            unoptimized
          />
        </div>
      </div>

      {/* Today's Devotion Card */}
      <div className="card" style={{ 
        padding: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        background: 'var(--color-pink-50)'
      }}>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
          <div style={{ 
            width: '48px', 
            height: '48px', 
            background: 'var(--color-pink-900)', 
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-white)'
          }}>
            <CalendarIcon size={24} />
          </div>
          <div>
            <p style={{ fontSize: '12px', color: '#71717a', marginBottom: '4px' }}>Today is</p>
            <p style={{ fontWeight: '700', color: 'var(--color-pink-900)', fontSize: '14px', marginBottom: '4px' }}>{currentDate}</p>
            <p style={{ fontSize: '12px', color: 'var(--color-pink-500)', fontWeight: '500' }}>Daily Devotion</p>
          </div>
        </div>
        <Link href="/devotions/daily/play" className="btn-primary" style={{ padding: '12px 16px', borderRadius: '16px' }}>
          Start
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Explore Devotions Section */}
      <section>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '700', color: 'var(--color-pink-900)' }}>Explore Devotions</h2>
          <Link href="/devotions" style={{ fontSize: '14px', color: 'var(--color-pink-500)', fontWeight: '500' }}>View all &gt;</Link>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          {/* Card 1 */}
          <Link href="/devotions/daily" className="card" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px', background: 'var(--color-pink-50)' }}>
            <div className="btn-icon">
              <Heart size={20} />
            </div>
            <span style={{ fontWeight: '600', color: 'var(--color-pink-900)', fontSize: '14px' }}>Daily Devotion</span>
            <div style={{ width: '40px', height: '2px', background: 'var(--color-pink-800)', borderRadius: '2px' }} />
          </Link>
          
          {/* Card 2 */}
          <Link href="/devotions/monthly-novena" className="card" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
            <div className="btn-icon">
              <RefreshCw size={20} />
            </div>
            <span style={{ fontWeight: '600', color: 'var(--color-pink-900)', fontSize: '14px' }}>Monthly Novena</span>
          </Link>
          
          {/* Card 3 */}
          <Link href="/devotions/chaplet" className="card" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
            <div className="btn-icon">
              <Book size={20} />
            </div>
            <span style={{ fontWeight: '600', color: 'var(--color-pink-900)', fontSize: '14px' }}>St. Rita Chaplet</span>
          </Link>

          {/* Card 4 */}
          <Link href="/devotions/feast-days" className="card" style={{ padding: '24px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '16px' }}>
            <div className="btn-icon">
              <CalendarDays size={20} />
            </div>
            <span style={{ fontWeight: '600', color: 'var(--color-pink-900)', fontSize: '14px' }}>Feast Days & Events</span>
          </Link>
        </div>
      </section>
      
      {/* Quote Section */}
      <section className="card" style={{ padding: '24px', background: 'var(--color-white)', marginTop: '8px' }}>
        <h3 style={{ fontSize: '64px', color: 'var(--color-pink-100)', lineHeight: '0.5', marginBottom: '16px', fontFamily: 'serif' }}>"</h3>
        <p style={{ color: 'var(--color-pink-900)', fontSize: '16px', fontWeight: '600', lineHeight: 1.5, marginBottom: '12px' }}>
          Nothing is impossible with God, and through St. Rita, even the most desperate cases find hope.
        </p>
        <p style={{ color: '#a1a1aa', fontSize: '14px' }}>— Devotion to St. Rita</p>
      </section>
      
    </main>
  );
}
