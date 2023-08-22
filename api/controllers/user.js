import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM usuarios";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q =
        "INSERT INTO usuarios(`nome`, `email`, `fone`, `data_nascimento`, `endereco`) VALUES(?)";

    let endereco = req.body.rua + ' ' + req.body.bairro + ' ' + req.body.cidade + ' ' + req.body.estado
    
    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
        req.body.rua
    ];

    db.query(q, [values], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (req, res) => {
    const q =
        "UPDATE usuarios SET `nome` = ?, `email` = ?, `fone` = ?, `data_nascimento` = ?, `endereco` = ?  WHERE `id` = ?";

    let endereco = req.body.rua + ' ' + req.body.bairro + ' ' + req.body.cidade + ' ' + req.body.estado

    const values = [
        req.body.nome,
        req.body.email,
        req.body.fone,
        req.body.data_nascimento,
        endereco
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteUser = (req, res) => {
    const q = "DELETE FROM usuarios WHERE `id` = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Usuário deletado com sucesso.");
    });
};