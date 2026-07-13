import { useContext, type ReactNode } from "react";
import { FacebookLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";
import { AuthContext } from "../../contexts/AuthContext";

function Footer() {

    const data = new Date().getFullYear();

    const { usuario } = useContext(AuthContext);

    let component: ReactNode;

    if (usuario.token !== "") {
        component = (
            <footer className="flex justify-center bg-[#134E4A] text-white">
                <div className="container flex flex-col items-center gap-2 py-6">
                    <p className="text-xl font-bold">
                        Blog Pessoal | Todos os direitos reservados © {data}
                    </p>

                    <p className="text-lg text-[#D9E2E0]">
                        Siga a gente nas redes sociais
                    </p>

                    <div className="mt-2 flex gap-4">
                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#D9E2E0]"
                        >
                            <LinkedinLogoIcon size={36} weight="fill" />
                        </a>

                        <a
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#D9E2E0]"
                        >
                            <InstagramLogoIcon size={36} weight="fill" />
                        </a>

                        <a
                            href="https://www.facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-colors hover:text-[#D9E2E0]"
                        >
                            <FacebookLogoIcon size={36} weight="fill" />
                        </a>
                    </div>
                </div>
            </footer>
        );
    }

    return <>{component}</>;
}

export default Footer;