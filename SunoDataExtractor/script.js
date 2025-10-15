// Suno Data Interceptor
// Intercepts API responses from Suno and automatically downloads song data as JSON files
// See README.md for usage instructions

(async function interceptSunoData() {
  console.log('🎵 Suno Data Interceptor started!');
  console.log('📡 Monitoring network requests...');
  
  let pageCount = 0;
  const capturedData = new Map();
  
  // Configuration - Update these if Suno's API changes
  const CONFIG = {
    // The API endpoint to monitor
    apiEndpoint: 'studio-api.prod.suno.com/api/feed/v2',
    
    // SVG path that identifies the "next page" button
    nextButtonSvgPath: 'M9 7.343c0-.89 1.077-1.337 1.707-.707l4.657 4.657a1 1 0 0 1 0 1.414l-4.657 4.657c-.63.63-1.707.184-1.707-.707z',
    
    // Delay between auto-clicks (in seconds)
    autoClickDelay: 4,
    
    // Filename prefix for downloaded files
    filenamePrefix: 'suno-songs-page-'
  };
  
  // Function to download JSON data
  function downloadJSON(data, filename) {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log(`✅ Downloaded: ${filename}`);
  }
  
  // Intercept fetch requests
  const originalFetch = window.fetch;
  window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);
    
    // Check if this is the Suno API endpoint we care about
    const url = args[0];
    if (typeof url === 'string' && url.includes(CONFIG.apiEndpoint)) {
      console.log('🎯 Captured API call:', url);
      
      // Extract page number from URL
      const pageMatch = url.match(/page=(\d+)/);
      const pageNum = pageMatch ? parseInt(pageMatch[1]) : 1;
      
      // Clone the response so we can read it without affecting the original
      const clonedResponse = response.clone();
      
      try {
        const data = await clonedResponse.json();
        
        // Check if we haven't already saved this page
        if (!capturedData.has(pageNum)) {
          capturedData.set(pageNum, data);
          pageCount++;
          
          // Download immediately
          const filename = `${CONFIG.filenamePrefix}${pageNum}.json`;
          downloadJSON(data, filename);
          console.log(`📄 Page ${pageNum} captured and downloaded! (Total: ${pageCount} pages)`);
        }
      } catch (error) {
        console.error('❌ Error parsing response:', error);
      }
    }
    
    return response;
  };
  
  // Also intercept XMLHttpRequest as a backup
  const originalOpen = XMLHttpRequest.prototype.open;
  const originalSend = XMLHttpRequest.prototype.send;
  
  XMLHttpRequest.prototype.open = function(method, url, ...rest) {
    this._url = url;
    return originalOpen.apply(this, [method, url, ...rest]);
  };
  
  XMLHttpRequest.prototype.send = function(...args) {
    this.addEventListener('load', function() {
      if (this._url && this._url.includes(CONFIG.apiEndpoint)) {
        console.log('🎯 Captured XHR call:', this._url);
        
        try {
          const data = JSON.parse(this.responseText);
          const pageMatch = this._url.match(/page=(\d+)/);
          const pageNum = pageMatch ? parseInt(pageMatch[1]) : 1;
          
          if (!capturedData.has(pageNum)) {
            capturedData.set(pageNum, data);
            pageCount++;
            
            const filename = `${CONFIG.filenamePrefix}${pageNum}.json`;
            downloadJSON(data, filename);
            console.log(`📄 Page ${pageNum} captured and downloaded! (Total: ${pageCount} pages)`);
          }
        } catch (error) {
          console.error('❌ Error parsing XHR response:', error);
        }
      }
    });
    
    return originalSend.apply(this, args);
  };
  
  console.log('✅ Interceptor ready! Now click through the pages manually.');
  console.log('💡 The script will automatically capture and download each page\'s data.');
  console.log('');
  console.log('To stop intercepting, run: window.location.reload()');
  
  // Helper function to click next button automatically (optional)
  window.autoClickNext = async function(delaySeconds = CONFIG.autoClickDelay) {
    console.log('🤖 Auto-navigation started...');
    let continueClicking = true;
    
    while (continueClicking) {
      await new Promise(resolve => setTimeout(resolve, delaySeconds * 1000));
      
      const buttons = document.querySelectorAll('button');
      let clicked = false;
      
      for (let button of buttons) {
        const svg = button.querySelector(`svg path[d="${CONFIG.nextButtonSvgPath}"]`);
        if (svg && !button.disabled) {
          button.click();
          console.log('⏭️ Clicked next button...');
          clicked = true;
          break;
        }
      }
      
      if (!clicked) {
        console.log('🏁 No more pages! Auto-navigation complete.');
        console.log(`🎉 Total pages captured: ${pageCount}`);
        continueClicking = false;
      }
    }
  };
  
  console.log('');
  console.log('Optional: Run window.autoClickNext() to automatically navigate through all pages!');
  console.log('Or just click the next button manually - either way works! 🎵');
})();