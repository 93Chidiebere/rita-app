"use client";
import { Menu, Bell } from "lucide-react";

export default function TopBar({ onOpenDrawer }) {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      background: 'var(--background)',
      zIndex: 40,
    }}>
      <button className="btn-icon" onClick={onOpenDrawer} aria-label="Menu">
        <Menu size={20} />
      </button>
      <button className="btn-icon" aria-label="Notifications" style={{ position: 'relative' }}>
        <Bell size={20} />
        <span style={{
          position: 'absolute',
          top: '10px',
          right: '12px',
          width: '8px',
          height: '8px',
          background: '#f59e0b',
          borderRadius: '50%'
        }} />
      </button>
    </header>
  );
}
