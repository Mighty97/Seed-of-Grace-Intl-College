import { Header } from "../../Components/Header";
import { Carousel } from "./Carousel";
import { Typewriter } from "../../Components/Typewriter";
import { Principal } from "./Principal";
import { Vision } from "./Vision";
import { Staff } from "./Staff";
import { AwardT } from "./Award";
import { Video } from './Video'

export function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <Typewriter />
      <Principal />
      <Vision />
      <Staff />
      <AwardT />
      <Video />
    </>
  )
}