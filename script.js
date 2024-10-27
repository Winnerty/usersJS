"use strict"
const users = [
	{
		userName: "Alice",
		lastName: "Johnson",
		age: 30,
		address: {
			street: "Oak Avenue",
			number: 45,
			house: true,
		},
		role: "Software Engineer",
	},
	{
		userName: "Charlie",
		lastName: "Smith",
		age: 27,
		address: {
			street: "Maple Street",
			number: 101,
			house: false,
		},
		role: "Project Manager",
	},
	{
		userName: "Diana",
		lastName: "Brown",
		age: 35,
		address: {
			street: "Elm Road",
			number: 88,
			house: true,
		},
		role: "UX Designer",
	},
	{
		userName: "Eve",
		lastName: "Davis",
		age: 21,
		address: {
			street: "Birch Lane",
			number: 7,
			house: false,
		},
		role: "Intern",
	},
	{
		userName: "Frank",
		lastName: "Miller",
		age: 40,
		address: {
			street: "Pine Street",
			number: 200,
			house: true,
		},
		role: "CTO",
	},
	{
		userName: "Grace",
		lastName: "Wilson",
		age: 28,
		address: {
			street: "Cedar Avenue",
			number: 99,
			house: false,
		},
		role: "Marketing Specialist",
	},
	{
		userName: "Henry",
		lastName: "Moore",
		age: 33,
		address: {
			street: "Poplar Road",
			number: 16,
			house: true,
		},
		role: "HR Manager",
	},
	{
		userName: "Ivy",
		lastName: "Taylor",
		age: 25,
		address: {
			street: "Willow Street",
			number: 52,
			house: false,
		},
		role: "Sales Associate",
	},
	{
		userName: "Jack",
		lastName: "Anderson",
		age: 29,
		address: {
			street: "Spruce Avenue",
			number: 78,
			house: true,
		},
		role: "DevOps Engineer",
	},
	{
		userName: "Karen",
		lastName: "Thomas",
		age: 37,
		address: {
			street: "Chestnut Street",
			number: 65,
			house: false,
		},
		role: "Finance Manager",
	},
	{
		userName: "Leo",
		lastName: "Harris",
		age: 22,
		address: {
			street: "Fir Lane",
			number: 10,
			house: true,
		},
		role: "Data Analyst",
	},
]

const container = document.getElementById("my_container");

function getAddressString(address) {
    return `${address.number} ${address.street}`;
}

users.forEach(user => {
	const card = document.createElement("article");
    card.classList.add("card");

    const cardImage = document.createElement("div");
    cardImage.classList.add("card-image");
    const img = document.createElement("img");

	if(user.userName == "Charlie" || user.userName == "Frank" || user.userName == "Henry" || user.userName == "Jack" || user.userName == "Leo")
		img.src = "./assets/02.jpg";
	else
		img.src = "./assets/01.jpg";

    img.alt = user.userName;
    const cardTitle = document.createElement("span");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = user.userName;
    cardImage.appendChild(img);
    cardImage.appendChild(cardTitle);

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const ul = document.createElement("ul");
    ul.classList.add("list-group");

    const nameItem = document.createElement("li");
    nameItem.classList.add("list-group-item");
    nameItem.innerHTML = `<strong>Name:</strong> ${user.userName} ${user.lastName}`;

    const ageItem = document.createElement("li");
    ageItem.classList.add("list-group-item");
    ageItem.innerHTML = `<strong>Age:</strong> ${user.age}`;

    const addressItem = document.createElement("li");
    addressItem.classList.add("list-group-item");
    const addressImgSrc = user.address.house ? "./assets/house.svg" : "./assets/apart.svg";
    addressItem.innerHTML = `<strong>Address:</strong> ${getAddressString(user.address)} <img class="list-group-img" src="${addressImgSrc}" alt="">`;

    const roleItem = document.createElement("li");
    roleItem.classList.add("list-group-item");
    roleItem.innerHTML = `<strong>Role:</strong> ${user.role}`;

    ul.appendChild(nameItem);
    ul.appendChild(ageItem);
    ul.appendChild(addressItem);
    ul.appendChild(roleItem);

    cardContent.appendChild(ul);
    card.appendChild(cardImage);
    card.appendChild(cardContent);

    container.appendChild(card);
});
