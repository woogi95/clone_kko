import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import MbMenu from "./main/MbMenu";
import Main from "./main/Main";

function Page() {
  return (
    <>
      {/* 반투명 배경 */}
      <div className="bg-mb-menu"></div>
      <Header></Header>
      <MbMenu></MbMenu>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default Page;
