import NavBar from "../components/NavBar";
import "../index.css";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>5W</title>
      </head>
      <body>
        <div className="flex flex-col justify-between min-h-screen">
          <img src="/assets/5W Banner.png" alt="5W Banner" className="w-full" />
          <NavBar />
          {children}
          <div
            id="lastUpdated"
            className="text-sm font-[Trebuchet_MS] text-5w-blue-dark mt-auto ml-1 mb-1"
          >
            This site was last updated April 16, 2026. (Happy Birthday,
            webmaster's brother!)
          </div>
        </div>
      </body>
    </html>
  );
}
