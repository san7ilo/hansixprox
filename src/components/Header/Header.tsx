import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import logocompleto from '../../assets/images/logocompleto.png'; // Importa la imagen

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar position="sticky" elevation={0} sx={{ backgroundColor: "black" }}>
      <Container sx={{ px: 2 }}> {/* ✅ Evita que el contenido toque los bordes */}
        <Toolbar>
          {/* Logo */}
          <img src={logocompleto} alt="Logo" style={{ height: 70 }} />

          <div style={{ flexGrow: 1 }} /> {/* Espaciador flexible */}

          {/* 📱 Menú Hamburguesa en Móviles */}
          <IconButton 
            sx={{ display: { xs: "flex", md: "none" }, color: "white" }} 
            onClick={() => setOpen(true)}
          >
            <MenuIcon />
          </IconButton>

          {/* Botones en Pantallas Grandes */}
          <div style={{ display: "flex", gap: "10px" }}>
            <Button href="#about" sx={{ color: "white", fontWeight: "bold", '&:hover': { color: "rgba(74, 107, 126, 1)" } }}>
              Sobre Nosotros
            </Button>
            <Button href="#contact" sx={{ color: "white", fontWeight: "bold", '&:hover': { color: "rgba(74, 107, 126, 1)" } }}>
              Contacto
            </Button>
          </div>
        </Toolbar>
      </Container>

      {/* Drawer para el Menú en Móviles */}
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <List>
          <ListItem disablePadding>
            <ListItemButton href="#about">
              <ListItemText primary="Sobre Nosotros" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton href="#contact">
              <ListItemText primary="Contacto" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </AppBar>
  );
};

export default Header;
