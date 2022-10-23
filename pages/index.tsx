import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import { Navbar } from "../components"
import styles from "../styles/Home.module.css"
import { useState, useEffect } from "react"
import Link from "next/link"

const Home: NextPage = () => {
  const [products, setProducts] = useState<TProduct[]>([])
  useEffect(() => {
    fetch("/api/avos")
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Andres</h1>

        {products.map((product) => (
          <Link href={`/api/avos/${product.id}`} key={product.id}>
            <a>
              <p>{product.name}</p>
            </a>
          </Link>
        ))}
      </main>
    </div>
  )
}

export default Home
