'use client';
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import AOS from 'aos';

import store from '@/redux/store';
import { Montserrat } from 'next/font/google'
import { ThemeProvider } from "@material-tailwind/react";
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({ subsets: ['latin'] })

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <html lang="pt">
      <head>
        <title>
          MKS Frontend Challenge
        </title>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </head>
      <body className={montserrat.className}>
        <ThemeProvider>
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </Provider>
        </ThemeProvider>
        <script async src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      </body>
    </html>
  )
}
