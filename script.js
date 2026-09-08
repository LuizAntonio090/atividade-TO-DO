let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];


mostrarTarefas();

function adicionarTarefa() {

    let input = document.getElementById("tarefaInput");
    let texto = input.value.trim();

    if (texto === "") {
        alert("Digite uma tarefa!");
        return;
    }

    tarefas.push(texto);

    salvarTarefas();

    input.value = "";

    mostrarTarefas();
}

function mostrarTarefas() {

    let lista = document.getElementById("listaTarefas");

    lista.innerHTML = "";

    tarefas.forEach(function(tarefa, index) {

        let item = document.createElement("li");

        item.innerHTML = `
            ${tarefa}
            <button class="remover" onclick="removerTarefa(${index})">
                Remover
            </button>
        `;

        lista.appendChild(item);
    });
}

function removerTarefa(index) {

    tarefas.splice(index, 1);

    salvarTarefas();

    mostrarTarefas();
}

function limparTarefas() {

    tarefas = [];

    salvarTarefas();

    mostrarTarefas();
}

function salvarTarefas() {

    localStorage.setItem("tarefas", JSON.stringify(tarefas));

}