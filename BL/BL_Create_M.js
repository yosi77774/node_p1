const Dal_New_M = require('../Dals/Dal_New_M');

const AddMovie = async function(obj)
{
    let resp = await Dal_New_M.getMovie();

     resp.Movies[resp.Movies.length] = {"Name" : obj.Name,"Language": obj.Language,"genres": obj.genres,"image":obj.image} 


    let resp2 = await Dal_New_M.saveMovie(resp);

    return resp2 ;    

}

module.exports = {AddMovie}