// app/layout.tsx
import './globals.css'; // Import your global styles
import { ReactNode } from 'react';
import Footer from '@/components/Footer'; // Assuming you have a Footer component
import Navbar from '@/components/Navbar'; // Assuming you have a Header component

export const metadata = {
  title: 'Asma Iqbal-portfolio',
  description: 'Your Site Description',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Include the navigation bar */}
        <main>{children}</main> {/* This is where the page content will be rendered */}
        <Footer /> {/* Include the footer here */}
      </body>
    </html>
  );
}