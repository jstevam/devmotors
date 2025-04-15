import type { Metadata } from "next";
import "./globals.scss";
import Header from "@/components/header";


export const metadata: Metadata = {
  title: "DevMotors - Sua Oficina especializada!",
  description: "Manutenção de Veiculos",
  keywords: ["oficina", "oficina carros", "mecânica", "veiculos", "manutenção"],
  openGraph: {
    title: "Projeto Dev Motors",
    images: [`${process.env.NEXT_PUBLIC_URL}/logo.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    }
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body >
        <Header />
        {children}
        <p style={{ textAlign: "center", marginTop: 54, marginBottom: 24 }} >
          Todos os direitos reservados @ {`${new Date().getFullYear()}`}
        </p>
      </body>
    </html>
  );
}
