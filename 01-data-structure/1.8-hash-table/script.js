const { inspect } = require('util');
class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    };

    _hash(key) {
        let total = 0;
        let WEIRED_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96;
            total = (total * WEIRED_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }

    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1];
                }
            }
            return this.keyMap[index];
        }
        return undefined;
    }

    values() {
        let valuesArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
                }
            }
        }
        return valuesArr;
    }

    keys() {
        let keysArr = [];
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
    }
}

let ht = new HashTable();

ht.set("maroon", "#800000");
ht.set("yellow", "#ffff00");
ht.set("olive", "#808000");
ht.set("salmon", "#faf8072");
ht.set("lightcoral", "#f08080");
ht.set("mediumvioletred", "#c71585");
ht.set("plum", "#dda0dd");
ht.set("magic", "#dda0dd");
ht.set("purple", "#dda0dd");

console.log(ht.get('maroon'));
console.log(inspect(ht, { showHidden: false, depth: null }));