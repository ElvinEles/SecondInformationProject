import Api from './api'

const END_POINTS="categories"
const END_POINT_SAVE="information"

export default{
    all(){
        return Api.get(END_POINTS)
    },
    save(data){
        return Api.post(END_POINT_SAVE,data)
    }
}