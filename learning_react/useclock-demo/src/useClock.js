import { useEffect, useState } from "react";
import moment from "moment";
const useClock = () => {
  const format = "YYYY-MM-DDTHH:mm:ss.SSS";
  const interval = 3000;
  const current = moment(new Date()).format(format);
  const [response, setResponse] = useState(current);

  useEffect(() => {
    const timer = setInterval(() => {
      let tmp_time = moment(new Date()).format(format);
      setResponse(tmp_time);
    }, interval);
    return () => clearInterval(timer);
  }, [format]);

  return response;
};

export default useClock;
