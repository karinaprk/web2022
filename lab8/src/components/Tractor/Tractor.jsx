import Wheel from "components/Wheel";
import {Wheels, Tractor as TractorStyled, TractorBody, TractorCabin, TractorContainer} from "./tractor.styled";
import {useSpeedContext} from "context";

export const Tractor = () => {
    const {time, wheelsSpeed:{small:smallSpeed, main:mainSpeed}, isForward, radiuses:{small, main}} = useSpeedContext();
     return (
        <TractorContainer >
            <TractorStyled isForward={isForward} time={time}>
                <TractorCabin/>
                <TractorBody/>
                <Wheels>
                    <Wheel size={main} speed={mainSpeed} isForward={isForward}/>
                    <Wheel size={small} speed={smallSpeed} isForward={isForward}/>
                </Wheels>
            </TractorStyled>
        </TractorContainer>
    )
}