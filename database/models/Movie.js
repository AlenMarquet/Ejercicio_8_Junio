module.exports = (sequelize, dataTypes)=> {
    const alias = 'Movie';
    const cols = {
        id :{ type : dataTypes.INTEGER ,primaryKey: true},
        title: dataTypes.STRING,
        rating : dataTypes.STRING,
        awards : dataTypes.STRING,
        length : dataTypes.STRING,
        release_date: dataTypes.DATE,
    }
    const config = {
        timestamps : true
    }
 
     const Movie = sequelize.define(alias, cols, config);
 
 
     return Movie;
 }