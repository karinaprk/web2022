import speedService from 'services/speed.service';
import {Provider} from "./speed.context";
import {useEffect, useMemo, useState} from "react";

const RIGHT_DELAY = 1000;
const LEFT_DELAY = 2000;

export const SpeedProvider = ({children}) => {
    const [isForward, setIsForward] = useState(true);
    const trueValue = useMemo(() => getValue(true), []);
    const falseValue = useMemo(() => getValue(false), []);
    const value = isForward ? trueValue : falseValue;
    useEffect(() => {
        const time = (trueValue.time * 1000) + RIGHT_DELAY;
        setTimeout(() => {
            setIsForward(false)
        }, time);
        setInterval(() => {
            setIsForward(true)
            setTimeout(() => {
                setIsForward(false)
            }, time);
        }, time + falseValue.time*1000 + LEFT_DELAY);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <Provider value={value}>
            {children}
        </Provider>
    );
}

function getValue(isForward) {
    const value = {};
    const speed = speedService.getSpeed(isForward);
    const linearSpeed = speedService.getLinearSpeed(speed)
    value.radiuses = {
        small: speedService.small,
        main: speedService.main,
    }
    value.time = speedService.getTime(linearSpeed);
    value.linearSpeed = linearSpeed;
    value.wheelsSpeed = {
        small: speedService.getSmallRadialSpeed(speed),
        main: speed,
    };
    value.tractorWidth = speedService.tractorWidth
    value.isForward = isForward;
    return value;
}