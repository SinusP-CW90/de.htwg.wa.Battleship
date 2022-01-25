import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  getAuth,
  onAuthStateChanged
} from 'firebase/auth'

import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export default createStore({
  state: {
    user: null
  },
  mutations: {

    SET_USER (state, user) {
      state.user = user
     //state.user.role = "nobody"
      console.log("User: "+ state.user.email +" in SetUser" )
      console.log("User: "+ state.user.displayName +" in SetUser" )
      console.log("User: "+ state.user.role +" in SetUser" )
    },

    SET_PROVIDER_USER (state, user) {
      state.user = user
      state.credential = this.provider.credentialFromResult(state);
      state.token = state.credential.accessToken;
    },

    CLEAR_USER (state) {
      state.user = null
      console.log("User ist cleared!")
    }

  },
  actions: {
    async login ({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }
      commit('SET_USER', auth.currentUser)
      this.$router.replace("/");
    },

    async resetPassword ({ commit }, details) {
      const { email, password } = details

      try {
        await sendPasswordResetEmail(auth, email)
        alert("reset-password Email is send")
      } catch (error) {
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }
      //commit('SET_USER', auth.currentUser)
      this.$router.replace("/");
    },

    async providerLogin ({ commit }, provider) {
      //const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider)

      } catch (error) {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("error Message:" +error.message)
        // The email of the user's account used.
        const email = error.email;
        alert("email error:" +email)
        // The AuthCredential type that was used.
        const credential = provider.credentialFromError(error);
        alert("credential err: "+credential)
        switch(error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }
      console.log("User: "+  auth.currentUser +" login" )
      commit('SET_PROVIDER_USER', auth.currentUser)
      console.log("User: "+  state.user.role +" login" )

      this.$router.replace("/");
    },

    async register ({ commit}, details) {
      const { displayName, role, email, password } = details
      console.log("details: "+  details.role +" von reg" )
      try {
        await createUserWithEmailAndPassword(auth, email, password)
        auth.currentUser.displayName = displayName;
        auth.currentUser.role = details.role;
        console.log("in reg name: " + displayName)
        console.log("in reg /auth: " + auth)
        console.log("in reg /auth: " + auth.role)
      } catch (error) {
        switch(error.code) {
          case 'auth/email-already-in-use':
            alert("Email already in use")
            break
          case 'auth/invalid-email':
            alert("Invalid email")
            break
          case 'auth/operation-not-allowed':
            alert("Operation not allowed")
            break
          case 'auth/weak-password':
            alert("Weak password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      this.$router.replace("/");
      console.log(auth.currentUser)
    },


    async logout ({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      this.$router.replace("/login");
    },

    fetchUser ({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/login') {
            this.$router.replace("/");
          }
        }
      })
    }

  }
})
