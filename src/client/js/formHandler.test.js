import { handleSubmit } from './formHandler'

test('handleSubmit to be a function', () => {
  expect(typeof handleSubmit).toBe('function');
});