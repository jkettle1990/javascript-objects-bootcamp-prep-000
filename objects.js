var playlist = {'artist names' : 'song titles'}

var updatePlaylist= function(playlist, artistName, songName){
  return Object.assign({}, playlist, {'artistName': songName})
}
