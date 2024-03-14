const display = document.querySelector('.print_window')
const inp = document.querySelector('.input')

function AddertoWindow() {
    if (inp.value.trim() === '') {
        
    }else{
        const newDiv = document.createElement("div")
        newDiv.innerHTML = `<div class="data_viewer">
                <div class="text">
                    <input type="checkbox" id="checkbox">
                    <label for="checkbox"  onclick="Check">${inp.value}</label>
                </div>
                <button class="closer" onclick="remove(this.parentElement)">remove</button>
               </div>`
               display.append(newDiv)
               inp.value = ''
    }

}
function remove(e) {
    e.remove()
}
function Check() {
    if (true) {
        newDiv.querySelector('.text').classList.add('checked')
    }else{
    
    }
}