import mongoose from 'mongoose';

const addSchema = new mongoose.Schema(
    {
      userId: {
        type: String,
        required: true,
      },
      
      title: {
        type: String,
        required: true,
        unique: true,
      },
      image: {
        type: String,
        default:
          'https://images.shiksha.com/mediadata/ugcDocuments/images/wordpressImages/2022_12_MicrosoftTeams-image-171.jpg',
      },
    },
    { timestamps: true }
  );

  const Add = mongoose.model('Add', addSchema);

  export default Add;