/**
 * Created by aksharpatel on 20/11/15.
 */

function ajaxRequest (reqType, url, data) {
	return new Promise((resolve, reject) => {
		let request = new XMLHttpRequest();
		request.open(reqType, url);
		request.onreadystatechange = () => {
			if (request.readyState === 4) {
				resolve({
					status: request.status,
					response: request.responseText
				});
			}
		};

		if (!!data && (typeof data === 'object' || reqType !== 'GET')) {
			request.setRequestHeader('Content-Type', 'application/json');
			data = JSON.stringify(data);
			console.log(data);
		}
		request.send(data);
	});
}

let xhttp = {
	get(url) {
		return ajaxRequest('GET', url);
	},

	post(url, data) {
		return ajaxRequest('POST', url, data);
	},

	put(url, data) {
		return ajaxRequest('PUT', url, data);
	},

	delete(url, data) {
		return ajaxRequest('DELETE', url, data);
	}
};

export default xhttp;