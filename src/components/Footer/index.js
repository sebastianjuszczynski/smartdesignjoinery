import React from 'react';
import { withRouter } from "react-router-dom";
import { FooterParagraph } from './styled';

const Footer = ({ location }) => {
    return (
        <FooterParagraph location={location.pathname}>Smart Design Joinery&copy;. All rights reserved</FooterParagraph>
    )
}

export default withRouter(Footer);
