// Unit buttons selection
const unitBtns = document.querySelectorAll('.unit-btn');
const tempInput = document.getElementById('tempInput');
const convertBtn = document.getElementById('convertBtn');
const errorMsg = document.getElementById('errorMsg');
const zeroMsg = document.getElementById('zeroMsg');

const celsiusResult = document.getElementById('celsiusResult');
const fahrenheitResult = document.getElementById('fahrenheitResult');
const kelvinResult = document.getElementById('kelvinResult');

const celsiusCard = document.getElementById('celsiusCard');
const fahrenheitCard = document.getElementById('fahrenheitCard');
const kelvinCard = document.getElementById('kelvinCard');

let selectedUnit = 'celsius';

// Unit button click
unitBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        unitBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedUnit = btn.dataset.unit;
        clearErrors();
    });
});

// Convert on button click
convertBtn.addEventListener('click', convert);

// Convert on Enter key
tempInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') convert();
});

// Real-time conversion on input
tempInput.addEventListener('input', () => {
    if (tempInput.value !== '') convert();
});

function convert() {
    clearErrors();
    clearResults();

    const val = tempInput.value.trim();

    // Validation — empty or not a number
    if (val === '' || isNaN(val)) {
        errorMsg.classList.add('show');
        return;
    }

    const num = parseFloat(val);

    // Convert everything to Celsius first
    let celsius;

    if (selectedUnit === 'celsius') {
        celsius = num;
    } else if (selectedUnit === 'fahrenheit') {
        celsius = (num - 32) * 5 / 9;
    } else if (selectedUnit === 'kelvin') {
        celsius = num - 273.15;
    }

    // Absolute zero check
    if (celsius < -273.15) {
        zeroMsg.classList.add('show');
        return;
    }

    // Calculate all units
    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    // Display results
    celsiusResult.textContent = format(celsius);
    fahrenheitResult.textContent = format(fahrenheit);
    kelvinResult.textContent = format(kelvin);

    // Highlight active input card
    celsiusCard.classList.remove('active');
    fahrenheitCard.classList.remove('active');
    kelvinCard.classList.remove('active');

    if (selectedUnit === 'celsius') celsiusCard.classList.add('active');
    if (selectedUnit === 'fahrenheit') fahrenheitCard.classList.add('active');
    if (selectedUnit === 'kelvin') kelvinCard.classList.add('active');
}

function format(num) {
    // Round to 2 decimal places, remove trailing zeros
    return parseFloat(num.toFixed(2)).toString();
}

function clearErrors() {
    errorMsg.classList.remove('show');
    zeroMsg.classList.remove('show');
}

function clearResults() {
    celsiusResult.textContent = '—';
    fahrenheitResult.textContent = '—';
    kelvinResult.textContent = '—';
    celsiusCard.classList.remove('active');
    fahrenheitCard.classList.remove('active');
    kelvinCard.classList.remove('active');
}