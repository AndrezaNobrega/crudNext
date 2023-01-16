import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Ana', 22, '1' ),
    new Cliente('Jane', 25, '2' ),
    new Cliente('Vania', 23, '3' ),
    new Cliente('Carllos', 34, '4' ),
    new Cliente('Pedro', 54, '5' ),
  ]

  function clienteSelecionado(cliente:Cliente){
    setCliente(cliente)
    setVisivel('form')

  }

  function clienteExcluido(cliente:Cliente){

  }

  function salvarCliente(cliente: Cliente){
    setVisivel('tabela')

  }

  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    setVisivel('form')

  }


  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      text-white
      `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" onClick={() => setVisivel('form')}>
                Novo cliente</Botao>
            </div>          
              <Tabela clientes={clientes} 
                clienteSelecionado={clienteSelecionado}
                clienteExcluido={clienteExcluido}>
              </Tabela> 
          </>
        ) : (
          <Formulario cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}/>
        )}


      </Layout>
    </div>
  )

}
