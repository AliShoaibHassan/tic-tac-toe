let boxes = document.querySelectorAll(".inner");
let b1 = document.querySelector("#b1");
let b2 = document.querySelector("#b2");
let b3 = document.querySelector("#b3");
let b4 = document.querySelector("#b4");
let b5 = document.querySelector("#b5");
let b6 = document.querySelector("#b6");
let b7 = document.querySelector("#b7");
let b8 = document.querySelector("#b8");
let b9 = document.querySelector("#b9");

let btn = document.querySelector("button");

let msg = document.querySelector(".result");

boxes.forEach(box => {
    box.addEventListener("click", handleBoxClick);
});

let turn = 0;
let p1 = "X";
let p2 = "O"; 

function handleBoxClick() {
    if (this.textContent === "" && turn < 9) {
        if (turn % 2 === 0) {
            this.textContent = p1;
        } else {
            this.textContent = p2;
            this.style.color = "blue";
        }

        let winner = checkWinner();

        if (winner) {
            msg.innerText = `Player ${winner} wins!`;
            turn = 9;
            return;
        } else {
            console.log("No winner yet.");
        }

        turn++;
    }
}

function checkWinner() {
    // Define the winning combinations
    const winningCombos = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9],
        [b1, b4, b7],
        [b2, b5, b8],
        [b3, b6, b9],
        [b1, b5, b9],
        [b3, b5, b7]
    ];

    // Check each winning combination
    for (let combo of winningCombos) {
        const [box1, box2, box3] = combo;
        if (box1.textContent !== "" && box1.textContent === box2.textContent && box2.textContent === box3.textContent) {
            // We have a winner
            return box1.textContent;
        }
    }

    // No winner yet
    return null;
}

btn.addEventListener("click", () => {
    turn = 0;
    boxes.forEach(box => {
        box.innerText = "";
        box.style.color = ""; // Reset color as well
        msg.innerText = "";
    });
});
