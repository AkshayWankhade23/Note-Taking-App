
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query';
import './App.css';
import Home from './pages/Home';
import CreateNotes from './pages/CreateNotes';
import DisplayNotes from './pages/DisplayNotes';
import WebDesignHome from './components/Home/WebDesignHome';
import { useEffect, useState } from 'react';
import WebDisplayNotes from './components/Display Notes/WebDisplayNotes';
import { BiNotepad } from 'react-icons/bi';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);

  useEffect(() => {
    let storedData = localStorage.getItem('notes');
    try {
      setNotes(JSON.parse(storedData) || []);
    } catch (error) {
      console.error('Error parsing JSON data from localStorage:', error);
      setNotes([]);
    }
  }, []);

  console.log("selected color", selectedColor);

  const isWideScreen = useMediaQuery('(min-width: 425px)');

  return (
    <main id="app">
      <BrowserRouter>
        <Routes>
          {isWideScreen ? (
            <>
              <Route path="/" element={<WebDesignHome notes={notes} setNotes={setNotes} selectedColor={selectedColor} />} />
              <Route path="/display-notes/:id" element={<WebDisplayNotes notes={notes} setNotes={setNotes} selectedColor={selectedColor} />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home notes={notes} setNotes={setNotes} setSelectedColor={setSelectedColor} />} />
              <Route path="/Create-notes" element={<CreateNotes setNotes={setNotes} setSelectedColor={setSelectedColor} />} />
              <Route path="/display-notes/:id" element={<DisplayNotes notes={notes} setNotes={setNotes} selectedColor={selectedColor}/>} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
