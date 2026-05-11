'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { IconHeart } from '@tabler/icons-react';
import { IconHeartFilled } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SlideItems } from './datas';

//@ts-expect-error ignorando o erro Typescript abaixo
import 'swiper/css';
import { useState } from 'react';

//FUNCOES PARA PEGAR DATAS
function get3DaysToday() {
  const date = new Date();
  date.setDate(date.getDate() + 3);
  const day = String(date.getDate()).padStart(2, '0');

  return day;
}

function get5DaysToday() {
  const date = new Date();
  date.setDate(date.getDate() + 5);
  const day = String(date.getDate()).padStart(2, '0');

  return day;
}

function getMonthName() {
  const date = new Date();
  const monthName = date.toLocaleString('pt-BR', { month: 'short' });
  return monthName;
}

function Slider({ data }: { data: SlideItems[] }) {
  const [favorites, setFavorites] = useState<number[]>([]);

  //logica do adicionar no favorito
  function addFavorite(index: number) {
    setFavorites((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index); // remove
      } else {
        return [...prev, index]; // adiciona
      }
    });
  }

  return (
    <Swiper
      spaceBetween={12}
      loop={false}
      breakpoints={{
        0: { slidesPerView: 2 },
        500: { slidesPerView: 3 },
        745: { slidesPerView: 4 },
        950: { slidesPerView: 5 },
        1130: { slidesPerView: 6 },
        1350: { slidesPerView: 7 },
      }}
      className="w-full max-w-7xl mx-auto mt-25"
    >
      {data.map((item, idx) => {
        const isFavorite = favorites.includes(idx);

        return (
          <SwiperSlide key={idx}>
            <div className="relative">
              {/* BOTÃO CORAÇÃO */}
              <motion.div
                onClick={() => addFavorite(idx)}
                className="absolute top-2 right-2 cursor-pointer rounded-full flex justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18 }}
              >
                {/* fundo */}
                <IconHeartFilled className={`w-6 h-6 absolute ${isFavorite ? 'text-red-700 ' : 'text-[#00000049] '}`} />

                {/* contorno */}
                <IconHeart className="text-white w-6 h-6 relative" />
              </motion.div>

              {/* IMAGEM */}
              <Image
                src={item.img}
                alt="IMAGEM"
                width={300}
                height={300}
                className="rounded-2xl w-full h-40 object-cover"
              />

              {/* TEXTO */}
              <div className="text-black mt-2">
                <h1 className="font-medium truncate">{item.name}</h1>

                <span className={`text-sm text-[#00000091] block`}>
                  {get3DaysToday()} - {get5DaysToday()} de {getMonthName()}
                </span>

                <div className="text-sm text-[#00000091]">
                  <span>{item.total} • </span>
                  <span>{item.notice}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

import { imgSlide1 } from './datas';
import { imgSlide2 } from './datas';
import { imgSlide3 } from './datas';
import { imgSlide4 } from './datas';

//SLIDE DAS ACOMODAÇÕES
export function Slides() {
  return (
    <article className="w-full mx-auto">
      <Slider data={imgSlide1} />
      <Slider data={imgSlide2} />
      <Slider data={imgSlide3} />
      <Slider data={imgSlide4} />
    </article>
  );
}
