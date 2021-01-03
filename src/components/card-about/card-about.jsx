import React, { useEffect, useState } from "react";
import { getCharacters } from "../../api/api";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const About = styled.div`
  display: flex;
  color: #fff;
  img {
    height: 450px;
    width: 450px;
    margin:0px 10px;
    @media(max-width: 768px) {
      width: 300px;
      height:300px
    }
  }
  @media(max-width: 701px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img{
      margin-bottom:30px;
    }
  }
`;
const AboutContent = styled.div`
  max-width: 760px;
  margin: 50px 20px;
  h2 {
    color: #fff;
    font-size: 24px;
    margin-bottom:10px;
    text-transform: uppercase;
  }
  p {
    font-size: 20px;
    color: #c1bebe;
  }
  @media(max-width: 768px) {
    margin: 0px 20px;
    p{
      margin-bottom:20px;
    }
  }
`;
const Nome = styled.div`
margin-bottom:50px;
@media(max-width: 701px) {
  margin-bottom:18px;

}
`;

export default function CardAbout() {
  const [characterSelect, setCharacter] = useState({
    data: null,
    loading: true,
  });
  console.log(characterSelect);

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
          <AboutContent>
            <Nome>
              <h2>Nome</h2>
              <p>{[characterSelect.data.name]}</p>
            </Nome>
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
