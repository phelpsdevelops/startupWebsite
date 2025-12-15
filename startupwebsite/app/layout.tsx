import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Startup",
  description: "Clean modern startup website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* NAVBAR */}
        <header className="navbar">
          <div className="container nav-inner">
            <div className="logo">Startup</div>
            <nav className="nav-links">
              <a href="#home">Home</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>

        {/* PAGE CONTENT */}
        <main className="main">{children}</main>

        {/* FOOTER */}
        <footer className="footer">
          <div className="container footer-inner">
            <span>© {new Date().getFullYear()} Startup</span>
            <span>Built with Next.js</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
