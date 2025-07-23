// 引入組件
import Header from "../components/Header";
import I18nProvider from "../components/I18nProvider";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <I18nProvider>
        <Header />
        {children}
      </I18nProvider>
    </div>
  );
}