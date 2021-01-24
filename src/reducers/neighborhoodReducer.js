export default function neighborhoodReducer(
    state = {neighborhoods: []}, action){
        switch(action.type){
            case "GOT_NEIGHBORHOODS":
                return{...state, loding: false, businesses: action.payload}
            default:
                return state;   
        }

}