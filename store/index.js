export const state = () => ({
    isAuth:false,
    user:{}
})


export const getters = {
    isAuth: state => state.isAuth,
    user: state => state.user
}


export const mutations = {
    changeAuthStatus(state,status){
        state.isAuth = status
    },
    setUser(state,user){
        state.user = {...user}
    }
}

export const actions = {
    async auth(state,payload){
        const auth_url = await process.env.REQUEST_API_URL + 'auth';
        const data = await this.$axios.post(auth_url,payload);
        return data;
    }
}