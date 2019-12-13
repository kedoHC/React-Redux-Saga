
import { takeLatest, put } from 'redux-saga/effects'
import {apiGetUserById} from '../../api'


// const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* getUserByIdAsync( value ){

    // yield delay( 4000 )
    // yield console.log( value )
    
    try{
        const resp = yield apiGetUserById( value.id )
        yield put({type: "GET_USER_BY_ID_ASYNC", data: resp  })
    }catch{

    }
}

export function* getUserById(){
    yield takeLatest("GET_USER_BY_ID", getUserByIdAsync )
}