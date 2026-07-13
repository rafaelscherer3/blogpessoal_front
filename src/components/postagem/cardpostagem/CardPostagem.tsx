import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className="flex flex-col justify-between overflow-hidden rounded-2xl border border-[#5B8F86] bg-white shadow-md hover:shadow-lg transition-shadow">

            <div>
                <div className="flex items-center gap-4 bg-[#115E59] px-4 py-3 text-white">
                    <img
                        src={postagem.usuario?.foto}
                        className="h-12 w-12 rounded-full border-2 border-white object-cover"
                        alt={postagem.usuario?.nome}
                    />

                    <h3 className="text-lg font-bold uppercase">
                        {postagem.usuario?.nome}
                    </h3>
                </div>

                <div className="space-y-2 p-5 text-[#1E293B]">
                    <h4 className="text-xl font-semibold text-[#134E4A] uppercase">
                        {postagem.titulo}
                    </h4>

                    <p>{postagem.texto}</p>

                    <p>
                        <span className="font-semibold">Tema:</span> {postagem.tema?.descricao}
                    </p>

                    <p className="text-sm text-gray-500">
                        {new Intl.DateTimeFormat("pt-BR", {
                            dateStyle: "full",
                            timeStyle: "medium",
                        }).format(new Date(postagem.data))}
                    </p>
                </div>
            </div>

            <div className="flex">
                <Link
                    to={`/editarpostagem/${postagem.id}`}
                    className="flex w-full items-center justify-center bg-[#115E59] py-3 text-white transition-colors hover:bg-[#134E4A]"
                >
                    <button>Editar</button>
                </Link>

                <Link
                    to={`/deletarpostagem/${postagem.id}`}
                    className="flex w-full items-center justify-center bg-[#B91C1C] py-3 text-white transition-colors hover:bg-[#7F1D1D]"
                >
                    <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem