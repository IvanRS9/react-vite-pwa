import ResistorCalculator from './Components/ResistorCalculator'
import Banner from './Components/Banner'
import FormPizza from './Components/FormPizza'
import Pedidos from './Components/Pedidos'
import './App.css'
import Productos from './Components/Productos'

function App() {

  return (
    <>
      <div className="container mx-auto p-4">
        {/* <h1 className="text-4xl font-bold text-center">Calculadora de Resistores</h1> */}
        {/* <ResistorCalculator /> */}
        <Productos />
      </div>
    </>
  )
}

export default App
