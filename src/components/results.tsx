import { calculateAccuracy } from "shared/helpers";

type Props = {
  answerCount: any;
  setAnswerCount: (answerCount: any) => void;
};

const Results = ({ answerCount, setAnswerCount }: Props) => {
  return (
    <div className="flex bg-gray-100 my-10 rounded-md mx-20 py-4 px-8 space-x-20 items-center">
      <h1>Performance</h1>
      <div className="flex flex-col">
        <h4 className="text-gray-700 text-sm">Correct</h4>
        <h4 className="text-green-500">{answerCount.CORRECT}</h4>
      </div>
      <div className="flex flex-col">
        <h4 className="text-gray-700 text-sm">Incorrect</h4>
        <h4 className="text-red-600">{answerCount.INCORRECT}</h4>
      </div>
      <div className="flex flex-col">
        <h4 className="text-gray-700 text-sm">Total Attempted</h4>
        <h4>{answerCount.TOTAL}</h4>
      </div>
      <div className="flex flex-col">
        <h4 className="text-gray-700 text-sm">Accuracy</h4>
        <h4>
          {calculateAccuracy(answerCount.CORRECT, answerCount.INCORRECT)}%
        </h4>
      </div>
    </div>
  );
};

export default Results;
