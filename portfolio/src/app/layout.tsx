import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Home from "./page";
import Menu from "./vistas/menu";
import SobreMi from "./components/sobreMi";

export default function RootLayout({
}: {
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Menu />
        <SobreMi />
      </body>
    </html>
  );
}