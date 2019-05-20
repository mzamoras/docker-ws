import React, {Component} from 'react';
import * as Proptypes from 'prop-types';

import PageContainer from './PageContainer';
import {Link} from "react-router-dom";

class PageA extends Component {
    render() {
        return (
            <PageContainer>
                <div>
                    THIS IS PAGE A
                </div>
                <div>
                    <Link to="/">BACK HOME</Link>
                </div>
            </PageContainer>
        );
    }
}

PageA.propTypes = {};

export default PageA;