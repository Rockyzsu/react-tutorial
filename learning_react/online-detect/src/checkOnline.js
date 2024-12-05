import { useEffect, useState } from "react";
function useOnline() {
  console.log('navigator.onLine ',navigator.onLine);
  const [online, setStatus] = useState(navigator.onLine);
  useEffect(() => {
    console.log("call me");
    if (window.addEventListener) {
      console.log("init");
      window.addEventListener(
        "online",
        () => {
          console.log("set on");
          setStatus(true);
        },
        false
      );

      window.addEventListener(
        "offline",
        () => {
          console.log("set off");
          setStatus(false);
        },
        false
      );
    } else {
      console.log("no listener");
    }
  }, []);

  return online;
}

export default useOnline;
