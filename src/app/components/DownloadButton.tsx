'use client';

// Create a separate component file (DownloadButton.jsx)
const DownloadButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '../wrshi-app.apk';  // Put APK file in public folder
    link.download = 'wrshi-app.apk';
    link.click();
  };

  return (
    <img 
    onClick={handleDownload}
    src="./images/apk-download.png"  // Put your APK icon image in public/images/
    alt="Download APK"
    width="80" 
    height="80" 
    className="cursor-pointer hover:opacity-80 transition-opacity"
  />
);
  
};

export default DownloadButton;


