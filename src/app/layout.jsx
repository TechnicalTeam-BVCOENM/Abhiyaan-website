import { oswald_init, quattrocento_init } from '@/utils/fonts';
import './globals.css';
import Navbar from '@/components/navbar/navbar';

export const metadata = {
  title: 'Abhiyaan | The Urban Festive',
  description: 'Abhiyaan is the annual cultural festival of BVCOE Navi Mumbai.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${oswald_init.className} ${quattrocento_init.className} overflow-x-hidden scroll-smooth`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
