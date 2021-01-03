import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { api } from "../../api/api";
import { Link } from "react-router-dom";
import Search from "../../components/header/components/search/search";

const Section = styled.section`
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const CardCharacter = styled.div`
  img {
    width: 350px;
    height: 250px;
    margin: 20px 5px;
    border-radius: 30px;
    cursor: pointer;
    @media (max-width: 370px) {
      width: 300px;
    }
  }
  h2 {
    text-align: center;
    border-radius: 10px;
    position: relative;
    font-size: 21px;
    color: #fff;
    background: #000000d1;
    bottom: 90px;
    // font-family: "Bangers", cursive;
  }
`;

export default function Card() {
  const [characters, setCharacters] = useState([]);

  const [search, setSearch] = useState("");
  function onChange(e) {
    setSearch(e.target.value);
  }

  useEffect(() => {
    api.get("").then((response) => {
      setCharacters(response.data.data.results);
    });
  }, []);

    const itemSearch = characters.filter((items) =>
      items.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <>
      <Search onChange={onChange} value={search} />
      <Section>
        {itemSearch.map((character, index) => (
          <CardCharacter key={index}>
            <Link to={`/sobre/${character.id}`}>
              <img
                src={[
                  character.thumbnail.path +
                    "." +
                    character.thumbnail.extension,
                ]}
                alt="Personagem"
              />
            </Link>
            <h2>{[character.name]}</h2>
          </CardCharacter>
        ))}
      </Section>
    </>
  );
}
