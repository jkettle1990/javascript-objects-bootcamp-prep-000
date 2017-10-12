var playlist = {'artistName' : 'songTitles'}

var updatePlaylist= function(playlist, artistName, songName){
  return Object.assign({}, playlist, {[artistName] : songName})
}

var removeFromPlaylist = function(playlist, artistName){
var newObject = delete playlist.artistName
return newObject
}
