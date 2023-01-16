import Cliente from "../core/Cliente"
import { useEffect, useState } from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForma";




export default function useCliente(){

    const {tabelaVisivel, formularioVisivel, exibirTabela, exibirFormulario} = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const repo: ClienteRepositorio = new ColecaoCliente()
    const [clientes, setClientes] = useState<Cliente[]>([])


  useEffect(obterTodos, [])

  function selecionarCliente(cliente:Cliente){
    setCliente(cliente)
    exibirFormulario()

  }

  function obterTodos(){
    repo.obterTodos().then(clientes => {
      setClientes(clientes)
      exibirTabela()
    })
  }

  async function excluirCliente(cliente:Cliente){
    await repo.excluir(cliente)
    obterTodos()
  }

  async function salvarCliente(cliente: Cliente){
    await repo.salvar(cliente)
    obterTodos()
  }

  function novoCliente(cliente: Cliente){
    setCliente(Cliente.vazio())
    exibirFormulario()

  }
  return {
    tabelaVisivel,
    excluirCliente,
    novoCliente,
    salvarCliente,
    selecionarCliente,
    obterTodos,
    cliente,
    clientes,
    exibirTabela



  }

}