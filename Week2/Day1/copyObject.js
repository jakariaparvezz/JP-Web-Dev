// Shallow copy

const original1 = {
  name: "Rahim",
  age: 22
};

const copy1 = { ...original1 };

copy1.name = "Karim";

console.log(original1.name); // Rahim
console.log(copy1.name);    // Karim

// Deep copy using structuredClone()

const original2 = {
  name: "Rahim",
  address: {
    city: "Dhaka"
  }
};

const copy = structuredClone(original2);

copy.address.city = "Chittagong";

console.log(original2.address.city); // Dhaka
console.log(copy.address.city);    // Chittagong