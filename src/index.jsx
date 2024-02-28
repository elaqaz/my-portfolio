import { createRoot } from 'react-dom/client';
import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './Footer';


function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

// Create a root.
const root = createRoot(document.getElementById('root'));
// Initial render: Render the Page component to the DOM.
root.render(<App />);

export default App;

