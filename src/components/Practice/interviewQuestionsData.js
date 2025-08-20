// === src/components/Practice/interviewQuestionsData.js ===
export const interviewData = {
  hadoop: {
    title: "Hadoop",
    emoji: "🐘",
    questions: [
      {
        question: "What is Hadoop?",
        answer: `Hadoop is a distributed framework which provides both distributed storage and distributed processing of data. 
  It uses HDFS (Hadoop Distributed File System) for storage and MapReduce for processing. 
  Hadoop is highly durable, fault-tolerant, and scalable — meaning you can add more machines (nodes) without downtime.  

  Example: If you have 1TB of log files, instead of storing them in one system, Hadoop splits them into blocks and stores across multiple DataNodes. 
  Processing happens in parallel across those nodes, making it faster than traditional systems.  

  🔹 Example Command:  
  \`\`\`bash
  # Upload a file into HDFS
  hdfs dfs -put logs.txt /user/hadoop/input/

  # List files in HDFS
  hdfs dfs -ls /user/hadoop/input/
  \`\`\``,
        keywords: ["HDFS", "MapReduce", "distributed", "durable", "scalable", "parallel processing"],
      },
      {
        question: "What are the components of Hadoop?",
        answer: `Hadoop has the following key components:  

  1. NameNode – The master node that manages metadata (file system namespace, block locations).  
  2. Standby NameNode – Backup for the active NameNode to ensure high availability.  
  3. DataNodes – Worker nodes where actual data blocks are stored.  
  4. Journal Nodes – Maintain edit logs in HA setups.  
  5. ZooKeeper – Helps coordinate NameNode failover.  

  🔹 Example Command (check cluster status):  
  \`\`\`bash
  hdfs dfsadmin -report
  \`\`\``,
        keywords: ["NameNode", "Standby NameNode", "DataNodes", "JournalNodes", "ZooKeeper", "architecture"],
      },
      {
        question: "What is the block size in Hadoop HDFS?",
        answer: `In Hadoop, files are divided into blocks for storage.  

  - Hadoop 1.x → Default block size = 64 MB  
  - Hadoop 2.x and above → Default block size = 128 MB  
  - Block size can be configured in \`hdfs-site.xml\`.  

  🔹 Example Command (check block locations):  
  \`\`\`bash
  hdfs fsck /user/hadoop/input/logs.txt -files -blocks -locations
  \`\`\`  

  This shows which DataNodes hold each block.`,
        keywords: ["HDFS", "block size", "Hadoop 1.x", "Hadoop 2.x", "storage"],
      },
      {
        question: "How is fault tolerance managed in Hadoop?",
        answer: `Hadoop ensures fault tolerance using replication factor.  
  - Default replication factor = 3.  
  - If one DataNode fails, data is still accessible from the other replicas.  

  🔹 Example Command:  
  \`\`\`bash
  # Set replication factor of a file to 2
  hdfs dfs -setrep -w 2 /user/hadoop/input/logs.txt
  \`\`\`  

  Example: If a block is stored on Node1, Node2, and Node3, and Node2 crashes, Hadoop automatically recovers data from Node1 and Node3.`,
        keywords: ["fault tolerance", "replication factor", "replicas", "recovery"],
      },
      {
        question: "What is Safe Mode in Hadoop?",
        answer: `When the NameNode restarts, it enters Safe Mode.  
  - The NameNode is read-only (no new writes).  
  - Waits for DataNodes to send block reports.  
  - Performs checkpointing (merging FSImage with EditLogs).  
  - Leaves Safe Mode once enough replicas are available.  

  🔹 Example Command:  
  \`\`\`bash
  # Check if NameNode is in Safe Mode
  hdfs dfsadmin -safemode get

  # Force NameNode to leave Safe Mode
  hdfs dfsadmin -safemode leave
  \`\`\``,
        keywords: ["Safe Mode", "checkpointing", "NameNode", "FSImage", "EditLog"],
      },
      {
        question: "What is Heartbeat interval in Hadoop?",
        answer: `Each DataNode sends a heartbeat every 3 seconds to the NameNode.  
  If no heartbeat is received for ~10 minutes, the DataNode is marked dead and its blocks are re-replicated.`,
        keywords: ["heartbeat", "DataNode", "NameNode", "alive check"],
      },
      {
        question: "What is FSImage and EditLog?",
        answer: `- FSImage: A checkpoint file that stores the complete metadata of HDFS.  
  - EditLog: A log file that records every change since the last checkpoint.  
  - During checkpointing, EditLog is merged into FSImage by Secondary NameNode.  

  🔹 Example Command (force checkpoint):  
  \`\`\`bash
  hdfs dfsadmin -rollEdits
  \`\`\``,
        keywords: ["FSImage", "EditLog", "metadata", "checkpointing", "Secondary NameNode"],
      },
      {
        question: "What is under-replication and over-replication in Hadoop?",
        answer: `- Under-replication: Block replicas < replication factor. Hadoop creates new replicas.  
  - Over-replication: Block replicas > replication factor. Hadoop deletes extra copies.  

  🔹 Example Command:  
  \`\`\`bash
  hdfs fsck /user/hadoop/input/logs.txt -blocks -locations -racks
  \`\`\``,
        keywords: ["under replication", "over replication", "replication factor", "block management"],
      },
      {
        question: "What is a split-brain scenario in Hadoop?",
        answer: `Occurs when a previously dead NameNode becomes active and writes to JournalNodes while another NameNode is already active.  
  This causes metadata inconsistency.  
  Hadoop prevents this using ZooKeeper-based failover control.`,
        keywords: ["split brain", "NameNode", "JournalNode", "failover"],
      },
      {
        question: "What is Speculative Execution in Hadoop?",
        answer: `If a task (Map/Reduce) runs slower than others, Hadoop may launch a duplicate task on another node.  
  Whichever finishes first is accepted.  

  🔹 Example:  
  If a Map task is stuck at 80% on Node A, Hadoop re-runs it on Node B. If Node B finishes first, its result is taken.  

  🔹 Enable in job config:  
  \`\`\`java
  conf.setBoolean("mapreduce.map.speculative", true);
  conf.setBoolean("mapreduce.reduce.speculative", true);
  \`\`\``,
        keywords: ["speculative execution", "optimization", "MapReduce"],
      },
      {
        question: "What is High Availability and Federation in Hadoop?",
        answer: `- High Availability (HA): If the active NameNode fails, the Standby NameNode takes over automatically.  
  - Federation: Allows multiple independent NameNodes, each managing part of the namespace. Improves scalability.  

  🔹 Example Config (hdfs-site.xml):  
  \`\`\`xml
  <property>
    <name>dfs.nameservices</name>
    <value>mycluster</value>
  </property>
  \`\`\``,
        keywords: ["high availability", "federation", "NameNode", "scalability"],
      },
      {
        question: "What is Rack Awareness in Hadoop?",
        answer: `Rack awareness ensures replicas are stored across different racks.  
  - One replica on local rack, another on a different rack.  
  - Helps fault tolerance and reduces network traffic.  

  🔹 Example Command:  
  \`\`\`bash
  hdfs dfsadmin -printTopology
  \`\`\``,
        keywords: ["rack awareness", "replication", "network optimization", "fault tolerance"],
      },
      {
        question: "What are small file issues in Hadoop?",
        answer: `HDFS is not efficient for storing a large number of very small files.  
  - Each file = metadata load on NameNode.  
  - Too many small files → memory pressure on NameNode.  

  🔹 Solutions:  
  - Combine small files using HAR (Hadoop Archive).  
  - Use SequenceFile or ORC/Parquet formats.  

  \`\`\`bash
  hadoop archive -archiveName smallfiles.har \
    -p /user/hadoop/input /user/hadoop/output
  \`\`\``,
        keywords: ["small files", "HDFS", "inefficiency", "HAR files", "metadata"],
      },
      {
        question: "What is YARN in Hadoop?",
        answer: `YARN (Yet Another Resource Negotiator) is Hadoop’s resource manager.  
  - ResourceManager (RM): Allocates cluster resources.  
  - NodeManager (NM): Manages containers on nodes.  
  - ApplicationMaster (AM): Manages a single job.  

  🔹 Example Command:  
  \`\`\`bash
  yarn application -list
  \`\`\`  

  🔹 Simple MapReduce Example: WordCount  
  \`\`\`java
  public static class TokenizerMapper 
      extends Mapper<Object, Text, Text, IntWritable>{
    private final static IntWritable one = new IntWritable(1);
    private Text word = new Text();
    public void map(Object key, Text value, Context context)
          throws IOException, InterruptedException {
      StringTokenizer itr = new StringTokenizer(value.toString());
      while (itr.hasMoreTokens()) {
        word.set(itr.nextToken());
        context.write(word, one);
      }
    }
  }
  \`\`\``,
        keywords: ["YARN", "ResourceManager", "NodeManager", "ApplicationMaster"],
      },
    ],
  },

  sqoop: {
    title: "Sqoop",
    emoji: "🛠️",
    questions: [
      {
        question: "What is Sqoop and its Features?",
        answer: `Apache Sqoop is a Big Data tool designed to transfer data efficiently between Hadoop (HDFS) and relational databases (RDBMS) such as MySQL, Oracle, or PostgreSQL.  

  Key features include:  
  - Import data from RDBMS into HDFS, Hive, or HBase.  
  - Export data from Hadoop back into RDBMS.  
  - Support for parallel imports/exports using mappers.  
  - Support for incremental data transfers.  
  - Ability to automate jobs.  

  🔹 Example Command (import a table into HDFS):  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root \
    --password mypass \
    --table employees \
    --target-dir /user/hadoop/employees
  \`\`\`  

  🔹 Example Command (export from HDFS to MySQL):  
  \`\`\`bash
  sqoop export \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root \
    --password mypass \
    --table employees_backup \
    --export-dir /user/hadoop/employees
  \`\`\``,
        keywords: ["Sqoop", "RDBMS", "HDFS", "import", "export", "parallel transfer"],
      },
      {
        question: "What is the default number of mappers in Sqoop?",
        answer: `By default, Sqoop uses 4 mappers to import/export data in parallel.  

  You can change the number of mappers with the \`-m\` option:  

  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    -m 8
  \`\`\`  

  If the table does not have a primary key or unique split column, you can specify it using \`--split-by\`.  

  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --split-by id \
    -m 6
  \`\`\``,
        keywords: ["mappers", "parallelism", "split-by", "performance"],
      },
      {
        question: "How do you control data imports in Sqoop?",
        answer: `Sqoop provides different ways to control imports:  

  1. WHERE Clause – Import only matching rows.  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --where "city='Chennai' AND id > 3"
  \`\`\`  

  2. Query-based Import – Use custom SQL queries with \`$CONDITIONS\`.  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --query "SELECT id, name, city FROM employees WHERE \\$CONDITIONS" \
    --split-by id \
    --target-dir /user/hadoop/employees_filtered
  \`\`\`  

  3. File Format Control – By default, Sqoop stores as TextFile. You can use formats like Avro, Parquet, SequenceFile, ORC.  

  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --as-parquetfile
  \`\`\``,
        keywords: ["import", "where clause", "query", "file format"],
      },
      {
        question: "What is Sqoop Eval?",
        answer: `\`sqoop eval\` allows you to execute SQL statements against a database directly from Sqoop.  
  This is useful for testing queries before importing/exporting.  

  🔹 Example (DDL query):  
  \`\`\`bash
  sqoop eval \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --query "CREATE TABLE test_table (id INT, name VARCHAR(20))"
  \`\`\`  

  🔹 Example (DML query):  
  \`\`\`bash
  sqoop eval \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --query "SELECT COUNT(*) FROM employees"
  \`\`\``,
        keywords: ["eval", "DDL", "DML", "queries"],
      },
      {
        question: "How does Sqoop handle Incremental Imports?",
        answer: `Sqoop supports two types of incremental imports:  

  1. Append Mode – Imports only newly added rows.  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --incremental append \
    --check-column id \
    --last-value 100
  \`\`\`  

  2. Last Modified Mode – Imports newly inserted or modified rows based on a timestamp column.  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --incremental lastmodified \
    --check-column last_updated \
    --last-value "2022-03-04 00:00:00"
  \`\`\`  

  📌 Best practice: Automate with \`sqoop job\`.`,
        keywords: ["incremental import", "append", "last modified", "automation"],
      },
      {
        question: "How can you automate Sqoop jobs?",
        answer: `Sqoop allows you to create reusable jobs for automation.  

  🔹 Example (create a job):  
  \`\`\`bash
  sqoop job --create import_employees \
    -- import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --target-dir /user/hadoop/employees
  \`\`\`  

  🔹 Run the job:  
  \`\`\`bash
  sqoop job --exec import_employees
  \`\`\`  

  🔹 List jobs:  
  \`\`\`bash
  sqoop job --list
  \`\`\`  

  Jobs save the last imported value automatically for incremental imports.`,
        keywords: ["sqoop job", "automation", "incremental"],
      },
      {
        question: "How do you manage passwords securely in Sqoop?",
        answer: `Instead of passing passwords in plain text, Sqoop provides two secure ways:  

  1. Password File  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root \
    --password-file file:///home/hadoop/passfile
  \`\`\`  

  2. JCEKS (Java Crypto Encrypted Key Store) – More secure option.  

  📌 Using password files is the most common in practice.`,
        keywords: ["password", "authentication", "security", "password file", "JCEKS"],
      },
      {
        question: "What is Sqoop Staging Export?",
        answer: `When exporting, Sqoop first writes data into a staging table.  
  This prevents corruption of the target table in case of job failure.  

  🔹 Example:  
  \`\`\`bash
  sqoop export \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --staging-table employees_staging \
    --export-dir /user/hadoop/employees
  \`\`\`  

  If the job succeeds → staging data is moved to target table.  
  If it fails → only staging table is affected.`,
        keywords: ["staging export", "fault tolerance", "reliability"],
      },
      {
        question: "How do you import all tables from a database using Sqoop?",
        answer: `You can import all tables from a database using \`sqoop import-all-tables\`.  

  🔹 Example:  
  \`\`\`bash
  sqoop import-all-tables \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --warehouse-dir /user/hadoop/alltables \
    --exclude-tables logs,temp_table
  \`\`\`  

  This imports all tables into HDFS except the excluded ones.`,
        keywords: ["import all tables", "exclude tables", "warehouse-dir"],
      },
      {
        question: "What is MapColumn Java in Sqoop?",
        answer: `\`--map-column-java\` lets you override the default Java type mapping for specific columns.  
  This is useful when some column types (e.g., DATE) are not supported in certain formats like Avro.  

  🔹 Example: Import with DATE as String  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --map-column-java hire_date=String
  \`\`\``,
        keywords: ["map column java", "data type", "avro", "casting"],
      },
      {
        question: "What is Sqoop with HCatalog?",
        answer: `HCatalog is a table and storage management layer that allows tools like Hive, Pig, and MapReduce to read/write data easily.  

  Sqoop can import data directly into HCatalog-managed tables.  

  🔹 Example:  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --hcatalog-table employees_hcat
  \`\`\``,
        keywords: ["hcatalog", "hive", "integration"],
      },
      {
        question: "How can you improve Sqoop performance?",
        answer: `Several techniques help improve Sqoop performance:  

  1. Increase Fetch Size (default = 1000 rows)  
  \`\`\`bash
  sqoop import --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees --fetch-size 5000
  \`\`\`  

  2. Increase Mappers (default = 4)  
  \`\`\`bash
  sqoop import --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees -m 20
  \`\`\`  

  3. Direct Mode – Faster import for MySQL/Postgres (bypasses JDBC).  
  \`\`\`bash
  sqoop import --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees --direct
  \`\`\`  

  4. Export Performance – Control transaction size.  
  \`\`\`bash
  sqoop export \
    -Dsqoop.export.statements.per.transaction=1000 \
    -Dsqoop.export.records.per.statement=1000 \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --export-dir /user/hadoop/employees
  \`\`\``,
        keywords: ["performance", "fetch size", "mappers", "direct mode", "exports"],
      },
      {
        question: "What are different file formats supported in Sqoop?",
        answer: `Sqoop supports multiple file formats for storing imported data:  

  - TextFile (default) – Human-readable, but large in size.  
  - SequenceFile – Binary file format optimized for MapReduce.  
  - Avro – Row-based format, supports schema evolution.  
  - Parquet – Columnar format, efficient for analytics with predicate pushdown.  
  - ORC – Columnar, highly compressed (~90% using ZLIB).  

  🔹 Example: Import data as Parquet  
  \`\`\`bash
  sqoop import \
    --connect jdbc:mysql://localhost:3306/mydb \
    --username root --password mypass \
    --table employees \
    --as-parquetfile
  \`\`\``,
        keywords: ["file format", "text", "sequence", "parquet", "orc", "avro"],
      }
    ],
  },

  hive: {
    title: "Hive",
    emoji: "🐝",
    questions: [
      {
        question: "What is Hive?",
        answer:
          "Hive is a data warehouse infrastructure tool to process structured data in Hadoop. It provides SQL-like language called HiveQL.",
        keywords: ["Hive", "HiveQL", "data warehouse", "Hadoop"],
      },
      {
        question: "What are Hive partitions?",
        answer:
          "Partitions in Hive improve query performance by dividing table data into parts based on column values.",
        keywords: ["Hive", "partitions", "performance"],
      },
    ],
  },
  spark: {
    title: "Spark",
    emoji: "⚡",
    questions: [
      {
        question: "What is Apache Spark?",
        answer:
          "Apache Spark is an open-source, in-memory distributed computing system used for big data workloads.",
        keywords: ["in-memory", "distributed", "Apache Spark"],
      },
      {
        question: "Difference between Spark and Hadoop MapReduce?",
        answer:
          "Spark processes data in memory which makes it faster, whereas MapReduce uses disk storage between tasks.",
        keywords: ["Spark", "MapReduce", "in-memory", "performance"],
      },
    ],
  },
  misc: {
    title: "Miscellaneous",
    emoji: "📚",
    questions: [
      {
        question: "What is the role of a Data Engineer?",
        answer:
          "A Data Engineer builds systems that collect, manage, and convert raw data into usable information for analysts and business teams.",
        keywords: ["Data Engineer", "data pipeline", "raw data"],
      },
      {
        question: "How do you manage version control in data projects?",
        answer:
          "Version control tools like Git are used to manage changes in code and collaborate on data engineering projects.",
        keywords: ["Git", "version control", "data projects"],
      },
    ],
  },
};
