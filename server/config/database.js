import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  database: 'blog',
  port: 3306,
});

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Conexión a la base de datos exitosa');
    connection.release();
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
  }
};

testConnection();

export default pool;