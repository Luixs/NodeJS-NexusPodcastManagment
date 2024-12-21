# 🎙️ NEXUS - Podcast Managment 🎙️ 

![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen?style=flat)

## 📖 About
This is a simple template yet robust **Node.js API** sample built entirely without frameworks, using only the **HTTP module**. Developed with **TypeScript**, the API interacts with a **MongoDB** to fetch data. 🎙️

> Based on the "DIO" NodeJs course, by Felipão, with improvements implemented for a more automated dynamic system





## 🚀 Features

- Template for scalabed applications.
- Built with **Node.js** and **TypeScript**.
- **No frameworks** used, only Node.js HTTP module.
- Connects to a **MongoDB database** for data operations.
- Implements **layered architecture**:
  - **Controllers** for handling HTTP requests and responses.
  - **Services** for business logic.
  - **Repositories** for database interaction.
- Adopts best coding practices:
  - Variable and return standardization.
  - Separation of concerns.
  - Use of **interfaces** for data typing.


## 🌐 API Endpoints

### 📄 Example Request and Response

#### **GET /api/podcasts**

**Status:** `200 OK`  

**Response Model:**  

```typescript
[
    {
        "_id": "61c8b92c10f1b8349a6f1d4a",
        "episode": "The Science of Muscle Growth",
        "guestName": "Dr. John Doe",
        "publicationDate": "2023-12-15T14:00:00Z",
        "podcastHost": "Fitness Weekly",
        "tags": ["health", "fitness", "science"]
    },
    {
        "_id": "61c8b92c10f1b8349a6f1d4b",
        "episode": "Mindset for Champions",
        "guestName": "Jane Smith",
        "publicationDate": "2023-12-20T14:00:00Z",
        "podcastHost": "Winning Talks",
        "tags": ["motivation", "sports", "mental health"]
    }
]


```

## 📂 Project Structure 
###### Not all files have been represented in the diagram bellow

```plaintext
📦 nexus-podcast-managment
├── 📁src
│   └── app.ts                       
│   └── server.ts                       
|   └── 📁 utils                    #Handler Functions
|   └── 📁 config
│       └───── db.ts                #Layer that creates the connection with the MongoDB
│       └───── constants.ts         #Standardization of project values
|   └── 📁 services
|   └── 📁 interfaces
|   └── 📁 repositores
|   └── 📁 controllers
├── package.json               
├── tsconfig.json      
├── .env.json      
└── README.md                  
