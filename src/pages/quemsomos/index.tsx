import { AtmaSolucoes } from "@/component/AtmaSolucoes";
import Footer from "@/component/Footer";
import { Header } from "@/component/Header";
import { ModeloDeTrabalho } from "@/component/ModeloDeTrabalho";
import { NossoSegmento } from "@/component/NossoSegmento";
import { SobreNos } from "@/component/SobreNos";

export default function QuemSomos(){
    return(
        <div>
            <Header/>
            <AtmaSolucoes/>
            <SobreNos/>
            <NossoSegmento/>
            <ModeloDeTrabalho/>

            <Footer/>
        </div>
    )
}