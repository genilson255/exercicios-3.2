import {Request, Result} from 'express'
import userService from '../service/userService';

const getAll = async (req: Request, res: Result) => {
  const result = await userService.getAll();
  res.status(200).json(users);
}
export default {getAll};





