import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../api/api";

const Section = styled.section`
  // max-width: 1200px;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  // flex-wrap: wrap;
  // margin: 0 auto;
  // img {
    
  //   // display:flex;
  //   width:500px;
  //   height: 500px;
  //   flex: 1;
  }
`;

export default function Card() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      setCharacters(response.data.data.results);
    });
  }, []);

  return (
    <Section>
      {characters.map((character) => (
        <div>
          <img
            src={[character.thumbnail.path + "." + character.thumbnail.extension]}
            alt=""
          />
          <h2>{[character.name]}</h2>
        </div>
      ))}
    </Section>
  );
}
