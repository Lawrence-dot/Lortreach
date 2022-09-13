import React, { useEffect } from "react";
import CountUp from "react-countup";

export interface countType {
  start: number;
  end: number;
  text: string;
}

export const times: countType[] = [
  { start: 30, end: 100, text: "Total Orders" },
  { start: 0, end: 30, text: "Service Delivery" },
  { start: 0, end: 30, text: "Global Clients" },
];

// useEffect(()=>{
//     console.log("ll");

// },[])
// window.addEventListener("scroll", onTop)

function Count(props: countType): JSX.Element {
  return (
    <div>
      <CountUp
        start={props.start}
        end={props.end}
        duration={1}
        enableScrollSpy
        scrollSpyDelay={200}
      >
        {({ countUpRef }) => (
          <div className="mx-5 sm:mx-10 lg:mx-16">
            <div className="flex items-center">
              <span
                className="countSpan font-bold text-3xl md:text-4xl lg:text-5xl"
                ref={countUpRef}
              />
              <span className="font-bold text-3xl md:text-4xl lg:text-5xl">
                K+
              </span>
              <br />
            </div>
            <span className="sm:text-2xl"> {props.text} </span>
          </div>
        )}
      </CountUp>
    </div>
  );
}

export default Count;
