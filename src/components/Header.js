import styled from "styled-components";


const Header = (props) => {
    return (<Top>
        <h1>CATipedia</h1> <h3>An Encyclopedia for Cats</h3>
    </Top> );
}
 
const Top = styled.div`
display:flex;
justify-content:space-evenly;
align-items:center;
color: white;
background: black;
height:10vh;
`;

export default Header;