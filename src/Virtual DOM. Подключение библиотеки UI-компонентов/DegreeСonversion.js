import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function DegreeСonversion() {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const convertToFahrenheit = (value) => {
    const temp = parseFloat(value);
    return ((temp * 9) / 5 + 32).toFixed(2);
  };

  const convertToCelsius = (value) => {
    const temp = parseFloat(value);
    return (((temp - 32) * 5) / 9).toFixed(2);
  };

  const handleCelsiusChange = (event) => {
    const value = event.target.value;
    setCelsius(value);

    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit(convertToFahrenheit(value));
    }
  };

  const handleFahrenheitChange = (event) => {
    const value = event.target.value;
    setFahrenheit(value);

    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(convertToCelsius(value));
    }
  };

  return (
    <div>
      <Box
        className='box-conversion'
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          className="celsius-input"
          label="Цельсий"
          variant="outlined"
          value={celsius}
          onChange={handleCelsiusChange}
          type="number"
        />
        <TextField
          className="fahrenheit-input"
          label="Фаренгейт"
          variant="outlined"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          type="number"
        />
        <Button variant="contained">Conversion</Button>
      </Box>
    </div>
  );
}
