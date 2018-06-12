// fetch text() attempt
fetch('https://www.cineworld.co.uk/syndication/listings.xml', {
	method: 'POST', 
	mode: 'cors'
}).then(function(response) { 
	return response.text();
}).then( (response) => {
	console.warn(response);
});

// fetch readable stream attempt - doesn't work
// fetch('https://www.cineworld.co.uk/syndication/listings.xml', {
// 	method: 'POST', 
// 	mode: 'cors'
// }).then(function(response) { 
// 	return response;
// }).then( (response) => {

//     const reader = response.body.getReader();
//     var decoder = new TextDecoder();
//     var bytesReceived = 0;

//     return reader.read().then(function processResult(result) {
//         if (result.done) {
//           console.warn(decoder.decode(result.value, {stream: true}));
//           return;
//         }
//         bytesReceived += result.value.length;
//         console.log('Received', bytesReceived, 'bytes of data so far');

//         return reader.read().then(processResult);
//     });

// });
