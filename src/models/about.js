import mongoose from "mongoose"

const aboutSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  userTag: {
    type: String,
    required: true,
  },
  quote: String,
  linkedinurl: String,
  twitterurl: String,
  githuburl: String,
  interest: {
    type: [String],
    default: [],
  },
  responsibilities: {
    type: [String],
    default: [],
  },
  education: {
    type: [
      {
        degree: String,
        school: String,
        year: Number,
      },
    ]
  },
  expertise: {
    type: [String],
    default: [],
  }
})

const About = mongoose.model("About", aboutSchema)

export default About