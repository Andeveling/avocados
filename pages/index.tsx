import Header from "@/components/Header/Header"
import ProductList from "@/components/ProductList/ProductList"
import axios from "axios"
import { GetStaticProps } from "next"
import Link from "next/link"
import Container from "semantic-ui-react/dist/commonjs/elements/Container"

export const getStaticProps: GetStaticProps = async () => {
  const response = await axios.get("http://localhost:3000/api/avos")
  const productList = response.data

  return {
    props: {
      productList,
    },
  }
}

const HomePage = ({ productList }: { productList: TProduct[] }) => {
  return (
    <Container>
      <Header />
      <section>
        <Link href='/yes-or-no'>
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      <ProductList products={productList} />
      <style jsx>{`
        section {
          text-align: center;
          margin-bottom: 2rem;
        }
      `}</style>
    </Container>
  )
}

export default HomePage
