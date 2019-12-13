
import { all, fork } from 'redux-saga/effects'

import { getPosts } from './posts/getPosts'
import { getPhotos } from './posts/getPhotos'
import { getComments } from './posts/getComments'

import { getUserById } from './users/getUserById'


export default function* rootSaga(){
    yield all([
        fork(getPosts),
        fork(getPhotos),
        fork(getComments),
        fork(getUserById)
    ])
}