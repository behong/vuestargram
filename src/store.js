import { createStore } from "vuex";


const store = createStore({
    state(){
        return{
            name: 'hong',
            age : 43,
        }
    },
    mutations:{
        이름변경(state){
            state.name = '호옹';
        }
    }
})

export default store;