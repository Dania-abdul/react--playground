import * as React from "react"


let currentPage = window.location.hash ? window.location.hash.split('#')[1].split('-')[0] : 'about'

console.log(window.location.hash)
export class StyleGuide extends React.Component {
    constructor() {
        super();
        this.state = {
            
        }
        
    }
    render() {
        return (
            <div>
                <article className="styleguide styleguide--styled">
                    <div className="styleguide__main">
                        <header className="styleguide__header">
                            <div className="styleguide__title">
                                <a className="styleguide__logo-link" href="/styleguide">
                                    <span className="sr-text"  aria-hidden="true">Styleguide</span>
                                    <h1>Styleguide</h1>
                                </a>

                                <button className="styleguide-toggler" onClick={e => document.documentElement.classList.toggle('styleguide-nav--toggled')}>
                                    <span className="sr-text">Toggle Menu</span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                    <span aria-hidden="true"></span>
                                </button>
                            </div>
                            <div className="styleguide-nav__wrapper" data-active-page={currentPage}>
                                <nav className="styleguide-nav">
                                    <h2 className="sr-text">Menu</h2>
                            
                                    <ul className="styleguide-nav__list">
                                    <li className="styleguide-nav__item styleguide-nav--about">
                                        <a className="styleguide-nav__link" href="#about">About</a>
                                    </li>
                                    <li className="styleguide-nav__item styleguide-nav--guidelines">
                                        <a className="styleguide-nav__link" href="#guidelines">Design Guidelines</a>
                                    </li>
                                    <li className="styleguide-nav__item styleguide-nav--tokens">
                                        <a className="styleguide-nav__link styleguide-nav__toggler" href="#tokens">Design Tokens</a>

                                        <ul className="styleguide-nav__sublist">
                                            <li className="styleguide-nav__item">
                                                <a className="styleguide-nav__link" href="#tokens-colors">Colors</a>
                                            </li>
                                            <li className="styleguide-nav__item">
                                                <a className="styleguide-nav__link" href="#tokens-fonts">Fonts</a>
                                            </li>
                                          
                                        </ul>
                                    </li>
                                    <li className="styleguide-nav__item styleguide-nav--objects">
                                        <a className="styleguide-nav__link styleguide-nav__toggler" href="#objects">Design Objects</a>

                                        <ul className="styleguide-nav__sublist">
                                        <li className="styleguide-nav__item">
                                            <a className="styleguide-nav__link" href="#objects-links">Links</a>
                                        </li>
                                        </ul>
                                    </li>
                                    <li className="styleguide-nav__item styleguide-nav--components">
                                        <a className="styleguide-nav__link styleguide-nav__toggler" href="#components" >Design Components</a>

                                        <ul className="styleguide-nav__sublist">
                                        <li className="styleguide-nav__item">
                                            <a className="styleguide-nav__link" href="#components-contentblocks">Content blocks</a>
                                        </li>
                                        </ul>
                                    </li>
                                    <li className="styleguide-nav__item styleguide-nav--compositions">
                                        <a className="styleguide-nav__link styleguide-nav__toggler" href="#compositions" >Design Compositions</a>

                                        <ul className="styleguide-nav__sublist">
                                        <li className="styleguide-nav__item">
                                            <a className="styleguide-nav__link" href="#compositions-homepage">Homepage</a>
                                        </li>
                                        </ul>
                                    </li>
                                    </ul>
                                </nav>
                            </div>

                            
                        </header>

                        
                        <div className="styleguide__content">
                            {/* to do  route to different components*/}
                            <section className="styleguide-section">
                                <span className="styleguide__anchor" aria-hidden="true"></span>

                                <header className="styleguide--styled styleguide-section__header">
                                    <h3 className="styleguide-section__title">Colors</h3>
                                    <p className="styleguide-section__intro">intro</p>
                                </header>

                                <div className="styleguide-section__content">
                                    <table className="styleguide-table">
                                        <thead>
                                            <tr className="styleguide-table__heading styleguide--styled">
                                                <th className="styleguide-table__label styleguide-table__label--token">Token</th>
                                                <th className="styleguide-table__label styleguide-table__label--example">Example</th>
                                                <th className="styleguide-table__label styleguide-table__label--attributes">Attributes</th>
                                            </tr>
                                        </thead>

                                        <tbody> 
                                            <tr className="styleguide-table__row">
                                                <td className="styleguide-table__cell styleguide--styled">
                                                    <code className="styleguide-token__code">$styleguide-color--blue-400</code>
                                                    <p className="styleguide-token__description">Primary color</p>
                                                </td>
                                                <td className="styleguide-table__cell styleguide--styled">
                                                    <div class="styleguide-token__color token-color--4d72bb"></div>
                                                </td>
                                                <td className="styleguide-table__cell">
                                                    <span className="styleguide-token__attribute">#4d72bb</span>
                                                </td>
                                            </tr>
                                            
                                            <tr class="styleguide-table__row" aria-hidden="true"><td class="styleguide-table__seperator" colSpan="3"></td></tr>
         
                                            <tr className="styleguide-table__row">
                                                <td className="styleguide-table__cell styleguide--styled">
                                                    <code className="styleguide-token__code">$color--black-100</code>
                                                </td>
                                                <td className="styleguide-table__cell styleguide--styled">
                                                    <div class="styleguide-token__color token-color--000000"></div>
                                                </td>
                                                <td className="styleguide-table__cell">
                                                    <span className="styleguide-token__attribute">#000000</span>
                                                </td>
                                            </tr>
                                            <tr className="styleguide-table__row">
                                                <td className="styleguide-table__cell styleguide--styled">
                                                    <code className="styleguide-token__code">$color--black-400</code>
                                                </td>
                                                <td className="styleguide-table__cell styleguide--styled">
                                                    <div class="styleguide-token__color token-color--252629"></div>
                                                </td>
                                                <td className="styleguide-table__cell">
                                                    <span className="styleguide-token__attribute">#252629</span>
                                                </td>
                                            </tr>

                                            <tr class="styleguide-table__row" aria-hidden="true"><td class="styleguide-table__seperator" colSpan="3"></td></tr>

                                        </tbody>
                                    </table>
                                </div>
                                
                            </section>
                        </div>

                    </div>
                </article>
            </div>
        )
    }
}

export default StyleGuide;