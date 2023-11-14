'use client';
import './globals.css'
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
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
  return (
    <html lang="pt">
      <head>
        <title>
          MKS Frontend Challenge
        </title>
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
      </body>
    </html>
  )
}
