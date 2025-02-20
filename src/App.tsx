import React, { useState, useEffect } from "react";
import { ThemeProvider, CssBaseline, Box, GlobalStyles } from "@mui/material";
import { theme } from "./theme";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Features from "./components/Features/Features";
import ContactForm from "./components/ContacForm/ContactForm";
import Footer from "./components/Footer/Footer";
import { TimeLeft } from "./types/TimeLeft";
import CountdownTimer from "./components/CountdownTimer/CountdownTimer";
import ImageCarousel from "./components/Gallery/Gallery";
import VideoBackgroundSection from "./components/VideoBackgraund/VideoBackgraundSection";
import InstagramFeed from "./components/InstagranFeed/InstagramFeed";

const App: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  const launchDate = new Date("2025-03-20T00:00:00");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      setTimeLeft({
        dias: Math.floor(distance / (1000 * 60 * 60 * 24)),
        horas: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutos: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        segundos: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* 🔥 Estilos Globales para evitar scroll horizontal */}
      <GlobalStyles
        styles={{
          "html, body": {
            overflowX: "hidden",
            margin: 0,
            padding: 0,
            width: "100%", // ✅ Asegura que no haya espacio vacío
          },
        }}
      />

      {/* 🔥 Contenedor Principal */}
      <Box
        sx={{
          width: "100%", // ✅ Corrige el scroll horizontal
          minHeight: "100vh",
          overflowX: "hidden",
          bgcolor: "black",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Header />
        <HeroSection />
        <CountdownTimer timeLeft={timeLeft} />
        <ImageCarousel />
        <VideoBackgroundSection />
        <Features />
        <ContactForm />
        <InstagramFeed />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default App;
