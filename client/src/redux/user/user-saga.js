import { takeLatest, put, all, call } from 'redux-saga/effects'

import UserActionTypes from './user-types'
import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    signUpSuccess,
    signUpFailure
} from './user-actions'

import { auth,
    googleProvider, 
    createUserProfileDocument,
    getCurrentUser
 } from '../../firebase/firebase.utils'

export function* getSnapshotFromUserAuth (userAuth, additionalUserData) {
    try {
        const userRef = yield call(createUserProfileDocument, userAuth, additionalUserData)
        const userSnapshot = yield userRef.get()
        yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }))
    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* signInWithGoogle () {
    try { 
        const { user } = yield auth.signInWithPopup(googleProvider)
        yield getSnapshotFromUserAuth(user)
    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* isUserAthenticated () {
    try {
        const userAuth = yield getCurrentUser()
        if (!userAuth) return
        yield getSnapshotFromUserAuth(userAuth)
    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* onGoogleSignInStart () {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle)
}

export function* signInWithEmail ({ payload: {email, password} }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email, password)
        yield getSnapshotFromUserAuth(user)
    } catch (err) {
        yield put(signInFailure(err))
    }
}

export function* signOut () {
    try {
        yield auth.signOut()
        yield put(signOutSuccess())
    } catch (err) {
        yield put(signOutFailure(err))
    }
}

export function* signUp ({ payload: {email, password, displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email, password)
        yield put(signUpSuccess({ user, additionalUserData: { displayName } }))
        
    } catch (err) {
        yield put(signUpFailure(err))
    }
}

export function* signInAfterSignUp ({ payload: {user, additionalUserData } }) {
    yield getSnapshotFromUserAuth(user, additionalUserData)
}

export function* onEmailSignInStart () {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail)
}

export function* onCheckUserSession () {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAthenticated)
}

export function* onSignOutStart () {
    yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut)
}

export function* onSignUpStart () {
    yield takeLatest(UserActionTypes.SIGN_UP_START, signUp)
}

export function* onSignUpSuccess () {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp)
}

export function* userSagas () {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onSignOutStart),
        call(isUserAthenticated),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ])
}