import React from 'react';
import Page from '../Page';
import { useCounter } from './store/counter';

const Home: React.FC = () => {
  const { counter, handleDecrementClick, handleIncrementClick } = useCounter();
  const homeText = 'Home';

  return (
    <Page description={homeText} keywords={homeText} title={homeText}>
      <p>Redux Count: {counter.count}</p>
      <button
        onClick={() => {
          handleDecrementClick();
        }}
        type="button"
        className="btn"
      >
        -
      </button>
      <button
        onClick={() => {
          handleIncrementClick();
        }}
        type="button"
        className="btn"
      >
        +
      </button>
    </Page>
  );
};

export default Home;
