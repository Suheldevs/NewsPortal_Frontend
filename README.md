<details> <summary>Click to expand Mermaid ER diagram code (copy-paste ready)</summary>
md
Copy
Edit
---
title: NewsPortal
theme: pastel
typeface: clean
notation: crows-foot
---

```mermaid
erDiagram

  USERS {
    string id PK
    string name
    string username UNIQUE
    string email UNIQUE
    string password
    string profilePic
    string bio
    enum role
    boolean isActive
    timestamp createdAt
  }

  CATEGORIES {
    string id PK
    string name UNIQUE
    string slug UNIQUE
    string description
    string icon
    timestamp createdAt
  }

  SUBCATEGORIES {
    string id PK
    string name
    string slug UNIQUE
    string description
    timestamp createdAt
    string categoryId FK
  }

  ARTICLES {
    string id PK
    string title
    string slug UNIQUE
    string thumbnail
    text content
    string summary
    string authorId FK
    string categoryId FK
    string subcategoryId FK
    string[] tags
    boolean isInternation
    string state FK
    string city FK
    enum status
    number views
    number likes
    boolean isFeatured
    timestamp publishedAt
    timestamp createdAt
  }

  COMMENTS {
    string id PK
    string articleId FK
    string userId FK
    string username
    string email
    text content
    boolean isApproved
    timestamp createdAt
  }

  STATES {
    string id PK
    string name
    string icon
    string description
    timestamp createdAt
  }

  CITIES {
    string id PK
    string name
    string icon
    string description
    string stateId FK
    timestamp createdAt
  }

  USERS ||--o{ ARTICLES : writes
  USERS ||--o{ COMMENTS : "makes"
  ARTICLES ||--o{ COMMENTS : "has"
  CATEGORIES ||--o{ ARTICLES : "includes"
  SUBCATEGORIES ||--o{ ARTICLES : "classified in"
  CATEGORIES ||--o{ SUBCATEGORIES : "contains"
  STATES ||--o{ CITIES : "has"
  STATES ||--o{ ARTICLES : "tagged in"
  CITIES ||--o{ ARTICLES : "posted from"
</details>