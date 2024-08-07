// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import "@/styles/globals.css";
import { Inter as FontSans } from "next/font/google";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    
    <div >
      
        <div className={fontSans.variable }>
      <Component {...pageProps} />
      
    </div>
    </div>
    
    
  );
}

export default MyApp;
