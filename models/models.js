const sequelize = require("../db.js")
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true,autoIncrement: true},
    email: {type: DataTypes.STRING, unique:true},
    password:{type:DataTypes.STRING,}
});

const Basket = sequelize.define('basket',{
    id:{type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
});

const BasketDevice = sequelize.define('basket_device',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
});

const Detail = sequelize.define('detail',{
    detail_id:{type:DataTypes.INTEGER,primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
    price:{type:DataTypes.INTEGER, allowNull:false},
    img:{type:DataTypes.STRING, allowNull:false}
});

const DetailInfo = sequelize.define('detail_info',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.INTEGER,allowNull:false}
});

const Type = sequelize.define('type',{
    id_type:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique: true, allowNull:false}
});

const Brand = sequelize.define('brand',{
    id_brand:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false}
});


const TypeBrand = sequelize.define('typebrand',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

User.hasOne(Basket)
Basket.belongsTo(User)

Basket.hasMany(BasketDevice)
BasketDevice.belongsTo(Basket)

BasketDevice.hasOne(Detail)
Detail.belongsTo(BasketDevice)

Detail.hasMany(DetailInfo)
DetailInfo.belongsTo(Detail)

Brand.hasMany(Detail)
Detail.belongsTo(Brand)

Type.hasMany(Detail)
Detail.belongsTo(Type)

Type.hasOne(Brand , {through: TypeBrand})
Brand.belongsTo(Type,  {through: TypeBrand})


module.exports = {
    User,
    Basket,
    BasketDevice,
    Detail,
    DetailInfo,
    Type,
    Brand,
    TypeBrand
}