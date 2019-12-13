
import React, {Component} from 'react'

import { connect } from 'react-redux'

import * as actionTypes from '../store/actions'

class ButtonsGetData extends Component{

    render(){
        return (
            <div>
                <button onClick={ this.props.getAllPosts }>GET ALL POSTS</button>
                <button onClick={ this.props.getAllPhotos }>GET ALL PHOTOS</button>
                <button onClick={ this.props.getAllComments }>GET ALL COMMENTS</button>
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

        // onIncrementCounter: ( val ) => dispatch( {type: "INCREMENT", value: val} ),
        getAllPosts: ()=> dispatch( {type: actionTypes.GET_ALL_POSTS} ),

        getAllPhotos: ()=> dispatch( {type:actionTypes.GET_ALL_PHOTOS} ),
        
        getAllComments: ()=> dispatch( {type: actionTypes.GET_ALL_COMMENTS} )

    };
}

export default connect( mapStateToProps, mapDispatchToProps )(ButtonsGetData)