"use client";
import { Home, BookOpen, Calendar, LayoutGrid } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();
  
  const navItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "Devotions", href: "/devotions", icon: BookOpen },
    { name: "Calendar", href: "/calendar", icon: Calendar },
    { name: "More", href: "/more", icon: LayoutGrid },
  ];

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      height: '80px',
      background: 'var(--color-white)',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTop: '1px solid var(--color-pink-50)',
      zIndex: 40,
      paddingBottom: 'env(safe-area-inset-bottom)'
    }}>
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
        const Icon = item.icon;
        return (
          <Link href={item.href} key={item.name} style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            color: isActive ? 'var(--color-pink-800)' : '#a1a1aa',
            textDecoration: 'none',
            fontSize: '12px',
            fontWeight: isActive ? '600' : '400',
            transition: 'color 0.2s ease'
          }}>
            <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            <span>{item.name}</span>
          </Link>
        )
      })}
    </nav>
  );
}
