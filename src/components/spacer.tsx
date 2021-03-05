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
    <div className="flex flex-col space-y-5 px-20">
      <div className="flex flex-col">
        <h4 className="my-3 text-lg text-gray-800">Guess the notation</h4>
        <h2 className="text-5xl bg-gray-100 p-8 rounded-md w-32 text-center font-bold">
          {notation}
        </h2>
      </div>
      <div>
        <h4 className="my-3 text-lg text-gray-800">Time Left</h4>
        <h2 className="text-2xl rounded-md">
          <p>{counter}s</p>
        </h2>
      </div>
      <div className="py-10 flex space-x-5">
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
