function monkeyPatcher(command) {
    let self = this;
    let commands = {
        upvote: () => {
            this.upvote++

        },
        downvote: () => {
            this.downvote++
        },
        score: () => {
            let rating = 'new';
            let currentUpVotes = this.upvote;
            let currentDownVotes = this.downvote;
            let totalVotes = currentUpVotes + currentDownVotes;
            let totalScore = currentUpVotes - currentDownVotes;

            if(totalVotes > 50){

            }
            return  `[${currentUpVotes()}, ${currentDownVotes()}, ${totalScore}, ${rating}`
        },
    };
    commands[command]()
}
let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
monkeyPatcher.call(post, 'upvote');
/*
monkeyPatcher.call(post, 'downvote');
let score = monkeyPatcher.call(post, 'score'); // [127, 127, 0, 'controversial']
monkeyPatcher.call(post, 'downvote');         // (executed 50 times)
score = monkeyPatcher.call(post, 'score');     // [139, 189, -50, 'unpopular']
*/
