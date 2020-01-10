import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hexagon from '../Hexagon';

let props;
beforeEach(() => {
  props = { getTreeName: jest.fn() };
});

afterEach(cleanup);

describe('Hexagon component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Hexagon />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('shows the correct commander image', () => {
    const { getByTestId } = render(
      <Hexagon commander="Richard I" {...props} />
    );
    expect(getByTestId('hexagon-commander-icon')).toHaveAttribute(
      'src',
      'images/commanders/Richard I.png'
    );
  });
});
