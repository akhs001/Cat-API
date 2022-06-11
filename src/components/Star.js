import star from "../star.png";
import styled from "styled-components";

const Star = (props) => {
    return <Rating>
     {props.num>0 && [...Array(props.num)].map(s => <StarImage key={Math.random()} src={star} alt="" />) }
    </Rating>
    ;
}
 
const Rating = styled.div`
display:inline;
`;

const StarImage = styled.img`
width:15px;
`;

export default Star;