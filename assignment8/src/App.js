import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './pages/MovieList';        
import MovieDetails from './pages/MovieDetails';  
import BookingForm from './pages/BookingForm';   
import ConfirmationPage from './pages/BookingConfirmation'; 
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <header className="app-header">
          <nav className="navbar">
            <div className="navbar-brand">BookBuddy</div>
          </nav>
          <h1 className="app-title">Book Your Seat</h1>
        </header>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
