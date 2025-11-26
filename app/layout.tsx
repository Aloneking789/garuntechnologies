import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import WhatsAppButton from './components/WhatsAppButton/index';

export const metadata = {
  metadataBase: new URL('https://garuntechnologies.vercel.app'),
  title: 'Garun Technologies - AI & App Development Agency',
  description: 'Garun Technologies - Leading technology agency from Gorakhpur, India. Specializing in AI solutions, mobile app development, web development, and intelligent automation.',
  openGraph: {
    title: 'Garun Technologies - AI & App Development Agency',
    description: 'Leading technology agency from Gorakhpur, India. Specializing in AI solutions, mobile app development, web development, and intelligent automation.',
    images: ['/garunlogo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Garun Technologies - AI & App Development Agency',
    description: 'Leading technology agency from Gorakhpur, India. Specializing in AI solutions, mobile app development, web development, and intelligent automation.',
    images: ['/garunlogo.png'],
  },
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
        <WhatsAppButton />
      </body>
    </html>
  )
}
