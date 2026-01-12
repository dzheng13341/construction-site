import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Air and Sun Construction",
  description: "Renovations, HVAC, and General Contracting Services. Website by dzheng13341@gmail.com",
  icons: {
    icon: [
      {
        url: "/favicon-v1.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicon-v1.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
