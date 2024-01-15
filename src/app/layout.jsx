import { anton, teko } from '@/utils/fonts';
import './globals.css';

export const metadata = {
  title: 'Abhiyaan | The Urban Festive',
  description: 'Abhiyaan is the annual cultural festival of BVCOE Navi Mumbai.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${teko} ${anton}`}>{children}</body>
    </html>
  );
}
