// ===== Relógio =====
function atualizarRelogio() {
    const agora = new Date();
    let h = agora.getHours();
    let m = agora.getMinutes();
    let s = agora.getSeconds();
    h = h < 10 ? "0"+h : h;
    m = m < 10 ? "0"+m : m;
    s = s < 10 ? "0"+s : s;
    document.getElementById("clock").innerText = `${h}:${m}:${s}`;
}
setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// ===== Tema dia/noite automático =====
function aplicarTemaPorHora() {
    const hora = new Date().getHours();
    const body = document.body;
    if(hora >= 6 && hora < 18){
        body.classList.add("day");
        body.classList.remove("night");
    } else {
        body.classList.add("night");
        body.classList.remove("day");
    }
}
aplicarTemaPorHora();
setInterval(aplicarTemaPorHora, 300000);

// ===== Simulação CPU/RAM e Rede =====
function atualizarCPU_RAM() {
    const cpu = document.getElementById("cpu");
    const ram = document.getElementById("ram");
    const net = document.getElementById("net");
    const logs = document.getElementById("logs");

    const cpuVal = Math.floor(Math.random() * 80) + 10;
    const ramVal = Math.floor(Math.random() * 70) + 20;
    const netStatus = Math.random() > 0.1 ? "OK" : "ERRO";

    cpu.innerText = cpuVal + "%";
    ram.innerText = ramVal + "%";
    net.innerText = netStatus;
    net.className = netStatus === "OK" ? "ok" : "alert";

    const now = new Date();
    const timestamp = now.toLocaleTimeString();
    const logMsg = `${timestamp} | CPU: ${cpuVal}% | RAM: ${ramVal}% | Rede: ${netStatus}`;
    logs.innerText = logMsg + "\n" + logs.innerText.split("\n").slice(0, 9).join("\n");
}
setInterval(atualizarCPU_RAM, 1000);
atualizarCPU_RAM();