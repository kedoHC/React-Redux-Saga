
import { takeEvery, put } from 'redux-saga/effects'
import {apiGetPosts} from '../../api'

function* getPostsAsync( value ){
    
    try{
        const resp = yield apiGetPosts()
        yield put({type: "GET_ALL_POSTS_ASYNC", data: resp  })
    }catch{

    }
}

export function* getPosts(){
    yield takeEvery("GET_ALL_POSTS", getPostsAsync )
}