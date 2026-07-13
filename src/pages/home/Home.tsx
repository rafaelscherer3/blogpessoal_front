import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens"
import ModalPostagem from "../../components/postagem/modalpostagem/ModalPostagem"
import homeIlustracao from "../../assets/home-illustration.svg";

function Home() {
    return (
        <>
            <div className="bg-[#D9E2E0] flex justify-center">
                <div className="container grid grid-cols-2 py-10">
                    <div className="flex flex-col gap-6 justify-center">
                        <h2 className="text-5xl font-bold text-[#134E4A]">
                            Este é o seu espaço para compartilhar!
                        </h2>

                        <p className="text-xl text-[#1E293B]">
                            Escreva, compartilhe ideias e conecte-se com outras pessoas.
                        </p>

                        <div>
                            <ModalPostagem />
                        </div>
                    </div>

                    <div className="flex justify-center items-center">
                        <img
                            src={homeIlustracao}
                            alt="Ilustração da página inicial do Blog Pessoal"
                            className="w-2/3"
                        />
                    </div>
                </div>
            </div>

            <ListaPostagens />
        </>
    )
}

export default Home