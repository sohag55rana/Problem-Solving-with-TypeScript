const formatValue = (
  param: string | number | boolean
): string | number | boolean => {
  if (typeof param === "string") {
    return param.toUpperCase();
  } else if (typeof param === "number") {
    return param * 10;
  } else {
    return !param;
  }
};

const getLength = (value: string | unknown[]): number => {
  if (typeof value === "string") {
    return value.length;
  }
  if (Array.isArray(value)) {
    return value.length;
  }
  return 0;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

const filterByRating = (
  books: { title: string; rating: number }[]
): { title: string; rating: number }[] => {
  const filterBook = books.filter((book) => book.rating >= 4);
  return filterBook;
};

const filterActiveUsers = (
  users: { id: number; name: string; email: string; isActive: boolean }[]
): { id: number; name: string; email: string; isActive: boolean }[] => {
  const activeUser = users.filter((user) => user.isActive === true);
  return activeUser;
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
const printBookDetails = (book: Book) => {
  const availableBook = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${availableBook}`
  );
};

const getUniqueValues = <T extends string | number>(
  array1: T[],
  array2: T[]
): T[] => {
  const result: T[] = [];
  for (let i = 0; i < array1.length; i++) {
    let isExist = false;
    for (let j = 0; j < result.length; j++) {
      if (array1[i] === result[j]) {
        isExist = true;
        break;
      }
    }
    if (!isExist) {
      result[result.length] = array1[i]!;
    }
  }
  for (let i = 0; i < array2.length; i++) {
    let isExist = false;

    for (let j = 0; j < result.length; j++) {
      if (array2[i] === result[j]) {
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      result[result.length] = array2[i]!;
    }
  }
  return result;
};

type Item = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};
const calculateTotalPrice = (products: Item[]): number => {
  if (products.length === 0) {
    return 0;
  }
  const total = products
    .map((item) => {
      const price = item.price * item.quantity;

      if (item.discount !== undefined) {
        const discountAmount = (price * item.discount) / 100;
        return price - discountAmount;
      }

      return price;
    })
    .reduce((sum, current) => sum + current, 0);

  return total;
};
