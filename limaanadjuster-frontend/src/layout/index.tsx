import {ReactNode} from "react";
import {useLocation} from "react-router-dom";
import cx from "classnames";
import SideBar from "./components/SideBar";
import Header from "./components/Header";

const pageWithoutLayout = ["/login", "/register"];

const LayoutRoot = ({children}: {children: ReactNode}) => {
  const location = useLocation();
  const pathName = location.pathname;

  const isPageWithoutLayout = pageWithoutLayout.includes(pathName);

  return (
    <div
      className={cx({
        "flex min-h-screen": !isPageWithoutLayout,
        "login-wrapper": isPageWithoutLayout,
      })}>
      {isPageWithoutLayout ? null : <SideBar />}
      <main className="w-screen">
        {isPageWithoutLayout ? null : <Header />}
        <div
          className={cx({
            "px-8 py-5": !isPageWithoutLayout,
            "relative h-screen flex justify-center items-center":
              isPageWithoutLayout,
          })}>
          {children}
        </div>
      </main>
    </div>
  );
};

export default LayoutRoot;
