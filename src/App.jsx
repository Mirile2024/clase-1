import '../../css/styles.css'
import Footer from './componentes/footer'
import { Header } from './componentes/Header'
import SectionContactos from './componentes/SectionContactos'
import SectionInicio from './componentes/SectionInicio'
import SectionSobremi from './componentes/SectionSobremi'

function App() {

  return (
    <>
    <Header />
    <main>
      <SectionInicio />
      <SectionSobremi />
      <SectionContactos />
    </main>
    <Footer />
    </>
  )
}

export default App
