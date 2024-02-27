import Navigation from "./components/Navigation";
import "./globals.css";

export const metadata = {
  title: "Ten Thousand Coffee",
  description: "Ten Thousand Coffee",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
