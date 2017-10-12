var playlist = {'artistName' : 'songTitles'}

var updatePlaylist= function(playlist, artistName, songName){
  return Object.assign({}, playlist, {[artistName] : songName})
}

var removeFromPlaylist = function(playlist, artistName){
var noPlaylist = delete playlist.artistName
return noPlaylist;
}
