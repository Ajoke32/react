import styled from '@emotion/styled'
import {NavLink} from "react-router-dom";
import {useAppDispatch, useTypedSelector} from "../hooks";




const StyledHeader = styled.header`
  padding: 15px;
  background-color: #14213d;
  display: flex;
  gap: 10px;
  justify-content: space-between;
`
export const StyledLink = styled(NavLink)`
  padding: 5px;
  color: white;
  text-decoration: none;
  &:hover{
    color:#e0aaff;
    transition: 0.1s;
  }
`
const Button = styled.button`
  padding: 5px;
  color: white;
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
  text-decoration: none;
  &:hover{
    color:#e0aaff;
    transition: 0.1s;
  }
`


const Header = () => {
    const dispatch = useAppDispatch();
    const {loggedIn,user} = useTypedSelector(s=>s.user);
    return (
        <StyledHeader>
            <div>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to={"/dashboard"}>Dashboard</StyledLink>
                <StyledLink to={"/admin"}>Admin panel</StyledLink>
            </div>
            <div>
                {loggedIn?<>
                    <span style={{color:"white",marginRight:"25px"}}>{user.email}</span>
                    <Button onClick={()=>{
                        dispatch({type:'user/logout'})
                    }}>Logout</Button>
                </>: <StyledLink to="/login">Login</StyledLink>}
            </div>
        </StyledHeader>
    );
};

export default Header;
