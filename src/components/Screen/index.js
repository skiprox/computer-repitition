import { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

export default function Screen(props) {
  const imgArr = ['weather', 'amazon', 'ebay', 'reddit', 'wikipedia', 'yahoo', 'youtube'];
  const [currentWebsite, setCurrentWebsite] = useState('weather');

  useEffect(() => {
    let incrementer = 0;
    setInterval(() => {
      incrementer = (incrementer + 1) % imgArr.length;
      setCurrentWebsite(imgArr[incrementer]);
    }, 2300);
  }, []);
  return (
    <section className="Browser fixed w-100 h-100">
      <div className="Browser__bar absolute flex w-100 justify-center items-center">
        <div className="Browser__symbol ba mr3"></div>
        <div className="Browser__symbol ba mr3"></div>
        <div className="Browser__symbol ba mr3"></div>
        <div className="Browser__url w-60 ba mr5"></div>
      </div>
      <figure className={`Website absolute w-100 ${currentWebsite}`}></figure>
    </section>
  )
}
