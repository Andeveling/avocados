import Header from "@/components/Header/Header"
import ProductList from "@/components/ProductList/ProductList"
import axios from "axios"
import { GetStaticProps } from "next"
import Link from "next/link"
import Container from "semantic-ui-react/dist/commonjs/elements/Container"

/*
 * Cuando usamos un useEffect para hacer un fetch esto se ejecuta del lado del cliente
 * y los si los datos que invlolucran el render cambian estos no se actualizaran en la UI
 * hasta que se force un re-render
 */

export const getStaticProps: GetStaticProps = async () => {
  // GetStaticProps
  // Estos metodos solo los podemos usar en las paginas
  // Es una funcion async
  // hacemos el get a endpoint
  const response = await axios.get("http://localhost:3000/api/avos")
  // sacamos la data de la respuesta
  const { data } = response

  // Y retornamos un objeto con una propiedad "props" que contiene el resultado de la data
  return {
    props: {
      productList: data,
    },
  }
}

// En el componente le indicamos que recibiremos por props desde la funcion GetStaticProps el mismo nombre  que le indicamos en el retorno de la funcion
const HomePage = ({ productList }: { productList: TProduct[] }) => {
  /*   
  const [products, setProducts] = useState()
  useEffect(() => {
    fetch("/")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [products]) 
  */

  return (
    <Container>
      <Header />
      <section>
        <Link href='/yes-or-no'>
          <a>¿Deberia comer un avo hoy?</a>
        </Link>
      </section>
      {/* Aca pasamos los props como un array */}
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
