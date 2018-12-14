// ! ADAPTER: It's when you take an object, keep its interface, but adapt it to a new environment or solution. Adapters make incompatible classes become compatible.
// ! Intent: Convert the interface of a class into another interface that clients expect. Adapters lets classes work together that couldn't otherwise because of incompatible interfaces.

// ! Problem: there is no `localStorage` API within Node.js
// * console.log('localStorage length: ', localStorage.length);
// Solution: create an adaptor
const localStorage = require('./localStorage');

console.log('localStorage length: ', localStorage.length);

const uid = localStorage.getItem('user_id');

console.log('user_id: ', uid);

if (!uid) {
  console.log('User ID not found. Setting the user id and token...');
  localStorage.setItem('token', 'TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
  localStorage.setItem('user_id', '12345');
} else {
  console.log('User ID found.', uid);
  console.log('clearning the User ID...');
  localStorage.clear();
}
