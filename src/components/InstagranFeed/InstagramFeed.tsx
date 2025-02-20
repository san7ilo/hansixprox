import React from "react";
import { Box, Typography } from "@mui/material";

const InstagramFeed: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%", // ✅ Evita scroll horizontal
        height: "80vh",
        backgroundColor: "white", // ✅ Fondo negro para consistencia con la web
        flexDirection: { xs: "column", md: "row" }, // 📱 Apila en móviles
        overflow: "hidden", // ✅ Previene scroll
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* 📌 Contenedor Derecho - Título "Visítanos en Instagram" */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "white", // ✅ Fondo negro para consistencia
          p: 4,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "black",
            textTransform: "uppercase",
          }}
        >
          Visítanos en Instagram
        </Typography>
      </Box>

      {/* 📌 Contenedor Izquierdo - Instagram */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          p: 2, // ✅ Espaciado para evitar pegado en móviles
        }}
      >
        <iframe
          src="https://www.instagram.com/hansixdesing/embed/"
          width="440px"
          height="500px"
          frameBorder="0"
          scrolling="no"
          allowTransparency={true}
          allow="encrypted-media"
          style={{
            maxWidth: "500px",
            backgroundColor: "black",
          }}
        ></iframe>
      </Box>
    </Box>
  );
};

export default InstagramFeed;
