import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json';
import github from 'react-syntax-highlighter/dist/esm/styles/hljs/github';

SyntaxHighlighter.registerLanguage('json', json);

const TokenComponentResult = (props) => {
    return (
        <div>
            <Tabs defaultActiveKey="idclaims" id="result-tab">
                <Tab eventKey="idclaims" title="ID Token Claims">
                <br></br>
                    <Table style={{ textAlign: 'left' }} striped hover responsive="sm">
                        <thead>
                            <tr className="d-flex">
                                <th className="col-2">Attribute</th>
                                <th className="col-10">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.idTokenClaims ? (
                                    Object.keys(props.idTokenClaims).map((key) => (
                                        <tr key={ key } className="d-flex">
                                            <td className="col-2">{ key }</td>
                                            <td className="col-10">
                                                <span className="text-break">
                                                    { props.idTokenClaims[key] }
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2">Not signed in yet</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="tokenResponse" title="Token Response">
                    <br></br>
                    <Table style={{ textAlign: 'left' }} striped hover responsive="sm">
                        <thead>
                            <tr className="d-flex">
                                <th className="col-2">Attribute</th>
                                <th className="col-10">Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.accessTokenDetails ? (
                                    Object.keys(props.accessTokenDetails).map((key) => (
                                        <tr key={ key } className="d-flex">
                                            <td className="col-2">{ key }</td>
                                            <td className="col-10">
                                                <span className="text-break">
                                                    { props.accessTokenDetails[key] }
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="2">Not signed in yet</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </Tab>
                <Tab eventKey="results" title="Results">
                    <div style={{ textAlign: 'left' }}>
                        <br></br>
                        <SyntaxHighlighter language="json" style={github}>
                            { props.resultDetails }
                        </SyntaxHighlighter>
                    </div>
                </Tab>
            </Tabs>
        </div>
    );
}

export default TokenComponentResult;