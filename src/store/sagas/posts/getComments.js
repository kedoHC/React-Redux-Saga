
import { takeEvery, put } from 'redux-saga/effects'

import {apiGetComments} from '../../api'

function* getCommentsAsync( value ){
    
    try{
        const resp = yield apiGetComments()
        yield put({type: "GET_ALL_COMMENTS_ASYNC", data: resp  })
    }catch{

    }
}

export function* getComments(){
    yield takeEvery("GET_ALL_COMMENTS", getCommentsAsync )
}