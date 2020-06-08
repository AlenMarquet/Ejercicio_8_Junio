const db = require('../database/models/index.js');
const sequelize = db.sequelize;
const Movie = db.Movie;

const moviesController = {
    index: function(req, res){
      Movie.findAll().then(function(results){
          let moviesAll = results;

          return res.render('movies', {moviesAll});
      })
        
    },
    detail : function(req, res){
        Movie.findByPk(req.params.id).then(function(results){
            let movieDetail = results;
            return res.render('moviesDetail', {movieDetail});
        })
    },
    new : function(req, res){
        Movie.findAll({order:[['release_date', 'DESC'],], limit: 5 }).then(function(results){
            let moviesNew = results;
  
            return res.render('moviesNew', {moviesNew});
     
})
    },
    recommended : function(req, res){
        Movie.findAll({where :{ rating : {[db.Sequelize.Op.gt] :  8 }}}).then(function(results){ 
            let moviesRecommended = results;
  
            return res.render('moviesRecommended', {moviesRecommended});
     
})
    },
    search : function(req, res){
     
        Movie.findAll({where :{ title : {[db.Sequelize.Op.like] : '%' + req.body.pelicula + '%'  }}}).then(function(results){ 
            let moviesSearched = results;
  
            return res.render('moviesSearched', {moviesSearched});
    })

},
 delete : function(req, res){
     Movie.destroy({where :{id : req.params.id}})
    .then(function(){
        res.redirect('/movies');
    })
},
update: function(req, res){
    Movie.findByPk(req.params.id).then(function(results){
        let movieUpdate = results;
        return res.render('moviesUpdate', {movieUpdate});
    })
 },
 modify: function(req, res){
 Movie.update({title: req.body.title,
               rating: req.body.rating,
                awards: req.body.awards,
                release_date: req.body.release_date,
               length: req.body.length},
               {
                   where: {id:req.params.id}
               })
               res.redirect('/movies');
 }
}


    module.exports = moviesController ;