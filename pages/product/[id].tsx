import React from "react"
import axios from "axios"
import ProductSummary from "@/components/ProductsSummary/ProductSummary"
import { GetStaticPaths, GetStaticProps } from "next"
import { Container } from "semantic-ui-react"

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await axios.get<TProduct[]>("http://localhost:3000/api/avos")
  const { data } = response
  const paths = data.map(({ id }) => ({ params: { id } }))
  return {
    // Statically generate all paths
    paths,
    // Display 404 for everything else
    fallback: false,
  }
}

// This also gets called at build time
export const getStaticProps: GetStaticProps = async (context) => {
  // params contains the post `id`.
  const { params } = context
  // If the route is like /posts/1, then params.id is 1
  const response = await axios.get<TProduct>(`http://localhost:3000/api/avos/${params?.id}`)
  const product = response.data

  // Pass post data to the page via props
  return { props: { product } }
}

const ProductPage = ({ product }: { product: TProduct }) => {
  return <Container>{product ? <ProductSummary product={product} /> : <></>}</Container>
}

export default ProductPage
