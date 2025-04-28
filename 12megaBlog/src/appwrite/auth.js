import conf from "../config/config";
import { Client, Account, ID } from "appwrite";

export class Authservices{
    client = new Client()
    account;
    constructor(){
        this.client
          .setEndpoint(conf.appwriteurs)
          .setProject(conf.appwriteProjectId);

        const account = new Account(client);

      
    }
     async createAccount( email,password,name){
       try{
        const user = await account.create(ID.unique(), email, password, name);
        if(user){
            //call the login method
           return  this.login(email,password);
        }else{
          return user;
        }
       } catch(error){

       }
     }

     async login(email,password){
        try{
             return await account.createEmailPasswordSession(email, password);
        }catch(error){
            console.log("server error",error);
        }
     }

     async getCurrentUser(){
        try{
            const user = await account.get();
            return user;
        }catch(error){
            console.log("server error",error);
        }
        return null;
     }

     async logout(){
        try{
            const result = await account.deleteSessions();
            return result;

        }
     catch(error){
        console.log("server error",error);
     }
}
}
const authservices = new Authservices();

export default authservices;