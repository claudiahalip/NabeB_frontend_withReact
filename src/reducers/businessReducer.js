export default function businessReducer(
    state = {businesses: []}, action){
        switch (action.type) {
            case "GOT_BUSINESSES":
                return {...state, loading: false, businesses: action.payload}
                
            default:
                return state;
        }

}