import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './MovieDetails.css';

const movies = [
  { id: 1, title: 'Movie 1 - 96', img: '/Images/Mov96.jpg', releaseDate: '2018-10-04', description: 'Experience the poignant and nostalgic love story in "96," where two high school sweethearts reunite after decades. A tale of lost love and cherished memories.' },
  { id: 2, title: 'Movie 2 - Rockstar', img: '/Images/Rockstar.jpg', releaseDate: '2011-11-11', description: 'Dive into the world of music and passion with Rockstar, a story of a struggling artist\'s rise to fame. Witness the highs and lows of chasing dreams.' },
  { id: 3, title: 'Movie 3 - Joker', img: '/Images/joker.jpg', releaseDate: '2019-10-02', description: 'Explore the dark and twisted origin of Gotham\'s infamous villain in Joker. A psychological thriller that delves into the mind of a troubled individual.' },
  { id: 4, title: 'Movie 4 - Batman', img: '/Images/batman.jpg', releaseDate: '2022-03-04', description: 'Join the iconic Dark Knight in Batman as he battles crime and corruption in Gotham City. A tale of heroism, justice, and the fight against evil.' },
  { id: 5, title: 'Movie 5 - Animal', img: '/Images/Animal.jpg', releaseDate: '2023-12-01', description: 'Animal is a gripping drama exploring the complexities of human nature and survival instincts. Follow the journey of a man pushed to his limits.' },
  { id: 6, title: 'Movie 6 - The Batman', img: '/Images/TheBatman.jpg', releaseDate: '2022-03-04', description: 'The Batman offers a fresh take on the legendary hero\'s quest to save Gotham from a new wave of villains. A darker, more intense portrayal of the Caped Crusader.' },
  { id: 7, title: 'Movie 7 - Pirates of the Caribbean', img: '/Images/PiratesOfTheCaribbean.jpg', releaseDate: '2003-08-15', description: 'Set sail on an epic adventure with Pirates of the Caribbean. Join Captain Jack Sparrow and his crew as they navigate the high seas in search of legendary treasures.' },
  { id: 8, title: 'Movie 8 - Peaky Blinders', img: '/Images/PeakyPlinders.jpg', releaseDate: '2013-09-12', description: 'Step into the world of 1920s Birmingham with Peaky Blinders. A gritty drama about a notorious gang and their rise to power amidst political upheaval.' },
  { id: 9, title: 'Movie 9 - Beauty and the Beast', img: '/Images/BeautyandBeast.jpg', releaseDate: '2017-03-17', description: 'Relive the enchanting tale of Beauty and the Beast, where love and magic intertwine. A classic story of finding beauty within and breaking curses.' },
];

function MovieDetails() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === parseInt(id));

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <img src={movie.img} alt={movie.title} />
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
      <p>{movie.description}</p>
      <Link to={`/book/${movie.id}`} className="book-seat-button">Book Seat</Link>
    </div>
  );
}

export default MovieDetails;
