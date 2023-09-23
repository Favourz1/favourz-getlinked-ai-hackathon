import { useEffect, useState } from 'react';

const HeroTimer = () => {
    const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const hours = String(time.getHours()).padStart(2, '0');
  const minutes = String(time.getMinutes()).padStart(2, '0');
  const seconds = String(time.getSeconds()).padStart(2, '0');

  return (
    <div>
       <p className="font-unica text-5xl">{hours}<sub className="text-sm">H</sub>   {minutes}<sub className="text-sm">M</sub>   {seconds}<sub className="text-sm">S</sub></p>
    </div>
  );
}

export default HeroTimer