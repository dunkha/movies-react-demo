import React, { useEffect, useState } from 'react';
import Datatable from "./components/Datatable";
import './App.css';

import MovieService from "./service/MovieService.js";

function App() {
  const movieService = new MovieService();
  let [movies, setMovies] = useState([]);

  useEffect(() => {
    movieService.getMovies().then(data => {
      setMovies(data);
    });
  }, []);

  const getMovies = (sortProperty, sortOrder, filters)  => {
    let _movies = movies.slice();

    if (filters) {
      _movies = _movies.filter((m) => {
        return filters.every(filter => {
          if (Array.isArray(m[filter.property])) {
            return m[filter.property].map(v => v.toLowerCase()).includes(filter.value);
          }

         return String(m[filter.property]).toLowerCase().startsWith(filter.value);
        })
      });
    }

    if (sortProperty != null) {
      const direction = sortOrder === "ASC" ? 1 : -1;
      _movies = _movies.sort((a, b) => ((a[sortProperty] > b[sortProperty]) ? 1  : -1) * direction);
    }

    return _movies;
  };

  return (
    <div className="App">
      {(movies && <Datatable getMovies={getMovies} />)}
    </div>
  );
}

export default App;
