'use client';
import Image from 'next/image';
import { Logo } from './logo';
import { IconSearch } from '@tabler/icons-react';

export function Header() {
  return (
    <header className="bg-[#fae3e3ea] pb-10 border-b border-[#00000025]">
      <div className="px-10 flex justify-between items-center pt-10 w-full text-[13px] font-semibold text-[#000000be]">
        <Logo />
        <div className="flex gap-4">
          <h1>Acomodações</h1>
          <h1>Experiências</h1>
          <h1>Serviços</h1>
        </div>

        <div className="flex gap-4  items-center">
          <h1 className="hidden lg:block">Torne-se um anfitrião</h1>
          {/*hidden = display: none */}
          <Image className="h-5" src="/icons/language.png" alt="barra" width={20} height={1} />
          <Image className="h-5" src="/icons/barra.png" alt="barra" width={20} height={1} />
        </div>
      </div>
      <SearchInput />
    </header>
  );
}

//FORM DA PESQUISA
function SearchInput() {
  return (
    <form className="flex justify-center pt-5">
      <div className="flex items-center relative border border-[#00000034] rounded-4xl w-full max-w-3xl h-15">
        <div className="h-full flex-1  rounded-4xl">
          <input
            className="text-sm h-full flex-1 rounded-4xl text-black pt-4 pl-5.75 w-full cursor-pointer  hover:bg-[#e9e6e6]"
            type="text"
            placeholder="Buscar destinos"
          ></input>
          <label className="absolute text-black left-6 top-3 text-xs">Onde</label>
        </div>

        <input className="h-full flex-1  rounded-4xl text-black cursor-pointer hover:bg-[#DDDDDD]" type="date"></input>
        <button className="h-full  flex-1  rounded-4xl text-black cursor-pointer hover:bg-[#DDDDDD]"></button>

        <button className="text-black shrink-0 mr-2 absolute right-0 bg-[#E00B41] hover:bg-[#DF1461] rounded-4xl p-3 cursor-pointer">
          <IconSearch className="text-white" />
        </button>
      </div>
    </form>
  );
}
