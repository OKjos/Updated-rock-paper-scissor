import './App.css';
import React, { useState, createContext, useEffect } from 'react';
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App(){

  const [result, setResult] = useState("");
  const [randomNumber, setRandomNumber] = useState(0);
  const [playerChoice, setPlayerChoice] = useState("");
  const [theme, setTheme ] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark": "light"));
  }

  function handleClick(choice) {
    setRandomNumber(Math.floor(Math.random() * 3));
    setPlayerChoice(choice);
    compareChoice();
  }

  function compareChoice() {
    if (randomNumber === 0 && playerChoice === "rock") {
      setResult(alert("Draw"));
    } else if (randomNumber === 0 && playerChoice === "paper") {
      setResult(alert("You Win"));
    } else if (randomNumber === 0 && playerChoice === "scissors") {
      setResult(alert("You Lose"));
    } else if (randomNumber === 1 && playerChoice === "rock") {
      setResult(alert("You Lose"));
    } else if (randomNumber === 1 && playerChoice === "paper") {
      setResult(alert("Draw"));
    } else if (randomNumber === 1 && playerChoice === "scissors") {
      setResult(alert("You Win"));
    } else if (randomNumber === 2 && playerChoice === "rock") {
      setResult(alert("You Win"));
    } else if (randomNumber === 2 && playerChoice === "paper") {
      setResult(alert("You Lose"));
    } else if (randomNumber === 2 && playerChoice === "scissors") {
      setResult(alert("Draw"));
  }
}

useEffect(() => {
  const body = document.querySelector('body');
  body.classList.remove('dark', 'light');
  body.classList.add(theme);
}, [theme]);

  return  <>
          <h1>Rock Paper Scissors</h1>
           <section className="grid-container">
            <ThemeContext.Provider value={{ theme, toggleTheme }} >
              <button class="grid-item" className="button" onClick={() => handleClick("paper")}>Paper</button>
               <button className="button" onClick={() => handleClick("scissors")}>Scissors</button>
               <button className="button" onClick={() => handleClick("rock")}>Rock</button>
                <p>{result}</p>
                <div className="switch">
                <ReactSwitch onChange={() => toggleTheme()} checked={theme === "light"}/>
                </div>
              </ThemeContext.Provider>
            </section>
         </>
};

export default App;