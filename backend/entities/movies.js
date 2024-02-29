import typeorm from 'typeorm';

const Movie = new typeorm.EntitySchema({
  name: 'Movie',
  columns: {
    id: {
      primary: true,
      type: Number,
      generated: true,
    },
    adult: { type: Boolean },
    backdrop_path: {
      type: String,
    },
    genre_ids: {
      type: 'simple-array',
      nullable: true,
    },
    original_language: {
      type: String,
    },
    original_title: {
      type: String,
    },
    overview: {
      type: String,
    },
    popularity: {
      type: Number,
    },
    poster_path: {
      type: String,
    },
    release_date: { type: Date },
    title: {
      type: String,
    },
    video: { type: Boolean },
    vote_average: {
      type: Number,
    },
    vote_count: {
      type: Number,
    },
    liked: { type: Number, default: 0 },
  },
});

export default Movie;
