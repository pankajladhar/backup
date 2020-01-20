const speedy = require('./..');

const app = speedy();

app.get("/morning", (req, res) => {
    res.send('Morning route');
});

app.post("/night", (req, res) => {
    res.send('Night route');
})

app.listen(3000, () => {
    console.log(`server is running at http://localhost:3000`)
});
