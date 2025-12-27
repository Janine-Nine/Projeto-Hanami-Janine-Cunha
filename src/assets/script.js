/* =========================
   ASSETS / SCRIPT.JS
   Projeto Hanami
   ========================= */

const progressBar = document.getElementById("progressBar")
const uploadStatus = document.getElementById("uploadStatus")
const uploadHistory = document.getElementById("uploadHistory")
const apiStatus = document.getElementById("apiStatus")
const lastUpdate = document.getElementById("lastUpdate")
const systemLog = document.getElementById("systemLog")
const TOKEN = "token_teste_hanami"


/* KPIs */
const kpiRecords = document.getElementById("kpiRecords")
const kpiRevenue = document.getElementById("kpiRevenue")
const kpiCustomers = document.getElementById("kpiCustomers")
const kpiTicket = document.getElementById("kpiTicket")

/* Simular status da API */
function checkApiStatus() {
  apiStatus.textContent = "Online"
  apiStatus.className = "api-online"
  lastUpdate.textContent = new Date().toLocaleString()
}

checkApiStatus()

/* Upload fake */
function uploadFile() {
  const fileInput = document.getElementById("fileInput")
  if (!fileInput.files.length) {
    uploadStatus.textContent = "Selecione um arquivo primeiro."
    return
  }

  const fileName = fileInput.files[0].name
  uploadStatus.textContent = "Enviando arquivo..."
  progressBar.classList.add("active")
  progressBar.style.width = "0%"

  let progress = 0
  const interval = setInterval(() => {
    progress += 10
    progressBar.style.width = progress + "%"

    if (progress >= 100) {
      clearInterval(interval)
      progressBar.classList.remove("active")
      uploadStatus.textContent = "Upload concluído com sucesso ✔"
      addUploadHistory(fileName)
      updateKPIs()
      addLog(`Arquivo ${fileName} processado`)
    }
  }, 200)
}

/* Histórico */
function addUploadHistory(file) {
  const li = document.createElement("li")
  li.textContent = `${file} — ${new Date().toLocaleTimeString()}`
  uploadHistory.prepend(li)
}

/* KPIs fake */
function updateKPIs() {
  kpiRecords.textContent = Math.floor(Math.random() * 5000)
  kpiRevenue.textContent = "R$ " + (Math.random() * 50000).toFixed(2)
  kpiCustomers.textContent = Math.floor(Math.random() * 800)
  kpiTicket.textContent = "R$ " + (Math.random() * 300).toFixed(2)
}

/* Relatórios fake */
function getReport(type) {
  const output = document.getElementById("reportOutput")

  const reports = {
    "sales-summary": "Resumo de vendas:\n- Crescimento de 12%\n- Melhor mês: Março",
    "regional-performance": "Regiões:\n- Sul lidera\n- Nordeste em crescimento",
    "product-analysis": "Produtos:\n- Produto A com maior margem",
    "customer-profile": "Clientes:\n- 68% recorrentes",
    "financial-metrics": "Financeiro:\n- Lucro líquido positivo"
  }

  output.textContent = reports[type] || "Relatório não encontrado."
  addLog(`Relatório ${type} carregado`)
}

/* Log */
function addLog(message) {
  const time = new Date().toLocaleTimeString()
  systemLog.textContent += `\n[${time}] ${message}`
}
