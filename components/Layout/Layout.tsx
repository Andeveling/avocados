import { Footer } from "../Footer"
import { Navbar } from "../Navbar"
import { PropsWithChildren } from "react"

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
export default Layout
