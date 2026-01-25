# 🔗 Node URL Shortener

A minimal URL shortener built using **pure Node.js** without any frameworks.  
It supports custom aliases, automatic short code generation, and file-based persistence.

---

## 🚀 Features

- Shorten long URLs  
- Custom alias support  
- Automatic short code generation  
- Persistent storage using JSON file  
- Redirects using HTTP 302  
- No Express / No external frameworks  

---

## 🛠 Tech Stack

- Node.js  
- HTTP module  
- File System (`fs/promises`)  
- Crypto module  

---

## 📂 Project Structure



.
├── data
│ └── links.json
├── public
│ ├── index.html
│ └── style.css
├── server.js
└── README.md


---

## ⚙️ Setup & Run

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/node-url-shortener.git
cd node-url-shortener

2️⃣ Install Node.js

Make sure Node.js v18+ is installed.

3️⃣ Create data folder
mkdir data
echo "{}" > data/links.json

4️⃣ Start the server
node server.js


Server runs at:

http://localhost:3000

📡 API Endpoints
🔹 Shorten URL

POST /shorten

{
  "longUrl": "https://example.com",
  "customAlias": "myLink"
}


Response

{
  "shortCode": "myLink"
}

🔹 Redirect

GET /:shortCode

Example:

http://localhost:3000/myLink


Redirects to the original URL.

🔹 Get All Links

GET /links

Returns all stored shortened URLs.
