CREATE TABLE IF NOT EXISTS past_words (
  date integer PRIMARY KEY,
  word text NOT NULL,
  definition text NOT NULL,
  sounds_like text NOT NULL,
  part_of_speech text NOT NULL
);
