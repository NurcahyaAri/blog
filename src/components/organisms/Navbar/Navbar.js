import React from 'react';
import {slide as Menu} from 'react-burger-menu';
export default (props) => {
    const isFullPage = props.full === true ? {position: 'absolute'} : {}
    return (
        <div style={isFullPage}>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <a class="navbar-item" href="/">
                        <img src="/logo.png" alt="made by love" width="256" height="256"/>
                    </a>

                    <span>
                        <Menu styles={styles} pageWrapId={"page-wrap"} outerContainerId={ "outer-container" } noOverlay right>
                            <section id="page-wrap" className="section">
                                <div className="menu">
                                    <ul className="menu-list">
                                        <li><a id="home" className="menu-list" href="/">Home</a></li>
                                        <li><a id="about" className="menu-list" href="/blog">Blog</a></li>
                                    </ul>
                                </div>
                            </section>
                        </Menu>
                    </span>
                </div>
            </nav>
        </div>
    );
}

const styles = {
    bmBurgerButton: {
      position: 'fixed',
      width: '36px',
      height: '30px',
      right: '36px',
      top: '10px'
    },
    bmBurgerBars: {
      background: '#373a47'
    },
    bmBurgerBarsHover: {
      background: '#a90000'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: 'black'
    },
    bmMenuWrap: {
      position: 'fixed',
    //   height: '100%',
      background: '#f0f0f2'
    },
    bmMenu: {
    //   background: '#f0f0f2',
    //   padding: '2.5em 1.5em 0',
    //   fontSize: '1.15em',
      width : '100%',
      height : '100%'
    },
    bmMorphShape: {
      fill: '#f0f0f2'
    },
    // bmItemList: {
    //   color: '#b8b7ad',
    //   padding: '0.8em'
    // },
    // bmItem: {
    //   display: 'inline-block'
    // },
    bmOverlay: {
    //   background: 'rgba(0, 0, 0, 0.3)',
    //   width : '100%',
      position : 'auto'
    },
    bmItem: {
        height: '100%'
    }
  }