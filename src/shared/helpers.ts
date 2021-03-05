import RandExp from "randexp";

export const generateRandomNotation = () => {
  return new RandExp("^[a-h][1-8]$").gen();
};

export const calculateAccuracy = (correct: number, total: number) => {
  if (total === 0) return 0;

  const accuracy = (correct / total) * 100;
  return accuracy.toFixed(2);
};
