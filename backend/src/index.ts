import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {

    console.log("DB initalized...");

}).catch(error => console.log(error))
