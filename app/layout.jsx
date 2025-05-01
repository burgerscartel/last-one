import '../styles/globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Burgers Cartel',
  description: "Flavors You Can't Refuse",
  openGraph: {
    title: 'Burgers Cartel',
    description: "Flavors You Can't Refuse"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}

