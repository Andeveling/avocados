import Link from "next/link"
import { Card, Image } from "semantic-ui-react"

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image, attributes }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <Card as='a'>
        <Image src={image} alt={name} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{name}</Card.Header>
          <Card.Meta style={{ color: "dimgray" }}>$ {price}</Card.Meta>
          <Card.Description>{attributes.description.slice(0, 100)}...</Card.Description>
        </Card.Content>
      </Card>
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <Card.Group itemsPerRow={3} stackable>
    {mapProductsToCards(products)}
  </Card.Group>
)

export default ProductList
