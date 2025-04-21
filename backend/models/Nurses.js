module.exports = (sequelize, DataTypes) => {
    const Nurses = sequelize.define("Nurses", {
      nurseid: {
        type: DataTypes.INTEGER,
        allowNull: true,       // MUST allow null because of ON DELETE SET NULL
        primaryKey: true,
        references: {
          model: 'Users',
          key: 'userid',
        },
        onDelete: 'SET NULL',
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
      timestamps: true,  // Adds createdAt and updatedAt
    });
  
    // Associations
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
  