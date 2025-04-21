<<<<<<< HEAD
module.exports = (sequelize, DataTypes) => {
    const Nurses = sequelize.define("Nurses", {
      nurseid: {
        type: DataTypes.INTEGER,
        allowNull: true,       // ✅ MUST allow NULL because ON DELETE SET NULL
        primaryKey: true,
        references: {
          model: 'Users',      // references Users table
          key: 'userid',       // references the userid field
=======
module.exports = (sequelize, DataTypes)=>{
    const Nurses = sequelize.define("Nurses",{
        nurseid: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            references:{
                
                model:'Users',
                key: 'userid'
            },  
>>>>>>> 0366fe55bc3752945029691784463e4a1ea98b47
        },
        onDelete: 'SET NULL',   // ✅ Important: what happens if user is deleted
        onUpdate: 'CASCADE',
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      lastname: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      dateofbirth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      phonenumber: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
    }, {
      timestamps: true,    // ✅ createdAt and updatedAt columns
    });
  
    // Associations (optional, if needed later)
    Nurses.associate = (models) => {
      Nurses.belongsTo(models.Users, {
        foreignKey: 'nurseid',
        targetKey: 'userid',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      });
    };
  
    return Nurses;
  };
  