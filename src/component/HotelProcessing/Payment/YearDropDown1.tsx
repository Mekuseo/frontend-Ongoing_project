import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ".//Payment.css"

export default function YearDropOne() {
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
          <MenuItem value={10}>2023</MenuItem>
          <MenuItem value={20}>2024</MenuItem>
          <MenuItem value={30}>2025</MenuItem>
          <MenuItem value={40}>2026</MenuItem>
          <MenuItem value={50}>2027</MenuItem>
          <MenuItem value={60}>2028</MenuItem>
          <MenuItem value={70}>2029</MenuItem>
          <MenuItem value={80}>2030</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
