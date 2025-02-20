import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import logocompleto from '../../assets/images/logo.png'; // Asegúrate de que la ruta sea correcta

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        width: '100%', // ✅ Evita el scroll horizontal
        height: '100vh',
        backgroundColor: 'black',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        pt: { xs: 8, md: 0 }, // ✅ Evita superposición con navbar en móviles
      }}
    >
      {/* Contenido principal */}
      <Container
        sx={{
          textAlign: 'center',
          color: 'white',
          zIndex: 1,
          maxWidth: 'md',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1,
        }}
      >
        {/* Logo arriba del texto */}
        <Box sx={{ mb: 2 }}>
          <img 
            src={logocompleto} 
            alt="Logo" 
            style={{ width: "100%", maxWidth: "350px" }} // ✅ Responsive logo
          />
        </Box>

        {/* Texto principal */}
        <Typography 
          variant="body1" 
          sx={{ fontSize: { xs: "12px", sm: "14px" }, color: 'rgba(255, 255, 255, 0.9)', maxWidth: '600px'}}
        >
          Hansix Design es más que una marca de moda; representa un movimiento de empoderamiento humano con altos estándares de calidad y exclusividad. Su insignia, un tridente y una 'H', simboliza una comunidad consciente de su esencia, capaz de reconocer y potenciar sus propias cualidades para destacarse en su entorno.
        </Typography>

        <Typography variant="h3" sx={{ fontWeight: 'bold', mt: 5, color: "rgba(74, 107, 126, 1)" }}>
          Próximamente
        </Typography>

        <Typography 
          variant="h5" 
          sx={{ color: 'rgba(255, 255, 255, 0.9)', mb: 2, maxWidth: '600px' }}
        >
          Una experiencia de compra exclusiva, donde el estilo y la autenticidad se fusionan con la elegancia y el lujo.
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroSection;
