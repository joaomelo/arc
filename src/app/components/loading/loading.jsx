import styled from 'styled-components';
import { Center, injectModal } from '../layout';
import { Spinner } from './spinner';

export function Loading ({ isLoading }) {
  if (!isLoading) return null;

  return injectModal(
    <Overlay>
      <Center>
        <Spinner />
      </Center>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.1);
  cursor: pointer;
`;
