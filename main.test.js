import { test, expect } from 'vitest';
import { getDifficultyOfClimb } from './main';

// Test case
test('Test 1: should correctly calculate the total difficulty level based on climbing holds', () => {
  // Arrange: Set up the necessary data for the test
  const climbingHolds = ['sloper', 'jug', 'crimp'];

  // Act: Call the calculateDifficultyLevel function with the climbing holds
  const difficultyLevel = getDifficultyOfClimb(climbingHolds);

  // Assert: Check if the calculated difficulty level is as expected
  expect(difficultyLevel).toBe(9);
});

test('Test 2', () => {
  // Arrange: Set up the necessary data for the test
  const climbingHolds = ['sloper', 'jug', 'crimp', 'jug', 'crimp'];

  // Act: Call the calculateDifficultyLevel function with the climbing holds
  const difficultyLevel = getDifficultyOfClimb(climbingHolds);

  // Assert: Check if the calculated difficulty level is as expected
  expect(difficultyLevel).toBe(13);
});

//TEST 3 IS FOR STRETCH GOAL THAT I DIDN'T HAVE TIME TO COMPLETE //

/* test('Test 3', () => {
  // Arrange: Set up the necessary data for the test
  const climbingHolds = ['sloper', 'jug', 'crimp', 'jug', 'crimp'];
  const expected = [13, 'Spicy (Moderate)'];
  // Act: Call the calculateDifficultyLevel function with the climbing holds
  const difficultyLevel = getDifficultyOfClimb(climbingHolds);

  // Assert: Check if the calculated difficulty level is as expected
  expect(difficultyLevel).toStrictEqual(expected);
});
*/
