import { Users, SavedCards } from "./testData";

export const fetchTestUserDataByEmail = (email) => {
  return Users.find((user) => user.email === email);
};

export const fetchTestSavedCardsByUserId = (userId) => {
  return SavedCards.filter((card) => card.userId === userId);
};
