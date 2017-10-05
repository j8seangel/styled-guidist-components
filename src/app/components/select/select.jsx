import React, { Component } from 'react';
import { ReactSelectize, SimpleSelect, MultiSelect } from 'react-selectize';
import '../../../../node_modules/react-selectize/themes/default.css';

const CustomSelect = ({ className }) => (
  <SimpleSelect
    className={className}
    placeholder="Select a fruit"
    onValueChange={value => console.log(value)}
  >
    <option value="apple">apple</option>
    <option value="mango">mango</option>
    <option value="orange">orange</option>
    <option value="banana">banana</option>
  </SimpleSelect>
);

export default CustomSelect;
