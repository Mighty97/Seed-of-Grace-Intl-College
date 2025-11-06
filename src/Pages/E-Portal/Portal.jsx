import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'


export function Portal() {
  return (
    <>
      <Header />
      <iframe src='//schoolviewers.com/3275/portal' style='width:100%;height:560px;border:1px solid #bbb;border-radius:3px;'></iframe>
      <Footer />
    </>
  )
}