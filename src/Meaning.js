import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <br />
            <em>
              <p>{definition.example}</p>
            </em>
          </div>
        );
      })}
    </div>
  );
}

//meaning.definitions[0].defition;
