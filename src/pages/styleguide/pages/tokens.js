import React from 'react';

export class Tokens extends React.Component {
    constructor() {
        super();
        this.state = {};
    }
    render() {
        return (
            <div>
               <section className="styleguide-section">
                    <span className="styleguide__anchor" aria-hidden="true"></span>

                    <header className="styleguide--styled styleguide-section__header">
                        <h3 className="styleguide-section__title">tokens</h3>
                        <p className="styleguide-section__intro">intro</p>
                    </header>

                    <div className="styleguide__content">
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
                                                    <code className="styleguide-token__code">$styleguide-color--black-200</code>
                                                    <p className="styleguide-token__description">Primary link color</p>
                                                </td>
                                                <td className="styleguide-table__cell styleguide--styled">
                                                    <div class="styleguide-token__color token-color--FF6619"></div>
                                                </td>
                                                <td className="styleguide-table__cell">
                                                    <span className="styleguide-token__attribute">#FF6619</span>
                                                </td>
                                            </tr>
                                            
                                            <tr class="styleguide-table__row" aria-hidden="true"><td class="styleguide-table__seperator" colspan="3"></td></tr>
         
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

                                            <tr class="styleguide-table__row" aria-hidden="true"><td class="styleguide-table__seperator" colspan="3"></td></tr>

                                        </tbody>
                                    </table>
                                </div>
                                
                            </section>
                        </div>
                </section> 
            </div>
         )
    }
}

export default Tokens;