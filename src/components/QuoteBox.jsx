import React from "react";

const QuoteBox = ({ ramdomQuote, ramdomColor, getRamdomAll }) => {
  const colorObj = {
    color: ramdomColor,
  };
  const backObj = {
    backgroundColor: ramdomColor,
  };

  return (
    <article className="card" style={colorObj}>
      <span className="card__marks">&#8220;</span>
      <p className="card__quote">{ramdomQuote.quote}</p>
      <h1 className="card__author">{ramdomQuote.author}</h1>
      <button onClick={getRamdomAll} className="card__btn" style={backObj}>
        &#62;
      </button>
    </article>
  );
};

export default QuoteBox;
