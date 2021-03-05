import Switch from "react-switch";
import { capitalCase } from "change-case";

import { ORIENTATION, COUNTER_VALUE, BOARD_THEME } from "shared/constants";

type Props = {
  counter: number;
  setCounter: (counter: number) => void;
  showPieces: boolean;
  setShowPieces: (showPieces: boolean) => void;
  showNotations: boolean;
  setShowNotations: (showNotation: boolean) => void;
  orientation: string;
  setOrientation: (orientation: string) => void;
  setTimerState: (timer: boolean) => void;
  selectedCounter: number;
  setSelectedCounter: (selectedCounter: number) => void;
  boardTheme: any;
  setBoardTheme: (theme: any) => void;
};

const Options = ({
  counter,
  setCounter,
  showPieces,
  setShowPieces,
  showNotations,
  setShowNotations,
  orientation,
  setOrientation,
  setTimerState,
  selectedCounter,
  setSelectedCounter,
  boardTheme,
  setBoardTheme,
}: Props) => {
  const handleShowPiece = (state: boolean) => {
    setShowPieces(state);
  };

  const handleShowNotations = (state: boolean) => {
    setShowNotations(state);
  };

  const handleOrientation = (orientation: string) => {
    setOrientation(orientation);
  };

  return (
    <div className="pb-10 pt-5 px-10">
      <h4 className="text-gray-800 text-2xl mb-5 font-semibold">Options</h4>
      <hr />
      <div className="flex space-x-5 my-5">
        <h4 className="w-40 text-left mt-3">Timer</h4>
        <h5
          className={`
            ${
              selectedCounter === COUNTER_VALUE.SHORT ? "bg-gray-300" : ""
            } cursor-pointer px-4 py-3 rounded-md
            `}
          onClick={() => {
            setCounter(COUNTER_VALUE.SHORT);
            setTimerState(false);
            setSelectedCounter(COUNTER_VALUE.SHORT);
          }}
        >
          {COUNTER_VALUE.SHORT}s
        </h5>
        <h5
          className={`
            ${
              selectedCounter === COUNTER_VALUE.DEFAULT ? "bg-gray-300" : ""
            } cursor-pointer px-4 py-3 rounded-md
            `}
          onClick={() => {
            setCounter(COUNTER_VALUE.DEFAULT);
            setTimerState(false);
            setSelectedCounter(COUNTER_VALUE.DEFAULT);
          }}
        >
          {COUNTER_VALUE.DEFAULT}s
        </h5>
        <h5
          className={`
            ${
              selectedCounter === COUNTER_VALUE.LONG ? "bg-gray-300" : ""
            } cursor-pointer px-4 py-3 rounded-md
            `}
          onClick={() => {
            setCounter(COUNTER_VALUE.LONG);
            setTimerState(false);
            setSelectedCounter(COUNTER_VALUE.LONG);
          }}
        >
          {COUNTER_VALUE.LONG}s
        </h5>
      </div>
      <div className="mt-6">
        <div className="flex space-x-5 my-5">
          <h4 className="w-40 text-left mt-3">Orientation</h4>
          <h5
            className={`
            ${
              orientation === ORIENTATION.WHITE ? "bg-gray-300" : ""
            } cursor-pointer px-4 py-3 rounded-md
            `}
            onClick={() => handleOrientation(ORIENTATION.WHITE)}
          >
            {capitalCase(ORIENTATION.WHITE)}
          </h5>
          <h5
            className={`${
              orientation === ORIENTATION.BLACK ? "bg-gray-200" : ""
            } cursor-pointer px-4 py-3 rounded-md
          `}
            onClick={() => handleOrientation(ORIENTATION.BLACK)}
          >
            {capitalCase(ORIENTATION.BLACK)}
          </h5>
        </div>
        <div className="flex space-x-5 my-5">
          <h4 className="w-40 text-left mt-3">Board Theme</h4>
          <h5
            className={`
            ${
              boardTheme === BOARD_THEME.BROWN ? "bg-gray-300" : ""
            } cursor-pointer px-4 py-3 rounded-md
            `}
            onClick={() => setBoardTheme(BOARD_THEME.BROWN)}
          >
            Brown
          </h5>
          <h5
            className={`${
              boardTheme === BOARD_THEME.GREEN ? "bg-gray-200" : ""
            } cursor-pointer px-4 py-3 rounded-md
          `}
            onClick={() => setBoardTheme(BOARD_THEME.GREEN)}
          >
            Green
          </h5>
          <h5
            className={`${
              boardTheme === BOARD_THEME.SKY ? "bg-gray-200" : ""
            } cursor-pointer px-4 py-3 rounded-md
          `}
            onClick={() => setBoardTheme(BOARD_THEME.SKY)}
          >
            Sky
          </h5>
        </div>
        <div className="flex space-x-5 pt-3">
          <h4 className="w-40 text-left">Show Pieces</h4>
          <Switch
            onChange={handleShowPiece}
            checked={showPieces}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
        <div className="flex space-x-5 my-5 mt-8">
          <h4 className="w-40 text-left">Show Notations on board</h4>
          <Switch
            onChange={handleShowNotations}
            checked={showNotations}
            uncheckedIcon={false}
            checkedIcon={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Options;
