import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ".//Payment.css"

export default function MonthDrop() {
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
            <>Month</>
          </MenuItem>
          <MenuItem value={90}>January</MenuItem>
          <MenuItem value={100}>February</MenuItem>
          <MenuItem value={110}>March</MenuItem>
          <MenuItem value={120}>April</MenuItem>
          <MenuItem value={130}>May</MenuItem>
          <MenuItem value={140}>June</MenuItem>
          <MenuItem value={150}>July</MenuItem>
          <MenuItem value={160}>August</MenuItem>
          <MenuItem value={170}>September</MenuItem>
          <MenuItem value={180}>October</MenuItem>
          <MenuItem value={190}>November</MenuItem>
          <MenuItem value={200}>December</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
