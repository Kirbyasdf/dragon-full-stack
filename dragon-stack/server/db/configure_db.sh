  !#/bin/bash


  export PGPASSWORD="baller_pass"


  db="dragonstackdb"
  echo "Configuring data: $db"
  dropdb -U node_user dragonstackdb
  createdb -U node_user dragonstackdb
  psql -U node_user dragonstackdb < ./db/sql/generation.sql
  psql -U node_user dragonstackdb < ./db/sql/dragon.sql
  psq -U node_user dragonstackdb < ./db/sql/traits.sql
  echo  "$db was configured"


# cd into the bin and add the > chmod +x configure_db.sh - to add exce ability to file <
# you can always check with > ls -l <
