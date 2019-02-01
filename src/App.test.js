import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, cleanup, getByText } from 'react-testing-library';
import renderer from 'react-test-renderer';

it('app should have a p element div inside', () => {
  const tree = renderer.create.toJSON();
  expect(tree).toMatchSnapshot();
});
