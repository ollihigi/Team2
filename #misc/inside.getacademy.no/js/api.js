async function loadContent(filePath) {
    const email = model.email;
    const arg = { filePath, email };
    const response = await axios.post('/api.php', arg);
    const data = response.data;
    if (typeof (data.error) === 'string') {
        console.error(data.error);
        logout();
    }
    return data.content;
}

async function getContentTocFromApi() {
    const response = await axios.post('/api.php');
    handleApiResponse(response);
}

async function verifyIdToken(authResponse) {
    model.statusText = 'Logger inn...';
    updateView();
    const arg = { idToken: authResponse.credential };
    const response = await axios.post('/api.php', arg);
    document.documentElement.setAttribute('data-theme', 'dark');
    handleApiResponse(response);
}

function handleApiResponse(response) {
    const responseObj = response.data;
    console.log(responseObj);
    if (!responseObj || typeof (responseObj.error) === 'string') {
        logout();
        return;
    }
    initContent(responseObj);
}
