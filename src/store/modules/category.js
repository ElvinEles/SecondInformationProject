import CategoryApi from '../../apis/categoryapi'
export default{
    state:{
        categories:[],
        informationsa:[]
    },
    getters:{},
    mutations:{
        GET_CATEGORIES:(state,categories)=>{
            state.categories = categories
        },
        SAVE_INFORMATION:(state,information)=>{
            state.informationsa.push({information})
        }
    },
    actions:{
        getCategories:({commit})=>{
            CategoryApi.all().then(response=>{
                    commit("GET_CATEGORIES",response.data)
            })
        },
        createInformation:({commit},information)=>{
                  CategoryApi.save(information)
                commit("SAVE_INFORMATION",information)
            }
        
    },

    
}