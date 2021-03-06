import { COUNTER_VALUE, ANSWER_COUNT } from "shared/constants";

type Props = {
  notation: string;
  counter: number;
  setCounter: (counter: number) => void;
  timerState: boolean;
  setTimerState: (state: boolean) => void;
  setAnswerCount: (answerCount: any) => void;
};

const Spacer = ({
  notation,
  counter,
  setCounter,
  timerState,
  setTimerState,
  setAnswerCount,
}: Props) => {
  const handleStart = () => {
    setTimerState(!timerState);
    setAnswerCount(ANSWER_COUNT);
  };

  const handleReset = () => {
    setCounter(COUNTER_VALUE.DEFAULT);
    setTimerState(false);
    setAnswerCount(ANSWER_COUNT);
  };

  return (
    <div className="flex flex-wrap lg:flex-nowrap lg:flex-col space-x-5 lg:space-y-5 lg:space-x-0 px-5 lg:px-20">
      <div className="flex flex-col flex-1">
        <h4 className="my-3 text-md lg:text-lg text-gray-800">
          Guess the notation
        </h4>
        <h2 className="text-2xl lg:text-5xl bg-gray-100 py-4 lg:p-8 rounded-md lg:w-32 text-center font-bold">
          {notation}
        </h2>
      </div>
      <div className="flex-1 lg:flex-auto">
        <h4 className="my-3 text-md lg:text-lg text-gray-800">Time Left</h4>
        <h2 className="text-xl lg:text-2xl rounded-md bg-gray-100 text-center py-4 lg:text-left lg:bg-white lg:py-0">
          <p>{counter}s</p>
        </h2>
      </div>
      <div className="lg:py-10 flex justify-center space-x-5 w-full my-5 lg:w-auto lg:my-0 lg:justify-start">
        <button
          className={`bg-black text-white px-8 rounded-md py-3  ${
            timerState
              ? "disabled:opacity-50 bg-gray-600 hover:bg-gray-600 cursor-not-allowed"
              : "hover:bg-gray-900"
          }`}
          onClick={handleStart}
          disabled={timerState}
        >
          Start
        </button>
        <button className="outline-none border-none" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Spacer;
