/**
 * Created by aksharpatel on 20/11/15.
 */

function ajaxRequest(reqType, url, data) {
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

		if (!!data && typeof data === 'object') {
			request.setRequestHeader('Content-Type', 'application/json');
			data = JSON.stringify(data);
			console.log('Sending the following data with request', data);
		}
		request.send(data);
	});
}


export function get(url) {
	return ajaxRequest('GET', url);
}

export function post(url, data) {
	return ajaxRequest('POST', url, data);
}

export function put(url, data) {
	return ajaxRequest('PUT', url, data);
}

export function del(url, data) {
	return ajaxRequest('DELETE', url, data);
}
