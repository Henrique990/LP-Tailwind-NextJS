import React from "react";
import HeadlinerItem from "./HeadlinerItem";

function Headliners() {
  return (
    <div className="mx-auto mt-20 max-w-screen-lg text-zinc-900">
      <h2>Headliners</h2>
      <p>
        Experimenta o prazer sonixo destes artistas durante 7 dias que os fãs
        das músicas estão que "é um do grandes shows que irá acontecer este ano"
      </p>

      <div className="mt-4 flex w-full snap-x gap-4 overflow-x-auto pb-5">
        <HeadlinerItem
          authorName="Curduroy Cary"
          imageURL="/images/band1.jpg"
          date="1 de Junho 21h - Palco principal"
        />
        <HeadlinerItem
          authorName="Curduroy Cary"
          imageURL="/images/band2.jpg"
          date="1 de Junho 21h - Palco principal"
        />
        <HeadlinerItem
          authorName="Curduroy Cary"
          imageURL="/images/band3.jpg"
          date="1 de Junho 21h - Palco principal"
        />
        <HeadlinerItem
          authorName="Curduroy Cary"
          imageURL="/images/band4.jpg"
          date="1 de Junho 21h - Palco principal"
        />
        <HeadlinerItem
          authorName="Curduroy Cary"
          imageURL="/images/band5.jpg"
          date="1 de Junho 21h - Palco principal"
        />
        <HeadlinerItem
          authorName="Curduroy Cary"
          imageURL="/images/band6.jpg"
          date="1 de Junho 21h - Palco principal"
        />
        <HeadlinerItem
          authorName="Curduroy Cary"
          imageURL="/images/band7.jpg"
          date="1 de Junho 21h - Palco principal"
        />
        <HeadlinerItem
          authorName="Curduroy Cary"
          imageURL="/images/band1.jpg"
          date="1 de Junho 21h - Palco principal"
        />
      </div>
    </div>
  );
}

export default Headliners;
