import React from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

// ✅ Creamos dinámicamente las URLs de las imágenes en public/images
const images = Array.from({ length: 14 }, (_, i) => `/images/IMG_0${380 + i}.JPG`);

const ImageCarousel: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1200px',
        margin: 'auto',
        overflow: 'hidden',
        p: 1,
        position: 'relative', // Necesario para los botones de navegación
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} // ✅ Valor inicial para móviles
        spaceBetween={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation={true}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 1 },
          768: { slidesPerView: 3, spaceBetween: 1 },
          1024: { slidesPerView: 4, spaceBetween: 1 },
        }}
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={src}
              alt={`Imagen ${index + 1}`}
              sx={{
                width: "100%",
                height: { xs: "250px", sm: "350px", md: "500px" }, // 📱 Responsive height
                objectFit: 'cover',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: { xs: 'scale(1.02)', md: 'scale(1.1)' }, // 📏 Menos escala en móviles
                },
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* 🔥 Estilos personalizados para los botones de navegación */}
      <style>
        {`
          .swiper-button-prev,
          .swiper-button-next {
            color: gray !important; /* ✅ Cambia el color a gris */
            padding: 20px;
            transition: background 0.3s;
          }
        `}
      </style>
    </Box>
  );
};

export default ImageCarousel;
