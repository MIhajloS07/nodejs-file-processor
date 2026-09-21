const http = require("http");
const fs = require("fs");
const crypto = require("crypto");
const fsPromises = require("fs/promises");
const os = require("os");
const path = require("path");

const data = fs.readFileSync('assets/poem.txt', {encoding: 'utf8'});
console.log(data);

fs.readFile('assets/poem.txt', {encoding: "utf8"}, (err, data) => {
    console.log(data);
});

async function main(){
    const data = await fsPromises.readFile('assets/poem.txt', {
        encoding: "utf8",
    });
    console.log(data);
}

main();

fs.writeFileSync('assets/output.txt', 'Hello, freeCodeCamp!');
fs.appendFileSync('assets/output.txt', "\nSecond line");

const exists = fs.existsSync('assets/output.txt');
console.log(exists);

const entries = fs.readdirSync("assets");
console.log(entries); // [ 'output.txt', 'poem.txt' ]

const buf = Buffer.from('Hello, Node!');
console.log(buf);
console.log(buf.toString("hex"));
console.log(buf.toString("base64"));

const buf2 = Buffer.alloc(8, 0xff);
console.log(buf2);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded); // Hello

const hash = crypto.createHash("sha256").update('freeCodeCamp!').digest("hex");
console.log(hash); // 2cf24dba...

const random = crypto.randomBytes(16).toString("hex");
console.log(random); // e.g. 4f3a9c1b8e2d7a05

const id = crypto.randomUUID();
console.log(id); // e.g. 110e8400-e29b-41d4-a716-446655440000

console.log(os.platform());
console.log(os.arch());
console.log(os.hostname());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.uptime());

console.log(os.cpus().length);

const fullPath = path.join(__dirname, "assets", "poem.txt");
console.log(fullPath);

console.log(path.basename(fullPath));
console.log(path.dirname(fullPath));
console.log(path.extname(fullPath));

console.log(path.join("assets", "..", "server.js")); // assets/../server.js → assets/../server.js (relative)
console.log(path.resolve("assets", "..", "server.js")); // /absolute/path/to/server.js

const parts = path.parse(fullPath);
console.log(parts);

console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);

console.log(process.argv); // [ '/path/to/node', '/path/to/server.js', 'hello', 'world' ]
console.log(process.argv[2]); // 'hello'

process.stdout.write("Hello ");
process.stdout.write("from "); // newline only when you add \n
process.stdout.write("stdout\n");

process.stderr.write("Hello from stderr\n");

const readable = fs.createReadStream('assets/poem.txt', { encoding: "utf8" });
readable.on("data", (chunk) => {
  console.log(chunk);
});

readable.on("end", () => {
  console.log("Done reading");
});

const writable = fs.createWriteStream('assets/stream-output.txt');
writable.write("First chunk\n");
writable.write("Second chunk\n");
writable.end();

// const readable = fs.createReadStream("assets/poem.txt");
// const writable = fs.createWriteStream("assets/stream-output.txt");
// readable.pipe(writable);