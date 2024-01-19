import { observer } from "mobx-react-lite";
import classNames from 'classnames';
import { CustomArray } from '../array';
import { useState } from 'react';

const array = new CustomArray<number>();
array.push(1);
array.push(2);
array.push(3);

export const ArrayPage = observer(() => {
  const [poppedIndexes, setPoppedIndexes] = useState<number[]>([]);
  const [shiftedIndexes, setShiftedIndexes] = useState<number[]>([]);

  const onPushBtnClick = () => {
    const newItem = array.length + 1;
    array.push(newItem);
  };

  const onPopBtnClick = () => {
    const lastItemIndex = array.length - 1;
    setPoppedIndexes([...poppedIndexes, lastItemIndex]);

    setTimeout(() => {
      array.pop();
      setPoppedIndexes(prevIndexes => prevIndexes.filter(i => i !== lastItemIndex));
    }, 300);
  };

  const onShiftBtnClick = () => {
    setShiftedIndexes([...shiftedIndexes, 0]);

    setTimeout(() => {
      array.shift();
      setShiftedIndexes(prevIndexes => prevIndexes.filter(i => i !== 0));
    }, 300);
  };

  return (
    <div>
      <h1>Custom Array Demo</h1>
      <div className="items-container">
        {Array.from({ length: array.length }).map((_, i) => (
          <div
            className={classNames('array-item', {
              'scaledDown': poppedIndexes.includes(i),
              'shiftLeft': shiftedIndexes.includes(i),
            })}
            data-index={i}
            key={i + '-' + array.get(i)}
          >
            <span>{array.get(i)}</span>
          </div>
        ))}
      </div>
      <div className='methods-group'>
        <h4>Array Methods</h4>
        <div className="buttons-group">
          <button onClick={onPushBtnClick}>Push {array.length + 1}</button>
          <button onClick={onPopBtnClick}>Pop {array.length}</button>
          <button onClick={onShiftBtnClick}>Shift {array.length}</button>
        </div>
      </div>
    </div>
  );
});
