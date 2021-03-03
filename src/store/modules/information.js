import InformationApi from '../../apis/information'

export default {
    state:{
        informations:[],
        paginateinformations:[],
        paginatelastpage:0,
        countofview:0,
        lastinformations:[],
        popularinformations:[]
       
      
    },
    getters:{
        getoneinformation:(state)=>(oneinformationid)=>{
          if (oneinformationid) {
            return state.informations.find(information => information.information_id == oneinformationid)
          }
              

        },
        getinformationbycategory:(state)=>(id)=>{
            return state.informations.filter(information => information.information_category == id)
        },
        
    },
    mutations:{
        GET_INFORMATION:(state,data)=>{
            state.informations = data
        },

        GET_PAGINATE_INFORMATION:(state,data)=>{
            state.paginateinformations = data.data
            state.paginatelastpage = data.last_page
           
        },

        SEND_VIEW_COUNT:(state,data)=>{
           state.countofview = data
        },

        LAST_INFORMATIONS:(state,data)=>{
            state.lastinformations = data
        },

        POPULAR_INFORMATIONS:(state,data)=>{
            state.popularinformations = data
        }
    },
    actions:{
        getAllInformation:({commit})=>{
            InformationApi.all().then((res)=>{
                commit("GET_INFORMATION",res.data)
            })
            
        },

        getPaginateInformations:({commit},page)=>{
           InformationApi.paginate(page).then((res)=>{
             commit("GET_PAGINATE_INFORMATION",res.data)
           })
        },

      sendViewCount:({commit},information_id)=>{
        InformationApi.show(information_id).then((res)=>{
            commit("SEND_VIEW_COUNT",res.data)
        })
       
      },

      lastinformations:({commit})=>{
          InformationApi.lastinformations().then((res)=>{
              commit("LAST_INFORMATIONS",res.data)
          })
      },

      popularinformations:({commit})=>{
        InformationApi.popularinformations().then((res)=>{
            commit("POPULAR_INFORMATIONS",res.data)
        })
      }

    },
         
    
}