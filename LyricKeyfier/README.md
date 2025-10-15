# Lyric Key-ifier Tool

A web-based tool for managing lyrics annotations through a placeholder system. Convert lyrics to numbered placeholders, annotate them externally, then restore the original text with annotations intact.

## What It Does

The Lyric Key-ifier helps you annotate lyrics by:

1. Converting lyric lines into numbered placeholders (`{LINE_1}`, `{LINE_2}`, etc.)
2. Preserving song structure markers (like `[Verse 1]`, `[Chorus]`)
3. Allowing you to add annotations around placeholders
4. Restoring the original lyrics while keeping your annotations

This is particularly useful when working with AI annotation tools or when you want to separate the annotation process from the lyric content.

## Use Case

Perfect for scenarios where you need to:

- Annotate lyrics with performance directions (tempo, emotion, style)
- Add metadata without revealing the actual song lyrics to external tools
- Process lyrics through AI tools while maintaining structure
- Batch process multiple songs with consistent annotation patterns
- Keep your lyrics private while getting annotations done

## How to Use

### Method 1: Open Directly in Browser

1. Download the `lyric-keyifier.html` file
2. Double-click to open it in your web browser
3. The tool runs entirely offline - no internet required!

### Method 2: Use from GitHub

1. Navigate to the file in the repository
2. Click "Raw" to view the HTML
3. Save the page (Ctrl+S / Cmd+S)
4. Open the saved file in your browser

## Workflow Guide

### Step 1: Create Placeholders

1. **Paste your original lyrics** in the left panel ("Original Lyrics" textarea)
   - Include all section markers like `[Verse 1]`, `[Chorus]`, etc.
   - The tool preserves these markers automatically

2. **Click "Generate Placeholders"**
   - Each lyric line gets converted to `{LINE_X}` format
   - Section markers remain unchanged
   - Empty lines are preserved

3. **Copy the placeholder lyrics** using the "Copy to Clipboard" button
   - These placeholders are what you'll annotate

**Example:**

```
Original:
[Verse 1]
Walking down the street
Feeling the sun's heat

Becomes:
[Verse 1]
{LINE_1}
{LINE_2}
```

### Step 2: Annotate the Placeholders

Take your placeholders to any annotation tool (or do it manually) and add your annotations:

```
[Verse 1]
[// slow and emotional delivery]
{LINE_1}
[// building energy]
{LINE_2}
```

**Important:** The prompt element at the top of the tool provides guidance you can copy and use when working with AI annotation tools. It explains that the placeholders should be kept as-is.

### Step 3: Restore Original with Annotations

1. **Paste your annotated placeholders** in the right panel ("Annotated Placeholders" textarea)

2. **Click "Restore Original Lyrics"**
   - The tool replaces all `{LINE_X}` placeholders with original lyrics
   - Your annotations remain in place

3. **Copy the final result** using the "Copy to Clipboard" button

**Result:**

```
[Verse 1]
[// slow and emotional delivery]
Walking down the street
[// building energy]
Feeling the sun's heat
```

## Features

### Smart Processing

- **Preserves Structure:** Section markers like `[Verse 1]`, `[Chorus]`, `[Bridge]` remain unchanged
- **Maintains Formatting:** Indentation and empty lines are preserved
- **Sequential Numbering:** Lines are numbered in order for easy reference
- **Validation:** Checks that all placeholders match the original lyrics

### User-Friendly Interface

- **Two-Panel Design:** Clear separation of input and output stages
- **One-Click Copying:** Copy buttons for easy clipboard access
- **Live Statistics:** See line count and section count in real-time
- **Status Feedback:** Clear success/error messages for all operations
- **Example Pre-loaded:** Opens with sample lyrics to demonstrate functionality

### Privacy

- **100% Client-Side:** All processing happens in your browser
- **No Data Upload:** Nothing is sent to any server
- **Works Offline:** No internet connection required after loading
- **No Tracking:** Zero analytics or monitoring

## Tips & Best Practices

### Before Annotating

- Keep the browser tab open during your annotation workflow
- If you close the tab, you'll need to regenerate placeholders
- The tool stores the mapping in memory while the page is open

### During Annotation

- Don't modify the `{LINE_X}` format (keep the braces and underscores)
- You can add text before, after, or on separate lines
- Section markers can be modified if needed
- Empty lines can be added freely

### After Restoring

- Always review the final output
- Check that all placeholders were successfully replaced
- If you see remaining `{LINE_X}` markers, ensure you pasted the correct annotated text

## Troubleshooting

### "No original lyrics stored" Error

**Problem:** Trying to restore without generating placeholders first  
**Solution:** Complete Step 1 before attempting Step 2

### Placeholders Not Replacing

**Problem:** Some `{LINE_X}` markers remain in the final output  
**Solution:**

- Ensure you used the exact placeholder format (with braces and underscores)
- Verify you didn't delete or modify any placeholder numbers
- Check that you ran Step 1 before Step 2 in the same browser session

### Copy Button Not Working

**Problem:** Clipboard copy fails  
**Solution:**

- Grant clipboard permissions when prompted by browser
- For older browsers, manually select and copy the text (Ctrl+C / Cmd+C)
- Try a different modern browser (Chrome, Firefox, Edge, Safari)

### Lost Your Placeholders

**Problem:** Closed the browser before completing the workflow  
**Solution:**

- Re-open the tool
- Paste your original lyrics again
- Regenerate placeholders
- Continue with annotation

## Browser Compatibility

Works with all modern browsers:

- ✅ Chrome / Edge (v90+)
- ✅ Firefox (v88+)
- ✅ Safari (v14+)
- ✅ Opera (v76+)

**Note:** Internet Explorer is not supported.

## Technical Details

### File Structure

The tool is a single HTML file containing:

- HTML structure
- CSS styling (embedded)
- JavaScript logic (embedded)

### Classes and Methods

- `LyricProcessor`: Core logic for placeholder creation and restoration
- `UIController`: Handles user interface interactions
- Pattern matching for section markers and placeholders
- Validation system to ensure data integrity

### Data Storage

- Uses JavaScript `Map` to store line mappings
- Data persists only during the browser session
- No localStorage or external storage used
- Memory is cleared when page is closed or refreshed

## Advanced Usage

### Working with AI Tools

When using AI annotation tools:

1. Copy the "Prompt element" from the tool header
2. Include this in your instructions to the AI
3. The AI will understand to keep placeholders intact
4. Paste the AI's output back into Step 2

### Batch Processing

To process multiple songs:

1. Keep the tool open in one tab
2. Use separate text editors for annotation work
3. Process each song through the workflow
4. Save each result before starting the next

### Custom Annotations

You can add any type of annotation:

- Performance directions: `[// slow and melancholic]`
- Technical notes: `[// key change to G major]`
- Timing: `[// 2 beat pause]`
- Vocal styles: `[// whispered]`
- Instrument cues: `[// guitar solo]`

## Contributing

This tool is part of the SunoToolkit repository. To suggest improvements:

1. Test your changes with various lyric formats
2. Ensure backward compatibility
3. Update this README with new features
4. Consider edge cases (very long lyrics, special characters, etc.)

## Privacy & Copyright

- This tool doesn't store, transmit, or process any lyrics externally
- All operations are local to your machine
- Users are responsible for respecting copyright when working with lyrics
- The tool is provided as-is for personal use

## Support

If you encounter issues:

1. Check the Troubleshooting section above
2. Verify you're using a modern browser
3. Try refreshing the page and starting over
4. Open browser console (F12) to check for JavaScript errors

---

**Part of [SunoToolkit](https://github.com/yourusername/SunoToolkit)** - A collection of tools for working with Suno content.

## License

Part of the SunoToolkit. Free to use for personal use.

It is not allowed to:

- make modification(s) to this tool.
- make money using this tool.
