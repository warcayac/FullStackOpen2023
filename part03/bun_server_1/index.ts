let notes = [
  {
    id: "1",
    content: "HTML is easy",
    important: true
  },
  {
    id: "2",
    content: "Browser can execute only JavaScript",
    important: false
  },
  {
    id: "3",
    content: "GET and POST are the most important methods of HTTP protocol",
    important: true
  }
]


const server = Bun.serve(
  {
    port: 3000,
    fetch(req) {
      const url = new URL(req.url);
      switch (url.pathname) {
        case '/notes':
          return new Response(
            JSON.stringify(notes), 
            { 
              headers: { "Content-Type": "application/json" },
            },
          );
        default:
          return new Response('Welcome, William!');
      }
    },
  }
);

console.log(`Listening on http://localhost:${server.port} ...`);