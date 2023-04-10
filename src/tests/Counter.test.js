// import necessary react testing library helpers here
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter'// import the Counter component here

beforeEach(() => {
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterMSG = screen.getByText(/Counter/i);
  expect(counterMSG).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countVal = screen.getByTestId('count')
  expect(countVal).toHaveTextContent('0')
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  //get button so I can fire event
  //after firing event check counter value if incremented

  const PlusButton = screen.getByText('+')
  fireEvent.click(PlusButton)
  const countVal = screen.getByTestId('count')
  expect(countVal).toHaveTextContent('1')

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  //same as test above just check for -1
  const MinusButton = screen.getByText('-')
  fireEvent.click(MinusButton)
  const countVal = screen.getByTestId('count')
  expect(countVal).toHaveTextContent('-1')
});
