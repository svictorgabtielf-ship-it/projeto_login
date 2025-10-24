// mock de usuário para demonstração (NUNCA faça isso em produção)
const MOCK_USER = {
  email: "aluno@escola.com",
  password: "123456"
};

const form = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("message");

// função para mostrar mensagem ao usuário
function showMessage(text, success = false) {
  message.textContent = text;
  message.style.color = success ? "green" : "#b91c1c";
}

// função simples que valida formato de e-mail (expressão regular)
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// ao submeter o formulário
form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita enviar para outro lugar e recarregar a página

  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // validações básicas
  if (!email || !password) {
    showMessage("Preencha e-mail e senha.");
    return;
  }
  if (!isValidEmail(email)) {
    showMessage("Formato de e-mail inválido.");
    return;
  }
  if (password.length < 6) {
    showMessage("A senha precisa ter ao menos 6 caracteres.");
    return;
  }

  // autenticação "mock" — compara com o usuário definido acima
  if (email === MOCK_USER.email && password === MOCK_USER.password) {
    showMessage("Login bem-sucedido! Redirecionando...", true);
    // Exemplo: redirecionar para dashboard após 1s (em aplicação real, viria do servidor)
    setTimeout(() => {
      window.location.href = "pag.html"; // página fictícia
    }, 1000);
  } else {
    showMessage("E-mail ou senha incorretos. Tente novamente.");
  }
});
