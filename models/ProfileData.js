const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class ProfileData extends Model {}

ProfileData.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    profile_pic: {
      type: DataTypes.BLOB,
    },
    profile_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 20],
      },
    },
    profile_bio: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [10, 140],
      },
    },
    profile_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "profile",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "profileData",
  }
);

module.exports = ProfileData;
