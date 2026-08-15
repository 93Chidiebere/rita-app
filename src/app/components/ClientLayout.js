"use client";
import { useState } from "react";
import TopBar from "./TopBar";
import SideDrawer from "./SideDrawer";

export default function ClientLayout({ children }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <TopBar onOpenDrawer={() => setDrawerOpen(true)} />
      <SideDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
      {children}
    </>
  );
}
