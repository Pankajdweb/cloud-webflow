import type { Metadata } from "next";
import "./globals.css";
import { DevLinkProvider } from "@/webflow/DevLinkProvider";
import { DevLinkFontTags } from "@/webflow/webflow_modules/DevLinkFontTags";
import { Navbar } from "@/webflow/Navbar";

export const metadata: Metadata = {
  title: "Techwise",
  description: "Techwise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <DevLinkFontTags />
      </head>
      <body>
        <DevLinkProvider>
          <Navbar />
          {children}
        </DevLinkProvider>
      </body>
    </html>
  );
}
