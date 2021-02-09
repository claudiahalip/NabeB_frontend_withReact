export const gotNeighborhoods = ()=>{
    return {type: GOT_NEIGHBORHOODS, action: paylod}
}

export const fetchNeighborhoods = () => {
    return (dispatch) =>{
        dispatch({type: FETCH_NEIGHBORHOODS})
        fetch("http://localhost:3001/neighborhoods")
        .then(response => response.json())
        .then((response)=>{
            dispatch(gotNeighborhoods(response))
        });
    }
}