import './globals.css';

export const metadata = {
  title: 'Shopping-List',
  description: 'Assignments for Web Development 2',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}