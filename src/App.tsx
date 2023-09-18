import { useState } from 'react';
import './App.css';
import { CustomArray } from './array';

function App() {
  const array = new CustomArray<number>();
  array.push(1);
  array.push(2);
  array.push(3);

  const [customArray, setArrayItem] = useState<number[]>(array.toArray());

  const onPushBtnClick = () => {
    setArrayItem((prevArray) => {
      return [...prevArray, prevArray.length + 1];
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>CustomArray Demo</h1>
        <p>
          Current Items:{' '}
          {Array.from(
            { length: customArray.length },
            (_, i) => customArray[i],
          ).join(', ')}
        </p>
        <button onClick={onPushBtnClick}>Push {customArray.length + 1}</button>
      </header>
    </div>
  );
}

export default App;
