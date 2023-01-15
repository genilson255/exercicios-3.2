import userModel from '../models/userModel';
const getAll = async(): Promise<TUser[]> => {
  const users = await userModel.getAll();
  return users;
}
export default {getAll}; 