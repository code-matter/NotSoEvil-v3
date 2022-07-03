import {
    browserSessionPersistence,
    setPersistence,
    signInWithEmailAndPassword,
} from "firebase/auth"
import { firebaseAuth } from "utils/firebase"

const login = async (email: string, password: string) => {
    await setPersistence(firebaseAuth, browserSessionPersistence)
    return signInWithEmailAndPassword(firebaseAuth, email, password)
}

const logout = async () => {
    return await firebaseAuth.signOut()
}

export const UsersService = {
    login,
    logout,
}
