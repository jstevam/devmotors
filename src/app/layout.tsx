import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "Projeto Dev Motors",
  description: "Manutenção de Veiculos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body >
        <Header/>
        {children}
      </body>
    </html>
  );
}
