
import { takeEvery, put } from 'redux-saga/effects'

import {apiGetPhotos} from '../../api'

function* getPhotosAsync( value ){
    
    try{
        const resp = yield apiGetPhotos()
        yield put({type: "GET_ALL_PHOTOS_ASYNC", data: resp  })
    }catch{

    }
}

export function* getPhotos(){
    yield takeEvery("GET_ALL_PHOTOS", getPhotosAsync )
}