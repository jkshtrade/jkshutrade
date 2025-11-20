export const metadata = {
  title: "JKSHUTRADE GLOBAL | Cars from Korea",
  description:
    "Export of Korean cars, containers and special equipment from South Korea to Tajikistan, CIS and worldwide. JKSHUTRADE GLOBAL — Partnership Without Borders.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
