import { createRoot } from 'react-dom/client';
import './App.css';
import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
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

