import React, { useState, useEffect, useRef } from 'react';

import styled from 'styled-components';

const TimerWrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: row-reverse;
    transform: translate(-50%, -50%);
    top: 30%;
    left: 50%;
    width: 93%;
    max-width: 1450px;
    height: 30%;
    color: hsl(0, 0%, 100%);
    justify-content: space-between;
    align-items: center;
`;
const TimeWindowWrapper = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    height: 32rem;
    background-color: transparent;
    width: 32rem;
    position: relative;
    overflow: hidden;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
    &::before {
        content: '';
        z-index: 3;
        position: absolute;
        top: 50%;
        left: 100%;
        transform: translate(-50%, -50%);
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: hsl(234, 17%, 12%);
        @media (max-width: 600px) {
            width: 1.2rem;
            height: 1.2rem;
        }
    }
    &::after {
        content: '';
        z-index: 3;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: hsl(234, 17%, 12%);
        @media (max-width: 600px) {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
    @media (max-width: 1200px) {
        height: 21rem;
        width: 21rem;
    }
    @media (max-width: 992px) {
        height: 16rem;
        width: 16rem;
    }
    @media (max-width: 768px) {
        height: 13rem;
        width: 13rem;
    }
    @media (max-width: 600px) {
        height: 8.2rem;
        width: 8.2rem;
    }
`;
const TimeWindow = styled.div`
    width: 100%;
    border-radius: 15px;
    height: 50%;
    background-color: hsl(236, 21%, 26%);
    opacity: ${({ primary }) => (primary ? '1' : '0.7')};
    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        border-top: ${({ primary }) =>
            primary ? '1px solid hsl(234, 17%, 12%)' : 'none'};
    }
`;
const TimeWindowContent = styled.span`
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    font-size: 16rem;
    color: hsl(345, 95%, 68%);
    @media (max-width: 1200px) {
        font-size: 9rem;
    }
    @media (max-width: 768px) {
        font-size: 6rem;
    }
    @media (max-width: 600px) {
        font-size: 3.5rem;
    }
`;

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);

    let inerval = useRef();

    const handleTimer = () => {
        const countDownDate = new Date('May 30, 2021 00:00:00').getTime();

        inerval = setInterval(() => {
            const now = new Date().getTime();
            const timeLeft = countDownDate - now;

            const daysTime = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            const hoursTime = Math.floor(
                (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutesTime = Math.floor(
                (timeLeft % (1000 * 60 * 60)) / (1000 * 60)
            );
            const secondsTime = Math.floor((timeLeft % (1000 * 60)) / 1000);
            if (timeLeft < 0) {
                clearInterval(inerval);
            } else {
                setSeconds(secondsTime);
                setMinutes(minutesTime);
                setHours(hoursTime);
                setDays(daysTime);
            }
        }, 1000);
    };

    useEffect(() => {
        handleTimer();
        return () => {
            clearInterval(inerval);
        };
    }, []);
    return (
        <TimerWrapper>
            <TimeWindowWrapper>
                <TimeWindow />
                <TimeWindowContent>
                    {seconds < 10 ? '0' + seconds : seconds}
                </TimeWindowContent>
                <TimeWindow primary />
            </TimeWindowWrapper>
            <TimeWindowWrapper>
                <TimeWindow />
                <TimeWindowContent>
                    {minutes < 10 ? '0' + minutes : minutes}
                </TimeWindowContent>
                <TimeWindow primary />
            </TimeWindowWrapper>
            <TimeWindowWrapper>
                <TimeWindow />
                <TimeWindowContent>
                    {hours < 10 ? '0' + hours : hours}
                </TimeWindowContent>
                <TimeWindow primary />
            </TimeWindowWrapper>
            <TimeWindowWrapper>
                <TimeWindow />
                <TimeWindowContent>
                    {days < 10 ? '0' + days : days}
                </TimeWindowContent>
                <TimeWindow primary />
            </TimeWindowWrapper>
        </TimerWrapper>
    );
}

export default Timer;
