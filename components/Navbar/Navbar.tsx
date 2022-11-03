import { Avocado } from "@/components/SVGIcons"
import { useCart } from "@/store/Cart"
import Link from "next/link"
import { useRouter } from "next/router"
import { Container, Menu } from "semantic-ui-react"
import ShoppingCartIcon from "./components/ShoppingCartIcon"

const Navbar = () => {
  const { pathname } = useRouter()
  const { count: cartCount } = useCart()

  return (
    <Menu size='huge' borderless pointing as='header'>
      <Container text>
        <Link href='/' passHref>
          <Menu.Item active={pathname === "/"} title='Inicio | Todos los productos'>
            <Avocado />
            Avo Store
          </Menu.Item>
        </Link>
        <Menu.Menu position='right'>
          <Link href='/cart' passHref>
            <Menu.Item active={pathname === "/cart"}>
              <ShoppingCartIcon cartCount={cartCount} name='Canasta' />
            </Menu.Item>
          </Link>
        </Menu.Menu>
      </Container>
      <style jsx global>{`
        .ui.menu.huge {
          font-size: 1.5rem;
        }
      `}</style>
    </Menu>
  )
}

export default Navbar
