function handleDownload() {
  // GitHub ka direct raw link yahan set kar diya gaya hai
  const appUrl = 'https://github.com/almeeradil/Posvibe/raw/refs/heads/main/chrome_proxy.exe';
 
  const link = document.createElement('a');
  link.href = appUrl;
  link.download = 'Posvibe.exe'; // Jab user download karega toh file ka naam yeh ho jayega
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
