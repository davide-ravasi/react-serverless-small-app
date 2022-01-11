import { Link } from 'react-router-dom';
import CTA from '../styled/CTA';
import { Accent, StyledTitle } from '../styled/Navbar';

export default function Home() {
  return (
    <div>
      <StyledTitle>Ready to type ?</StyledTitle>
      <CTA to="/game">Click or Type <Accent>'s'</Accent> to start playing!</CTA>
    </div>
  )
}
