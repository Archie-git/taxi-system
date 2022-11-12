import Keycloak from 'keycloak-js'

const keycloak = new Keycloak({
  url: ENV.KEYCLOAK_URL,
  realm: ENV.KEYCLOAK_REALM,
  clientId: ENV.KEYCLOAK_CLIENT_ID
})

const UtilKeycloak = {
  getToken: () => {
    return keycloak.token ?? ''
  },
  init: (callback: (authenticated: boolean, token?: string) => void) => {
    return keycloak.init({
      onLoad: 'login-required'
    }).then((authenticated) => {
      callback(authenticated, keycloak.token)
      setInterval(() => {
        void keycloak.updateToken(8 * 60 * 60 * 1000)
      }, 10 * 60 * 1000)
    })
  },
  logout: () => {
    return keycloak.logout()
  }
}

export default UtilKeycloak
