import apiClient from "./services/api-client";

export interface User {
    id: number;
    name: string;
  }

class UserService {
    getAllUsers(){
        const controller = new AbortController();    
        const request = apiClient.get<User[]>("/users", {
          signal: controller.signal,
      })
      return { request, cancel : () => controller.abort()}
    }

    deleteUser(id:number){
        return apiClient.delete("/users/" + id)  // changed user.id to id next should return promise method y

    }
}

export default new UserService();