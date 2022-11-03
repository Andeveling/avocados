import { CartItemList, CartSummary } from "@/components"
import { useCart, useCartMutations } from "@/store/Cart"
import { Container, Divider } from "semantic-ui-react"

const CartPage = () => {
  const { items, count } = useCart()
  const { removeFromCart } = useCartMutations()
  return (
    <Container>
      <CartItemList items={items} removeFromCart={removeFromCart} />
      <Divider />
      <CartSummary totalAmount={count} />
    </Container>
  )
}

export default CartPage
