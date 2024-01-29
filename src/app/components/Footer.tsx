import { IoIosArrowDown } from "react-icons/io"

export const Footer = () =>{
    return(
        <footer className="flex flex-col sm:static 2xl:absolute left-0 bottom-0 mt-[-52px] lg:mt-0 lg:mb-[52px] justify-center items-center w-full gap-4">
            <div className="flex text-[#737373] gap-x-4 gap-y-2 text-xs px-5 flex-row text-center items-center justify-center flex-wrap">
                <a className="hover:underline" href="">Meta</a>
                <a className="hover:underline" href="">Sobre</a>
                <a className="hover:underline" href="">Blog</a>
                <a className="" href="">Carreiras</a>
                <a className="hover:underline" href="">Ajuda</a>
                <a className="hover:underline" href="">API</a>
                <a className="" href="">Privacidade</a>
                <a className="" href="">Termos</a>
                <a className="" href="">Localizações</a>
                <a className="" href="">Instagram Lite</a>
                <a className="hover:underline" href="">Threads</a>
                <a className="" href="">Carregamento de contatos e não usuários</a>
                <a className="hover:underline" href="">Meta Verified</a>
            </div>
            <div className="flex gap-x-4 gap-y-2 text-xs flex-wrap text-[#737373] flex-row gap-3 justify-center items-center text-center">
                <a className="flex gap-2 items-center justify-center" href="">Português (Brasil) <IoIosArrowDown /></a>
                <a>© 2024 Instagram from Meta</a>
            </div>
        </footer>
    )
}