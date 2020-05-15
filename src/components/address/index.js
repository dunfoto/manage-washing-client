import React from 'react';
import ACTION from '../../actions/address';
import { connect } from "react-redux";

class Address extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>Address</div>
        )
    }
}

const mapStateToProps = state => ({
    address: state.address
})

const mapDispatchToProps = dispatch => ({
    updateAddress: () => dispatch(ACTION.updateAddress)
})

export default connect(mapStateToProps, mapDispatchToProps)(Address);