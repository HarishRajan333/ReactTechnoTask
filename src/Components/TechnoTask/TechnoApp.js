import md5 from "crypto-js/md5";
import AppBarTechno from "./components/AppBar";
import BannerTechno from "./components/Banner";
import BestSeller from "./components/BestSeller";
import ShopByConsern from "./components/ShopByConsern";

const TechnoApp = () => {
  console.log(md5("LK@$$$@2022WEB").toString());
  return (
    <>
      <AppBarTechno />
      <BannerTechno />
      <BestSeller />
      <ShopByConsern/>
    </>
  );
};

export default TechnoApp;
