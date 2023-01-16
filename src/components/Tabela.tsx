import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";


interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente:Cliente) => void 
  clienteExcluido?: (cliente:Cliente) => void 
}

export default function Tabela(props) {
    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado
  function renderizarCabecalho() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {exibirAcoes ? <th className="p-4">Ações</th> : false}
        
      </tr>
    );
  }

  function renderizarAcoes(cliente: Cliente) {
    return (
      <td className="flex justify-center">
      {props.clienteSelecionado ? (
        <button onClick={() => props.clienteSelecionado?.(cliente)} className={`
        flex justify-center p-2 m-1
        items-center text-green-600
        rounded-full hover:bg-slate-50
        `}>
            {IconeEdicao}
        </button>
      ) : false}
        {props.clienteExcluido ? (
            <button onClick={() => props.clienteExcluido?.(cliente)} className={`
            flex justify-center p-2 m-1
            items-center text-red-600
            rounded-full hover:bg-slate-50
            `}>
                {IconeLixo}
            </button>

    ) : false}


      </td>
    );
  }

  function renderizarDado() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 == 0 ? "bg-slate-200" : "bg-slate-100"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes ? renderizarAcoes(cliente) : false}
        </tr>
      );
    });
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
      text-gray-100
      bg-gradient-to-r from-[#6a8286] to-[#00b4d8]
      `}
      >
        {renderizarCabecalho()}
      </thead>
      <tbody>{renderizarDado()}</tbody>
    </table>
  );
}
