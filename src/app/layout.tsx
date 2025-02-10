import { Quicksand, Figtree } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import clsx from "clsx";
import { Header } from "@/components/layout";
import { getMetaTags } from "@/helpers/getMetaTags";

const titleFont = Quicksand({
  variable: "--font-title",
  subsets: ["latin"],
});

const bodyFont = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata = getMetaTags();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={`${bodyFont.variable} ${titleFont.variable} antialiased`}
      >
        <Providers>
          <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors ease-in-out duration-500">
            <div
              className={clsx(
                "antialiased font-body flex flex-col min-h-screen max-w-3xl mx-auto",
              )}
            >
              <Header />
              {children}
            </div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
