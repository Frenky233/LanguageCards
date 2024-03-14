import { Header } from '@/components/server/header/components';
import '@/styles/global.scss';
import styles from './styles.module.scss';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.layout}>
          <Header />
          <main className={styles.main}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
