class Player {
    constructor(id, username, email, characterSelect, level) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.characterSelect = characterSelect;
        this.level = level;
    }

    walk() {
        console.log("Andou...");
    }
}

const player1 = new Player(1, "Jeff", "jeff@example.com", "warrior", 10);

for(let i = 0; i < 1000; i++ ) {
    console.log(`O player ${player1.username}, ${player1.characterSelect} de level ${player1.level}`);
    player1.walk();
}

