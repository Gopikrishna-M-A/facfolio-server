import mongoose from "mongoose";

const homeSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    ctaheading: {
      type: String,
      required: true
    },
    ctapara: {
      type: String,
      required: true
    }
  });

  
const Home = mongoose.model("Home", homeSchema);

export default Home;