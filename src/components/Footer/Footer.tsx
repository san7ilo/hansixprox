import React from 'react';
import { Box, Container, Typography, Divider } from '@mui/material';
import { Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ mt: 8, py: 4 }}>
      <Container sx={{ px: 2 }}> {/* 🔥 Espaciado lateral para evitar desbordamiento */}
        <Divider sx={{ mb: 4 }} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: { xs: 'column', sm: 'row' }, // 📱 Responsive en móviles
            textAlign: { xs: 'center', sm: 'left' },
            gap: { xs: 2, sm: 0 }, // 📱 Espaciado entre elementos en móviles
          }}
        >
          <Typography color="text.secondary">
            © 2025 HANSIXDESING. Todos los derechos reservados.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Mail size={18} /> {/* 📏 Tamaño dinámico del ícono en móviles */}
            <Typography color="text.secondary">
              hansixdesing@gmail.com
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
