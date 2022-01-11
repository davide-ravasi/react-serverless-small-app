import React from 'react';
import { StyledNavbar, StyledNavBrand, StyledNavItems, StyledLinkButton, Accent } from '../styled/Navbar';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to="/">
          Learn.Build.<Accent>Type.</Accent>
        </Link>
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLinkButton to="/">Home</StyledLinkButton>
        </li>
        <li>
          <StyledLinkButton to="/highScores">High Scores</StyledLinkButton>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}