  !#/db/bash



  db="dragonstackdb"
  echo "Configuring data: $db"
  dropdb -U node_user dragonstackdb
  createdb -U node_user dragonstackdb
  psql -U node_user dragonstackdb < ./db/sql/generation.sql
  psql -U node_user dragonstackdb < ./db/sql/dragon.sql
  psql -U node_user dragonstackdb < ./db/sql/traits.sql
  psql -U node_user dragonstackdb < ./db/sql/dragonTrait.sql

  node  ./db/insertTraits.js

  echo  "$db was configured"


# cd into the bin and add the > chmod +x configure_db.sh - to add exce ability to file <
# you can always check with > ls -l <
# you can see all tables when in psql w/ command < \dt; <
