import React, { Component } from 'react';
import StyledSelect from './styledselect';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';

const StyledThemeSelect = () => (
  <ThemeProvider theme={theme}>
    <StyledSelect
      placeholder="Select a fruit"
      onValueChange={value => console.log(value)}
    >
      <option value="apple">apple</option>
      <option value="mango">mango</option>
      <option value="orange">orange</option>
      <option value="banana">banana</option>
    </StyledSelect>
  </ThemeProvider>
);

export default StyledThemeSelect;
