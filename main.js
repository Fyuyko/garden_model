class Apple {
    constructor() {
        this.age = Math.floor(Math.random() * 31); // случайный возраст от 0 до 31
        this.color =  this.age < 15 ? "green" : "red";
        this.size =  this.age < 15 ? "little" : "big";
        this.isSpoiled = 0; // флаг испорченности (0 - свежее, 1 - испорченное)
        this.hasFallen = 0; // флаг упавшего с дерева (0 - на дереве, 1 - упало)
    }

    // Метод для яблока, которое упало с дерева
    fall() {
        this.hasFallen = 1;
    }

    // Метод для яблока, которое испортилось
    spoil() {
        if (this.hasFallen) {
            this.isSpoiled = 1;
        }
    }

    // Метод прохождения суток для яблока
    ageOneDay() {
        this.age += 1;
        if (this.age === 30) {
            this.fall();
        }
        if (this.hasFallen) {
            this.spoil();
        }
    }
}

// Класс Дерево
class Tree {
    constructor(numApples) {
        this.apples = [];
        for (let i = 0; i < numApples; i++) {
            this.addApple();
        }
    }

    // Метод для добавления яблок на дерево
    addApple() {
        const newApple = new Apple();
        this.apples.push(newApple);
    }

    // Метод для прохождения сутки на дереве
    passDay() {
        for (let i = 0; i < this.apples.length; i++) {
            this.apples[i].ageOneDay();
        }

        // 50% вероятность, что яблоко упадет через 28 или 32 дня
        const randomFall = Math.random();
        if (randomFall < 0.5) {
            for (let i = 0; i < this.apples.length; i++) {
                if (this.apples[i].age === 28 && this.apples[i].hasFallen === 0) {
                    this.apples[i].fall();
                }
            }
        } else {
            for (let i = 0; i < this.apples.length; i++) {
                if (this.apples[i].age === 32 && this.apples[i].hasFallen === 0) {
                    this.apples[i].fall();
                }
            }
        }
    }
}

// Класс Сад
class Garden {
    constructor(numTrees, numApples) {
        this.trees = [];
        for (let i = 0; i < numTrees; i++) {
            const tree = new Tree(numApples);
            this.trees.push(tree);
        }
        this.age = 0; // возраст сада (количество суток)
    }

    // Метод для прохождения суток в саду
    passDay() {
        this.age += 1;
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].passDay();

            if (this.age % 30 === 0) {
                this.trees[i].addApple();
            }
        }
    }

    // Метод для получения количества яблок на всех деревьях
    getCountApples() {
        let count = 0;
        for (let i = 0; i < this.trees.length; i++) {
            count += this.trees[i].apples.length;
        }
        return count;
    }
}

// Создаем сад с N деревьями и N2 яблоками на каждом (N и N2 - любые числа не больше 100)
const garden = new Garden(5, 3);

garden.passDay();
garden.passDay();
garden.passDay();

console.log("Количество яблок в саду: " + garden.getCountApples());

garden.passDay();

console.log("Количество яблок в саду: " + garden.getCountApples());

garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();
garden.passDay();

console.log("Количество яблок в саду: " + garden.getCountApples());