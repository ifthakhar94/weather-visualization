import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logLocation, updateLocation } from '../redux/actions';
import "./ComponentStyle.css"
const SearchForm = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);

  const handleSubmit = () => {
    dispatch(updateLocation(inputValue));
    dispatch(logLocation()); // Dispatch the action to log the location
  };

  return (
    <div>
      <input
        className='form-control'
        placeholder='Search city'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className='btn btn-info' id='submitBtn' onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default SearchForm;
