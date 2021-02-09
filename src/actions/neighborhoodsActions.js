export const gotNeighborhoods = (neighborhoods)=>{
    return {type: "GOT_NEIGHBORHOODS", payload: neighborhoods}
}

export const fetchNeighborhoods = () => {
    return (dispatch) =>{
        dispatch({type: "FETCH_NEIGHBORHOODS"})
        fetch("http://localhost:3001/neighborhoods")
        .then(response => response.json())
        .then((response)=>{
            dispatch(gotNeighborhoods(response))
        });
    }
}