CREATE TABLE dragon(
  id             SERIAL PRIMARY KEY,
  birthdate      TIMESTAMP NOT NULL,
  "generationId" INTEGER, --"" because it keeps the I in Id capped
  nickname       VARCHAR(64), -- varcar(64) vs varryingchar(50)...varcar does not take up blank spacewhy 64? power of 2memory
  FOREIGN KEY ("generationId") REFERENCES generation(id)
);
