import { Link } from 'react-router-dom'
import type Tema from '../../../models/Tema'

interface CardTemaProps {
    tema: Tema
}

function CardTema({ tema }: CardTemaProps) {
    return (
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#5B8F86] bg-white shadow-md hover:shadow-lg transition-shadow">

            <header className="bg-[#115E59] px-6 py-3 text-2xl font-bold text-white">
                Tema
            </header>

            <div className="flex-1 bg-[#F1F5F4] p-8">
                <p className="text-3xl font-medium text-[#1E293B]">
                    {tema.descricao}
                </p>
            </div>

            <div className="flex">
                <Link
                    to={`/editartema/${tema.id}`}
                    className="flex w-full items-center justify-center bg-[#115E59] py-3 text-white transition-colors hover:bg-[#134E4A]"
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletartema/${tema.id}`}
                    className="flex w-full items-center justify-center bg-[#B91C1C] py-3 text-white transition-colors hover:bg-[#7F1D1D]"
                >
                    <button>Deletar</button>
                </Link>
            </div>

        </div>
    )
}

export default CardTema