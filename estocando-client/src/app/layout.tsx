import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-br">
      <head>
          <title>Estocando - Seu estoque em um lugar só!</title>
      </head>
      <body>
      {children}
      </body>
      </html>
  );
}
