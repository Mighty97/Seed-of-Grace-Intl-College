import { Header } from "../../Components/Header";
import { Carousel } from "./Carousel";
import { Typewriter } from "../../Components/Typewriter";
import { Principal } from "./Principal";

export function HomePage() {
  return (
    <>
      <Header />
      <Carousel />
      <Typewriter />
      <Principal />
    </>
  )
}