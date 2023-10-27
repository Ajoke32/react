import styled from "@emotion/styled";
import {useTypedSelector} from "../hooks";
import {StyledLink} from "./Header.tsx";

export const Container = styled.div`
padding: 15px;
  width: 800px;
  height: 300px;
  align-self: center;
  border-radius: 8px;
  background-color: #184e77;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`
const DivButton = styled.div`
  padding: 5px;
  border: 1px solid lightgray;
  border-radius: 10px;
  cursor: pointer;
  background-color:#014f86;
`

const Home = () => {
    const {loggedIn,user} = useTypedSelector(s=>s.user);
    return (
        <Container>
            {loggedIn?<h1>Welcome, {user.name}</h1>:
            <DivButton>
                <StyledLink to="/login">Login to better experience</StyledLink>
            </DivButton>}
        </Container>
    );
};

export default Home;
