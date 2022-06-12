import "../App.css";
import {  useEffect, useState } from "react";
import { Image } from "../styles/img-style";
import { LoadingBar } from "../styles/loading-style";
import Loading from "react-loading";
import DropDown from "../components/DropDown";
import styled from "styled-components";
import Star from "../components/Star";
import PlaceHolder from "../placeholder.jpeg";
import {loadData} from "../funcs";



const SearchByName = () => {

    const [catData , setData] = useState(null)
    const [breeds , setBreeds] = useState([{}])
    const [isLoading , setLoading] = useState(false)
   
const loadCatData = (id) => {
    setData(null);
    setLoading(true)
    const result = loadData("https://api.thecatapi.com/v1/images/search?breed_ids="+id);
    Promise.resolve ( result).then(data => {
        setData(data[0]) ; 
        setLoading(false) 
        if(!data[0]) { alert("Failed to Load Cat Data");
    }
    } )
}

    //Load all Breeds at the begining
   useEffect(()=> { 
    const result = loadData("https://api.thecatapi.com/v1/breeds");
     Promise.resolve ( result).then(data => setBreeds(data));
   }, [])
   
        return ( 
       <Container>

        <ImageContainer>
        <DropDown loadimg={loadCatData} breeds={breeds} isLoading={isLoading} />
        { isLoading ? <LoadingBar> <Loading type="spin" color="purple" /></LoadingBar> : <Image src={catData ? catData.url: PlaceHolder} Loading="Lazy" /> }
        </ImageContainer>
        <LeftStats> 
        <p><b>Description:</b>{catData?.breeds[0]?.description} </p>

        </LeftStats>
       <RightStats> 
        <b> {catData?.breeds[0]?.name} </b>
        <div>Affection level:  { <Star num={catData?.breeds[0]?.affection_level} /> }</div>
        <div>Adaptability: { <Star num={catData?.breeds[0]?.adaptability} /> } </div>
        <div>Child friendly:  { <Star num={catData?.breeds[0]?.child_friendly} /> } </div>
        <div>Country : <b> {catData?.breeds[0]?.country_code} / {catData?.breeds[0]?.origin}</b> </div>
        <div>Dog Friendly:  { <Star num={catData?.breeds[0]?.dog_friendly} /> }</div>
        <div>Energy: { <Star num={catData?.breeds[0]?.energy_level} /> } </div>
        <div>Health issues: { <Star num={catData?.breeds[0]?.health_issues} /> } </div>
        <div>Life Span: <b> {catData?.breeds[0]?.life_span}</b> </div>
        <div>Rare: <b>{ catData?.breeds[0]?.rare=== 0 ?"NO" :"YES" }</b> </div>
        <div>SocialNeeds: { <Star num={catData?.breeds[0]?.social_needs} /> } </div>
        <div>Vocalisation: <Star num={catData?.breeds[0]?.vocalisation} /></div>
        </RightStats>
        </Container>
    );
}
 
const ImageContainer = styled.div`
display:flex;
flex-direction:column;
align-items:center;
width:100vh;
top:10px;
border-radius:15px;
@media (max-width:800px) {
    width:80vh;
display:grid;
}
`;

const Container = styled.div`
display:flex;
background-color:inherit;
justify-content:space-between;
height:100vh;
@media (max-width:800px) {
display:grid;
}
`;

const LeftStats= styled.div`
width:700px;
margin-left:15px;
@media (max-width:800px) {
    width:400px;
display:grid;
}
`;

const RightStats = styled.div`
position:relative;
top:20%;
margin-right:20px;
text-align:left;
width:auto;
height:auto;
box-shadow:-5px 3px 5px black;
background-color: lightgray;
border-radius:10px;
@media (max-width:800px) {
    height:500px;;
display:grid;
}
@media (min-width:800px) {
    width:400px;
    height:500px;;
display:grid;
}
`;

export default SearchByName;