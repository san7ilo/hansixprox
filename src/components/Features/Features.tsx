import React from 'react';
import { Grid, Paper, Typography, Box } from '@mui/material';
import { Briefcase, Clock, MapPin } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      icon: <Briefcase size={50} />, // Ajustado para móviles
      title: 'Calidad Premium',
      description: 'Productos seleccionados cuidadosamente para ti',
    },
    {
      icon: <Clock size={50} />,
      title: 'Envío Rápido',
      description: 'Entrega garantizada en tiempo récord',
    },
    {
      icon: <MapPin size={50} />,
      title: 'Cobertura Nacional',
      description: 'Llegamos a todo el país',
    },
  ];

  return (
    <Box 
      sx={{
        width: '100%', 
        overflowX: 'hidden', // Previene scroll horizontal
        px: 2, // Espaciado lateral en móviles
        mb: 4,
        mt: 4
      }}
    >
      <Grid 
        container 
        spacing={2} 
        justifyContent="center"
      >
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
              elevation={4}
              sx={{
                width: '100%',
                minHeight: 200, // Ajusta mejor en móviles
                py: 3, // Espaciado interno en lugar de altura fija
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                background: 'rgba(74, 107, 126, 1)',
                color: 'white',
                borderRadius: 2,
                textAlign: 'center',
                maxWidth: 320, // Evita que se estire demasiado en pantallas grandes
              }}
            >
              <Box sx={{ mb: 1 }}>{feature.icon}</Box>
              <Typography variant="h5" component="h3" gutterBottom>
                {feature.title}
              </Typography>
              <Typography color="white" sx={{ fontSize: '1rem', px: 2 }}>
                {feature.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Features;
