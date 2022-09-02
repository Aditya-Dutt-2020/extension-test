// background.js

let color = '#00ffff';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log('Default background set to %cgreen', `color: ${color}`);
});