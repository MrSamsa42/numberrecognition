import { useState, useEffect } from 'react'
import './App.css'

import { NumberMap, numberMap } from './numberMap';
import { randomIntInRange } from '../utils/randomIntInRange';
import { randomUniqueIntArray } from '../utils/randomUniqueIntArray';

const MIN = 1;
const MAX = 10;
const SPEECH_RATE = 0.85;
const NUMBER_OF_CHOICES = 5;
const CORRECT_RESPONSE = "Hooray! You got it right!"
const INCORRECT_RESPONSE = "No, that's not right."

const synth = window.speechSynthesis;

function App() {
  const [activeNumber, setActiveNumber] = useState<number>(0);
  const [options, setOptions] = useState<number[]>([]);

  useEffect(() => {
    // const randomNum = randomIntInRange(MIN, MAX);
    const randomOptions = randomUniqueIntArray(MIN, MAX, NUMBER_OF_CHOICES);
    const randomIndex = randomIntInRange(0, randomOptions.length - 1);
    setActiveNumber(randomOptions[randomIndex]);
    setOptions(randomOptions);

  }, [])

  function speak(text: string, rate: number = SPEECH_RATE) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate =SPEECH_RATE;
    speechSynthesis.speak(utterance);
  } 

  function speakNumber() {
    speak(numberMap[activeNumber])
  }

  function checkAnswer(num: number) {
    num === activeNumber ? speak(CORRECT_RESPONSE) : speak(INCORRECT_RESPONSE);

  }

  return (
    <div className="App">
      <h1 onClick={speakNumber}>{numberMap[activeNumber] || ""}</h1>
      <div>
        <ul>
          {options.length && options.map( el => (
            <li key={el} onClick={ () => checkAnswer(el)}>
              {el}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App
