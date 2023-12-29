import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tasblock Product Configurator - Alpha",
  description: "Tasblock Product Configurator - Alpha",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} className="bg-slate-200">
        {children}
      </body>
    </html>
  );
}
