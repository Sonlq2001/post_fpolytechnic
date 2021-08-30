import styled from "styled-components"
import { Nav, Icon } from "rsuite"
import React,  { Fragment } from "react"
import  {NavLink}  from "react-router-dom"
// const Menu = styled.a(Nav)``
const LayoutClient = () => {
    return (
    
    <Nav> 
        <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
       <Nav.Item><NavLink  to="/admin"> Admin</NavLink></Nav.Item>
       <Nav.Item>Solutions</Nav.Item>
       <Nav.Item>Products</Nav.Item>
       <Nav.Item>About</Nav.Item>
   </Nav>
   
    )
}
export default LayoutClient