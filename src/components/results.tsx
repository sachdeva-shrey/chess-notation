import { calculateAccuracy } from "shared/helpers";

type Props = {
  answerCount: any;
};

const Results = ({ answerCount }: Props) => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap flex-row bg-gray-100 lg:mt-10 rounded-md mx-5 px-3 space-x-3 lg:mx-16 py-4 lg:px-8 lg:space-x-20 items-center">
      <h1 className="text-gray-800 text-2xl w-full lg:w-auto mb-3 font-semibold lg:mb-0">
        Performance
      </h1>
      <div className="flex flex-col flex-1 lg:flex-auto space-y-2">
        <h4 className="text-gray-700 text-sm">Correct</h4>
        <h4 className="text-green-500">{answerCount.CORRECT}</h4>
      </div>
      <div className="flex flex-col flex-1 lg:flex-auto space-y-2">
        <h4 className="text-gray-700 text-sm">Incorrect</h4>
        <h4 className="text-red-600">{answerCount.INCORRECT}</h4>
      </div>
      <div className="flex flex-col flex-1 lg:flex-auto space-y-2">
        <h4 className="text-gray-700 text-sm">Total Attempted</h4>
        <h4>{answerCount.TOTAL}</h4>
      </div>
      <div className="flex flex-col flex-1 lg:flex-auto space-y-2">
        <h4 className="text-gray-700 text-sm">Accuracy</h4>
        <h4>
          {calculateAccuracy(answerCount.CORRECT, answerCount.INCORRECT)}%
        </h4>
      </div>
    </div>
  );
};

export default Results;
