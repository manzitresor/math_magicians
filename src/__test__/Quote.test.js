import React from 'react';
import { render } from '@testing-library/react';
import Quotes from '../components/quotes';

describe('Quote render', () => {
  test('should render loading state correctly', () => {
    const { container } = render(<Quotes />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render error state correctly', () => {
    const { container } = render(<Quotes />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render quote correctly', () => {
    const { container } = render(<Quotes />);
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should render loading state correctly', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve([]),
    }));
    const { container } = render(<Quotes />);
    expect(container.firstChild).toMatchSnapshot();
    global.fetch.mockRestore();
  });

  test('should render error state correctly', () => {
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.reject(new Error('API Error')));
    const { container } = render(<Quotes />);
    expect(container.firstChild).toMatchSnapshot();
    global.fetch.mockRestore();
  });

  test('should render data state correctly', async () => {
    const fakeData = {
      quote: 'test quote',
    };
    jest.spyOn(global, 'fetch').mockImplementation(() => Promise.resolve({
      json: () => Promise.resolve(fakeData),
    }));
    const { container } = render(<Quotes />);
    expect(container.firstChild).toMatchSnapshot();
    global.fetch.mockRestore();
  });
});
