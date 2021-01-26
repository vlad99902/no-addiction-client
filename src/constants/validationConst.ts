export const passwordOptions = {
  minLength: 6,
  minLowercase: 1,
  minUppercase: 0,
  minNumbers: 1,
  minSymbols: 0,
  returnScore: false,
  pointsPerUnique: 1,
  pointsPerRepeat: 0.5,
  pointsForContainingLower: 10,
  pointsForContainingUpper: 10,
  pointsForContainingNumber: 10,
  pointsForContainingSymbol: 10,
};

export const loginOptions = {
  min: 5,
  max: 15,
};

export const animationSpeed = Math.round(
  document.documentElement.scrollHeight / 2
);
