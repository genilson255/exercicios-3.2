import connection from './connection';

const getAll = async () => {
   const [rows] await connection.execute('SELECT id, name, email, password from users;');
   return rows as TUser[];

}
export default {getAll};