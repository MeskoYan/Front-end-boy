function generateCPF() {
    let cpf = '';
    for (let i = 0; i < 9; i++) {
        cpf += Math.floor(Math.random() * 10);
    }
    cpf += calculateCPFDigit(cpf);
    return cpf;
}

function calculateCPFDigit(cpf) {
    let sum = 0;
    for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digit = 11 - (sum % 11);
    return digit > 9 ? '0' : digit.toString();
}
function displayCPF() {
    const cpf = generateCPF();
    const cpfDisplay = document.getElementById('cpf-list');
    cpfDisplay.textContent = `CPF Gerado: ${cpf}`;
}