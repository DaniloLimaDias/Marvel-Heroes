import React, { useEffect, useState } from "react";
import {getCharacters } from "../../api/api";
import styled from "styled-components";
import { useParams } from "react-router-dom";

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
  const [characterSelect, setCharacter] = useState({
    data: null,
    loading: true,
  });
  console.log(characterSelect)

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await getCharacters(id);
      setCharacter({ data: result.data.data.results[0], loading: false });
    })();
  }, []);

  return (
    <>
      {!characterSelect.loading && (
        <About>
          <img
            src={
              characterSelect.data.thumbnail.path +
              "." +
              characterSelect.data.thumbnail.extension
            }
            alt="Personagem"
          />
          <img
            src={
              characterSelect.data.series.resourceURI
            }
            alt="Personagem"
          />
          <AboutContent>
            <h2>Nome</h2>
            <p>{[characterSelect.data.name]}</p>
            <div>
              <h2>Descrição</h2>
              <p>{[characterSelect.data.description]}</p>
              {characterSelect.data.description.length === 0 && (
                <p>Não possui descrição</p>
              )}
            </div>
          </AboutContent>
        </About>
      )}
    </>
  );
}
