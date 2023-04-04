import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  convertToDecimal,
  selectConvertion,
} from './converterSlice';
import styles from './Converter.module.css';

export function Converter() {
  const conversion = useSelector(selectConvertion);
  const dispatch = useDispatch();
  const [binary, setBinary] = useState('');
  const [validInput, setValidInput] = useState(false);
  const [message, setMessage] = useState('');

  const value = Number(binary) || 0;

  const validateInput = (value) => {
    let binaryString = String(value)

    for (let i = 0; i < binaryString.length; i++) {
      let reg = /[^0-1]/

      if (binaryString[i].match(reg)){
        setValidInput(false)
        setMessage('Please, input only in binary.')
      } else {
        setValidInput(true)
        setMessage('')
      }
    }
  }

  return (
    <div>
      <div className={styles.row}>
        <h2>Binary to decimal conversion</h2>
      </div>
      <div className={styles.row}>
        <label for="binary">Binary&nbsp;</label>
        <input
          id="binary"
          className={styles.textbox}
          aria-label="Set increment amount"
          value={binary}
          onChange={(e) => {
            setBinary(e.target.value)
            validateInput(e.target.value) 
          }}
        />
        <button
          disabled={validInput ? false : true}
          className={styles.button}
          onClick={() => dispatch(convertToDecimal(value))}
        >
          Convert
        </button>
      </div>
      <div className={styles.row}>
        {message && (
          <span className={styles.warning}>{message}</span>
        )}
      </div>
      <label for="binary">Decimal (base 10)&nbsp;</label>
      <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={conversion}
        />
    </div>
  );
}
