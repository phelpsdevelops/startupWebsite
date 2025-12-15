import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="appLayout">
          {/* SIDE NAV */}
          <aside className="sideNav">
            <div className="sideNavInner">
              <div className="sideLogo">Startup</div>

              <nav className="sideLinks">
                <a href="#home">Overview</a>
                <a href="#problem">Problem</a>
                <a href="#approach">Approach</a>
                <a href="#outcomes">Outcomes</a>
                <a href="#usecases">Use Cases</a>
                <a href="#status">Status</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <main className="sideMain">{children}</main>
        </div>
      </body>
    </html>
  );
}
