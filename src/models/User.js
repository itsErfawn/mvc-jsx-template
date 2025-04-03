class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    static getAll() {
        return [
            new User(1, 'علی محمدی', 'ali@example.com'),
            new User(2, 'مریم احمدی', 'maryam@example.com')
        ];
    }

    static findById(id) {
        const users = this.getAll();
        return users.find(user => user.id === id);
    }
}

module.exports = User; 