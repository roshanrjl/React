import conf from "../config/config";
import { Client, ID, Databases, Storage,Query } from "appwrite";

export class Services{
    clinet = new Client()
    databases;
    Storage;
    
    constructor(){
        this.clinet
          .setEndpoint(conf.appwriteurs)
          .setProject(conf.appwriteProjectId);
    
  
        this.Databases = new Databases(this.clinet);
        this.Storage = new Storage(this.clinet);
    }


    async createpost({title,slug, content, featuredImage, status,userId}){
      try{
        return await this.databases.createDocument(
              conf.appwriteDatabase,
            conf.appwriteCollection,
            slug,
            {
              title,
              content,
              featuredImage,
              status,
               }
        )

      }catch(e){
        console.log("Error creating post:", e);
      }     

    }

    async updatepost(slug,{title, content, featuredImage, status,}){
      try{
        return await this.databases.updateDocument(
          conf.appwriteDatabase,
          conf.appwriteCollection,
          slug,
          {
            title,
            content,
            featuredImage,
            status,
          }
        )

      }catch(e){
        console.log("Error creating post:", e);
      }

}

    async deletepost(slug){
      try{
        await this.databases.deleteDocument(
          conf.appwriteDatabase,
          conf.appwriteCollection,
          slug
        )
        return true;
        
      }
      catch(e){
        console.log("Error creating post:", e);
        return false;
      }


}

    async getpost(slug){
      try{
        return await this.databases.getDocument(
          conf.appwriteDatabase,
          conf.appwriteCollection,
          slug
        )

      }catch(e){
        console.log("Error creating post:", e);
        return false;
      }
    }

    async getposts(queries = [Query.equal("status", "active")]){
      try{
        return await this.databases.listDocuments(
          conf.appwriteDatabase,
          conf.appwriteCollection,
          queries
        )
      }catch(e){
        console.log("Error creating post:", e);
        return false;
      }

    }

    async uploadfile(file){
      try{
         return await this .Storage.createFile(
          conf.appwriteBUcketId,
          ID.unique(),
          file,
         )

      }catch(e){
        console.log("Error creating post:", e);
        return false;
      }
    }
     //delete file
    async deletefile(fileId){
      try{
        return await this.Storage.deleteFile(
          conf.appwriteBUcketId,
          fileId
        )
      }catch(e){
        console.log("Error creating post:", e);
        return false;
      }
    }
     getfilepreview(fileId){
      try{
        return this.Storage.getFilePreview(
          conf.appwriteBUcketId,
          fileId,      
        )
      }catch(e){
        console.log("Error creating post:", e);
        return false;
      }

}

}

const services = new Services();
export default services;
