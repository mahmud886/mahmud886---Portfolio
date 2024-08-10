import {Inter} from "next/font/google";
import "./globals.css";
import PrelineScript from "@/components/PrelineScript";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "mahmud886 - Portfolio",
  description: "mahmud886 - Portfolio",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
    {/*bg-[url('/grid.svg')]*/}
    <body className={`${inter.className} dark:bg-neutral-900 `}>
    {/* ========== HEADER ========== */}
    <Header/>
    {/* ========== END HEADER ========== */}
    {/* ========== MAIN CONTENT ========== */}
    <main id="content">
      {children}
    </main>
    {/* ========== END MAIN CONTENT ========== */}

    {/* ========== FOOTER ========== */}
    <Footer/>
    {/* ========== END FOOTER ========== */}

    <PrelineScript/>
    </body>
    </html>
  );
}
