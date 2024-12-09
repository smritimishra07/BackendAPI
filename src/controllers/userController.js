const getUsers = (req, res) => {
    const users = [
        { id: 1, name: 'smriti', email: 'smriti@valuebound.com' },
        { id: 2, name: 'raunak', email: 'raunak@valuebound.com' },
    ];

    res.status(200).json(users);
};

module.exports = { getUsers };
