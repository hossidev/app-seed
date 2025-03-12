import "./globals.css";
import type { Metadata } from "next";
import { Manrope, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme/theme-provider";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AppSeed",
  description: "The best way to build your app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${manrope.variable} ${plusJakartaSans.variable}`}
    >
      <body className="antialiased">
        <ThemeProvider>
          <Header />
          <main
            className="
            min-h-screen flex-1
            overflow-y-auto overflow-x-hidden
            py-24 px-8
            bg-secondary/20
            flex flex-col
          "
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
