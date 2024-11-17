import type { Metadata } from "next";
import { Toaster } from "react-hot-toast"
import '@/app/globals.css'

export const metadata: Metadata = {
  title: "Signa page",
  description: "Technical test",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Toaster position="bottom-left"/>
        {children}
      </body>
    </html>
  );
}
