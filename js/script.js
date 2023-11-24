function displayFibonacci(numbers) {
    const list = document.getElementById("fibonacciList");
    list.innerHTML = '';
    numbers.forEach((number, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = number;

        if (index % 2 === 0) {
            listItem.classList.add("blue");
        } else {
            listItem.classList.add("red");
        }

        listItem.addEventListener("mouseover", function () {
            console.log(number);
        });

        list.appendChild(listItem);
    });
}

function loadFibonacci(length) {
    fetch('fibonacci.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `length=${length}`
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Ответ сети был не в порядке.');
            }
            return response.json();
        })
        .then(data => {
            displayFibonacci(data);
        })
        .catch(error => {
            console.error('Возникла проблема с операцией выборки:', error);
        });
}



const fibForm = document.getElementById("fibForm");
fibForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const length = document.getElementById("fibLength").value;
    loadFibonacci(length);
});

window.onload = function () {
    loadFibonacci(10); // Загрузка ряда чисел Фибоначчи по умолчанию при загрузке страницы
};
