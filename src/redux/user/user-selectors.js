import { createSelector } from 'reselect'

const selectUser = state => state.user

export const selectCurrentUser = createSelector(
    [selectUser],
    (user) => {
        if (user.currentUser && 'userAuth' in user.currentUser) {
            return null;
        } else return user.currentUser
    }
)