export  const gotBusinesses = (businesses) =>{
    return {type: "GOT_BUSINESSES", payload: businesses}
}

export const addBusiness = (business) => {
    return {type: 'ADD_BUSINESS', paylod: business}
}
export const fetchBusinesses = ()=>{
    return(dispatch)=>{
        dispatch({type: "FETCH_BUSINESSES"})
        fetch("http://localhost:3001/businesses")
        .then(response => response.json())
        .then((response)=>{
            dispatch(gotBusinesses(response))
        });
    }

}

