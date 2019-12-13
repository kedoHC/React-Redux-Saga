

import React from 'react'
import { connect } from 'react-redux'
import * as actionTypes from '../store/actions'


const Sumar = ( props ) => (
    <div>
        <p> {props.contador} </p>
        <button onClick={ props.sumarContador } >SUMAR</button>
    </div>
)


const mapStateToProps = state => {
    return {
        contador: state.contador
    };
}
const mapDispatchToProps = dispatch => {
    return {
        sumarContador: ()=> dispatch( {type: actionTypes.SUMAR__CONTADOR} ),
    };
}

export default connect( mapStateToProps, mapDispatchToProps )(Sumar)


