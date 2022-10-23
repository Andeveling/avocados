import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Layout } from "@/components"

// En este componente que extiende nuestra app podemos colocar
// Context, Providers, Theme, Data
// Layout
// Props adicionales
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
