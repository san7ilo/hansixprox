import React from "react";
import { Button, Box, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const ContactForm: React.FC = () => {
  return (
    <Box
      component="section"
      id="contact"
      sx={{
        width: { xs: "90%", sm: 400 }, // Se ajusta en pantallas pequeñas
        maxWidth: 400,
        mx: "auto",
        textAlign: "center",
        padding: { xs: 2, sm: 4 },
        backgroundColor: "black",
        borderRadius: 2,
        overflowX: "hidden", // Prevención de scroll horizontal
      }}
    >
      <Typography variant="h6" gutterBottom color="white">
        Más información
      </Typography>
      <Button
        variant="contained"
        color="success"
        startIcon={<WhatsAppIcon />}
        href="https://wa.me/521234567890?text=Hola%2C+quisiera+obtener+m%C3%A1s+informaci%C3%B3n."
        target="_blank"
        sx={{
          backgroundColor: "#25D366",
          color: "white",
          padding: "10px 20px",
          fontSize: "1rem",
          fontWeight: "bold",
          textTransform: "none",
          borderRadius: 2,
          width: { xs: "100%", sm: "auto" }, // Ahora ocupa todo el ancho en móviles
          maxWidth: 300, // Evita que crezca más de 300px en pantallas grandes
          "&:hover": {
            backgroundColor: "#1EBE5D",
          },
        }}
      >
        Escríbenos por WhatsApp
      </Button>
    </Box>
  );
};

export default ContactForm;
