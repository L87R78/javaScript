function nowPlaying(arr){
    let singer = arr[1];
    let trackName = arr[0];
    let duration = arr[2];
    console.log(`Now Playing: ${singer} - ${trackName} [${duration}]`)
}
//nowPlaying(['Number One', 'Nelly', '4:09']);