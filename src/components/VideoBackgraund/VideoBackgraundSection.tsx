import React from 'react';
import { Box } from '@mui/material';

const VideoBackgroundSection: React.FC = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '250px', // 🔥 Altura fija
        backgroundImage: 'url(/src/assets/images/logocompletonegro.png)', // 🔥 Imagen de fondo
        backgroundSize: '600px', // 🔥 Ajusta el tamaño de la imagen
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // 🔥 Efecto de parallax (fondo fijo)
        backgroundColor: 'white', // 🔥 Fondo oscuro
        overflow: 'hidden',

        // 🔥 Desvanecimiento con un degradado
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    />
  );
};

export default VideoBackgroundSection;
