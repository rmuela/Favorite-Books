import React, { Component } from 'react';
import propTypes from 'prop-types';
class Loading extends Component {
    render() {
        return (<div className="loader">{this.props.message || 'Cargando ...'}</div>);
    }
}

Loading.propTypes = {
    message: propTypes.string.isRequired
};
export default Loading;