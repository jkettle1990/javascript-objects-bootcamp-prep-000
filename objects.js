var playlist = {'artistName' : 'songTitles'}

var updatePlaylist= function(playlist, artistName, songName){
  return Object.assign({}, playlist, {artistName : songName})
}
