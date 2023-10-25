const apiConnection = async (url) => {
	try {
		const response = await fetch(url, { method: "GET" });
		const data = await response.json();
		return data;
	} catch (error) {
		console.error(error);
	}
};

const tHeadUsuarios = document.querySelector("#tBodyUsuarios");
const tBodyUsuarios = document.querySelector("#tBodyUsuarios");
const tHeadCtaBancaria = document.querySelector("#tBodyCtaBancaria");
const tBodyCtaBancaria = document.querySelector("#tBodyCtaBancaria");
const tHeadCtaUsuario = document.querySelector("#tBodyCtaUsuario");
const tBodyCtaUsuario = document.querySelector("#tBodyCtaUsuario");

const armarTabla = (datos, tablaHead, tablaBody) => {
	const tr = document.createElement("tr");

	Object.keys(datos[0]).forEach((key) => {
		let celda = document.createElement("th");
		celda.innerText = key;
		tr.appendChild(celda);
	});

	tablaHead.appendChild(tr);

	datos.forEach((d) => {
		const tr = document.createElement("tr");

		Object.values(d).forEach((value) => {
			let celda = document.createElement("td");
			celda.innerText = value;
			tr.appendChild(celda);
		});

		/* const tdId = document.createElement("td");
		const tdUser = document.createElement("td");
		const tdPassword = document.createElement("td");

		tdId.innerText = d.id;
		tdUser.innerText = d.user;
		tdPassword.innerText = d.password; 

		tr.appendChild(tdId);
		tr.appendChild(tdUser);
		tr.appendChild(tdPassword);*/

		tablaBody.appendChild(tr);
	});
};

const mostrarTabla = async (url, tablaHead, tablaBody) => {
	const response = await apiConnection(url);

	armarTabla(response, tablaHead, tablaBody);
};

mostrarTabla("http://localhost:3000/usuarios", tHeadUsuarios, tBodyUsuarios);

mostrarTabla(
	"http://localhost:3000/CtaBancaria",
	tHeadCtaBancaria,
	tBodyCtaBancaria
);

mostrarTabla(
	"http://localhost:3000/CtaUsuario",
	tHeadCtaUsuario,
	tBodyCtaUsuario
);
