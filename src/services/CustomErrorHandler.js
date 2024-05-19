class CustomErrorHandler extends Error {
    constructor(status,msg){
        super();
        this.status = status;
        this.message = msg;
    }
    static alreadyExist(message){
        return new CustomErrorHandler(409,message);
    }
    static invailidCredential(message="invalid email or password!"){
        return new CustomErrorHandler(401,message);
    }
    static notFound(message="No data found!"){
        return new CustomErrorHandler(404,message);
    }
}
export default CustomErrorHandler;