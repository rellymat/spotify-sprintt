import React from 'react';
import { Icon } from '@iconify/react';
import magnifyingGlassLight from '@iconify-icons/ph/magnifying-glass-light';

const FilterBar = ({ input, onChange }) => {
  return (
    <div className='rowC bar'>
      <Icon icon={magnifyingGlassLight} className='magnifying'/>
      <input
        className='filterBar'
        value={input}
        placeholder='Filter'
        onChange={(e) => onChange(e.target.value)}
      />
      </div>
  );
}



export default FilterBar