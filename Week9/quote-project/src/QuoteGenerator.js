import React, { useState } from 'react';
import quotes from './QuotesDatabase';
import './QuoteGenerator.css';

function QuoteGenerator() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('');
  const [textColor, setTextColor] = useState('');
  const [buttonColor, setButtonColor] = useState('');

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  };

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
    setBackgroundColor(getRandomColor());
    setTextColor(getRandomColor());
    setButtonColor(getRandomColor());
  };

  return (
    <div className="quote-generator" style={{ backgroundColor: backgroundColor }}>
      <div className="quote-container">
        <div className="quote-content">
          <h1 style={{ color: textColor }}>{quote}</h1>
          <p>- {author} -</p>
        </div>
        <button style={{ backgroundColor: buttonColor }} onClick={generateRandomQuote}>
          Generate Quote
        </button>
      </div>
    </div>
  );
}

export default QuoteGenerator;

