import React from "react";
import { randomWord } from "../sand/utils";

const RandomWord = () => {
  return (
    <>
        { randomWord() }
    </>
  );
};
export default RandomWord;