module.exports = (sequelize, dataTypes)=> {
    const alias = 'Movie';
    const cols = {
        id :{ type : dataTypes.INTEGER ,primaryKey: true, autoIncrement: true},
        title: dataTypes.STRING,
        rating : dataTypes.DOUBLE,
        awards : dataTypes.INTEGER,
        length : dataTypes.INTEGER,
        release_date: dataTypes.DATE,
    }
    const config = {
        timestamps : true
    }
 
     const Movie = sequelize.define(alias, cols, config);
 
 
     return Movie;
 }