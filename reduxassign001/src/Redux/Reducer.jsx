
const initialdata = {
count:0,
}

const basicreducer = (storedata=initialdata,action)=>{
    if(action.type == "count+")
    return {
        count : action.username,
    };
    else if(action.type=="count-")
    return{
         count:action.username,
    }
    return storedata
}
export default basicreducer;