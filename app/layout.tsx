import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JKSHUTRADE GLOBAL | Cars from Korea",
  description:
    "Export of Korean cars, containers and special equipment from South Korea to Tajikistan, CIS and worldwide. JKSHUTRADE GLOBAL — Partnership Without Borders.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
