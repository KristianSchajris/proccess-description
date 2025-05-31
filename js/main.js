
function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => sec.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function agregarCampo(listaId, tipo, valor = "") {
  const container = document.getElementById(listaId);
  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = tipo.charAt(0).toUpperCase() + tipo.slice(1);
  input.classList.add(tipo);
  input.value = valor;
  container.appendChild(input);
  container.appendChild(document.createElement("br"));
}

function agregarActividad(nombre = "", tareas = []) {
  const contenedor = document.getElementById("actividades-list");

  const divActividad = document.createElement("div");
  divActividad.classList.add("actividad");

  const inputActividad = document.createElement("input");
  inputActividad.type = "text";
  inputActividad.placeholder = "Actividad";
  inputActividad.classList.add("actividad-nombre");
  inputActividad.value = nombre;

  const tareasDiv = document.createElement("div");
  tareasDiv.classList.add("tareas");

  tareas.forEach(t => {
    const tareaInput = document.createElement("input");
    tareaInput.type = "text";
    tareaInput.placeholder = "Tarea";
    tareaInput.classList.add("tarea");
    tareaInput.value = t;
    tareasDiv.appendChild(tareaInput);
    tareasDiv.appendChild(document.createElement("br"));
  });

  const botonAgregarTarea = document.createElement("button");
  botonAgregarTarea.type = "button";
  botonAgregarTarea.textContent = "Agregar tarea";
  botonAgregarTarea.onclick = () => {
    const tareaInput = document.createElement("input");
    tareaInput.type = "text";
    tareaInput.placeholder = "Tarea";
    tareaInput.classList.add("tarea");
    tareasDiv.appendChild(tareaInput);
    tareasDiv.appendChild(document.createElement("br"));
  };

  divActividad.appendChild(inputActividad);
  divActividad.appendChild(tareasDiv);
  divActividad.appendChild(botonAgregarTarea);
  contenedor.appendChild(divActividad);
  contenedor.appendChild(document.createElement("br"));
}

document.getElementById("form-proceso").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value.trim();
  const proposito = document.getElementById("proposito").value.trim();
  const resultados = Array.from(document.querySelectorAll(".resultado")).map(i => i.value.trim()).filter(Boolean);
  const entradas = Array.from(document.querySelectorAll(".entrada")).map(i => i.value.trim()).filter(Boolean);
  const controles = Array.from(document.querySelectorAll(".control")).map(i => i.value.trim()).filter(Boolean);
  const restricciones = Array.from(document.querySelectorAll(".restriccion")).map(i => i.value.trim()).filter(Boolean);

  const actividades = Array.from(document.querySelectorAll(".actividad")).map(act => {
    const nombre = act.querySelector(".actividad-nombre").value.trim();
    const tareas = Array.from(act.querySelectorAll(".tarea")).map(t => t.value.trim()).filter(Boolean);
    return { nombre, tareas };
  });

  if (nombre.length < 10 || nombre.length > 200) {
    alert("El nombre debe tener entre 10 y 200 caracteres.");
    return;
  }

  if (proposito.length < 100 || proposito.length > 1000) {
    alert("El propósito debe tener entre 100 y 1000 caracteres.");
    return;
  }

  if (resultados.length < 1 || resultados.some(r => r.length < 50 || r.length > 1000)) {
    alert("Debe ingresar al menos un resultado válido (entre 50 y 1000 caracteres).");
    return;
  }

  const proceso = {
    nombre,
    proposito,
    resultados,
    entradas,
    controles,
    restricciones,
    actividades
  };

  const nombreArchivo = (proceso.nombre || "proceso")
    .toLowerCase()
    .replace(/[^a-z0-9_-]/gi, "_")
    .slice(0, 50);

  const blob = new Blob([JSON.stringify(proceso, null, 2)], { type: "application/json" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `${nombreArchivo}.pro`;
  a.click();
});

document.getElementById("file-input").addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function (e) {
    const data = JSON.parse(e.target.result);

    document.getElementById("nombre").value = data.nombre || "";
    document.getElementById("proposito").value = data.proposito || "";

    document.getElementById("resultados-list").innerHTML = "";
    (data.resultados || []).forEach(r => agregarCampo("resultados-list", "resultado", r));

    document.getElementById("entradas-list").innerHTML = "";
    (data.entradas || []).forEach(e => agregarCampo("entradas-list", "entrada", e));

    document.getElementById("controles-list").innerHTML = "";
    (data.controles || []).forEach(c => agregarCampo("controles-list", "control", c));

    document.getElementById("restricciones-list").innerHTML = "";
    (data.restricciones || []).forEach(r => agregarCampo("restricciones-list", "restriccion", r));

    document.getElementById("actividades-list").innerHTML = "";
    (data.actividades || []).forEach(a => agregarActividad(a.nombre, a.tareas || []));

    alert("Proceso cargado con éxito.");
    mostrarSeccion("crear");
  };
  reader.readAsText(file);
});


function obtenerDatosFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const proposito = document.getElementById("proposito").value.trim();
  const resultados = Array.from(document.querySelectorAll(".resultado")).map(i => i.value.trim()).filter(Boolean);
  const entradas = Array.from(document.querySelectorAll(".entrada")).map(i => i.value.trim()).filter(Boolean);
  const controles = Array.from(document.querySelectorAll(".control")).map(i => i.value.trim()).filter(Boolean);
  const restricciones = Array.from(document.querySelectorAll(".restriccion")).map(i => i.value.trim()).filter(Boolean);

  const actividades = Array.from(document.querySelectorAll(".actividad")).map(act => {
    const nombre = act.querySelector(".actividad-nombre").value.trim();
    const tareas = Array.from(act.querySelectorAll(".tarea")).map(t => t.value.trim()).filter(Boolean);
    return { nombre, tareas };
  });

  return { nombre, proposito, resultados, entradas, controles, restricciones, actividades };
}

function generarVistaPrevia() {
  const datos = obtenerDatosFormulario();
  const preview = document.getElementById("preview");

  let html = `<h2>${datos.nombre}</h2>`;
  html += `<p><strong>Propósito:</strong> ${datos.proposito}</p>`;
  html += `<h3>Resultados esperados</h3><ul>${datos.resultados.map(r => `<li>${r}</li>`).join("")}</ul>`;
  if (datos.entradas.length)
    html += `<h3>Entradas</h3><ul>${datos.entradas.map(e => `<li>${e}</li>`).join("")}</ul>`;
  if (datos.controles.length)
    html += `<h3>Controles</h3><ul>${datos.controles.map(c => `<li>${c}</li>`).join("")}</ul>`;
  if (datos.restricciones.length)
    html += `<h3>Restricciones</h3><ul>${datos.restricciones.map(r => `<li>${r}</li>`).join("")}</ul>`;
  if (datos.actividades.length)
    html += `<h3>Actividades</h3><ul>` + datos.actividades.map(a => 
      `<li><strong>${a.nombre}</strong><ul>${a.tareas.map(t => `<li>${t}</li>`).join("")}</ul></li>`).join("") + "</ul>";

  preview.innerHTML = html;
}

document.querySelectorAll("button").forEach(btn => {
  if (btn.textContent.includes("Vista previa")) {
    btn.addEventListener("click", () => {
      generarVistaPrevia();
      mostrarSeccion("vista");
    });
  }
});

function exportarPDF() {
  const element = document.getElementById("preview");
  html2pdf().from(element).save("proceso.pdf");
}
