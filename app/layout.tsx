import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Swimworld Kenya | Premier Aquatic Academy Nairobi & Kiambu",
  description: "Certified swimming academy in Westlands, Nairobi & Kiambu. Heated pools, 5:1 student-coach ratio, and specialized adaptive aquatics.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#080e18] text-slate-50 selection:bg-sky-500/30 selection:text-sky-200">
        {children}
      </body>
    </html>
  );
}
