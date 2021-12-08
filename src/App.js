import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { GlobalStyles } from './styles/global';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import './App.css'
import AboutScreen from './screens/AboutScreen';
import GaleryScreen from './screens/GaleryScreen';
import ContactsScreen from './screens/ContactsScreen';
import Footer from './components/Footer';
import AnketaScreen from './screens/AnketaScreen';
import SchemaScreen from './screens/SchemaScreen';
import GameScreen from './screens/GameScreen';

function App() {
  const [theme, setTheme] = useState('light');

  // The function that toggles between themes
  const toggleTheme = () => {
    // if the theme is not light, then set it to dark
    if (theme === 'light') {
      setTheme('dark');
      // otherwise, it should be light
    } else {
      setTheme('light');
    }
  }
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Header changeTheme={toggleTheme} record={theme === "light"?'light':'black'}/>
      <Router>
        <Routes>
          <Route path='/apie' element={<AboutScreen />} />
          <Route path='/yezaidimas' element={<GameScreen />} />
          <Route path='/galerija' element={<GaleryScreen />} />
          <Route path='/kontaktai' element={<ContactsScreen />} />
          <Route path='/anketa' element={<AnketaScreen />} />
          <Route path='/schema' element={<SchemaScreen />} />
          <Route path='/' element={<HomeScreen />} exact />
        </Routes>
      </Router>
      <Footer record={theme === "light"?'light':'black'}/>
    </ThemeProvider>
  );
}

export default App;
