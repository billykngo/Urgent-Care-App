module.exports = (sequelize, DataTypes) => {
    const Nurses = sequelize.define("Nurses", {
      nurseid: {
        type: DataTypes.INTEGER,
        allowNull: true,       // ✅ MUST allow NULL because ON DELETE SET NULL
        primaryKey: true,
        references: {
          model: 'Users',      // references Users table
          key: 'userid',       // references the userid field
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
  