import { Header } from '@/components/server/header/components';
import '@/styles/global.scss';
import styles from './styles.module.scss';
import { Inter } from 'next/font/google'
import clsx from 'clsx';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={clsx(styles.layout, inter.className)}>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
