import React from 'react';
import '../styles/certificate.css';

export default class Certificate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            certificateList: [
                {
                    certificateTitle: 'Oracle Certified Associate Java SE 8 Programmer',
                    certificateUrl: 'https://catalog-education.oracle.com/pls/certview/sharebadge?id=025530648BBA7B80EF8C0FE32F467CD1C01FB40FE21F70D9BC7261887E0BA222',
                    certificateUrlAdditional: 'https://github.com/glv1at118/professional-docs/blob/master/Oracle%20Java%20SE8%20Associate%20Certificate.pdf' // or '' if additional link is not available
                }
            ]
        };
    }
    render() {
        return (
            <ul id="my-cert">
                {
                    this.state.certificateList.map((cert, index) => {
                        return (
                            <li className="cert-item" key={index}>
                                <div className="nes-container is-rounded certificate with-title">
                                    <p className="title">{cert.certificateTitle}</p>
                                    <p className="cert-info">
                                        View Online:&nbsp;
                                        <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                                            Link 1 <i className="fas fa-external-link-alt"></i>
                                        </a>&nbsp;
                                        {
                                            cert.certificateUrlAdditional === '' ? null :
                                                <a href={cert.certificateUrlAdditional} target="_blank" rel="noopener noreferrer">
                                                    Link 2 <i className="fas fa-external-link-alt"></i>
                                                </a>
                                        }
                                    </p>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        );
    }
}