import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ".//Payment.css"

export default function YearDropTwo() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
          className='MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root'
        >
          <MenuItem value="">
            <>Year</>
          </MenuItem>
          <MenuItem value={210}>2023</MenuItem>
          <MenuItem value={220}>2024</MenuItem>
          <MenuItem value={230}>2025</MenuItem>
          <MenuItem value={240}>2026</MenuItem>
          <MenuItem value={250}>2027</MenuItem>
          <MenuItem value={260}>2028</MenuItem>
          <MenuItem value={270}>2029</MenuItem>
          <MenuItem value={280}>2030</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
