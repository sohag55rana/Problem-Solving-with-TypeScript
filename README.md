Assignment: Problem Solving with TypeScript

Name: Md Sohag Rana
Email: sohag55rana@gmail.com

১/ TypeScript এ interface এবং type এর পার্থক্য

TypeScript এ interface আর type দুটিই ডাটা টাইপ ডিফাইন করার জন্য ব্যবহার করা হয়। এদের মধ্যে কছু পার্থক্য আছে।
১/ Interface ক্ষেত্রে extends কিওয়ার্ড ব্যবহার করে অন্যটির সাথে যুক্ত করা হয়, কিন্তু type এর ক্ষেত্রে না।
২/ Interface ক্ষেত্রে একই নামে একাধিকবার ইন্টারফেস করা জায়, সে ক্ষেত্রে একটির সাথে অন্যটি জোড়া লাগিয়ে দেবে। কিন্তু type e হয় না।
৩/ Interface এ object, class এর ক্ষেত্রে ভাল, আর type জেকোন ক্ষেত্রে ব্যববহার করা জায় ।

interface User {
name: string;
age: number;
}
type User = {
name: string;
age: number;
};

২/ keyof keyword এর ব্যবহার
keyof ব্যবহার করে আমরা কোন object er key গুলোকে union type করে থাকি।
type User = {
name: string;
age: number;
email: string;
};

type UserKeys = keyof User;

"name" | "age" | "email"
