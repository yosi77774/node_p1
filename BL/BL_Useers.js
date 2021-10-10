const Dal_Users = require('../Dals/Dal_Users');

exports.checkUser = async function(obj)
{
    let resp = await Dal_Users.getUsers();

   for (let index = 0; index < resp.length; index++) {
       
    let user = resp[index];

        if(user.Username == obj.Username & user.Password == obj.Password)
        {
            if (obj.Username == "admin" & obj.Password == "123456") 
            {
                return {"status" : 2};
                break;
            }
            else
            {
                console.log("\ntrue\n\n");
                return {"Transactions" : user.Transactions,status : 1};
                break;
            }
        }
        else if (resp.length==index+1) 
        {
            console.log("\nfalse\n\n");
            return {"status" : 0};
            break;
        }
       
   }
      
}


exports.Getusers = async function()
{
    let resp = await Dal_Users.getUsers();

    return resp;

}

exports.Add_User = async function(obj)
{
  
    let resp  = {"users" : await Dal_Users.getUsers()}

    obj.id=resp.users.length+1

    obj.Created = new Date();

    resp.users[resp.users.length] = obj

    let resp2 = await Dal_Users.saveUser(resp);
  
    return resp2;

      
}

exports.delete_User = async function(UserId)
{
  
    let resp  = {"users" : await Dal_Users.getUsers()}

    let resp2 = {"users" :[]}

    resp2.users = resp.users.filter(x => x.id != UserId)

    let status = await Dal_Users.saveUser(resp2);
  
    return status;
    
}

exports.UpdateUser = async function(obj)
{
  
    let resp  = {"users" : await Dal_Users.getUsers()}

    let resp2 = {"users" :[]}

    resp.users.forEach(x => {
        if(x.id == obj.id){
            resp2.users[resp2.users.length]  = { "Username" : obj.Username,"Password" : obj.Password,"Transactions" : obj.Transactions, "Created" : x.Created, "id" : x.id }
        }
        else if(x.id != obj.id){
            resp2.users[resp2.users.length]  = { "Username" : x.Username,"Password" : x.Password,"Transactions" : x.Transactions, "Created" : x.Created, "id" : x.id }
    }
    });

    let status = await Dal_Users.saveUser(resp2);
  
    return status;
    
}

