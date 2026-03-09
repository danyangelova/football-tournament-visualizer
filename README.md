# ⚽ Football Tournament Visualizer 🌿

## 🗂️ Project Overview
React single-page application that visualizes a football tournament from CSV files. 
The project demonstrates CSV data loading, custom CSV parsing, normalized data storage, selector-based state access, and client-side routing.

## ✨ Features
- Visualize all matches in the tournament
- View detailed match information and team lineups
- Browse team rosters
- Tournament data loaded from CSV files
- Custom CSV parser
- Normalized data store with fast entity lookups
- Data access through selectors 

## 🖥️ Screens

### 🏠 Home
Displays all matches in the tournament with:
- 📅 match date
- 🏟️ teams
- 🏷️ group
- 🔢 score

Clicking a match navigates to the **Match Details** page.

### 📊 Match Details
Displays:
- 🔢 match result
- 📅 match date
- 🏟️ both teams
- 👥 lineup of players grouped by position

### 👥 Team Details
Displays:

- 🏟️ team name
- 👔 manager
- 🏷️ group
- 📋 full roster of players


## 🔄 Data Processing

The application transforms raw CSV data into UI-ready state in several steps:
1. Load CSV files as raw text
2. Convert CSV text into structured rows (JS objects)
3. Transform raw rows into domain models with proper data types and rules
4. Build a normalized store that allows fast lookup
5. Prepare UI-ready data through selectors
6. Expose the processed store to the React app as a single source of truth

```
CSV Files
   ↓
fetchText()
   ↓
parseCsv()
   ↓
map*()
   ↓
normalize()
   ↓
selectors()
   ↓
React UI
```


## 🧠 Application Layers

- **Data Source Layer**
    - CSV files in /public

- **Data/service Layer**
    - data loading
    - CSV parsing
    - mapping
    - normalization
    - selectors

- **UI Layer**
    - pages
    - components
    - styling


