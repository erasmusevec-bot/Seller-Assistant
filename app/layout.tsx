import "./globals.css";
import NavBar from "@/components/NavBar";
export const metadata = { title: "Seller Assistant", description: "Sell fresh products smarter" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 pb-16">
        <div className="mx-auto max-w-md">{children}</div>
        <NavBar />
      </body>
    </html>
  );
}
