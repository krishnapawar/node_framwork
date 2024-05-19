const validObject = (object)=>{
    if (object.match(/^[0-9a-fA-F]{24}$/)) {
        // Yes, it's a valid Object proceed.
        return true;
    }else{
        return false;
    }
}
export {
    validObject
}