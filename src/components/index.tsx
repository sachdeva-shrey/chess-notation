import { useState } from "react";

import Board from "components/board";
import Options from "components/options";
import Spacer from "components/spacer";
import Results from "components/results";

import { generateRandomNotation } from "shared/helpers";
import {
  BOARD_THEME,
  COUNTER_VALUE,
  ORIENTATION,
  ANSWER_COUNT,
} from "shared/constants";

const Index = () => {
  const [notation, setNotation] = useState(() => generateRandomNotation());
  const [answerCount, setAnswerCount] = useState(ANSWER_COUNT);
  const [counter, setCounter] = useState(COUNTER_VALUE.DEFAULT);
  const [timerState, setTimerState] = useState(false);
  const [showPieces, setShowPieces] = useState(true);
  const [showNotations, setShowNotations] = useState(false);
  const [orientation, setOrientation] = useState(ORIENTATION.WHITE);
  const [selectedCounter, setSelectedCounter] = useState(COUNTER_VALUE.DEFAULT);
  const [boardTheme, setBoardTheme] = useState(BOARD_THEME.BROWN);

  return (
    <div className="pb-10 lg:px-10 pt-10 flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:w-5/12 flex justify-center items-center">
          <Board
            notation={notation}
            setNotation={setNotation}
            timerState={timerState}
            setTimerState={setTimerState}
            counter={counter}
            setCounter={setCounter}
            answerCount={answerCount}
            setAnswerCount={setAnswerCount}
            showPieces={showPieces}
            showNotations={showNotations}
            orientation={orientation}
            selectedCounter={selectedCounter}
            boardTheme={boardTheme}
          />
        </div>
        <div className="flex flex-col lg:flex-row lg:w-7/12">
          <div className="lg:w-3/4">
            <Spacer
              notation={notation}
              counter={counter}
              timerState={timerState}
              setTimerState={setTimerState}
              setCounter={setCounter}
              setAnswerCount={setAnswerCount}
            />
          </div>
          <div className="lg:hidden my-5">
            <Results answerCount={answerCount} />
          </div>
          <div className="bg-gray-100 mx-5 lg:mx-0">
            <Options
              counter={counter}
              setCounter={setCounter}
              showPieces={showPieces}
              setTimerState={setTimerState}
              setShowPieces={setShowPieces}
              showNotations={showNotations}
              setShowNotations={setShowNotations}
              orientation={orientation}
              setOrientation={setOrientation}
              selectedCounter={selectedCounter}
              setSelectedCounter={setSelectedCounter}
              boardTheme={boardTheme}
              setBoardTheme={setBoardTheme}
            />
          </div>
        </div>
      </div>
      <div className="hidden lg:flex">
        <Results answerCount={answerCount} />
      </div>
    </div>
  );
};

export default Index;
