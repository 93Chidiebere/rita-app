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
  icons: {
    icon: "/Rita.jfif",
  },
  openGraph: {
    title: "St. Rita Devotion",
    description: "Daily devotion app for St. Rita of Cascia",
    url: "https://mama-rita.vercel.app/",
    siteName: "St. Rita Devotion",
    images: [
      {
        url: "https://mama-rita.vercel.app/Rita.jfif",
        width: 800,
        height: 600,
      }
    ],
    type: "website",
  }
};

export const viewport = {
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
