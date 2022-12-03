import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';

const imageUrl = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

function MovieApiTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1&#39',
      );
      const json = await res.json();
      setData(json.results);
    };
    fetchData();
  });

  return (
    <div className="movies_container">
        <Container fixed>
            {
              data.map(item => (
                  <div key={item.id} className="movies_box">
                    <div className="movies_poster_image">
                      <img src={imageUrl+item.poster_path} className="movies_poster" alt="poster"/>
                    </div>
                    <div className='movies_title_container'>
                      <div className="movies_title">
                        <div className="movies_title_N">
                          <p>{item.original_title}</p>
                        </div>
                        <div className="movies_rating">
                          <p>{item.vote_average}</p>
                        </div>
                      </div>
                      <div className="movies_release_date">
                        <p>{item.release_date}</p>
                      </div>
                      <div className="movies_overview">
                        <p>{item.overview}</p>
                      </div>
                    </div>
                </div>
              ))
            }
        </Container>
      </div>
  );
}

export default MovieApiTest;