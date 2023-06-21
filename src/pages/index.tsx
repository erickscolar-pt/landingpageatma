import { Clientes } from "../component/Clientes"
import FacaAcordo from "../component/FacaAcordo"
import FaleConosco from "../component/FaleConosco"
import Footer from "../component/Footer"
import { Header } from "../component/Header"
import NossosParceiros from "../component/NossosParceiros"
import SaibaMais from "../component/SaibaMais"
import SejaUmAtworker from "../component/SejaUmAtworker"
import { SomosAAtma } from "../component/SomosAAtma"

export default function Home(){
    return(
        <div>
            <Header/>
            <SomosAAtma/>
            <Clientes/>
            <SaibaMais/>
            <SejaUmAtworker/>
            <FacaAcordo/>
            <FaleConosco/>
            <Footer/>
        </div>
    )
}