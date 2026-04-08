import fs from "fs/promises";

async function readFruits() {
  const data = await fs.readFile("./fruits.json", "utf-8");
  const fruits = JSON.parse(data);
  return fruits;
}

async function writeFruits(fruits) {
  const data = JSON.stringify(fruits, null, 2);
  await fs.writeFile("./fruits.json", data, "utf-8");
}

async function getAllFruits() {
  const fruits = await readFruits();
  return fruits;
}

async function getFruitById(id) {
  const fruits = await readFruits();
  const fruit = fruits.find(item => item.id === Number(id));
  return fruit;
}

async function createFruit(name) {
  const fruits = await readFruits();

  const alreadyExists = fruits.some(
    item => item.name.toLowerCase() === name.toLowerCase()
  );

  if (alreadyExists) {
    console.log("Fruit already exists")
    return null
  }

  const newFruit = {
    id: fruits.length > 0 ? fruits[fruits.legnth - 1].id + 1 : 1,
    name: name
  }

  fruits.push(newFruit);
  await writeFruits(fruits)

  return newFruit
}

async function updateFruit(id, newName) {
  const fruits = await readFruits();
  const index = fruits.findIndex(item => item.id === Number(id));

  if (index === -1) {
    return null;
  }

  fruits[index].name = newName;
  await writeFruits(fruits);

  return fruits[index];
}

async function deleteFruit(id) {
  const fruits = await readFruits();
  const index = fruits.findIndex(item => item.id === Number(id));

  if (index === -1) {
    return false;
  }

  fruits.splice(index, 1);
  await writeFruits(fruits);

  return true;
}

async function getFruitByName(name) {
  const fruits = await readFruits();
  const fruit = fruits.find(item => item.name.toLowerCase() === name.toLowerCase()
  );

  return fruit;
}

async function resetFruits() {
  await writeFruits([
    {
    "id": 1,
    "name": "Maçã Gala",
    "color": "Red",
    "price": 3.55
  },
  {
    "id": 2,
    "name": "Banana",
    "color": "Yellow",
    "price": 5
  },
  {
    "id": 3,
    "name": "Abacaxi",
    "color": "Green",
    "price": 2.99
  }
  ]);
}


const allFruits = await getAllFruits();
console.log("Todas as frutas:");
console.log(allFruits);

const fruit = await getFruitById(1);
console.log("Buscar fruta por id:");
console.log(fruit);

const createdFruit = await createFruit("Abacaxi");
console.log("Fruta criada:");
console.log(createdFruit);

const updatedFruit = await updateFruit(1, "Maçã Gala");
console.log("Fruta atualizada:");
console.log(updatedFruit);

const deleted = await deleteFruit(3);
console.log("Fruta removida com sucesso?");
console.log(deleted);

const finalList = await getAllFruits();
console.log("Lista final:");
console.log(finalList);

const fruitName = await getFruitByName();
console.log(fruitName);

const resetFruits = await resetFruits();
console.log(resetFruits)