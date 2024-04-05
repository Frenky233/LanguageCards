import { Header } from '@/components/server/header/components';
import '@/styles/global.scss';
import styles from './styles.module.scss';
import { StoreProvider } from '@/redux/storeProvider';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Language Cards</title>
      </head>
      <body>
        <div className={styles.layout} id='layout'>
          <StoreProvider>
            <Header />
            <main className={styles.main}>
              {children}
            </main>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
