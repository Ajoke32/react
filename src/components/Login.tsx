import styled from "@emotion/styled";
import {useState} from "react";
import {useAppDispatch, useTypedSelector} from "../hooks";
import {Navigate} from "react-router-dom";

const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap:5px;
  padding:25px;
  background-color: lightblue;
  align-self: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0 2px 8px 0;
  border-radius: 8px;
`
const Input = styled.input`
  padding: 10px;
  border: 1px solid lightcyan;
  border-radius: 10px;
  outline: none;
`
const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: chartreuse;
  outline: none;
  border: none;
  cursor: pointer;
  width: 160px;
`

const Login = () => {
    const [name,setName] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const dispatch = useAppDispatch()

    const {loggedIn} = useTypedSelector(s=>s.user);



    return loggedIn?<Navigate to="/" />:(
        <Form>
            <Input onChange={(e)=>{
                setName(e.target.value)
            }} type="text" placeholder="Enter your name"/>
            <Input onChange={(e)=>{
                setEmail(e.target.value)
            }} type="text" placeholder="Enter your email"/>
            <Button type="button" onClick={()=>{
                dispatch({type:'user/login',payload:{
                       name:name,
                        email:email
                    }});
            }}>Login</Button>
        </Form>
    );
};

export default Login;
