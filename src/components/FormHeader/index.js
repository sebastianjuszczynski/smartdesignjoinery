import React from 'react';
import { withRouter } from 'react-router';
import { FormH3, FormSpan } from './styled';

const FormHeader = (props) => {
    return (
        <FormH3 location={props.location.pathname}>Contact <FormSpan>with us</FormSpan> and check<br />what we can do <FormSpan>together!</FormSpan></FormH3>
    )
}

export default withRouter(FormHeader);