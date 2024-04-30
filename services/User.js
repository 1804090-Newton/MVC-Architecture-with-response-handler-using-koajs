const getUsersData = require('../models/User');

const User = {
  getAll() {
    const usersData = getUsersData();
    return usersData;
  },
  getById(id) {
    const usersData = getUsersData();
    return usersData.find(user => user.id == id);
  },
  createUser(userData) {
    const usersData = getUsersData();
    const newUser = { id: Date.now(), ...userData };
    usersData.push(newUser);
    return usersData;
  },
  updateUser(id, userData) {
    const usersData = getUsersData();
    const index = usersData.findIndex(user => user.id == id);
    if (index !== -1) {
      usersData[index] = { ...usersData[index], ...userData };
      return usersData[index];
    }
    return null;
  },
  deleteUser(id) {
    const usersData = getUsersData();
    const index = usersData.findIndex(user => user.id == id);
    if (index !== -1) {
      const deletedUser = usersData.splice(index, 1)[0];
      return deletedUser;
    }
    return null;
  }
};

module.exports = User;
