//Artist detail page (presentational component) with all releases.
//Paging through releases
//http://musicbrainz.org/ws/2/release?artist=<ARTIST_ID>&fmt=json
//Add Disambiguation ID. 

import React from 'React';
import PropTypes from 'prop-types';

const Artist = ({ name, disambiguation }) => (
  <section>
    <h2>{name}</h2>
    <p>{disambiguation}</p>
  </section>
);

Artist.propTypes = {
  name: PropTypes.isRequired,
  disambiguation: PropTypes.isRequired
};

export default Artist;
