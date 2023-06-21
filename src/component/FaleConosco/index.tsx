import styles from './styles.module.scss'
import { useContext, useState, FormEvent } from "react";
import dynamic from "next/dynamic";
import Recaptcha from "../Recaptcha";
import { toast } from 'react-toastify';
import { AuthContexts } from '../../contexts/AuthContexts';

const Map = dynamic(() => import('../Map'), { ssr: false })

type objValid = {
    nome: {
        bg: string,
        valid: boolean
    },
    email: {
        bg: string,
        valid: boolean
    },
    telefone: {
        bg: string,
        valid: boolean
    },
    mensagem: {
        bg: string,
        valid: boolean
    },
    tipoContato: {
        bg: string,
        valid: boolean
    },
    recaptcha: {
        bg: string,
        valid: boolean
    }
}
export default function FaleConosco() {
    const { enviaEmail } = useContext(AuthContexts)

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [tipoContato, setTipoContato] = useState('comercial');
    const [recaptchaChange, setRecaptchaChange] = useState('')
    const [validParams, setValidParams] = useState<objValid>()

    const handleRecaptchaChange = (value: any) => {
        console.log("Valor do reCAPTCHA:", value);
        // Faça algo com o valor do reCAPTCHA aqui
        setRecaptchaChange(value)
    };



    async function handleSubmit(event: FormEvent){
        event.preventDefault();
        // Aqui você pode fazer algo com os dados do formulário, como enviar para um servidor
        console.log('Dados do formulário:', { nome, email, telefone, mensagem, tipoContato });
        console.log("Valor do reCAPTCHA:", recaptchaChange);

        setValidParams({
            nome: {
                bg: nome === '' ? '1px solid #ff0000' : '1px solid #D9D9D9',
                valid: nome === '' ? true : false
            },
            email: {
                bg: email === '' ? '1px solid #ff0000' : '1px solid #D9D9D9',
                valid: email === '' ? true : false
            },
            telefone: {
                bg: telefone === '' ? '1px solid #ff0000' : '1px solid #D9D9D9',
                valid: telefone === '' ? true : false
            },
            mensagem: {
                bg: mensagem === '' ? '1px solid #ff0000' : '1px solid #D9D9D9',
                valid: mensagem === '' ? true : false
            },
            tipoContato: {
                bg: tipoContato === '' ? '1px solid #ff0000' : '1px solid #D9D9D9',
                valid: tipoContato === '' ? true : false
            },
            recaptcha: {
                bg: recaptchaChange === '' ? '1px solid #ff0000' : '',
                valid: recaptchaChange === '' ? true : false
            }
        })

        if(
            nome !== '' &&
            email !== '' &&
            telefone !== '' &&
            mensagem !== '' &&
            tipoContato !== '' &&
            recaptchaChange !== '' 
        ){
                let data = {
                    nome,
                    email,
                    telefone,
                    mensagem,
                    tipoContato
                }
                await enviaEmail(data);

                toast.success(
                    tipoContato === 'comercial'? 
                        'O seu contato Comercial foi enviado com sucesso! Aguarde nosso contato.' :
                        'A sua duvida foi enviada com sucesso! Aguarde nosso contato.'
                , {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    });
        }

    };



    return (
        <div className={styles.container}>
            <div className={styles.formulario}>
                <h1>FALE CONOSCO</h1>
                <p>Em caso de dúvidas, sugestões ou críticas, entre em contato com nossa equipe!<br />
                    Seu retorno é fundamental para nosso aperfeiçoamento e toda dúvida será esclarecida</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            style={{
                                border: validParams?.nome.bg
                            }}
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            placeholder="Nome*"
                        />
                    </div>
                    <span>{validParams?.nome.valid === true ? 'Digite seu nome' : ''}</span>

                    <div>
                        <input
                            style={{
                                border: validParams?.email.bg
                            }}
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-mail*"
                        />
                    </div>
                    <span>{validParams?.email.valid === true ? 'Digite seu e-mail' : ''}</span>

                    <div>
                        <input
                            style={{
                                border: validParams?.telefone.bg
                            }}
                            type="tel"
                            id="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            placeholder="Telefone*"
                        />
                    </div>
                    <span>{validParams?.telefone.valid === true ? 'Digite seu telefone' : ''}</span>

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
                                Tenho Dúvidas
                            </label>

                        </div>
                        <span>{validParams?.tipoContato.valid === true ? 'Selecione uma opção' : ''}</span>
                    </div>

                    <div>
                        <textarea
                            style={{
                                border: validParams?.mensagem.bg
                            }}
                            id="mensagem"
                            value={mensagem}
                            onChange={(e) => setMensagem(e.target.value)}
                            placeholder="Mensagem*"
                        ></textarea>
                    </div>
                    <span>{validParams?.mensagem.valid === true ? 'Escreva uma mensagem' : ''}</span>

                    <div className={styles.enviar}>

                        <div style={{
                                    border: validParams?.recaptcha.bg
                                }} className={styles.recaptcha}>
                            <Recaptcha
                                
                                onChange={handleRecaptchaChange}
                            />


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
                    <p><span>Endereço:</span> Rua João Pessoa, n°756 <br />
                        Centro/São Caetano do Sul <br />
                        SP/CEP: 09520-010
                    </p>
                </div>
                <Map />
            </div>
        </div>
    )
}