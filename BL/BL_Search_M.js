const Dal_API_M = require('../Dals/Dal_API_M');
const Dal_New_M = require('../Dals/Dal_New_M');

const Search = async function(obj)
{
    let resp = await Dal_API_M.getMovies();
    let resp2 = await Dal_New_M.getMovie();
    //let Movies2 = resp2.data;
    let Movies = resp.data;
    let str = obj.Name.toString();
    let MoviesArr = {"Movies":[],"M_genres":[]}

   // Movies[Movies.length] = Movies2.Movies.map(x => x.Name,x.Language,x.genres)

 
   console.log(Movies.length+"-------------------");
   console.log(resp2.Movies.length+"-------------------");

    resp2.Movies.forEach(x => {
        Movies[Movies.length] = {"name" : x.Name, "language" : x.Language, "genres" : x.genres,"image":{"medium":x.image}}
        console.log(Movies.length+"-------------------"+ Movies[240].name);
    });


     MoviesArr.Movies =  Movies.filter(x =>(x.name.indexOf(str)+1)==1 &&  x.language == obj.Language && x.genres[0] == obj.genres | x.genres[1] == obj.genres | x.genres[2] == obj.genres/**/);
     console.log(MoviesArr.Movies.length+"-------------------");

     
   let i = 0;

     MoviesArr.M_genres =  Movies.filter(x => i++ < 50 &&(x.name.indexOf(str)+1)==0 && x.genres[0] == obj.genres | x.genres[1] == obj.genres | x.genres[2] == obj.genres/**/);
     console.log(MoviesArr.M_genres.length+"-------------------");

    return MoviesArr;

}

module.exports = {Search}

