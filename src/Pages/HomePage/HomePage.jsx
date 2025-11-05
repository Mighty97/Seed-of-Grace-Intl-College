import { Header } from "../../Components/Header";
import { Carousel } from "./Carousel";
import { Typewriter } from "../../Components/Typewriter";
import { Principal } from "./Principal";
import { Vision } from "./Vision";
import { Staff } from "./Staff";
import { AwardT } from "./Award";
import { Video } from './Video'
import { ScrollToTop } from "../../Components/ScrollToTop";
import { Footer } from "../../Components/Footer";
import { LogoScroll } from "./Edupartner";

export function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <Typewriter />
      <Principal />
      <Vision />
      <AwardT />
      <Staff />
      <Video />
      <ScrollToTop />
      <LogoScroll />
      <Footer />
    </>
  )
}