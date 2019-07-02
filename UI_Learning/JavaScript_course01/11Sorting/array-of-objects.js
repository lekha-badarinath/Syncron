const newObj = [
    {
        name: "John",
        age: 25
    },
    {
        name: "Jane",
        age: 24
    }
];

console.log(
    newObj.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        } else if (a.name < b.name) {
            return -1;
        } else {
            return 0;
        }
    })
);
