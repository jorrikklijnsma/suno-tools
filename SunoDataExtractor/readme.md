# Suno Data Extractor

A browser console script that automatically captures and downloads all your song data from Suno.com as JSON files.

## How It Works

This script intercepts the API responses that Suno's website naturally makes when you navigate through your songs. It doesn't make any new requests - it just captures the data that's already being loaded by the website.

## Setup

### Prerequisites

1. Google Chrome (or any Chromium-based browser like Edge, Brave, etc.)
2. A Suno account with songs to export
3. Browser configured to auto-save downloads to a specific folder (optional but recommended)

### Configure Auto-Downloads (Optional)

1. Open Chrome Settings
2. Go to "Downloads"
3. Enable "Ask where to save each file before downloading" OR set a default download location
4. This ensures all JSON files go to your chosen folder without prompts

## Usage Instructions

### Step 1: Prepare the Script

1. Open the `suno-data-extractor.js` file in a text editor
2. Copy the entire contents (Ctrl+A, then Ctrl+C)

### Step 2: Open Suno

1. Navigate to [suno.com](https://suno.com) in Chrome
2. Log in to your account
3. Go to your songs page (where you can see your song list)

### Step 3: Open Developer Tools

1. Press **F12** (or Right-click anywhere → "Inspect")
2. Click on the **Console** tab
3. You should see a command prompt where you can type JavaScript

### Step 4: Run the Script

1. Paste the entire script into the console (Ctrl+V)
2. Press **Enter**
3. You should see: `🎵 Suno Data Interceptor started!`

### Step 5: Extract Your Data

You have two options:

#### Option A: Manual Navigation (Recommended)

- Simply click the "Next Page" button in Suno's interface
- Each time a new page loads, the script will automatically:
  - Capture the API response
  - Download it as `suno-songs-page-X.json`
- Continue clicking until you've gone through all your pages

#### Option B: Automatic Navigation

- Type `window.autoClickNext()` in the console and press Enter
- The script will automatically:
  - Wait 4 seconds
  - Click the next page button
  - Capture and download the data
  - Repeat until no more pages exist

### Step 6: Stop the Script

- To stop the interceptor, simply reload the page (F5 or Ctrl+R)
- Or close the browser tab

## Output

Each page of songs will be saved as a separate JSON file:

- `suno-songs-page-1.json`
- `suno-songs-page-2.json`
- `suno-songs-page-3.json`
- etc.

Each file contains the complete API response for that page, including all song metadata.

## Troubleshooting

### "Nothing happens when I click next"

- Make sure you see `✅ Interceptor ready!` in the console
- Check that you're on the correct Suno page with your songs
- Try reloading and running the script again

### "Downloads are being blocked"

- Check Chrome's download settings
- Look for a download icon in the address bar (Chrome may be blocking automatic downloads)
- Click it and select "Allow" for suno.com

### "The script stopped working"

- If you navigate to a different page, you'll need to run the script again
- The script only works on the current page/tab

### "Auto-click isn't finding the next button"

- The button HTML may have changed (see Update Instructions below)
- Use manual navigation instead

## Update Instructions

If Suno updates their website and the script stops working, you may need to update these parts:

### Updating the API Endpoint

If the API URL changes:

1. Open Chrome DevTools (F12)
2. Go to the **Network** tab
3. Click "Next Page" in Suno
4. Look for a request to `studio-api.prod.suno.com` or similar
5. Copy the new endpoint URL
6. In the script, find this line:

   ```javascript
   apiEndpoint: 'studio-api.prod.suno.com/api/feed/v2',
   ```

7. Replace with your new endpoint (keep only the domain and path, no `https://`)

### Updating the Next Button Selector

If the "Next Page" button HTML changes:

1. On the Suno page, right-click the Next button
2. Select "Inspect" or "Inspect Element"
3. Find the `<svg>` element inside the button
4. Look for the `<path d="...">` attribute
5. Copy the entire `d` attribute value
6. In the script, find this line:

   ```javascript
   nextButtonSvgPath: 'M9 7.343c0-.89 1.077-1.337...',
   ```

7. Replace with your new path value

**Example:**

If the new button HTML looks like this:

```html
<button>
  <svg>
    <path d="M12 4l8 8-8 8"></path>
  </svg>
</button>
```

Update the script to:

```javascript
nextButtonSvgPath: 'M12 4l8 8-8 8',
```

### Updating Other Settings

All configurable settings are in the `CONFIG` object at the top of the script:

```javascript
const CONFIG = {
  apiEndpoint: 'studio-api.prod.suno.com/api/feed/v2',
  nextButtonSvgPath: 'M9 7.343c0-.89...',
  autoClickDelay: 4,  // seconds between auto-clicks
  filenamePrefix: 'suno-songs-page-'  // prefix for downloaded files
};
```

You can modify any of these values to customize the script's behavior.

## Advanced: Finding the API Endpoint

If you need to find the exact API call Suno is making:

1. Open DevTools (F12)
2. Go to **Network** tab
3. Click the **Fetch/XHR** filter button
4. Navigate to the next page in Suno
5. Look for requests in the Network tab
6. Find one that returns JSON with your song data
7. Right-click it → Copy → Copy URL
8. Use this URL to update the `apiEndpoint` in the CONFIG

## Privacy & Security

- This script runs entirely in your browser
- No data is sent to any external servers
- It only captures data that Suno is already sending to your browser
- All files are saved locally to your computer
- The script only works while you have the console open

## Tips

- Start with page 1 to ensure the script is working before using auto-navigation
- Keep the console open to see progress messages
- If you have many pages, consider using a lower `autoClickDelay` (but not less than 2 seconds)
- You can run the script multiple times - it won't duplicate downloads for the same page number

## License

Part of the SunoToolkit. Free to use for personal use.

It is not allowed to:

- make modification(s) to this tool.
- make money using this tool.
