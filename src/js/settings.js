export class ApiSettings{
    baseUrl = "http://localhost:5000"

    signUp= this.baseUrl+"/registration"
    signIn=this.baseUrl+"/login"
    getAllTasks = this.baseUrl+"/tasks"



}

export const HTTP_STATUSES={
    NO_CONTENT_204 : 204

}