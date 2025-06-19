const sql = require("mssql");

const config = {
    user: "sa",
    password: "yourStrong(!)Password",
    server: "localhost",
    database: "MyDatabase",
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};


async function executeStoredProc(userId) {
    try {
        const pool = await sql.connect(config);
        const result = await pool
            .request()
            .input("UserID", sql.Int, userId)
            .execute("sp_GetUserDetails");
        const userDetails = result.recordset;
        const additionalData = result.recordsets[1];
        return { userDetails, additionalData };
    } catch (error) {
        console.error(error);
        throw error;
    } finally {
        await sql.close();
    }
}

executeStoredProc(123)
    .then((result) => {
        console.log(result.userDetails, result.additionalData);
    })
    .catch((error) => {
        console.error(error);
    });
