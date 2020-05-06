import React from 'react';
import { shallow } from 'enzyme';
import SearchArtist from './SearchArtist';

describe('Search component', () => {
  it('renders Search', () => {
    const wrapper = shallow(<SearchArtist artist='Baysidegit ad' onButtonClick={() => {}} onInputChange={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
