import { verify } from 'jsonwebtoken'

export const authenticator = (token) => {
  try {
    var decoded = verify(token, process.env.JWT_SECRET_KEY);
    if (decoded) {
      return {
        authStatus: 1, 
        reason: ""
      }
    }
  } catch (err) {
    return {
      reason: "Join the Culturee community by signing up",
      authStatus: 0
    }
  }
}

