import {RowDataPacket} from 'mysql2/promise';
import {TUser} from '../types';
import connection from './connection';


// RowDataPacket = usado quando fizer um SELECT
// ResulSetHeader = usado quando fizer um INSERT, DELETE OU UPDATE// okPacket = set
const getAll = async (): Promise<TUser[]> => {
  // O password dessa function na aula nao foi colocado
   const [rows] = await connection.execute<RowDataPacket[] & TUser[]> ('SELECT id, name, email, password from users;');
   return rows;

}
export default {getAll};