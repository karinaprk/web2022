import styled, {keyframes} from "styled-components";

const forwardKeyframe = keyframes`
  0% {
    transform: translateX(-1000px);
  }
  100% {
    transform: translateX(${document.body.clientWidth + 1000}px);
  }
`;

const reverseKeyframe = keyframes`
  0% {
    transform: translateX(${document.body.clientWidth + 1000}px);
  }
  100% {
    transform: translateX(-1000px);
  }
`;

export const Wheels = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Tractor = styled.main`
  height: 1000px;
  width: 1000px;
  position: relative;
  transform: translateX(-1000px);
  animation: ${({isForward}) => isForward ? forwardKeyframe : reverseKeyframe} 5s linear;
`;

export const TractorBody = styled.div`
  background: red;
  width: 865px;
  height: 400px;
  position: absolute;
  left: 75px;
  bottom: 60px;
`;

export const TractorCabin = styled.div`
  background: red;
  width: 300px;
  height: 150px;
  position: absolute;
  left: 75px;
  bottom: 460px;
`;

export const TractorContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;
