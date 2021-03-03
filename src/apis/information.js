import Api from './api'

const END_POINT = "allinformations"
const END_POINT_PAGINATE = "informations?page="
const END_POINT_ONE ="information/"
const END_POINT_LAST_INFORMATIONS = "lastinformations"
const END_POINT_POPULAR_INFORMATIONS = "popularinformations"


export default {
    all(){
       return Api.get(END_POINT)
    },

    paginate(page){
        return Api.get(END_POINT_PAGINATE+ page)
    },
   show(information_id){
        return Api.get(END_POINT_ONE + information_id)
    },

    lastinformations(){
        return Api.get(END_POINT_LAST_INFORMATIONS)
    },

    popularinformations(){
        return Api.get(END_POINT_POPULAR_INFORMATIONS)
    }
  
}