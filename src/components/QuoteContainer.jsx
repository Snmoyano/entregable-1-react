import React, { useState } from "react";
import QuoteBox from "../components/QuoteBox";
import quotes from "../json/quotes.json";
import color from "../utils/color";

const QuoteContainer = () => {
  //esta funcion calcula indice ramdom
  const getIndexRamdom = (array) => Math.floor(Math.random() * array.length);

  //Aca se extrae el elemento segun el indice ramdom
  const firstQuote = quotes[getIndexRamdom(quotes)];
  const firstColor = color[getIndexRamdom(color)];

  const [ramdomQuote, setRamdomQuote] = useState(firstQuote);
  const [ramdomColor, setRamdomColor] = useState(firstColor);

  const backgroundObject = {
    backgroundColor: ramdomColor,
  };
  // Esta funcion calcula tanto el quote como color
  const getRamdomAll = () => {
    setRamdomQuote(quotes[getIndexRamdom(quotes)]);
    setRamdomColor(color[getIndexRamdom(color)]);
  };

  return (
    <main className="contain" style={backgroundObject}>
      <QuoteBox
        ramdomQuote={ramdomQuote}
        ramdomColor={ramdomColor}
        getRamdomAll={getRamdomAll}
      />
    </main>
  );
};

export default QuoteContainer;
