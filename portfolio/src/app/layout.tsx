import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Home from "./page";

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
        <h1 className="text-1xl text-orange-200">¡Hola, Tailwind!</h1>
        <Home />
      </body>
    </html>
  );
}