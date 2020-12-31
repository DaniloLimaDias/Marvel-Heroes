import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import styled from "styled-components";

const About = styled.div`
  display: flex;
  color: #fff;
  background: #3e4245;
  margin-bottom: 10px;
  img {
    width: 300px;
  }
`;
const AboutContent = styled.div`
  margin-top: 30px;
  max-width: 800px;
  margin-left: 30px;
  h2 {
    color: #fff;
    font-size: 24px;
    margin-bottom: 5px;
  }
  p {
    font-size: 18px;
    color: #c1bebe;
  }
`;

export default function CardAbout() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    api.get("").then((response) => {
      setCharacters(response.data.data.results);
    });
  }, []);

  return (
    <>
      {characters.map((character) => (
        <About>
          <img
            src={character.thumbnail.path + "." + character.thumbnail.extension}
            alt=""
          />
          <AboutContent>
            <h2>Nome</h2>
            <p>{[character.name]}</p>
            <div>
              <h2>Descrição</h2>
              <p>{[character.description]}</p>
              {character.description.length === 0 && <p>Não possui descrição</p>}
            </div>
          </AboutContent>
        </About>
      ))}
    </>
  );
}
