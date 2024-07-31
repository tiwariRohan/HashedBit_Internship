import React from 'react';
import { Link } from 'react-router-dom';
import './MovieList.css';

const movies = [
  { id: 1, title: '96', img: '/Images/Mov96.jpg', releaseDate: '2018-10-04' },
  { id: 2, title: 'Rockstar', img: '/Images/Rockstar.jpg', releaseDate: '2011-11-11' },
  { id: 3, title: 'Joker', img: '/Images/joker.jpg', releaseDate: '2019-10-02' },
  { id: 4, title: 'Batman', img: '/Images/batman.jpg', releaseDate: '2022-03-04' },
  { id: 5, title: 'Animal', img: '/Images/Animal.jpg', releaseDate: '2023-12-01' },
  { id: 6, title: 'The Batman', img: '/Images/TheBatman.jpg', releaseDate: '2022-03-04' },
  { id: 7, title: 'Pirates Of The Caribbean', img: '/Images/PiratesOfTheCaribbean.jpg', releaseDate: '2003-08-15' },
  { id: 8, title: 'Peaky Blinders', img: '/Images/PeakyPlinders.jpg', releaseDate: '2013-09-12' },
  { id: 9, title: 'Beauty And The Beast', img: '/Images/BeautyandBeast.jpg', releaseDate: '2017-03-17' },
];

function MovieList() {
  return (
    <div className="movie-grid">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={movie.img} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.releaseDate}</p>
            <Link to={`/movie/${movie.id}`} className="details-button">View Details</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
