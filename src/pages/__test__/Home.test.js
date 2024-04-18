import {render, screen, cleanup} from '@testing-library/react';
import Home from '../Home';
import { BrowserRouter } from 'react-router-dom';

afterEach(()=>{
  cleanup();
});

test('should render home component', ()=>{
  render(
    <BrowserRouter>
      <Home/>
    </BrowserRouter>
  );
  const homeElement = screen.getByTestId("home-container");
  expect(homeElement).toBeInTheDocument();
  expect(homeElement).toHaveTextContent("Welcome to CauseConnect");
  expect(homeElement).toHaveTextContent("A Fundraising Platform");
});