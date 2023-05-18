import "./globals.css";

export const metadata = {
  title: "Your Todo - templates",
  description: "templates for Your Todo ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-2">{children}</body>
    </html>
  );
}
