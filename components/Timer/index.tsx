import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { timeCardProps } from "../../types/timeCard"
import { DoneTimer } from "./doneTimer"
import { Timer } from './Timer'
import { getRemainingTimeUntilMsTimestamp } from "./utils"


interface countdownProps {
  countdownTimestampMs: number
}
const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
  now: false
}

export const TimeCard = ({ countdownTimestampMs }: countdownProps) => {
  const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countdownTimestampMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countdownTimestampMs]);

  function updateRemainingTime(countdown: number) {
    setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
  }

  if (remainingTime.now === true) {
    return (
      <DoneTimer />
    )
  }

  return <Timer timer={remainingTime} />
}
