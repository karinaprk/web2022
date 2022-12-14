import styled, {keyframes} from "styled-components";
import { layout, position } from 'styled-system';

const forwardRotateKeyframe = keyframes`
  from {
    transform: rotate(-360deg);
  }
`;

const reverseRotateKeyframe = keyframes`
  from {
    transform: rotate(360deg);
  }
`;

export const Wheel = styled.div`
  border-radius: 50%;
  background: #000;
  position: relative;
  animation: ${({isForward}) => isForward ? forwardRotateKeyframe : reverseRotateKeyframe} linear;
  animation-duration: ${({speed}) => 1 / speed}s;
  animation-iteration-count: infinite;
  ${layout}
`;

export const Bolt = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  position: absolute;
  background: yellow;
  top: calc(25% - 7.5px);
  left: calc(50% - 7.5px);
  ${position}
`;