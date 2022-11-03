import mysql from 'mysql2';

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '0000',
    database: 'week10',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});

const promisePool = pool.promise();

export const selectSql = {
    getUsers: async () => {
        const sql = `select * from user`;
        const [rows] = await promisePool.query(sql);

        return rows;
    },

    getDepartment: async () => {
        const sql = `select * from department`;
        const [rows] = await promisePool.query(sql);

        return rows;
    },
}

export const deleteSql = {
    deleteDepartment: async (data) => {
        console.log("deleteSql.deleteDepartment:", data, Dnumber);
        const sql = `delete from department where Dnumber=${data.Dnumber}`;

        await promisePool.query(sql);
    },
};