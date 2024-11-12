import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Thomas MAINGRE | Développeur Web Full Stack',
  description: 'Thomas MAINGRE est un développeur web Full Stack spécialisé dans la création de sites web performants et modernes. Découvrez ses compétences et ses projets.',
  icons: {
    icon: '/image/logo/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <meta
          name="description"
          content="Thomas MAINGRE est un développeur web Full Stack spécialisé dans la création de sites web performants et modernes. Découvrez ses compétences et ses projets."
        />
        <meta
          name="keywords"
          content="Thomas MAINGRE, développeur Full Stack, développement web, HTML, CSS, JavaScript, React, PHP, Laravel, Symfony, Next.js, TypeScript"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon_package/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon_package/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon_package/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon_package/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#fad62b" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          property="og:title"
          content="Thomas MAINGRE | Développeur Web Full Stack"
        />
        <meta
          property="og:description"
          content="Thomas MAINGRE est un développeur web Full Stack spécialisé dans la création de sites web performants et modernes. Découvrez ses compétences et ses projets."
        />
        <meta property="og:image" content="/image/pictures/profil.jpg" />
        <meta property="og:url" content="https://thomasmaingre.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:site_name"
          content="Thomas MAINGRE | Développeur Web Full Stack"
        />
        <meta
          name="twitter:image:alt"
          content="Thomas MAINGRE | Développeur Web Full Stack"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
