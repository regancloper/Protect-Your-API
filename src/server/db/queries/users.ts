import { Query } from "../index";

const findOneByEmail = async (email: string) => Query('SELECT * FROM users WHERE email = ? LIMIT 1', [email]);

const findOneById = async (id: number) => Query('SELECT * FROM users WHERE id = ? LIMIT 1', [id]);

const insert = async (user: any) => Query('INSERT INTO users(email, password) VALUES (?, ?)', [user.email, user.password]);

export default {
    findOneByEmail,
    findOneById,
    insert
}