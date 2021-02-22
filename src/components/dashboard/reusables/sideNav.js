import React from 'react'
import {Link} from 'react-router-dom'

const Styles = () => {
    return (
        <style jsx='true'>
            {
                ` .sideNav {
                    min-height: 100vh;
                    width: 250px;
                    padding: 1em;
                    box-shadow: 7px 1px 15px 3px #d3d3d3a6;
                    position: fixed;
                }

                @media (max-width: 776px){
                    .sideNav{
                        width: 0;   
                        display: none;
                    }
                }
                 `
            }</style>
    )
}


const SideNav = () => {
    return (
        <div>
            <div className="sideNav">
                <div className="logo v_align">
                    <a href='/' className="section__head--mid">Logo</a>
                </div>
                <div className="sideNavContent section__height--mid center">
                    <a href="/" className="btnOnHover section__text--big">Transfer Funds</a>
                </div>
            </div>
            <Styles/>
        </div>
    )
}

export default SideNav;
