// cw1
let ul = document.createElement("ul");
let r = Math.random();

if (r > 0.5) {
    let li = document.createElement("li");
    li.textContent = "some random text";
    ul.appendChild(li);
}

let li2 = document.createElement("li");
li2.textContent = r > 0.5 ? "hello" : "goodbye";
ul.appendChild(li2);

document.body.appendChild(ul);


// cw2
function InterestsList() {
    const interests = ["music", "coding", "football"];

    return (
        <ul>
            {interests.map((interest) => (
                <li key={interest}>{interest}</li>
            ))}
        </ul>
    );
}


// cw3
function MyExample() {
    const show = true;
    const happy = Math.random() > 0.5;
    const fruits = ["apple", "banana", "orange"];

    return (
        <div>
            <p>{happy ? "Happy" : "Not happy"}</p>

            {show && (
                <ul>
                    {fruits.map(f => <li key={f}>{f}</li>)}
                </ul>
            )}
        </div>
    );
}
