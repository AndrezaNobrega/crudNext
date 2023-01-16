import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";

import useCliente from "../hooks/useClientes";

export default function Home() {

  const{
    cliente, 
    clientes, 
    novoCliente, 
    salvarCliente,
    selecionarCliente, 
    tabelaVisivel,
    excluirCliente,
    exibirTabela
  } = useCliente()

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
      text-white
      `}>
      <Layout titulo="Cadastro Simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" 
                onClick={novoCliente}>
                Novo cliente</Botao>
            </div>          
              <Tabela clientes={clientes} 
                clienteSelecionado={selecionarCliente}
                clienteExcluido={excluirCliente}>
              </Tabela> 
          </>
        ) : (
          <Formulario cliente={cliente}
          clienteMudou={salvarCliente}
          cancelado={exibirTabela}/>
        )}


      </Layout>
    </div>
  )

}
