import React, { useEffect } from "react";
import "@/App.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NotFound from "@/components/NotFound";
import ErrorBoundary from "@/components/ErrorBoundary";

// Handle GitHub Pages redirect from 404.html
function RedirectHandler() {
  const location = useLocation();

  useEffect(() => {
    // Check if we have a redirect query parameter (from 404.html)
    const searchParams = new URLSearchParams(location.search);
    const redirectPath = searchParams.get('/');
    
    if (redirectPath) {
      // Decode the path and update the URL
      const decodedPath = redirectPath.replace(/~and~/g, '&');
      const [path, hash] = decodedPath.split('#');
      
      if (path && path !== location.pathname) {
        const newUrl = path + (hash ? `#${hash}` : '');
        window.history.replaceState({}, '', newUrl);
        window.location.reload();
      }
    }
  }, [location]);

  return null;
}

function AppContent() {
  return (
    <ThemeProvider>
      <div className="App min-h-screen transition-colors duration-300 bg-[var(--bg-primary)]">
        <Navbar />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HeroSection />
                  <AboutSection />
                  <SkillsSection />
                  <ExperienceSection />
                  <ProjectsSection />
                  <ContactSection />
                </>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

function App() {
  // Set basename for GitHub Pages project site
  // Extract pathname from homepage URL or use default
  let basename = '/tijani-portfolio';
  if (process.env.PUBLIC_URL) {
    try {
      const url = new URL(process.env.PUBLIC_URL);
      basename = url.pathname.endsWith('/') ? url.pathname.slice(0, -1) : url.pathname;
    } catch (e) {
      // If PUBLIC_URL is just a path, use it directly
      basename = process.env.PUBLIC_URL.startsWith('/') 
        ? process.env.PUBLIC_URL 
        : '/tijani-portfolio';
    }
  }
  
  return (
    <BrowserRouter basename={basename}>
      <ErrorBoundary>
        <RedirectHandler />
        <AppContent />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
