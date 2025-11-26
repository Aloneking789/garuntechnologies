import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';

export const metadata = {
  title: 'Garun Technologies - AI & App Development Agency',
  description: 'Garun Technologies - Leading technology agency from Gorakhpur, India. Specializing in AI solutions, mobile app development, web development, and intelligent automation.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
