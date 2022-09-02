// background.js

let color = '#eeffff';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log('Default background set to %cgreen', `color: ${color}`);
});