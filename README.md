# Full Stack Open 2023

https://fullstackopen.com/en/

- [x] Part 0: Fundamentals of Web apps
- [x] Part 1: Introduction to React
- [ ] Part 2: Communicating with server
- [ ] Part 3: Programming a server with NodeJS and Express
- [ ] Part 4: Testing Express servers, user administration
- [ ] Part 5: Testing React apps
- [ ] Part 6: Advanced state management
- [ ] Part 7: React router, custom hooks, styling app with CSS and webpack
- [ ] Part 8: GraphQL
- [ ] Part 9: TypeScript
- [ ] Part 10: React Native
- [ ] Part 11: CI/CD
- [ ] Part 12: Containers
- [ ] Part 13: Using relational databases

---
## Part 1

System:
```
$ neofetch --off
OS: EndeavourOS Linux x86_64 
Kernel: 6.6.8-zen1-1-zen 
Shell: zsh 5.9 
DE: Plasma 5.27.10 
```

Installing required packages
```
$ sudo pacman -S --needed nodejs npm pnpm unzip
$ node --version           
v21.4.0
$ npm --version 
10.2.5
$ pnpm --version 
8.12.1
```
Installing **bun** (it requires to restart terminal):
```
$ curl -fsSL https://bun.sh/install | bash 
$ bun --version
1.0.20
```
Creating and running first React app with JS and Vite by using NPM:
```
$ npm create vite@latest first_react_app -- --template react
$ cd first_react_app
$ npm install
$ npm run dev
```

Creating and running a React app with JS and Vite by using PNPM:
```
$ pnpm create vite courseinfo --template react
$ cd courseinfo
$ pnpm install
$ pnpm run dev
```
Creating and running a React app with TS and Vite by using BUN:
```
$ bunx create-vite courseinfo2 --template react-ts
$ cd courseinfo2
$ bun install
$ bunx --bun vite
```
> The `--bun` flag tells *Bun* to run Vite's CLI using bun instead of *node*. To simplify this command, update the *"dev"* script in *package.json* (see [reference](https://bun.sh/guides/ecosystem/vite)).

Creating two apps for exercises:
```
$ bunx create-vite unicafe --template react
$ bunx create-vite anecdotes --template react
```

---
## Part 2

Creating one app in TS for exercise:
```
$ bunx create-vite courseinfo_ts --template react-ts
$ bunx create-vite phonebook --template react
$ bunx create-vite phonebook_ts --template react-ts
```

Add `json-server` to **myapp_2** app into devDependencies section:
```
$ cd part02/myapp_2
$ bun install --dev json-server
$ bunx json-server --port 3001 --watch db.json
```

Installing **axios** library to project:
```
$ bun install axios
```

Modify **package.json** file to add this statement into **scripts** section:
```
  "server": "bunx json-server --port 3001 --watch db.json"
```

Then we can use it by running:
```
$ bun run server
```
Creating app in TS for exercise:
```
$ bunx create-vite countriesinfo_ts --template react-ts
$ cd countriesinfo_ts 
$ bun install && bun install axios
$ export VITE_SECRET_KEY="123456789" && bun run dev
```

---
## Part 3
---
## Part 4
---
## Part 5
---
## Part 6
---
## Part 7
---
## Part 8
---
## Part 9
---
## Part 10
---
## Part 11
---
## Part 12
---
## Part 13
---
Submissions made by William Arcaya C. for 2023-2024