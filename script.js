alert("I am Jeffrey Epstein")
console.log("Welcome to Epstein Island, president")
const display = document.getElementById('display');
    function appendValue(value) {
        display.value += value;
    }
    function clearDisplay() {
        display.value = '';
    }
    function calculateResult() {
        try {
            if (display.value.trim() === '') {
                display.value = 'Error';
                return;
            }
            let result = eval(display.value);
            if (!isFinite(result)) {
                display.value = 'Error';
            } else {
                display.value = result;
            }
        } catch {
            display.value = 'Error';
        }
    }