import styled from "styled-components";
import { Champion } from "../interfaces/Champions";

const AllChampsDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    gap: 20px;
    background-color: #46a7dd;
`;

const SingleChampDiv = styled.div<{status: string}>`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(20%);
    min-width: 200px;
    padding: 20px;
    margin-top: 20px;
    text-align: center;
    background-color: #869ad5;
    border-radius: 8px;
    box-shadow: 2px 2px 4px;
    h1 {
        font-size: 1.2rem;
    }
    p {
        color: #333;
    }
`;

const ChampionImage = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 4px;
`;

export default function LeagueOfLegends(props: { data: Champion[] }) {
    return (
        <AllChampsDiv>
            {props.data.map((champ: Champion) => (
                <SingleChampDiv key={champ.id} status={champ.blurb}>
                    <ChampionImage
                        src={`https://ddragon.leagueoflegends.com/cdn/${champ.version}/img/champion/${champ.image.full}`}
                        alt={`image of ${champ.name}`}
                    />
                    <h1>{champ.name}</h1>
                    <p>{champ.title}</p>
                    <p>{champ.blurb}</p>
                </SingleChampDiv>
            ))}
        </AllChampsDiv>
    );
}