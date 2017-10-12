var playlist = {'artistName' : 'songTitles'}

var updatePlaylist= function(playlist, artistName, songName){
  return Object.assign({}, playlist, {[artistName] : songName})
}

var removeFromPlaylist = function(playlist, artistName){
var whatPlaylist =  delete playlist.artistName
return playlist
}
