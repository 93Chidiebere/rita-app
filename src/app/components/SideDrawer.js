"use client";
import { X, Home, BookOpen, Calendar, Star, Heart, LayoutGrid } from "lucide-react";
import Link from "next/link";

export default function SideDrawer({ isOpen, onClose }) {
  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Today's Devotion", href: "/devotions/daily", icon: Star },
    { name: "Prayer Collection", href: "/devotions", icon: BookOpen },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "Feast Days", href: "/devotions/feast-days", icon: Heart },
    { name: "Novenas", href: "/devotions/novenas", icon: BookOpen },
    { name: "Favorites", href: "/favorites", icon: Star },
  ];

  return (
    <>
      {/* Backdrop */}
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'var(--color-overlay)',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden',
          transition: 'all 0.3s ease',
          zIndex: 50
        }}
      />
      {/* Drawer */}
      <div style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        width: '85%',
        maxWidth: '320px',
        background: 'var(--color-white)',
        transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 51,
        padding: '24px',
        overflowY: 'auto'
      }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <button className="btn-icon" onClick={onClose} aria-label="Close menu">
            <X size={20} />
          </button>
        </div>
        
        <div style={{ marginBottom: '32px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            background: 'var(--color-pink-50)',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-pink-800)',
            marginBottom: '16px'
          }}>
            <Heart size={32} />
          </div>
          <h2 style={{ fontSize: '24px', color: 'var(--color-pink-900)', marginBottom: '4px' }}>Welcome!</h2>
          <p style={{ color: '#71717a', fontSize: '14px', lineHeight: 1.5 }}>
            St. Rita of Cascia,<br/>
            pray for us. <span style={{ color: 'var(--color-pink-500)' }}>♥</span>
          </p>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {menuItems.map(item => (
            <Link href={item.href} key={item.name} onClick={onClose} style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '12px 0',
              color: 'var(--color-pink-900)',
              fontWeight: '500'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <item.icon size={20} style={{ color: 'var(--color-pink-800)' }} />
                <span>{item.name}</span>
              </div>
              <span style={{ color: '#d4d4d8' }}>›</span>
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
