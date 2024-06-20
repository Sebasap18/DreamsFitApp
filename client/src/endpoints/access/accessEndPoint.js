import http from "../../axiosConfig.js";
const accessRoutes={
    LOGIN:"/access/login"
};
export default {
    login(objParams){
        return new Promise( resolve => {
              http.get(accessRoutes.LOGIN,{params})
                  .then()
        })
    }
}
