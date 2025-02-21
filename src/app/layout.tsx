import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Notion Consutltant",
  description: "Helping small businesses get organised"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
