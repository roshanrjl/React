import conf from "../config/config";
import { Client, ID, Databases, Storage,Query } from "appwrite";

export class Services{
    clinet = new Client()
    Databases;
    Storage;
    
    constructor(){
        this.clinet
          .setEndpoint(conf.appwriteurs)
          .setProject(conf.appwriteProjectId);
    
  
        this.Databases = new Databases(this.clinet);
        this.Storage = new Storage(this.clinet);
    }

}

const services = new Services();
export default services;
