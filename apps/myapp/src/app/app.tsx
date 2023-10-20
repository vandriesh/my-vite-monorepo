import styled from '@emotion/styled';

import NxWelcome from './nx-welcome';
import './test.js'

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="myapp" />
    </StyledApp>
  );
}

export default App;
