import {RowDataPacket} from 'mysql2/promise';
import {TUser} from '../types';
import connection from './connection';

const getAll = async () => {
  // O password dessa function na aula nao foi colocado
   const [rows] = await connection.execute<>,RowDataPacket('SELECT id, name, email, password from users;');
   return rows as TUser[];

}
export default {getAll};