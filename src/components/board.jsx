import React, { Component } from "react";

class Board extends Component {

    render() {

    const { 
        onService1,
        onService2,
        onService3,
        onService4,
        onService5,
        onService6,
        } = this.props;
    
      return (
        <div className="row">
            <div className="col-md-6">
                <div className="col-md-3">
                    <button className="btn btn-primary btn-lg" onClick={onService1}>Current Services</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary btn-lg" onClick={onService2}>Summary</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-success btn-lg" onClick={onService3}>Countries</button>
                </div>
            </div>
            <div className="col-md-6">
                <div className="col-md-3">
                    <button className="btn btn-success btn-lg" onClick={onService4}>Confirmed Cases (Colombia)</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-primary btn-lg" onClick={onService5}>Day One All Status (Colombia)</button>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary btn-lg" onClick={onService6}>Day One Total (Colombia)</button>
                </div>
            </div>
        </div>
      );

    }

    
}

export default Board;