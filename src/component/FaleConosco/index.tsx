import { Header } from "@/component/Header";
import styles from './styles.module.scss'
import { useState } from "react";
import dynamic from "next/dynamic";
//import Map from "../Map";
import Recaptcha from "../Recaptcha";
import ReCAPTCHA from "react-google-recaptcha";

const Map = dynamic(() => import('../Map'), { ssr: false })

export default function FaleConosco() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tipoContato, setTipoContato] = useState('');
    const [recaptchaChange, setRecaptchaChange] = useState('')


    const handleRecaptchaChange = (value: any) => {
        console.log("Valor do reCAPTCHA:", value);
        // Faça algo com o valor do reCAPTCHA aqui
        setRecaptchaChange(value)
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Aqui você pode fazer algo com os dados do formulário, como enviar para um servidor
        console.log('Dados do formulário:', { nome, email, telefone, mensagem, tipoContato });
        console.log("Valor do reCAPTCHA:", recaptchaChange);


    };

    return (
        <div className={styles.container}>
            <div className={styles.formulario}>
                <h1>FALE CONOSCO</h1>
                <p>Em caso de dúvidas, sugestões ou críticas, entre em contato com nossa equipe!<br/>
                    Seu retorno é fundamental para nosso aperfeiçoamento e toda dúvida será esclarecida</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome*"
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail*"
                        />
                    </div>
                    <div>
                        <input
                            type="tel"
                            id="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="Telefone*"
                        />
                    </div>
                    <div className={styles.radio}>
                        <div className={styles.labels}>
                            <label htmlFor="comercial">
                                <input
                                    type="radio"
                                    id="comercial"
                                    value="comercial"
                                    checked={tipoContato === 'comercial'}
                                    onChange={() => setTipoContato('comercial')}
                                />
                                Contato Comercial
                            </label>
                            <label htmlFor="duvidas">
                                <input
                                    type="radio"
                                    id="duvidas"
                                    value="duvidas"
                                    checked={tipoContato === 'duvidas'}
                                    onChange={() => setTipoContato('duvidas')}
                                />
                                Dúvidas
                            </label>

                        </div>
                    </div>
                    <div>
                        <textarea
                            id="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            placeholder="Mensagem*"
                        ></textarea>
                    </div>

                    <div className={styles.enviar}>

                        <div className={styles.recaptcha}>
                            <Recaptcha onChange={handleRecaptchaChange} />
                        </div>

                        <div className={styles.btn}>
                            <button type="submit">Enviar</button>
                        </div>

                    </div>
                </form>
            </div>
            <div className={styles.mapa}>
                <div className={styles.contatos}>
                    <p><span>E-mail:</span> contato@atmatec.com.br</p>
                    <p><span>Telefone:</span> (11) 4847-8015</p>
                    <p><span>Endereço:</span> Rua João Pessoa, n°756 <br/>
                        Centro/São Caetano do Sul <br/>
                        SP/CEP: 09520-010
                    </p>
                </div>
                <Map />
            </div>
        </div>
    )
}