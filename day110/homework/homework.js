// hw2
async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users"); // place your link here
    const data = await res.json();
    data.forEach(user => console.log(user.name));
}

getUsers();



// hw3
async function getData() {
    try {
        const res = await fetch("https://jsonplaceho");
        if (!res.ok) throw new Error();
        const data = await res.json();
        console.log(data);
    } catch {
        console.log("Something went wrong. Check the link!");
    }
}

getData();



// hw4
async function fetchRetry(url, tries = 3) {
    for (let i = 1; i <= tries; i++) {
        try {
            const res = await fetch(url); // place your link here
            if (!res.ok) throw new Error();
            const data = await res.json();
            console.log(data);
            return;
        } catch {
            console.log(`Try ${i} failed`);
            if (i === tries) console.log("All tries failed");
        }
    }
}

fetchRetry("https://jsonplaceholder.typicode.com/posts");


// hw5
async function getPostsAndAuthor() {
    const postsRes = await fetch("https://jsonplaceholder.typicode.com/posts"); // first link
    const posts = await postsRes.json();

    const first = posts[0];
    console.log("First post:", first);

    const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${first.userId}`); // second link
    const user = await userRes.json();

    console.log("Author:", user.name);
}

getPostsAndAuthor();
