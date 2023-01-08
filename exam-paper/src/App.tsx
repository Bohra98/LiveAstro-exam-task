import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import QuesProvider from './context/QuesContext';
import AnswerSubmission from './routes/AnswerSubmission';
import QuesCard from './routes/QuesCard';

function App() {
  return (
    <div className="App">
     <QuesProvider> 
      <Router>
        <Routes>
          <Route path="/" element={<QuesCard/>}/>
          <Route path="/submittedAns" element={<AnswerSubmission/>}/>
        </Routes>
      </Router>
      </QuesProvider>
    </div>
  );
}

export default App;
