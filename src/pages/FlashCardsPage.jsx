import { useState } from 'react';
import Header from '../components/Header';
import Main from '../components/Main';
import FlashCard from '../components/FlashCard';
import FlashCards from '../components/FlashCards';
import Button from '../components/Button';
import RadioButton from '../components/RadioButton';
import { allFlashCards } from '../data/allFlashCards';
import { helperShuffleArray } from '../Helpers/arrayHelpers';

export default function FlashCardsPage() {
  const [allCards, setAllCards] = useState(allFlashCards);
  const [showTitle, setShowTitle] = useState(true);

  function handleButtonClick() {
    const shuffledCards = helperShuffleArray(allCards);
    setAllCards(shuffledCards);
  }
  function handleRadioShowTitleClick() {
    setShowTitle(true);
  }
  function handleRadioShowDescriptionClick() {
    setShowTitle(false);
  }
  return (
    <>
      <Header>React Flash Cards v1</Header>

      <Main>
        <div className="text-center mb-4">
          <Button onButtonClick={handleButtonClick}>Shuffle Cards</Button>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 m-4">
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            buttonChecked={showTitle}
            onButtonClick={handleRadioShowTitleClick}
          >
            Show title
          </RadioButton>
          <RadioButton
            id="radioButtonShowTitle"
            name="showInfo"
            buttonChecked={!showTitle}
            onButtonClick={handleRadioShowDescriptionClick}
          >
            Show description
          </RadioButton>
        </div>

        <FlashCards>
          {allCards.map(({ id, title, description }) => {
            return (
              <FlashCard
                key={id}
                title={title}
                description={description}
                showFlashCardTitle={showTitle}
              />
            );
          })}
        </FlashCards>
      </Main>
    </>
  );
}
