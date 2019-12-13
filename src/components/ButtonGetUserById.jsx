
import React, {Component} from 'react'

import { connect } from 'react-redux'

import * as actionTypes from '../store/actions'

class ButtonGetUserById extends Component{

    render(){
        return (
            <div>
                <button onClick={ ()=>this.props.getUserById(10) }>GET DATA USER BY ID 10</button>
            </div>
        )
    }
}

// Mapeo de las propiedades del rootState para ocuparlas 
// en este componente como PROPS
 
const mapStateToProps = state => {
    return {
        posts: state.posts
    };
}

// Mapeo de ACTIONS deL root DISPATCHER para ocuparlas 
// en este componente como PROPS

const mapDispatchToProps = dispatch => {
    return {
        getUserById: ( id )=> dispatch( {type: actionTypes.GET_USER_BY_ID, id: id} )
    };
}

export default connect( mapStateToProps, mapDispatchToProps )(ButtonGetUserById)