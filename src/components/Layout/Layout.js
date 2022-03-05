import { Fragment } from "react";
import MainHeader from "./MainHeader";

const Layout = (props) => {
  return (
    <Fragment>
      <MainHeader />

      <main style={{ position: "relative" }}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
