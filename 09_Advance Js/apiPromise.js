function apiCall() {
    const fetchApi = new Promise((respond, reject) => {
        const xhr = new XMLHttpRequest();
        const requestUrl = "https://api.github.com/users/architraghav"
        xhr.open('GET', requestUrl);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const data = JSON.parse(this.responseText)
                    respond(data);
                }
                else {
                    reject(`ERROR: ${xhr.status}`)
                }
            }

        }
        xhr.send();
    });

    fetchApi.then((data) => {
        return data.avatar_url;
    }).then((imageUrl) => {
        console.log(imageUrl);

    }).catch((error) => {
        console.log(error);
    }).finally(() => {
        console.log("Fetching Done");
    })
}

apiCall();