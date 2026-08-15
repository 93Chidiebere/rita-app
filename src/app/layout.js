import { Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import BottomNav from "./components/BottomNav";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "St. Rita Devotion",
  description: "Daily devotion app for St. Rita of Cascia",
  manifest: "/manifest.json",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={outfit.variable}>
      <body style={{ paddingBottom: "80px", paddingTop: "64px", fontFamily: 'var(--font-outfit)' }}>
        <ClientLayout>
          {children}
        </ClientLayout>
        <BottomNav />
      </body>
    </html>
  );
}
