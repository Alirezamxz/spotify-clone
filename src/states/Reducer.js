export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQBL6gb-G5AefgAkAzgPWAs4-phA3A42zJPY38RsyeoM-tzx9IGS468nodlkx-oJ8RaNvIrh134naUgayXZdGjPGhHTM1E8ZIb2wi2KyxpHJDq9fHwKUnqZN_KOzmnLLgDOU-mmf6DP4UgmXfwUC-xX0ui2ajJ65kjTT2Wg-u2AVFBYMdyu7",
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:  action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
        default:
            return state
    }
}

export default reducer