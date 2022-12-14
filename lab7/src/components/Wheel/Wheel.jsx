import React from "react";
import {Wheel as WheelStyled, Bolt} from "./wheel.styled";

export const Wheel = ({size = 120, speed, isForward}) => {
    return (
        <WheelStyled height={size} width={size} speed={speed} isForward={isForward}>
            <Bolt/>
            <Bolt top="calc(75% - 7.5px)"/>
            <Bolt top="calc(50% - 7.5px)" left="calc(25% - 7.5px)"/>
            <Bolt top="calc(50% - 7.5px)" left="calc(75% - 7.5px)"/>
        </WheelStyled>
    )
}