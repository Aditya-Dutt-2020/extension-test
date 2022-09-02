// background.js

let color = '#efe000';

chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({color});
    console.log('Default background set to %cgreen', `color: ${color}`);
});
