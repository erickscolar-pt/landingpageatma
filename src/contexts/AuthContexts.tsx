import { createContext, ReactNode } from 'react';
import { api } from '../services/apiCliente';
import { toast } from 'react-toastify'

type AuthContextData = {
  enviaEmail: (credentials: EnviaEmailProps) => Promise<void>;
}

type EnviaEmailProps = {
  nome: string;
  telefone: string;
  tipoContato:string;
  email:string;
  mensagem:string;
}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContexts = createContext({} as AuthContextData)

export function AuthProvider({ children }: AuthProviderProps){

  async function enviaEmail({ nome, email, mensagem, telefone, tipoContato }:EnviaEmailProps){
    let emailto = "erick.moreira@atmatec.com.br"
    try{
      const response = await api.post('/lpatma',null,{params:{
        nome,email,mensagem,telefone,tipoContato, emailto
      }})
    }catch(err){
      toast.error("Erro ao enviar email!")
      console.log("erro ao enviar email ", err)
    }

  }

  return(
    <AuthContexts.Provider value={{ enviaEmail }}>
      {children}
    </AuthContexts.Provider>
  )
}