import { Layout } from "@/components"
import type { AppProps } from "next/app"
import "semantic-ui-css/semantic.min.css"
import "../styles/globals.css"

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
