import GlobalWrapper from "@/components/GlobalWrapper/GlobalWrapper";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UnderConstruction from "@/components/UnderConstruction/UnderConstruction";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Artur Nowak",
  description:
    "Passionate about programming since childhood, ready to show off the passion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/logo/favicon-16x16.png"
        />
        <link rel="manifest" href="/logo/manifest.json" />
        <link
          rel="mask-icon"
          href="/logo/safari-pinned-tab.svg"
          color="#3c6672"
        />
        <link rel="shortcut icon" href="/logo/favicon.ico" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/logo/browserconfig.xml" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={inter.className}>
        {/* For the Netlify form to work */}
        <form
          className="hidden"
          data-netlify="true"
          name="arciiix-contact"
          method="POST"
        >
          <input type="hidden" name="form-name" value="arciiix-contact" />
          {/* All of the fields */}
          <input name="name" />
          <input name="surname" />
          <input name="email" />
          <input name="message" />
        </form>
        <GlobalWrapper>
          <UnderConstruction />
          {/* {children} */}
        </GlobalWrapper>
      </body>
    </html>
  );
}
