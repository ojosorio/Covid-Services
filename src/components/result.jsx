import React, { Component } from "react";

class Result extends Component {

    render() {

        const {
            onResult,
            onName
        } = this.props;

        return (

            <div className="row">
                <h5>Service Name: {onName}</h5>
                <br/>
                {onResult}
            </div>
        );

    }


}

export default Result;