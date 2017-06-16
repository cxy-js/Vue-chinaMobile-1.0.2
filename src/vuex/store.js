import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
Vue.use(Vuex)
const state ={
    toptitlelis:'中国移动',
    tel:'',
    depositetel:'',
    price:'',
    issingin:true,
    backshow:false,
    spanisshow:true,
    footerisshow:true
    
}

export default new Vuex.Store({
    state,
    mutations
})