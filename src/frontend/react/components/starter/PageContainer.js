import React, {Component} from 'react';
import PropTypes from 'prop-types';

class PageContainer extends Component {
    render() {
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

PageContainer.propTypes = {};

export default PageContainer;