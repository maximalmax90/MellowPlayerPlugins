var ahfm_start = true
function update() {
    return {
        "playbackStatus": getPlaybackStatus(),
        "canSeek": false,
        "canGoNext": false,
        "canGoPrevious": false,
        "canAddToFavorites": false,
        "volume": getVolume(),
        "duration": 0,
        "position": 0,
        "songId": 0,
        "songTitle": getTitle(),
        "artistName": '',
        "albumTitle": '',
        "artUrl": '',
        "isFavorite": false
    };
}

function getPlaybackStatus() {
    if ($('#jp_jplayer_0').data().jPlayer.status.paused) return MellowPlayer.PlaybackStatus.PAUSED;
    else return MellowPlayer.PlaybackStatus.PLAYING;
}

function getTitle() {return document.getElementsByClassName('ng-binding')[0].text;}
function play() {$("#jp_jplayer_0").jPlayer("play")}
function pause() {$("#jp_jplayer_0").jPlayer("pause")}
function goNext() {}
function goPrevious() {}
function setVolume(volume) {$("#jp_jplayer_0").jPlayer("volume", volume)}
function getVolume() {
    if (ahfm_start) {
        setVolume(1.0);
        ahfm_start = false;
    } else return $("#jp_jplayer_0").jPlayer("option","volume");
}
function addToFavorites() {}
function removeFromFavorites() {}
function seekToPosition(position) {}
