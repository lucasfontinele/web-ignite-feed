import "@testing-library/jest-dom";
import { render, screen } from '@testing-library/react';

import { Logo } from './Logo'

describe('<Logo /> component', () => {
  it('should render logo successfully', () => {
    render(<Logo />)

    const component = screen.getByTestId('logo')
    const igniteSymbol = screen.getByAltText('ignite-symbol')

    expect(component).toBeInTheDocument()
    expect(igniteSymbol).toBeInTheDocument()
  });
});
