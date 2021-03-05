import { useEffect, useState } from "react";
import Chessboard from "chessboardjsx";

import { generateRandomNotation } from "shared/helpers";
import { BACKGROUND_COLOR, COUNTER_VALUE, BOARD_THEME } from "shared/constants";

type Props = {
  notation: string;
  setNotation: (notation: string) => void;
  timerState: boolean;
  setTimerState: (state: boolean) => void;
  counter: number;
  setCounter: (counter: number) => void;
  answerCount: any;
  setAnswerCount: (answerCount: any) => void;
  showPieces: boolean;
  showNotations: boolean;
  orientation: string | any;
  selectedCounter: number;
  boardTheme: any;
};

const Board = ({
  notation,
  setNotation,
  timerState,
  setTimerState,
  counter,
  setCounter,
  answerCount,
  setAnswerCount,
  showPieces,
  showNotations,
  orientation,
  selectedCounter,
  boardTheme,
}: Props) => {
  const [squareStyles, setSquareStyles] = useState({});

  useEffect(() => {
    console.log(answerCount);
  }, [answerCount]);

  const handleSquareClick = (square: string) => {
    if (timerState) {
      setAnswerCount({
        ...answerCount,
        TOTAL: answerCount.TOTAL + 1,
      });
      if (square === notation) {
        setSquareStyles({
          [square]: { backgroundColor: BACKGROUND_COLOR.CORRECT },
        });
        setAnswerCount({
          ...answerCount,
          CORRECT: answerCount.CORRECT + 1,
        });
      } else {
        setSquareStyles({
          [square]: { backgroundColor: BACKGROUND_COLOR.WRONG },
        });
        setAnswerCount({
          ...answerCount,
          INCORRECT: answerCount.INCORRECT + 1,
        });
      }

      setNotation(generateRandomNotation());

      setTimeout(() => {
        setSquareStyles({
          [square]: {},
        });
      }, 300);
    }
  };

  useEffect(() => {
    if (counter === 0) setTimerState(false);

    if (!timerState) {
      setCounter(selectedCounter);
    } else {
      counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter, timerState]);

  return (
    <div>
      <Chessboard
        position={showPieces ? "start" : ""}
        darkSquareStyle={boardTheme?.lightSquareStyle}
        lightSquareStyle={boardTheme?.darkSquareStyle}
        showNotation={showNotations}
        onSquareClick={(square) => handleSquareClick(square)}
        squareStyles={squareStyles}
        draggable={false}
        orientation={orientation}
      />
    </div>
  );
};

export default Board;
