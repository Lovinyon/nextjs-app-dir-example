import Link from "next/link";
import Provider from "./Provider";
import Header from "./header";
import Main from "./Main";
import Footer from "./Footer";

export const metadata = {
  title: "Create Next App",
  description: "Gnereted by create next app",
  themeColor: "#0000FF",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head />
      <body>
        <Provider>
          <Header />
          <Main>{children}</Main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
