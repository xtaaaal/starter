import { Header, Footer } from '@/components/common';
import { FCC } from '@/types/react';
import { Inter, Noto_Sans_TC } from 'next/font/google';

const inter = Noto_Sans_TC({ subsets: ['latin'], weight: ['400'] });

const PageLayout: FCC = ({ children }) => {
  return (
    <div className={inter.className}>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
