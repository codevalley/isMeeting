chrome.webRequest.onBeforeRequest.addListener(
  function(details) { 
    // console.log(details)
    return {cancel: true}; 
  },
  {urls: 
    ["*://https://meet.google.com/???-???-???"]
  },
  ["You're blocked from meeting!"]
);
