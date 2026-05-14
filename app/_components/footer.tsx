import Image from 'next/image';
//FOOTER
export function Footer() {
  return (
    <footer className="text-black text-[15px] leading-10 mx-auto pb-20 w-full bg-[#f0efef]  px-20 mt-20 pt-10">
      <section className="flex justify-between gap-5 max-w-400 mx-auto ">
        <div className=" flex flex-col ">
          <h1 className="font-bold ">Atendimento</h1>
          <a href="" className="hover:underline">
            Central de Ajuda
          </a>
          <a href="" className="hover:underline">
            Receber ajuda com problema de segurança
          </a>
          <a href="" className="hover:underline">
            AirCover
          </a>
          <a href="" className="hover:underline">
            Antidiscriminação
          </a>
          <a href="" className="hover:underline">
            Apoio à pessoa com deficiência
          </a>
          <a href="" className="hover:underline">
            Opções de cancelamento
          </a>
          <a href="" className="hover:underline">
            Reporte um problema no bairro
          </a>
        </div>
        <div className=" flex flex-col ">
          <h1 className="font-bold">Hospedagem</h1>
          <a href="" className="hover:underline">
            Anuncie seu espaço no Airbnb
          </a>
          <a href="" className="hover:underline">
            Anuncie sua experiência no Airbnb
          </a>
          <a href="" className="hover:underline">
            Anuncie seu serviço no Airbnb
          </a>
          <a href="" className="hover:underline">
            AirCover para anfitriões
          </a>
          <a href="" className="hover:underline">
            Recursos para anfitriões
          </a>
          <a href="" className="hover:underline">
            Fórum da comunidade
          </a>
          <a href="" className="hover:underline">
            Hospedagem responsável
          </a>
          <a href="" className="hover:underline">
            Participe de uma aula gratuita sobre hospedagem
          </a>
          <a href="" className="hover:underline">
            Encontre um coanfitrião
          </a>
          <a href="" className="hover:underline">
            Indique um anfitrião
          </a>
        </div>
        <div className=" flex flex-col">
          <h1 className="font-bold">Airbnb</h1>
          <a href="" className="hover:underline">
            airbnb 2025 - edição de maio
          </a>
          <a href="" className="hover:underline">
            Newsroom
          </a>
          <a href="" className="hover:underline">
            Carreiras
          </a>
          <a href="" className="hover:underline">
            Investidores
          </a>
          <a href="" className="hover:underline">
            Locais emergenciais Airbnb.org
          </a>
        </div>
      </section>
      <hr className="mt-5 text-[#0000002a]"></hr>
      <div className="flex justify-between items-center mt-5">
        <div>
          <span>@ 2026 Nicolas Fabretti Monteiro,inc</span>
          <span> • </span>
          <a href="" className="hover:underline">
            Privacidade
          </a>
          <span> • </span>
          <a href="" className="hover:underline">
            Termos
          </a>
          <span> • </span>
          <a href="" className="hover:underline">
            Informações da empresa
          </a>
        </div>
        <div className="flex items-center gap-5">
          <Image className="h-5" src="/icons/language.png" alt="barra" width={20} height={1} />
          <span className="cursor-pointer">Português(BR)</span>
          <span className="cursor-pointer">R$ BRL</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-brand-x"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 4l11.733 16h4.267l-11.733 -16l-4.267 0" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="cursor-pointer icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4l0 -8" />
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
            <path d="M16.5 7.5v.01" />
          </svg>
        </div>
      </div>
    </footer>
  );
}
