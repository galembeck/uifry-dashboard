import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from '@/components/Sidebar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "UIFry | Finance Bank Fintech",
  description: "Interface created based on a SAAS dashboard using TailwindCSS and Shascn-UI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          'min-h-screen w-full bg-base-background text-white flex', 
          inter.className,
          {'debug-screens' : process.env.NODE_ENV === 'development'}
        )}
      >
        <Sidebar />
        <div className="p-8 w-full">{children}</div>
      </body>
    </html>
  );
}
