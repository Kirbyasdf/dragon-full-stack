  !#/bin/bash


  export PGPASSWORD="baller_pass"


  db="dragonstackdb"
  echo "Configuring data: $db"
  dropdb -U node_user dragonstackdb
  createdb -U node_user dragonstackdb
  psql -U node_user dragonstackdb < ./bin/sql/generation.sql
  psql -U node_user dragonstackdb < ./bin/sql/dragon.sql
  echo  "$db was configured"


# cd into the bin and add the > chmod +x configure_db.sh - to add exce ability to file <
# you can always check with > ls -l <
