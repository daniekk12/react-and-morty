import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import App from '../src/App';
import 'jest-dom/extend-expect';

test('more information is shown when a character card is clicked', () => {
  const { getByTestId, getByText } = render(<App />);

  // Find the character card and click on it
  const characterCard = getByTestId('character-card-0');
  fireEvent.click(characterCard);

  // Check if the DescriptionCard component is shown
  expect(getByTestId('cardInfo')).toBeInTheDocument();

  // Check if the character's name is displayed in the DescriptionCard
  expect(getByText('Rick Sanchez')).toBeInTheDocument();
});