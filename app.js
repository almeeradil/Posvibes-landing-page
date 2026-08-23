function handleDownload() {
  // Yahan apni APK file ka correct path ya direct URL dein
  const appUrl = 'Payvibes.exe'; // Agar file root folder me hai ya hosting URL hai toh poora link dein
 
  const link = document.createElement('a');
  link.href = appUrl;
  link.download = 'PayVibes.exe';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
