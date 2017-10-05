import React, { Component } from 'react';
import CustomSelect from './select';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rgba } from 'polished'

// sorry for the !importants
const SelectWithStyled = styled(CustomSelect)`
  > .react-selectize-control {
    background: ${props => props.inverted ? 'black' : 'none'} !important;
    color: ${props => props.inverted ? 'white' : 'black'} !important;
    border: 1px solid ${({theme}) => theme.color} !important;
  }
  > .dropdown-menu {
    border-color: ${({theme}) => theme.color} !important;
    > .option-wrapper {
      &.highlight {
        background-color: ${({theme}) => rgba(theme.color, 0.4)} !important;
      }
    }
  }
`;

SelectWithStyled.propTypes = {
  /** Make it inverted */
  inverted: PropTypes.bool,
  theme: PropTypes.object.isRequired,
}

SelectWithStyled.defaultProps = {
  theme: {
    color: 'purple'
  }
}

const StyledSelect = (props) => (
  <SelectWithStyled {...props} />
);

export default StyledSelect;
