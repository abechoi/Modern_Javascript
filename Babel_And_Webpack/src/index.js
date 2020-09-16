import { styleBody, addTitle, contact } from "./dom";
import users, { getPremUsers } from "./data";

const premUsers = getPremUsers(users);

console.log("index file");
addTitle("TEST");
styleBody();
console.log(contact);
console.log(users);
console.log(premUsers);
console.log("test 3");