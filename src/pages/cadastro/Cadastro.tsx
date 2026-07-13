import { useEffect, useState, type ChangeEvent, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { ClipLoader } from "react-spinners"
import type Usuario from "../../models/Usuario"
import { cadastrarUsuario } from "../../services/Service"
import { ToastAlerta } from "../../utils/ToastAlerta"
import cadastroIlustracao from "../../assets/cadastro-illustration.svg";

function Cadastro() {

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const [confirmarSenha, setConfirmaSenha] = useState<string>("")

  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  })

  useEffect(() => {
    if (usuario.id !== 0) {
      retornar()
    }
  }, [usuario])

  function retornar() {
    navigate('/')
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    })
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value)
  }

  async function cadastrarNovoUsuario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (confirmarSenha === usuario.senha && usuario.senha.length >= 8) {

      setIsLoading(true)

      try {
        await cadastrarUsuario('/usuarios/cadastrar', usuario, setUsuario)
        ToastAlerta('Usuário cadastrado com sucesso!', 'sucesso')
      } catch (error) {
        ToastAlerta('Erro ao cadastrar o usuário!', 'erro')
      }

    } else {
      ToastAlerta('Dados do usuário inconsistentes! Verifique as informações do cadastro.', 'erro')
      setUsuario({ ...usuario, senha: '' })
      setConfirmaSenha('')
    }

    setIsLoading(false)
  }

  return (
    <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">

      {/* Lado da imagem */}
      <div className="hidden lg:flex items-center justify-center bg-white">
        <img
          src={cadastroIlustracao}
          alt="Ilustração de boas-vindas ao Blog Pessoal"
          className="w-3/4"
        />
      </div>

      {/* Lado do formulário */}
      <div className="flex items-center justify-center bg-[#D9E2E0]">

        <form
          className="flex w-4/5 max-w-md flex-col gap-3 rounded-2xl bg-white px-8 pb-8 pt-5 shadow-xl"
          onSubmit={cadastrarNovoUsuario}
        >

          <h2 className="mb-2 text-center text-4xl font-bold text-[#134E4A]">
            Criar conta
          </h2>

          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-2 font-semibold text-[#1E293B]">
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite seu nome"
              className="rounded-lg border-2 border-[#5B8F86] px-3 py-2 outline-none focus:border-[#115E59]"
              value={usuario.nome}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="usuario" className="mb-2 font-semibold text-[#1E293B]">
              Usuário
            </label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              placeholder="Digite seu usuário"
              className="rounded-lg border-2 border-[#5B8F86] px-3 py-2 outline-none focus:border-[#115E59]"
              value={usuario.usuario}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="foto" className="mb-2 font-semibold text-[#1E293B]">
              Foto
            </label>
            <input
              type="text"
              id="foto"
              name="foto"
              placeholder="URL da foto"
              className="rounded-lg border-2 border-[#5B8F86] px-3 py-2 outline-none focus:border-[#115E59]"
              value={usuario.foto}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="senha" className="mb-2 font-semibold text-[#1E293B]">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              placeholder="Digite sua senha"
              className="rounded-lg border-2 border-[#5B8F86] px-3 py-2 outline-none focus:border-[#115E59]"
              value={usuario.senha}
              onChange={atualizarEstado}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="confirmarSenha" className="mb-2 font-semibold text-[#1E293B]">
              Confirmar Senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Confirme sua senha"
              className="rounded-lg border-2 border-[#5B8F86] px-3 py-2 outline-none focus:border-[#115E59]"
              value={confirmarSenha}
              onChange={handleConfirmarSenha}
            />
          </div>

          <div className="mt-2 flex gap-4">

            <button
              type="reset"
              onClick={retornar}
              className="w-1/2 rounded-xl bg-[#B91C1C] py-2.5 font-semibold text-white transition hover:bg-[#7F1D1D]"
            >
              Cancelar
            </button>

            <button
              type="submit"
              className="flex w-1/2 justify-center rounded-xl bg-[#115E59] py-2.5 font-semibold text-white transition hover:bg-[#134E4A]"
            >
              {isLoading ? (
                <ClipLoader color="#ffffff" size={24} />
              ) : (
                <span>Cadastrar</span>
              )}
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Cadastro