import React from 'react'
import  {Link, NavLink }  from "react-router-dom"
import { Nav, Sidenav, Dropdown, Icon } from "rsuite"
import styled from "styled-components"

const Test = styled(Sidenav)`
    /* background:rgb(35, 31, 31); */
    background: #504747;
    padding:0px;
`
const A = styled(NavLink)`
    text-decotion:none;
`
const SideBar = () => {
    return (
        <Test defaultOpenKeys={['3', '4']} activeKey="1">
            <Sidenav.Body>
                <Nav>
                    <Nav.Item eventKey="1" icon={<Icon icon="dashboard" />}>
                        Dashboard
                    </Nav.Item>
                    <Nav.Item eventKey="2" icon={<Icon icon="group" />}>
                        User Group
                    </Nav.Item>
                    <Dropdown title="bên trên "   eventKey="5" icon={<Icon icon="magic" />}>
                        <Dropdown.Item eventKey="3-1"><A  to="/product">  product</A></Dropdown.Item>
                        <Dropdown.Item eventKey="3-2">Channels</Dropdown.Item>
                        <Dropdown.Item eventKey="3-3">Versions</Dropdown.Item>
                    </Dropdown>
                    <Dropdown title="test"   eventKey="6" icon={<Icon icon="gear-circle" />}>
                        <Dropdown.Item eventKey="5-1">Applications</Dropdown.Item>
                        <Dropdown.Item eventKey="5-2">Channels</Dropdown.Item>
                        <Dropdown.Item eventKey="5-3">Versions</Dropdown.Item>
                    </Dropdown>
                </Nav>
            </Sidenav.Body>
        </Test>


    )
}
export default SideBar