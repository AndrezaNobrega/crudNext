import Titulo from "./Titulo";
import Cliente from "../core/Cliente";

interface LayoutProps{
    titulo?: string //aqui indica que pode ter um título ou n
    children: any
}

export default function Layout(props){
    return(
        <div className={`
        flex flex-col w-2/3
        bg-white text-gray-700 rounded-md
        `}>
            <Titulo>{props.titulo}</Titulo>
            <div className="p-6">
                {props.children}
            </div>
        </div>
    )
}