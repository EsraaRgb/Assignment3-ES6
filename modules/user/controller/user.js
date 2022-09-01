import sql from "../../../DB/connection.js";
const getAllUsers = (req, res) => {
    sql.execute(`SELECT * FROM users WHERE isDeleted = ${0}`, (err, result, field) => {
        if (!err) {
            console.log(field);
            res.json(result);
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }

    })
}
const addUser = (req, res) => {
    const { name, age, phone, email } = req.body
    sql.execute(`INSERT INTO users (name,age,phone,email) values ('${name}', ${age},'${phone}','${email}')`
        , (err, result, field) => {
            if (!err) {
                res.json(result);
            }
            else {
                console.log(err);
                res.json({ message: "server error" })
            }
        })
}
const UpdateUserByID = (req, res) => {
    const { id } = req.params
    const { name, age, phone, email } = req.body
    sql.execute(`update users SET name = '${name}' WHERE id= ${id} AND isDeleted = 0`, (err, result, field) => {
        if (!err) {
            res.json(result)
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }

    })
}
const DeleteUserByID = (req, res) => {
    const { id } = req.params
    sql.execute(`delete FROM users WHERE id = ${id}`, (err, result, field) => {
        if (!err) {
            result.affectedRows == true ? res.json({ message: "done" }) : res.json({ message: "In-valid ID" })
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }

    })
}
const GetUserByID = (req, res) => {
    const { id } = req.params
    sql.execute(`SELECT * FROM users WHERE id =${id} AND isDeleted = 0`, (err, result, field) => {
        if (!err) {
            result.length != 0 ? res.json(result) : res.json({ message: "In-valid ID" })
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }

    })
}

const getAllUsersReversed = (req, res) => {
    sql.execute(`SELECT * FROM users WHERE isDeleted = 0`, (err, result, field) => {
        if (!err) {
            res.json(result.reverse())
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }

    })

}

//============================   SEARCH   ============================


const searchByName = (req, res) => {
    const { name } = req.query
    sql.execute(`SELECT * FROM users WHERE name LIKE '${name}' AND isDeleted = 0`, (err, result, field) => {
        if (!err) {
            res.json(result)
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }

    })
}
const searchByAge = (req, res) => {
    const { start, end } = req.query
    sql.execute(`SELECT * FROM users  WHERE age > ${start} AND age < ${end}  AND isDeleted = 0`, (err, result, field) => {
        if (!err) {
            res.json(result)
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }

    })
}
const getUserStartWith = (req, res) => {
    const { letter } = req.query
    sql.execute(`SELECT * FROM users WHERE name LIKE '${letter}%' AND age < 30  AND isDeleted = 0`, (err, result, field) => {
        if (!err) {
            res.json(result)
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }
    })
}

const getUserEndWith = (req, res) => {
    const { letter } = req.query
    sql.execute(`SELECT * FROM users WHERE name LIKE '%${letter}' AND age > 50  AND isDeleted = 0`, (err, result, field) => {
        if (!err) {
            res.json(result)
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }
    })
}

const getUserContain = (req, res) => {
    const { letter } = req.query
    sql.execute(`SELECT * FROM users WHERE name LIKE '%${letter}%' AND age > 20 AND age < 25  AND isDeleted = 0`, (err, result, field) => {
        if (!err) {
            res.json(result)
        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }
    })
}



const softDeleteUser = (req, res) => {
    const { id } = req.params
    sql.execute(`UPDATE users SET isDeleted  = 1 WHERE id = ${id} AND isDeleted = 0`, (err, result, field) => {
        if (!err) {
            result.affectedRows == 1 ? res.json({ message: "user is soft deleted", result }) : res.json({ message: "In-valid ID" });

        }
        else {
            console.log(err);
            res.json({ message: "server error" })
        }

    })
}
export default {
    getAllUsers,
    addUser,
    UpdateUserByID,
    DeleteUserByID,
    GetUserByID,
    searchByName,
    getAllUsersReversed,
    searchByAge,
    getUserStartWith,
    getUserEndWith,
    getUserContain,
    softDeleteUser
}


