async function apiConnection(url) {
	try {
		const response = await fetch(url, { method: "GET" });
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
}
//usuarios
async function postUsuario(usuario) {
	try {
		const response = await fetch("http://localhost:3000/usuarios", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(usuario),
		});
		const result = await response.json();
	} catch (error) {
		console.log(error);
	}
}

async function deleteUsuario(id) {
	try {
		const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
			method: "DELETE",
		});
	} catch (error) {
		console.log(error);
	}
}

async function putUsuario(id, usuario) {
	try {
		const response = await fetch(`http://localhost:3000/usuarios/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(usuario),
		});
	} catch (error) {
		console.log(error);
	}
}

//cuenta bancaria

async function postCtaBancaria(ctaBancaria) {
	try {
		const response = await fetch("http://localhost:3000/ctaBancaria", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(ctaBancaria),
		});
		const result = await response.json();
	} catch (error) {
		console.log(error);
	}
}

async function deleteCtaBancaria(id) {
	try {
		const response = await fetch(
			`http://localhost:3000/ctaBancaria/${id}`,
			{
				method: "DELETE",
			}
		);
	} catch (error) {
		console.log(error);
	}
}

//falta function edit cta bancaria

function armarTabla(datos, tablaHead, tablaBody, nombreTabla) {
	const tr = document.createElement("tr");

	Object.keys(datos[0]).forEach((key) => {
		let celda = document.createElement("th");
		celda.innerText = key;
		tr.appendChild(celda);
	});

	if (tablaHead) {
		const opciones = document.createElement("th");
		opciones.innerHTML = `<svg style="width: 20px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cog-outline</title><path d="M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8M12,10A2,2 0 0,0 10,12A2,2 0 0,0 12,14A2,2 0 0,0 14,12A2,2 0 0,0 12,10M10,22C9.75,22 9.54,21.82 9.5,21.58L9.13,18.93C8.5,18.68 7.96,18.34 7.44,17.94L4.95,18.95C4.73,19.03 4.46,18.95 4.34,18.73L2.34,15.27C2.21,15.05 2.27,14.78 2.46,14.63L4.57,12.97L4.5,12L4.57,11L2.46,9.37C2.27,9.22 2.21,8.95 2.34,8.73L4.34,5.27C4.46,5.05 4.73,4.96 4.95,5.05L7.44,6.05C7.96,5.66 8.5,5.32 9.13,5.07L9.5,2.42C9.54,2.18 9.75,2 10,2H14C14.25,2 14.46,2.18 14.5,2.42L14.87,5.07C15.5,5.32 16.04,5.66 16.56,6.05L19.05,5.05C19.27,4.96 19.54,5.05 19.66,5.27L21.66,8.73C21.79,8.95 21.73,9.22 21.54,9.37L19.43,11L19.5,12L19.43,13L21.54,14.63C21.73,14.78 21.79,15.05 21.66,15.27L19.66,18.73C19.54,18.95 19.27,19.04 19.05,18.95L16.56,17.95C16.04,18.34 15.5,18.68 14.87,18.93L14.5,21.58C14.46,21.82 14.25,22 14,22H10M11.25,4L10.88,6.61C9.68,6.86 8.62,7.5 7.85,8.39L5.44,7.35L4.69,8.65L6.8,10.2C6.4,11.37 6.4,12.64 6.8,13.8L4.68,15.36L5.43,16.66L7.86,15.62C8.63,16.5 9.68,17.14 10.87,17.38L11.24,20H12.76L13.13,17.39C14.32,17.14 15.37,16.5 16.14,15.62L18.57,16.66L19.32,15.36L17.2,13.81C17.6,12.64 17.6,11.37 17.2,10.2L19.31,8.65L18.56,7.35L16.15,8.39C15.38,7.5 14.32,6.86 13.12,6.62L12.75,4H11.25Z" /></svg>`;
		tr.appendChild(opciones);
		tablaHead.appendChild(tr);
	}

	datos.forEach((d) => {
		const tr = document.createElement("tr");

		Object.values(d).forEach((value) => {
			let celda = document.createElement("td");
			celda.innerText = value;

			tr.appendChild(celda);
		});

		if (tablaBody) {
			const opciones = document.createElement("th");
			opciones.innerHTML = `<button class="btn btn-sm delete" id="delete-${d.id}">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"  >
					<title>delete-outline</title>
					<path
						d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z"
					/>
				</svg>
			</button>
			<button class="btn btn-sm edit" id="edit-${d.id}" data-bs-toggle="modal"
			data-bs-target="#${nombreTabla}Modal"> 
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
				<title>pencil-outline</title>
				<path
					d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z"
				/>
			</svg>
		</button>`;
			tr.appendChild(opciones);
			tablaBody.appendChild(tr);
		}
	});
}

async function mostrarTabla(url, tablaHead, tablaBody, nombreTabla) {
	const response = await apiConnection(url);
	armarTabla(response, tablaHead, tablaBody, nombreTabla);
}

window.addEventListener("load", async (event) => {
	const tHeadUsuarios = document.querySelector("#tHeadUsuarios");
	const tBodyUsuarios = document.querySelector("#tBodyUsuarios");
	const tHeadCtaBancaria = document.querySelector("#tHeadCtaBancaria");
	const tBodyCtaBancaria = document.querySelector("#tBodyCtaBancaria");
	const tHeadCtaUsuario = document.querySelector("#tHeadCtaUsuario");
	const tBodyCtaUsuario = document.querySelector("#tBodyCtaUsuario");

	await mostrarTabla(
		"http://localhost:3000/usuarios",
		tHeadUsuarios,
		tBodyUsuarios,
		"usuarios"
	);
	await mostrarTabla(
		"http://localhost:3000/CtaBancaria",
		tHeadCtaBancaria,
		tBodyCtaBancaria,
		"cuentaBancaria"
	);
	await mostrarTabla(
		"http://localhost:3000/CtaUsuario",
		tHeadCtaUsuario,
		tBodyCtaUsuario,
		"cuentaUsuario"
	);

	//Tabla usuarios
	document.querySelector(".nuevo-usuario").addEventListener("click", (e) => {
		document
			.querySelector("#usuarios-form")
			.addEventListener("submit", async (e) => {
				e.preventDefault();
				const nuevoUsuario = {
					user: e.target.elements.usuario.value,
					password: e.target.elements.contraseña.value,
				};

				await postUsuario(nuevoUsuario);
				location.reload();
			});
	});
	document.querySelectorAll(".delete").forEach((btn) => {
		btn.addEventListener("click", async (e) => {
			await deleteUsuario(e.target.id.slice(7));
			location.reload();
		});
	});
	document.querySelectorAll(".edit").forEach((btn) => {
		btn.addEventListener("click", (e) => {
			document
				.querySelector("#usuarios-form")
				.addEventListener("submit", (e) => {
					e.preventDefault();
					const nuevoUsuario = {
						user: e.target.elements.usuario.value,
						password: e.target.elements.contraseña.value,
					};
					putUsuario(btn.id.slice(5), nuevoUsuario);
					location.reload();
				});
		});
	});

	//Tabla cuenta bancaria
	document
		.querySelector(".nueva-ctaBancaria")
		.addEventListener("click", (e) => {
			document
				.querySelector("#cuentaBancaria-form")
				.addEventListener("submit", async (e) => {
					e.preventDefault();
					const nuevaCtaBancaria = {
						cuenta: e.target.elements.cuenta.value,
						cbu: e.target.elements.cbu.value,
						numTarjeta: e.target.elements.numTarjeta.value,
						pesos: e.target.elements.pesos.value,
						dolares: e.target.elements.dolares.value,
						plazoFijo: e.target.elements.plazoFijo.value,
						id_usuario: e.target.elements.idUsuario.value,
					};

					await postCtaBancaria(nuevaCtaBancaria);
					location.reload();
				});
		});

	document.querySelectorAll(".delete").forEach((btn) => {
		btn.addEventListener("click", async (e) => {
			await deleteCtaBancaria(e.target.id.slice(7));
			location.reload();
		});
	});

	document.querySelectorAll(".edit").forEach((btn) => {
		btn.addEventListener("click", (e) => {
			document
				.querySelector("#cuentaBancaria-form")
				.addEventListener("submit", (e) => {
					e.preventDefault();
					const nuevaCtaBancaria = {
						cuenta: e.target.elements.cuenta.value,
						cbu: e.target.elements.cbu.value,
						numTarjeta: e.target.elements.numTarjeta.value,
						pesos: e.target.elements.pesos.value,
						dolares: e.target.elements.dolares.value,
						plazoFijo: e.target.elements.plazoFijo.value,
						id_usuario: e.target.elements.idUsuario.value,
					};
					putCtaBancaria(btn.id.slice(13), nuevaCtaBancaria); //se rompe xq no esta todavia este put
					location.reload();
				});
		});
	});
});
