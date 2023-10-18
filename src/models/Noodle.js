module.exports = (sequelize, DataTypes) => {
    const Noodle = sequelize.define('Noodle', {
        noodle_name: DataTypes.STRING,
        noodles: DataTypes.STRING,
        noodle_soup: DataTypes.STRING,
        noodle_topping: DataTypes.STRING,
        vegatable: DataTypes.STRING
    })
    return Noodle
}