let countEl =  document.getElementById("count-el")
console.log(countEl)
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.innerText = count

}

function Save() {
let countSave = count + " - "
saveEl.textContent += countSave
countEl.textContent = 0
count = 0
}

Save()
