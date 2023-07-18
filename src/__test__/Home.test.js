import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Home component', () => {
  test('renders home component', () => {
    render(<Home />);
    screen.debug();
  });

  test('renders correctly', () => {
    const component = renderer.create(
      <Home />,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
