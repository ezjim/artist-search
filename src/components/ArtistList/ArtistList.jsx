import React from 'react';
import PropTypes from 'prop-types';
import Artist from './Artist';

const ArtistList = ({ artists }) => {
  const artistList = artists.map(({ artistId, artistName }) => (
    <li key={artistId}>
      <Artist
        artistId={artistId}
        artistName={artistName}
      />
    </li>
  ));
  
  return (
    <ul>
      {artistList}
    </ul>
  );
};

ArtistList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    artistId: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired
  })).isRequired
};

export default ArtistList;
