const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const albumSchema = new Schema ({
	albumName: {
		type: mongoose.Schema.Types.Mixed,
      		ref: 'Album',
	},
      	coverArt: {
		type: mongoose.Schema.Types.Mized,
      		ref: 'Art',
	},
});

// const Album = mongoose.model('Album', albumSchema);

module.exports = mongoose.model("Album", albumSchema);