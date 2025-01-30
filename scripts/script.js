const divLabelBox = document.getElementById("divLabelBox");
const input = document.getElementById("TypeInput");
    
function addText() {
    if(input.value === '') {
        alert("You should write something")
    } else {

        /**
         *  Структура для відображення чекбоксів
         */

        const list = document.createElement("li");
        const label = document.createElement("label");
        const divBox = document.createElement("div");
        divBox.className = "checkbox-position";

        const inputBox = document.createElement("input");
        inputBox.type = "checkbox";
        inputBox.className = "real-checkbox";

        const spanBox = document.createElement("span");
        spanBox.className = "costum-checkbox";
        
        const typeBox = document.createElement("span");
        typeBox.innerHTML = input.value;

        const deleteIcon = document.createElement("b");
        deleteIcon.innerHTML = '\u00d7';

        /**
         * З'єднання структури
         */

        list.appendChild(label);
        label.appendChild(divBox);

        divBox.append(inputBox);
        divBox.append(spanBox);
        divBox.append(typeBox);
        divBox.append(deleteIcon);

        divLabelBox.appendChild(list);

        /**
         *  Ця подія, що перекреслює текст коли галочка увімкнена, а вимкнена вимикає перекреслення
         */

        inputBox.addEventListener('change', function() {
            if(inputBox.checked === true) {
                list.classList.add("checked");
            } else {
                list.classList.remove("checked");
            }
        });

        /**
         * Ця подія видаляє елементи зі списку
         */

        divLabelBox.addEventListener('click', function(e) {
            if(e.target.tagName === "LI") {
                e.target.classList.toggle("checked")
            } else if (e.target.tagName === "B") {
                e.target.parentElement.remove();
            }
        });
    }
    input.value = '';
}

/**
 * Отримання форми, щоб сторінке не оновлювалась кожного разу при додаванні тексту
 */

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
});