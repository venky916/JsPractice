// regex patterns in JavaScript are written inside forward slashes /pattern/.
// /pattern/flags
// /\d+/g          // matches digits globally
// /[a-z]/i        // matches letters, case insensitive
// /hello/         // matches "hello"

// Alternative: You can also use the RegExp constructor for dynamic patterns:
// new RegExp("pattern", "flags");

// [] and () are different
// [] = Character class - matches ANY single character inside

// [\w.-] = match word characters, dots, or hyphens (one character at a time)
// () = Capture group - groups multiple characters/patterns together

// [abc] - match a, b, or c (single character)
const pattern1 = /[abc]/g;
console.log("cab".match(pattern1));  // ['c', 'a', 'b']

// [a-z] - match any lowercase letter
const pattern2 = /[a-z]+/g;
console.log("Hello123".match(pattern2));  // ['ello']

// [0-9] - match any digit (same as \d)
const pattern3 = /[0-9]+/g;
console.log("abc123xyz".match(pattern3));  // ['123']

// [\w.-] - match word characters, dots, or hyphens
const pattern4 = /[\w.-]+/g;
console.log("user-name.123".match(pattern4));  // ['user-name.123']

// [^abc] - match anything EXCEPT a, b, c
const pattern5 = /[^0-9]/g;
console.log("a1b2c3".match(pattern5));  // ['a', 'b', 'c']

const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const email = "user@example.com";

if (emailPattern.test(email)) console.log("valid email");
else console.log("invalid email");

const text = "I have 5 apples and 10 oranges";
// With /\d+/g - matches all numbers in the string
// Without /\d+/ - matches only the first number
const numbers = text.match(/\d+/g);
console.log(numbers);

function validatePassword(password) {
  const minLength = /.{8,}/;
  const hasUpper = /[A-Z]/;
  const hasNumber = /\d/;
  const hasSpecial = /[^a-zA-Z0-9]/;

  if (!minLength.test(password)) return "Password must be 8+ characters";
  if (!hasUpper.test(password)) return "Password needs uppercase letter";
  if (!hasNumber.test(password)) return "Password needs a number";
  if (!hasSpecial.test(password)) return "Password needs a special character";
  return "Password is valid!";
}

const result = validatePassword("Smsv@1999");
console.log(result);

const text2 = "hello     world";
const cleaned = text2.replace(/\s+/g, " ");
console.log(cleaned);

// Pattern: /(\d{3})(\d{3})(\d{4})/

// (\d{3}) - Capture group 1: first 3 digits
// (\d{3}) - Capture group 2: next 3 digits
// (\d{4}) - Capture group 3: last 4 digits
// Replacement: "($1) $2-$3"

// $1 - Insert capture group 1
// $2 - Insert capture group 2
// $3 - Insert capture group 3
const phone = "1234567890";
const formatted = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
console.log(formatted);

const userNamePattern = /^[a-zA-Z0-9_]{3,16}$/;
function validateUserName(userName) {
  if (userNamePattern.test(userName)) {
    return "Username is valid!";
  } else {
    return "Username must be 3-16 characters (letters, numbers, _ only)";
  }
}

const result1 = validateUserName("john_doe123");
console.log(result1);

const users = ["john@gmail.com", "invalid-email", "jane@yahoo.com", "test"];

const email_Pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const validEmails = users.filter((email) => email_Pattern.test(email));
console.log(validEmails);

const searchTerm = /hello/i;
const text3 = "Hello World, HELLO everyone!";

if (searchTerm.test(text3)) {
  console.log("Match found!");
}

const matches = text3.match(/hello/gi);
console.log(matches);

// In regex, parentheses () are special - they create capture groups. If you want to match a literal parenthesis character, you must escape it:

// \( = match the actual ( character
// \) = match the actual ) character Key: Use \ to escape special regex characters when you want to match them literally.
pattern1 = /(\d{3}-\d{3}-\d{4})|(\(\d{3}\) \d{3}-\d{4})/;
// Problem: The | (OR) is outside the main group, so the ^ and $ anchors only apply to the first pattern.
// What it matches:
// 123-456-7890 (anywhere in the string)
// (123) 456-7890 (anywhere in the string)
// Use ^ and $ to match entire string (important for validation!)
console.log(pattern1.test("abc(123) 456-7890xyz")); // true (bad!)

const phonePattern = /^(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4})$/;
console.log(phonePattern.test("(123) 456-7890"));
console.log(phonePattern.test("123-456-7890"));

function validatePhone(phone) {
  if (phonePattern.test(phone)) {
    return "Valid phone number";
  } else {
    return "Invalid format. Use: 123-456-7890 or (123) 456-7890";
  }
}

const result2 = validatePhone("(123) 456-7890");
console.log(result2);


const text4 = "I love #javascript and #coding!";
const hashtags = text4.match(/#\w+/g);
console.log(hashtags)

const post = "Visit https://example.com and http://test.com";
const urls = post.match(/https?:\/\/\w+\.\w{2,3}/g) // or /https?:\/\/[\w.-]+/g
console.log(urls)


/a-z/
// Matches literal string "a-z" (not a range)
console.log("a-z".match(/a-z/));  // ['a-z']

/A-Z/
// Matches literal string "A-Z" (not a range)
console.log("A-Z".match(/A-Z/));  // ['A-Z']

/a-zA-Z/
// Matches literal string "a-zA-Z" (not a range)
console.log("hello".match(/a-zA-Z/));  // null

/[a-z]/
// Matches ANY single lowercase letter
console.log("hello".match(/[a-z]/));  // ['h']

/[a-zA-Z]/
// Matches ANY single letter (lowercase or uppercase)
console.log("Hello".match(/[a-zA-Z]/));  // ['H']

/[a-zA-Z]+/
// Matches one or more letters
console.log("hello123".match(/[a-zA-Z]+/));  // ['hello']

/[a-zA-Z]./
// Matches one letter followed by ANY character
console.log("hello".match(/[a-zA-Z]./));  // ['he']

/[a-zA-Z]{2,3}/
// Matches 2 to 3 letters
console.log("hello world".match(/[a-zA-Z]{2,3}/g));  // ['hel', 'wor']

