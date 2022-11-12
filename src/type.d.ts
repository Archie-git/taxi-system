declare module '*.css' {
  const content: any
  export default content
}

declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.png' {
  const content: any
  export default content
}

declare module '*.scss' {
  const content: any
  export default content
}

declare const ENV: {
  HOST_ENV: 'SIT' | 'STAGE' | 'PROD'
  HOST_URL: string
  KEYCLOAK_URL: string
  KEYCLOAK_REALM: string
  KEYCLOAK_CLIENT_ID: string
}
