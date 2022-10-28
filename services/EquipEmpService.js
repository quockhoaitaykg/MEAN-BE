const empModel = require("../models/EquipEmp");

exports.getAll = async () => {
  return await empModel.aggregate([
    { $lookup:
       {
         from: 'equipment',
         localField: '_id',
         foreignField: '_id',
         as: 'equipment'
       }
     },
     { $lookup:
      {
        from: 'employees',
        localField: 'emp_id',
        foreignField: '_id',
        as: 'employee'
      }
    }
    ]);
};

exports.create = async (p) => {
  return await empModel.create(p);
};

exports.getById = async (id) => {
  return await empModel.findById(id);
};

// exports.updateEmployee = async (id, p) => {
//   return await empModel.findByIdAndUpdate(id, p);
// };

exports.delete= async (id) => {
  return await empModel.findByIdAndDelete(id);
};
