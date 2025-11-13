# 🏏 Cricket Player Stats Finder

A simple and clean web application that allows users to search cricket player statistics using a CSV dataset.  
Built with **Node.js**, **Express**, **HTML/CSS/JS**, and deployed using **Render** + GitHub.

---
## Demo Link: https://cricket-players.onrender.com/
## 🚀 Features

* 🔍 **Search** cricket player stats by name
* 📂 Backend reads player data from a **CSV file**
* 🎨 Modern UI with animations and **dark mode**
* 💡 Fast and **responsive** frontend
* 🌐 Fully deployable to **Render**
* 📱 **Mobile–friendly** interface

---

## 🖼️ Screenshots

![Uploading image.png…]()


---

## ⚙️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | Node.js, Express, CSV Parser, CORS |
| **Deployment** | GitHub, Render |

---

## 📁 Project Structure

```

cricket\_players/
│
├── public/
│   ├── index.html
│   ├── css\_index.css
│   ├── script.js
│   └── images/
│
├── test.csv
├── index.js
├── package.json
└── README.md

````

---

## 🛠️ Setup Instructions (Local Development)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/ashwani9931/cricket_players
cd cricket_players
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run the server

```bash
npm start
```

### 4️⃣ Open in browser

Visit:
[http://localhost:3000](https://www.google.com/search?q=http://localhost:3000)

-----

## 📡 API Endpoint

### `GET /player?name={playerName}`

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `playerName` | `string` | The full or partial name of the cricket player to search. |

**Example:** `/player?name=dhoni`

**Response (Success):**

```json
{
  "Player": "MS Dhoni",
  "Span": "2004-2019",
  "Mat": "350",
  "Inns": "297",
  "Runs": "10773",
  "HS": "183*",
  "Ave": "50.6",
  "100": "10",
  "50": "73"
}
```

**Response (Error):**

```json
{
  "error": "Player not found"
}
```

-----

## 🌍 Deployment Guide (Render)

1.  **Push** your project to **GitHub**.
2.  Go to: [https://render.com](https://render.com)
3.  Click **Create → New Web Service**.
4.  Connect your GitHub repo.
5.  Set the following configuration:
      * **Build Command:** `npm install`
      * **Start Command:** `npm start`
6.  **Deploy** 🚀

-----

## 🧪 Testing

  * Try searching for common player names.
  * Check for case-insensitivity in the search.
  * Ensure correct values are retrieved from the CSV.
  * Test the dark mode toggle.

-----

## 🤝 Contributing

Pull requests are welcome.

For major changes, please open an issue first to discuss what you would like to change.

-----

## 📄 License

This project is licensed under the **MIT License**.

-----

## ✨ Author

**Ashwani Kumar**
*Cricket Player Stats Search System*

```

---

# 🎉 Want me to generate an animated banner or a logo for your project?

I can make:

* 🏏 Cricket-themed logo
* ✨ GitHub profile banner
* 🖼️ Project header image

Would you like me to generate a cricket-themed logo for your project's header image?
```
