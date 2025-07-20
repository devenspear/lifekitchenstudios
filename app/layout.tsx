import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Life Kitchen Studios - Building the Future in VibeCode™",
  description: "A creative studio at the edge of AI, Blockchain, and Web3—engineering immersive experiences for bold brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
