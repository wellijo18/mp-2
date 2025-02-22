import { useEffect, useState } from 'react';
import styled from "styled-components";
import { Champion } from "./interfaces/Champions";
import LeagueOfLegends from "./components/LeagueOfLegends";

const ParentDiv = styled.div`
  width: 80vw;
  margin: auto;
  border: 5px darkblue solid;
`;

export default function App() {
  const [data, setData] = useState<Champion[]>([]);

  useEffect(() => {
    async function fetchData(): Promise<void> {
      const rawData = await fetch("https://ddragon.leagueoflegends.com/cdn/14.3.1/data/en_US/champion.json");
      const jsonData = await rawData.json();
      const championArray = Object.values(jsonData.data) as Champion[];
      setData(championArray);
    }

    fetchData()
        .then(() => console.log("Data fetched successfully"))
        .catch((e: Error) => console.log("There was the error: " + e));
  }, []);

  return (
      <ParentDiv>
        <LeagueOfLegends data={data}/>
      </ParentDiv>
  );
}