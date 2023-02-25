import React from "react";

function GuessInput({ handleSubmitGuess,gameStatus }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ tentativeGuess });
    if (tentativeGuess.length !== 5) {
      window.alert("Please enter 5 letters guess 🥦");
      return;
    }
    handleSubmitGuess(tentativeGuess);
    console.log(tentativeGuess);
    setTentativeGuess("");
  };

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={tentativeGuess}
        minLength={5}
        maxLength={5}
        disabled={gameStatus !== "running"}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        // pattern={[a - z A - Z]}
        onChange={(event) => {
          const guessUpperCase = event.target.value.toUpperCase();
          setTentativeGuess(guessUpperCase);
        }}
      />
    </form>
  );
}

export default GuessInput;
