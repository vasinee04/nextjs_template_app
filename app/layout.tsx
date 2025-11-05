import type { Metadata } from 'next';
import { Inter, Kanit } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });
const kanit = Kanit({ 
  subsets: ['thai', 'latin'],
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'somejeed - เว็บไซต์ส่วนตัว',
  description: 'ยินดีต้อนรับสู่เว็บไซต์ส่วนตัวของฉัน',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body className={kanit.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-pink-100">
              © 2025 somejeed. สร้างด้วยความรัก 💖 | Next.js & Tailwind CSS
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}