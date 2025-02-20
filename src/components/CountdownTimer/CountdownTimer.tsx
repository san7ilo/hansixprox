import React from "react";
import { Paper, Typography, Grid, Box } from "@mui/material";
import { TimeLeft } from "../../types/TimeLeft";

interface CountdownTimerProps {
  timeLeft: TimeLeft;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ timeLeft }) => {
  return (
    <Box 
      sx={{ 
        textAlign: "center", 
        mb: 4, 
        px: 2, // Evita desbordamientos laterales en pantallas pequeñas
        overflowX: "hidden", // Prevenir scroll horizontal
        marginTop: 5,
      }}
    >
      {/* 🔥 Título principal */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 2,
          color: "rgba(74, 107, 126, 1)",
        }}
      >
        Faltan:
      </Typography>

      {/* 🔥 Contador */}
      <Grid container spacing={1} justifyContent="center">
        {Object.entries(timeLeft).map(([key, value]) => (
          <Grid item xs={6} sm={3} md={2} key={key}> 
            <Paper
              elevation={3}
              sx={{
                p: 2,
                textAlign: "center",
                background: "rgba(74, 107, 126, 1)",
                color: "white",
                minWidth: { xs: 60, sm: 80 }, // Se adapta mejor a móviles
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                {value}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  textTransform: "uppercase",
                  fontSize: "12px",
                }}
              >
                {key}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 🔥 Texto debajo del contador */}
      <Typography
        variant="h5"
        sx={{
          mt: 2,
          color: "rgba(255, 255, 255, 0.9)",
          px: 1, // Previene problemas de margen en móviles
        }}
      >
        Para el lanzamiento de nuestra tienda online
      </Typography>

      {/* 🔥 Fecha */}
      <Typography
        variant="h6"
        sx={{
          mt: 1,
          color: "rgba(255, 255, 255, 0.85)", // Mejor contraste
        }}
      >
        20 de Marzo de 2025
      </Typography>
    </Box>
  );
};

export default CountdownTimer;
