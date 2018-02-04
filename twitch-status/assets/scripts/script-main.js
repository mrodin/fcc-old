const TwitchStatus = (function() {

  const settings = {
    baseURL: "https://wind-bow.gomix.me/twitch-api/streams/",
    channels: "ESL_SC2",
    allButton: document.getElementById("all-button"),
    onlineButton: document.getElementById("online-button"),
    offlineButton: document.getElementById("offline-button"),
  };

  const init = function() {
    bindUI();
    getJSON();
  };

  const bindUI = function() {
    settings.allButton.addEventListener("click", function() { openTab("all-button", "all-channels"); });
    settings.onlineButton.addEventListener("click", function() { openTab("online-button", "online-channels"); });
    settings.offlineButton.addEventListener("click", function() { openTab("offline-button", "offline-channels"); });
  };

  const openTab = function(buttonType, channelType) {
    removeActiveButton();
    hideChannels();
    addActiveButton(buttonType);
    showChannels(channelType);
  };

  // Add an "active-button" class to the button that opened the tab
  const addActiveButton = function(buttonType) {
    document.getElementById(buttonType).className += " active-button";
  };

  // Get all elements with class="button" and remove the class "active"
  const removeActiveButton = function() {
    let buttons = document.getElementsByClassName("button");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(" active-button", "");
    }
  };

  // Show channels on current tab
  const showChannels = function(channelType) {
    document.getElementById(channelType).style.display = "grid";
  };

  // Get all elements with class="channels" and hide them
  const hideChannels = function() {
    let channels = document.getElementsByClassName("channels");
    for (i = 0; i < channels.length; i++) {
      channels[i].style.display = "none";
    }
  };

  const getJSON = function() {
    const queryURL = settings.baseURL + settings.channels;
    fetch(queryURL)
      .then((resp) => resp.json())
      .then((data) => buildHTML(data));
  };

  const buildHTML = function(data) {
    let output = "test";
    document.getElementById("test-channels").innerHTML = output;
  };

  return {
    init: init
  };

})();

TwitchStatus.init();