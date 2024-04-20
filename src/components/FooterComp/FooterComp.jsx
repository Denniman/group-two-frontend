import { Footer } from "flowbite-react";
import { LogoImg } from "../Logo";

export function FooterComp () {
  return (
    <Footer container className="bg-[#69B7FF]">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <LogoImg />
          <Footer.LinkGroup className="text-white">
            <Footer.Link href="#">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="#">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright href="#" by="SwitchCommerce™" year={2024} className="text-white"/>
      </div>
    </Footer>
  );
}
