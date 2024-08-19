import { BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Header from './componentes/header/header'
import Footer from './componentes/footer/footer'
import Seccion from './componentes/seccion/seccion'
import { Route, Routes } from 'react-router-dom'
import Table from './componentes/CrudAutos/tableAutos'
import ContactForm from './componentes/contacto/contacto';



function App() {
  return (
    <Router>
      
         
         <Header />
         
         <main>
           <Routes>
           <Route path="/" element = {< Seccion/>} />
           <Route path="/autos" element = {<Table />} />
           <Route path="/contacto" element={<ContactForm />} />
           </Routes>
           
          </main>
         
          
          
          <Footer />
          
      

         
      </Router>

      
   
 
      
  );
}

export default App;
