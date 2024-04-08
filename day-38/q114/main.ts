import { off } from "process";

const studentMap: Map<number, string> = new Map();
studentMap.set(10, "Michael");
studentMap.set(20, "Emily");
studentMap.set(30, "David");

studentMap.forEach((name, id) => {
  console.log(`Student ID: ${id}, Name: ${name}`);
});
