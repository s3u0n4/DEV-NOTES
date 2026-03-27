import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang="ko">
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </>
  );
}
