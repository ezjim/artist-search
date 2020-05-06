import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import PropTypes from 'prop-types';
import Search from '../components/Search/Search';
import ArtistsList from '../components/ArtistList/ArtistList';
import Paging from '../components/Paging/Paging';
import { fetchArtists } from '../Services/Api';

const ArtistsContainer = ({ location }) => {
  const [searchRes, setSearchRes] = useState('');
  const [artists, setArtists] = useState([]);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const query = queryString.parse(location.search);
    setSearchRes(query.query);
  }, []);

  useEffect(() => {
    if(offset > 0) {
      fetchArtists(searchRes, offset)
        .then(fetchedArtists => setArtists(fetchedArtists));
    }
  }, [offset]);
  
  const handleSearch = event => {
    event.preventDefault();
    fetchArtists(searchRes, offset)
      .then(artists => setArtists(artists));
  };

  const handleInput = ({ target }) => {
    setSearchRes(target.value);
  };

  const changeOffset = (by) => {
    setOffset(prevOffset => prevOffset + by);
  };


  return (
    <>
      <Search searchRes={searchRes} onInputChange={handleInput} onSearch={handleSearch} />
      <Paging offset={offset} artists={artists} changeOffset={changeOffset} />
      { artists && <ArtistsList artists={artists} /> }
    </>
  );

};
ArtistsContainer.propTypes = {
  location: PropTypes.object
};

export default ArtistsContainer;
