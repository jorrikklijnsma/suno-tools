# SunoToolkit

A collection of tools for working with Suno.com content - from data extraction to lyrics annotation.

## 🎵 Tools Included

### 1. Suno Data Extractor

**Backup all your Suno songs as JSON files**

A browser console script that captures your song data from Suno by intercepting API responses. Perfect for creating backups or migrating your content.

- Runs in Chrome DevTools console
- No authentication issues (uses your existing login)
- Captures complete song metadata
- Automatic or manual pagination
- Downloads each page as a separate JSON file

[**→ Go to Suno Data Extractor**](./SunoDataExtractor/)

---

### 2. Lyric Key-ifier

**Annotate lyrics using a placeholder system**

A web-based tool that converts lyrics to numbered placeholders, allowing you to annotate them externally (like with AI tools), then restore the original lyrics with annotations intact.

- 100% browser-based, works offline
- Two-step workflow: convert → annotate → restore
- Preserves song structure (verses, choruses, etc.)
- Perfect for AI-assisted annotation
- No data leaves your browser

[**→ Go to Lyric Key-ifier**](./LyricKeyifier/)

---

## 🚀 Quick Start

### Suno Data Extractor

```bash
# 1. Open Suno.com in Chrome and log in
# 2. Press F12 to open DevTools
# 3. Go to Console tab
# 4. Copy and paste the script from SunoDataExtractor/suno-data-extractor.js
# 5. Press Enter and follow the console instructions
```

### Lyric Key-ifier

```bash
# Simply open the HTML file in your browser
# Double-click: LyricKeyifier/lyric-keyifier.html
```

---

## 📋 Use Cases

### Suno Data Extractor

- **Backup your work:** Save all song metadata before account changes
- **Content migration:** Export data for use in other tools
- **Analytics:** Analyze your song creation patterns
- **Archive:** Keep a local copy of all your songs

### Lyric Key-ifier

- **AI Annotation:** Get AI to annotate lyrics without revealing content
- **Performance Notes:** Add singing directions systematically
- **Collaboration:** Share annotated structure without lyrics
- **Batch Processing:** Annotate multiple songs consistently

---

## 🛠️ Features

### Privacy First

- ✅ All tools run locally in your browser
- ✅ No data sent to external servers
- ✅ No tracking or analytics
- ✅ Your content stays private

### Easy to Use

- ✅ No installation required
- ✅ No technical knowledge needed
- ✅ Clear step-by-step instructions
- ✅ Helpful error messages

### Reliable

- ✅ Works offline (Lyric Key-ifier)
- ✅ Uses browser's native APIs
- ✅ No dependencies on external libraries
- ✅ Tested on major browsers

---

## 📖 Documentation

Each tool has its own detailed README:

- **[Suno Data Extractor README](./SunoDataExtractor/README.md)** - Complete guide including troubleshooting and update instructions
- **[Lyric Key-ifier README](./LyricKeyifier/README.md)** - Workflow guide and best practices

---

## 🔧 Browser Requirements

### Suno Data Extractor

- Chrome, Edge, Brave, or any Chromium-based browser
- DevTools console access
- Active Suno.com account

### Lyric Key-ifier

- Any modern browser (Chrome, Firefox, Safari, Edge)
- No internet required after loading
- JavaScript enabled

---

## 🎯 Repository Structure

```
SunoToolkit/
├── README.md
├── SunoDataExtractor/
│   ├── README.md
│   └── script.js
└── LyricKeyifier/
    ├── README.md
    └── index.html
```

---

## 🤝 Contributing

These tools are designed for personal use. If you have suggestions or improvements:

1. Ensure changes maintain privacy and local-only operation
2. Test thoroughly with various scenarios
3. Update relevant README files
4. Keep tools simple and accessible

---

## ⚠️ Important Notes

### Suno Data Extractor

- Suno's website may change, potentially breaking the script
- Check the README for update instructions if this happens
- Use reasonable delays between pages to avoid rate limiting
- Respect Suno's terms of service

### Lyric Key-ifier

- The tool doesn't validate copyright - that's your responsibility
- Keep the browser tab open during your workflow
- Data is stored in memory only (lost on page close/refresh)

---

## 🐛 Troubleshooting

### Common Issues

**Suno Data Extractor not capturing data?**

- Verify you're logged into Suno
- Check browser console for errors
- See the tool's README for API endpoint updates

**Lyric Key-ifier not working?**

- Try a different browser
- Check that JavaScript is enabled
- Clear browser cache and reload

**Need more help?**

- Check the individual tool READMEs
- Look at the troubleshooting sections
- Review browser console for error messages

---

### Disclaimer

- These are community tools, not official Suno products
- Use at your own risk
- Always respect copyright and terms of service
- The authors are not responsible for any misuse

---

## 🔮 Future Tools

Have ideas? Feel free to suggest!

---

## 🙏 Acknowledgments

Created for the Suno community to help manage and work with their creative content.

Special thanks to everyone using and improving these tools!

---

**Happy creating! 🎵**

---

## License

Part of the SunoToolkit. Free to use for personal use.

It is not allowed to:

- make modification(s) to this tool.
- make money using this tool.
