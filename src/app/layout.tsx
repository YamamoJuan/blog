import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Font setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata (favicon, title, dsb)
export const metadata: Metadata = {
  title: "blog",
  description: "kasmingBlog",
  icons: {
    icon: "/kasming-icon.ico", // favicon baru lo
  },
};

// Root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Force browser to refresh favicon */}
        <link rel="icon" href="/kasming-icon.ico?v=2" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-site`}>
        {children}
      </body>
    </html>
  );
}
