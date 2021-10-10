const jsonfile = require("jsonfile");


exports.getMovie = () =>
{
    return new Promise((resolve, reject) =>
    {
      jsonfile.readFile(__dirname + "/New_M.json", function(err,data)
      {
         if(err)
         {
            reject(err)
         }
         else
         {
     
            resolve(data)
         }
      })
   })
}

exports.saveMovie = (obj) =>
{
    return new Promise((resolve,reject) =>
    {
        jsonfile.writeFile(__dirname + "/New_M.json",obj,function(err)
        {
            if(err)
            {
                reject(err);
            }
            else
            {
                resolve("Created");
            }
        })
    })
    
}

