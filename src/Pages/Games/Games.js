import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "../../Components/StyledCpmponents/Button.style";
import { StyledImg } from "../../Components/StyledCpmponents/StyledImg";
import { GamesImgWrapper } from "./Games.style";
import Input from "../../Components/Input/Input";
import Answer from "../../Components/Answer/Answer";
import Results from "../../Components/Results/Results";
import { GamesWrapper, AnswerMainWrapper } from "./Games.style";
import { ButtonWrapper } from "../../Components/StyledCpmponents/Button.style";
import Tips from "../../Components/Tips/Tips";
import { getRandomData } from "../../utils";
// import { TipButton } from "./Games.style";
import {
  getRandomCountry,
  getCountryAnswer,
  getAnswers,
  getTotalAnswers,
  getRate,
  getGameStatus,
  getTotalMax,
} from "../../redux/Selectors/gamesSelectors";
import { getCountries } from "../../redux/Selectors/countriesSelectors";
import {
  setRandomCountry,
  setCountryAnswer,
  startNewGame,
} from "../../redux/actionsCreators/games.actionCreators";
import { GamesMainWrapper } from "./Games.style";
import MaxResult from "../../Components/MaxResult/MaxResult";
const Games = () => {
  const dispatch = useDispatch();
  const [answer, getAnswerFromInput] = useState("");

  const country = useSelector((state) => getRandomCountry(state));
  const countries = useSelector((state) => getCountries(state));
  const countryAnswer = useSelector((state) => getCountryAnswer(state));
  const answers = useSelector((state) => getAnswers(state));
  const totalAnswers = useSelector((state) => getTotalAnswers(state));
  const rate = useSelector((state) => getRate(state));
  const gameStatus = useSelector((state) => getGameStatus(state));
  const maxResult = useSelector((state) => getTotalMax(state));
  // const {flag,population, region,capital} = country

  const [isShowTips, setShow] = useState(false);
  const showTip = () => {
    setShow((prevShowTips) => !prevShowTips);
  };

  const getRandomElem = () => {
    const randomCountryValue = getRandomData(countries);
    dispatch(setRandomCountry(randomCountryValue));
    if (answer) {
      dispatch(setCountryAnswer(null));
    }
  };

  const beginNewGame = () => {
    dispatch(startNewGame(country));
  };

  const getAnswer = (answer, country) => {
    if (answer && country) {
      dispatch(setCountryAnswer(answer, country));
      getAnswerFromInput("");
    }
    return;
  };

  return (
    <GamesMainWrapper>
      <MaxResult maxResult={maxResult} />
      <GamesWrapper>
        <Input
          getInputName={getAnswerFromInput}
          value={answer}
          disabled={country && !countryAnswer ? false : true}
          placeholder={
            !country
              ? "please click start"
              : "type supposed name of the country"
          }
        />
        {country && (
          <div>
            <GamesImgWrapper>
              <StyledImg src={country.flag} alt=""></StyledImg>
            </GamesImgWrapper>
            {countryAnswer && (
              <AnswerMainWrapper>
                <Answer answer={countryAnswer} country={country} type="name" />
              </AnswerMainWrapper>
            )}
          </div>
        )}
        {gameStatus === "run" ? (
          <ButtonWrapper>
            <Button
              onClick={getRandomElem}
              disabled={country && !countryAnswer ? true : false}>
              {country ? "Next" : "Start"}{" "}
            </Button>
            <Button
              onClick={() => getAnswer(answer, country)}
              disabled={!answer}>
              Check Answer
            </Button>

            <Button onClick={beginNewGame} bgColor="royalBlue">
              New Game
            </Button>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
            <Button onClick={beginNewGame}>New Game</Button>
          </ButtonWrapper>
        )}
        <Results
          answers={answers}
          gameStatus={gameStatus}
          rate={rate}
          totalAnswers={totalAnswers}
        />
        {
          <Button
            bgColor="#7da47d"
            color="white"
            disabled={country ? false : true}
            onClick={showTip}>
            {isShowTips ? "Hide Tips" : "Show Tips"}
          </Button>
        }
        {isShowTips && country && <Tips country={country} />}
      </GamesWrapper>
    </GamesMainWrapper>
  );
};

export default Games;
