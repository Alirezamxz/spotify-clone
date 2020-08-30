// login to account
export const authEndpoint = "https://accounts.spotify.com/authorize"
// redirect to home page after login
const redirectUri = "http://localhost:3000/"
// get your client ID from this link => https://developer.spotify.com
const clientId = "046565466c57464582a4f7e843e6b8ff"
// access to user data like currently playing
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial, item) => {
            let parts = item.split('=')
            // 0 = access_token 1 = access token user
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        }, {})
}

// set login url to access auth spotify
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`