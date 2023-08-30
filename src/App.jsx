import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './normalize.css';
import './style.css';
import AstraArt from './assets/img/AstraArt.jpg';

const OracleCardReading = () => {
  const [showHiddenText, setShowHiddenText] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false)
  const [cardData, setCardData] = useState({
    name: '',
    number: '',
    img: '',
    meaning: '',
  });


  const toggleHiddenText = () => {
    setShowHiddenText(!showHiddenText);
  };


  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const apiCardRequest = async (card) => {
    const cardNumber = card;
    try {
      const response = await fetch(`https://oracle-api.up.railway.app/api/${cardNumber}`);
      const data = await response.json();
      setCardData(data);
      setShowDropdown(false);
    } catch (error) {
      console.log(error)
    }
  }

  const randomCardRequest = async () => {
    try {
      const response = await fetch('https://oracle-api.up.railway.app/api/random');
      const data = await response.json();
      setCardData(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-class container rounded-2">
      <div className="container">
        <h1>Oracle Card Reading</h1>
        <h2>THE HEALER'S EMERGENCE: </h2>
        <p> ~ Remember Who You Are & Be the Sovereign of Your Realm ~ </p>

      {/* Hidden text section for small screens */}
      <div className="d-md-none">
          <p>
            "Meet Agnes.
            Agnes, like so many Healers, has been on quite a journey - for several lifetimes.
            A journey of trauma, despair, loneliness.
            Of self-teaching, inner work. Growth..."
          </p>
          {!showHiddenText && (
            <button
              className="btn btn-link"
              type="button"
              onClick={toggleHiddenText}
            >
              See More
            </button>
          )}
          {showHiddenText && (
            <div>
              <p>
                "...Of mowing everything to the ground
                and starting anew - the phoenix from the ashes.
                A journey of cautious (at first) self-love.
                Of believing in her gifts - even when no one else did (or could).
                Of coming into her power as the Massively Magical Healer-Shaman-Witch that is her True Essence.
                Agnes has a story to share with you.
                A healing story.
                She thinks you will resonate with it. Hunger for it, even.
                She feels that - once you hear it - you will KNOW it.
                And you'll be set free - free to BE YOU - once and for all.
                For, Beloved Healer, it's your story, too."
              </p>
              <button
                className="btn btn-link"
                type="button"
                onClick={toggleHiddenText}
              >
                See Less
              </button>
            </div>
          )}
        </div>

        {/* Full text section for larger screens */}
        <div className="d-none d-md-block">
            <p>
              "Meet Agnes. 
              Agnes, like so many Healers, has been on quite a journey - for several lifetimes.
              A journey of trauma, despair, loneliness.
              Of self-teaching, inner work. Growth.
              Of mowing everything to the ground
              and starting anew - the phoenix from the ashes.
              A journey of cautious (at first) self-love.
              Of believing in her gifts - even when no one else did (or could).
              Of coming into her power as the Massively Magical Healer-Shaman-Witch that is her True Essence.
              Agnes has a story to share with you.
              A healing story.
              She thinks you will resonate with it. Hunger for it, even.
              She feels that - once you hear it - you will KNOW it.
              And you'll be set free - free to BE YOU - once and for all.
              For, Beloved Healer, it's your story, too."
            </p>
          </div>
        

        <p>You can lookup any of the 24 cards or pick a random card.</p>

        <div className="dropdown">
          <button
            className="btn btn-dark dropdown-toggle"
            type="button"
            onClick={toggleDropdown}
          >
            Card Lookup
          </button>
          {showDropdown && (
             <ul className={`dropdown-menu ${showDropdown ? 'show' : ''}`}>
              <button className='dropdown-item' onClick={() => apiCardRequest('card1')}>Card 1</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card1Reversed')}>Card 1 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card2')}>Card 2</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card2Reversed')}>Card 2 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card3')}>Card 3</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card3Reversed')}>Card 3 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card4')}>Card 4</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card4Reversed')}>Card 4 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card5')}>Card 5</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card5Reversed')}>Card 5 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card6')}>Card 6</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card6Reversed')}>Card 6 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card7')}>Card 7</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card7Reversed')}>Card 7 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card8')}>Card 8</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card8Reversed')}>Card 8 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card9')}>Card 9</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card9Reversed')}>Card 9 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card10')}>Card 10</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card10Reversed')}>Card 10 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card11')}>Card 11</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card11Reversed')}>Card 11 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card12')}>Card 12</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card12Reversed')}>Card 12 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card13')}>Card 13</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card13Reversed')}>Card 13 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card14')}>Card 14</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card14Reversed')}>Card 14 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card15')}>Card 15</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card15Reversed')}>Card 15 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card16')}>Card 16</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card16Reversed')}>Card 16 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card17')}>Card 17</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card17Reversed')}>Card 17 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card18')}>Card 18</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card18Reversed')}>Card 18 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card19')}>Card 19</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card19Reversed')}>Card 19 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card20')}>Card 20</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card20Reversed')}>Card 20 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card21')}>Card 21</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card21Reversed')}>Card 21 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card22')}>Card 22</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card22Reversed')}>Card 22 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card23')}>Card 23</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card23Reversed')}>Card 23 Reversed</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card24')}>Card 24</button>
              <button className='dropdown-item' onClick={() => apiCardRequest('card24Reversed')}>Card 24 Reversed</button>

            {/* Dropdown items */}
            {/* ... */}
          </ul>
          )}
         
        </div>

        <button
          type="button"
          className="mt-2 pt-2 btn btn-dark"
          onClick={randomCardRequest}
        >
          Pick a Random Card
        </button>

        <h2 className="pt-4" id="result">{cardData.name && `Name: ${cardData.name}`}</h2>
        <h3 id="number">{cardData.number && `Number: ${cardData.number}`}</h3>
        <h3 id="num"></h3>

        <div className="reading">
          <img
            className="rounded-3"
            src={cardData.img || AstraArt}
            alt={cardData.name}
          />

          <div className="ps-4">
            {cardData.meaning && <h3 id="meaning">Meaning:</h3>}
            <p id="text">{cardData.meaning}</p>
          </div>
        </div>

        <p className="pt-3">
          Website and Original Watercolor Artwork by{' '}
          <a href="https://www.racheleckenrod.com">Rachel Eckenrod</a>
        </p>
        <p className="pt-3">
          Words, Meanings, and Original Cover Artwork by{' '}
          <a href="http://www.TheNewProsperity.World">Astra</a>
        </p>
      </div>
    </div>
  );
};

export default OracleCardReading;
