import React from 'react';
import { shallow } from 'enzyme';
import ArtistsList from './ArtistList';

describe('ArtistsList', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ArtistsList artists={[{ name: 'Joyner Lucas' }, { name: 'Revenge' }]} />);
    expect(wrapper).toMatchSnapshot();
  });
});
