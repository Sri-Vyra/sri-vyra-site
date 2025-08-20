// src/components/Practice/companyProblemsData.js

const companyProblems = [
  {
    company: "TCS TR-1",
    experience: "0-3 years",
    questions: [
        {
        "id": "tcs-q1",
        "question": "Hadoop Architecture and why it is fault tolerant",
        "answer": "Hadoop follows a master-slave architecture with NameNode (master) and DataNodes (slaves). Data is split into blocks and replicated (default 3 times) across DataNodes. Fault tolerance is achieved through replication: if a DataNode fails, the data can be read from other replicas. NameNode also maintains metadata and can have a secondary standby for high availability."
        },
        {
        "id": "tcs-q2",
        "question": "What is Hive metastore, what is its usage, and what is HCatalog and what is its use?",
        "answer": "Hive Metastore is a centralized repository that stores metadata about Hive tables, partitions, columns, and their schema. It allows Hive and other tools to access table metadata consistently. HCatalog is a table and storage management layer on top of Hive, enabling other Hadoop tools like Pig or MapReduce to read/write Hive tables directly without worrying about storage format or schema."
        },
        {
        "id": "tcs-q3",
        "question": "How are ACID properties applicable to Hive tables?",
        "answer": "Hive supports ACID (Atomicity, Consistency, Isolation, Durability) on transactional tables. Operations like INSERT, UPDATE, DELETE are ACID compliant, ensuring that transactions are atomic, consistent, isolated, and durable. This allows Hive to handle updates/deletes safely on tables."
        },
        {
        "id": "tcs-q4",
        "question": "Difference between managed and external tables, and performance-wise which is better?",
        "answer": "Managed tables are controlled by Hive; data is stored in Hive's warehouse directory and deleted when table is dropped. External tables point to data outside Hive's warehouse; dropping the table doesn't delete the data. Performance is similar, but managed tables can be optimized better for Hive operations as Hive controls storage layout."
        },
        {
        "id": "tcs-q5",
        "question": "Why do we go for Partitions and difference between Static and Dynamic partitions in Hive?",
        "answer": "Partitions help organize large datasets into smaller chunks for faster query performance. Static partitioning requires you to specify partition values during insert, while dynamic partitioning allows Hive to automatically determine partition values from the data. Dynamic is more flexible for unknown partition values."
        },
        {
        "id": "tcs-q6",
        "question": "Difference between partitioning and bucketing. When to use which?",
        "answer": "Partitioning splits data into directories based on column values; useful for large datasets with high query selectivity on partition columns. Bucketing divides data into fixed number of files (buckets) using a hash function; useful for sampling, joins, and load balancing. Use partitioning for filtering and bucketing for even distribution and join optimization."
        },
        {
        "id": "tcs-q7",
        "question": "Scenario: loaded data from RDBMS to Hive specific location but partitioned table query returns no results. What went wrong?",
        "answer": "Most likely, the table metadata was not updated with partitions. In Hive, after loading data into a partitioned table directory, you must run `MSCK REPAIR TABLE table_name;` or `ALTER TABLE table_name ADD PARTITION ...` to make Hive aware of the existing partitions."
        },
        {
        "id": "tcs-q8",
        "question": "Remove duplicate names while keeping id and name",
        "input": "\n| id   | name  |\n\n| 1    | john  |\n| 2    | bob   |\n| 3    | john  |\n| 4    | bob   |\n| 5    | mary  |\n",
        "expected_output": "\n| id   | name  |\n\n| 1    | john  |\n| 2    | bob   |\n| 5    | mary  |\n",
        "answer": "Use Hive or SQL ROW_NUMBER:\n```sql\nSELECT id, name FROM (\n  SELECT id, name, ROW_NUMBER() OVER (PARTITION BY name ORDER BY id) as rn\n  FROM table_name\n) t\nWHERE rn = 1;\n```\n\nEquivalent PySpark code:\n```python\nfrom pyspark.sql import SparkSession\nfrom pyspark.sql.window import Window\nfrom pyspark.sql.functions import row_number\n\n# Initialize Spark session\nspark = SparkSession.builder.appName(\"RemoveDuplicates\").getOrCreate()\n\n# Sample data\ndata = [\n    (1, 'john'),\n    (2, 'bob'),\n    (3, 'john'),\n    (4, 'bob'),\n    (5, 'mary')\n]\ncolumns = ['id', 'name']\n\n# Create DataFrame\ndf = spark.createDataFrame(data, columns)\n\n# Define window spec to partition by 'name' and order by 'id'\nwindowSpec = Window.partitionBy('name').orderBy('id')\n\n# Add row number per partition and filter rn = 1\ndf_unique = df.withColumn('rn', row_number().over(windowSpec)) \\\n              .filter('rn = 1') \\\n              .drop('rn')\n\n# Show result\ndf_unique.show()\n```"
        },
        {
        "id": "tcs-q9",
        "question": "Performance tuning in Hive?",
        "answer": "Performance tuning techniques include: partitioning tables, bucketing for joins, using ORC/Parquet formats with compression, vectorized query execution, enabling Tez or Spark execution engine instead of MapReduce, optimizing joins (map-side joins for small tables), and limiting data scanned via predicate pushdown."
        },
        {
        "id": "tcs-q10",
        "question": "How is Spark fault tolerant?",
        "answer": "Spark is fault tolerant using RDD lineage. If a partition of an RDD is lost, Spark recomputes it from its parent RDD using the lineage information. Checkpointing can also be used for long lineage chains to avoid recomputation."
        },
        {
        "id": "tcs-q11",
        "question": "Difference between cache and persist in Spark",
        "answer": "Cache is a shorthand for persist() with default MEMORY_ONLY storage level. Persist allows specifying storage levels (MEMORY_ONLY, DISK_ONLY, MEMORY_AND_DISK, etc.), giving more control over where and how data is stored."
        },
        {
        "id": "tcs-q12",
        "question": "What is broadcast variable?",
        "answer": "Broadcast variables allow the programmer to cache a read-only variable on all worker nodes efficiently. Useful for small lookup tables or configuration data, reducing data transfer during tasks."
        },
        {
        "id": "tcs-q13",
        "question": "I have 3 dataframes: df1=100GB, df2=6GB, df3=5GB. Which to use for broadcast and why?",
        "answer": "Use df2 or df3 for broadcasting (smallest dataset, <10% of cluster memory) to optimize joins. Broadcasting large df1 (100GB) would overwhelm memory and cause failures."
        },
        {
        "id": "tcs-q14",
        "question": "What is DAG, Stage, and Task in Spark?",
        "answer": "DAG (Directed Acyclic Graph) represents the sequence of computations. Stage is a set of parallel tasks that can be executed without shuffle. Task is the smallest unit of work, processing a partition of data."
        },
        {
        "id": "tcs-q15",
        "question": "While loading, if the file is corrupted in Hive or Spark, how do you recover it?",
        "answer": "Check logs to identify corrupted files. In Hive, remove or move corrupted files and reload data. In Spark, skip corrupted records using `spark.read.option('badRecordsPath', '/tmp/bad_records')`. HDFS also has replication; corrupted blocks can be re-replicated automatically."
        },
        {
        "id": "tcs-q16",
        "question": "What is Java heap out of memory?",
        "answer": "Java heap out of memory occurs when JVM cannot allocate enough memory for objects during execution. In Spark/Hive, this may happen due to large data shuffles or caching too much data. Solutions include increasing executor memory, optimizing transformations, or using efficient data formats."
        },
        {
        "id": "tcs-q17",
        "question": "When to use RDD vs DataFrame in Spark?",
        "answer": "Use RDD when you need fine-grained control, custom transformations, or unstructured data. Use DataFrame for structured data with schema, optimized Catalyst engine, and better performance for SQL queries and aggregations."
        },
        {
        "id": "tcs-q18",
        "question": "Transform concatenated student marks into row-wise format",
        "input": "\n| student_name| student_subject             |\n\n| name1       | maths|80;Science|60;English|90 |\n| name2       | maths|100;Science|70;English|95 |\n",
        "expected_output": "\n| student_name| student_subject| Student_marks|\n\n| name1       | maths          | 80           |\n| name1       | Science        | 60           |\n| name1       | English        | 90           |\n| name2       | maths          | 100          |\n| name2       | Science        | 70           |\n| name2       | English        | 95           |\n",
        "answer": "In Spark:\n```python\nfrom pyspark.sql import SparkSession\nfrom pyspark.sql.functions import explode, split, col\n\n# Initialize Spark session\nspark = SparkSession.builder.appName(\"ExplodeStudentMarks\").getOrCreate()\n\n# Sample input data\ndata = [\n    (\"name1\", \"maths|80;Science|60;English|90\"),\n    (\"name2\", \"maths|100;Science|70;English|95\")\n]\n\ncolumns = [\"student_name\", \"student_subject\"]\n\n# Create DataFrame\ndf = spark.createDataFrame(data, columns)\n\n# Step 1: Split subjects by ';' to create an array\ndf_split = df.withColumn(\"subject_array\", split(col(\"student_subject\"), \";\"))\n\n# Step 2: Explode the array into multiple rows\ndf_exploded = df_split.withColumn(\"subject_item\", explode(col(\"subject_array\")))\n\n# Step 3: Split each subject_item into subject and marks\ndf_final = df_exploded.withColumn(\"student_subject\", split(col(\"subject_item\"), \"\\|\").getItem(0)) \\\n                      .withColumn(\"Student_marks\", split(col(\"subject_item\"), \"\\|\").getItem(1)) \\\n                      .select(\"student_name\", \"student_subject\", \"Student_marks\")\n\n# Show the result\ndf_final.show()\n```"
        },
        {
        "id": "tcs-q19",
        "question": "Assume live Twitter streaming about Colgate, get negative mentions. Use RDD or DataFrame?",
        "answer": "Use DataFrame with Spark Structured Streaming for easier API, better performance, and built-in functions. You can apply filter or sentiment analysis functions to detect negative mentions efficiently."
        }
    ]
  },
  {
    company: "TCS Telephonic Round",
    experience: "0-3 years",
    questions: [
      {
        "id": "tcs-l1-q1",
        "question": "Tell me about your project and big data tools which you use in your project",
        "answer": "Describe your project succinctly: dataset size, business problem, and your role. Mention tools like Hadoop (HDFS), Spark (RDD/DataFrame), Hive for data warehousing, and any cloud (AWS EMR, S3). Example: 'I worked on a retail analytics project with 1TB transaction data using Spark for ETL, Hive for reporting, and deployed on AWS EMR. I implemented data cleansing, aggregation, and job automation.'"
      },
      {
        "id": "tcs-l1-q2",
        "question": "What is difference between broadcast variable and accumulator",
        "answer": "Broadcast variable: Read-only, cached on all worker nodes, reduces network I/O. Example:\n```python\nlookup = {'A':1,'B':2}\nbroadcastVar = sc.broadcast(lookup)\nrdd.map(lambda x: broadcastVar.value.get(x))\n```\nAccumulator: Write-only counter or sum aggregated across nodes. Example:\n```python\nacc = sc.accumulator(0)\nrdd.foreach(lambda x: acc.add(x))\nprint(acc.value)\n```"
      },
      {
        "id": "tcs-l1-q3",
        "question": "How do you automate Spark Job",
        "answer": "Use workflow schedulers or scripts. Example:\n- `spark-submit --master yarn my_job.py` in a cron job\n- Apache Airflow DAG to trigger Spark jobs\n- Monitor using Spark UI or logs"
      },
      {
        "id": "tcs-l1-q4",
        "question": "What is row file data and column file data",
        "answer": "Row-oriented: Stores rows sequentially (CSV, JSON). Efficient for transactions. Column-oriented: Stores columns sequentially (Parquet, ORC). Efficient for analytics and column queries."
      },
      {
        "id": "tcs-l1-q5",
        "question": "What is difference between partition and bucketing",
        "answer": "Partitioning: Data divided by column values into directories. Example: `PARTITIONED BY (year, month)` in Hive. Reduces data scan.\nBucketing: Data divided into fixed number of files using hash function. Example: `CLUSTERED BY (id) INTO 4 BUCKETS`. Helps in joins and sampling."
      },
      {
        "id": "tcs-l1-q6",
        "question": "What is difference between groupByKey and reduceByKey",
        "answer": "groupByKey: Shuffles all values per key to one reducer; memory heavy.\nreduceByKey: Combines values locally before shuffle; more efficient. Example:\n```python\nrdd = sc.parallelize([(1,2),(1,3),(2,4)])\n# groupByKey\nrdd.groupByKey().mapValues(list).collect()\n# reduceByKey\nrdd.reduceByKey(lambda a,b:a+b).collect()\n```"
      },
      {
        "id": "tcs-l1-q7",
        "question": "What is difference between static memory allocation and dynamic memory allocation",
        "answer": "Static: Fixed memory at start, cannot change. Dynamic: Memory grows/shrinks based on workload. Spark uses dynamic allocation to optimize executor memory and avoid OOM errors."
      },
      {
        "id": "tcs-l1-q8",
        "question": "What is Executor memory and Driver memory",
        "answer": "Driver memory: For the Spark driver process (job scheduling, result collection). Executor memory: For executors performing computations and caching partitions.\nExample configuration:\n```bash\n--driver-memory 2g --executor-memory 4g\n```"
      },
      {
        "id": "tcs-l1-q9",
        "question": "What is difference between map and flatMap",
        "answer": "map: 1-to-1 transformation.\nflatMap: 1-to-many transformation and flattens output.\nExample:\n```python\nrdd = sc.parallelize(['hello world','hi'])\n# map\nrdd.map(lambda x: x.split()).collect()  # [['hello','world'],['hi']]\n# flatMap\nrdd.flatMap(lambda x: x.split()).collect()  # ['hello','world','hi']\n```"
      },
      {
        "id": "tcs-l1-q10",
        "question": "What is difference between schema evaluation and normal schema process",
        "answer": "Schema evaluation: Spark infers schema automatically from data samples (JSON, CSV). Normal schema: User defines schema explicitly before reading/writing. Explicit schema improves performance."
      },
      {
        "id": "tcs-l1-q11",
        "question": "Which file format is used for schema evaluation in Spark",
        "answer": "Semi-structured formats like JSON, CSV, Avro can be used for schema evaluation because Spark can infer schema from sample data."
      },
      {
        "id": "tcs-l1-q12",
        "question": "Shall we use parquet file format for Spark schema evaluation",
        "answer": "Yes, Parquet supports schema evolution and columnar storage. Spark can efficiently read schema from Parquet without scanning all data."
      },
      {
        "id": "tcs-l1-q13",
        "question": "Do you have experience in any cloud deployment",
        "answer": "Answer based on experience. Example: 'Yes, I deployed Spark jobs on AWS EMR, used S3 for storage, and automated jobs using Airflow.'"
      },
      {
        "id": "tcs-l1-q14",
        "question": "What is core node, Task Node and Data node in EMR",
        "answer": "Core Node: Computes tasks + stores HDFS data. Task Node: Computes tasks only, no HDFS storage. Data Node: Stores HDFS blocks; in EMR, core nodes handle storage. EMR cluster uses these nodes for scalable compute and storage."
      }
    ]
  },
  {
    "company": "TCS TR-2",
    "experience": "0-3 years",
    "questions": [
      {
        "id": "tcs-tr2-q1",
        "question": "Project explanation (very important)",
        "answer": "Explain your project briefly: dataset size, business problem, tools used (Spark, Hive, AWS/S3), and your role. Focus on ETL, transformations, aggregation, automation, and performance optimization. Example: 'I worked on a retail analytics project, processing 1TB of transaction data using Spark for ETL, Hive for reporting, deployed on AWS EMR. I handled data cleaning, aggregations, and job scheduling.'"
      },
      {
        "id": "tcs-tr2-q2",
        "question": "Checking all your basics (AWS, Hadoop, Hive, Snowflake) and daily activity",
        "answer": "Briefly describe your daily workflow: data ingestion, transformation, loading, running Spark jobs, Hive queries, monitoring AWS EMR cluster usage, and occasionally querying Snowflake for analytics."
      },
      {
        "id": "tcs-tr2-q3",
        "question": "Performance tuning",
        "answer": "Techniques include: partitioning and bucketing, using optimized file formats (Parquet/ORC), caching/persisting RDD/DataFrame, using reduceByKey instead of groupByKey, broadcasting small tables in joins, and tuning executor memory and cores."
      },
      {
        "id": "tcs-tr2-q4",
        "question": "Find 2nd highest salary without using window functions",
        "input": "| id | name | salary |\n||\n| 1 | John | 5000 |\n| 2 | Jane | 6000 |\n| 3 | Jim | 5500 |",
        "expected_output": "| second_highest |\n||\n| 5500 |",
        "answer": "SQL example:\n```sql\nSELECT MAX(salary) AS second_highest\nFROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);\n```\nPySpark example:\n```python\nmax_salary = df.agg({'salary':'max'}).collect()[0][0]\ndf.filter(df.salary < max_salary).agg({'salary':'max'}).show()\n```"
      },
      {
        "id": "tcs-tr2-q5",
        "question": "Where in real time we will use window functions (rank, dense_rank)",
        "answer": "Use cases: Top N analysis, calculating cumulative metrics, identifying duplicates based on ranking, sessionization in streaming, or comparing row positions in partitions. Example: ranking sales per region to get top 3 products."
      },
      {
        "id": "tcs-tr2-q6",
        "question": "Python: rate yourself",
        "answer": "Self-rated 2/5: Mainly use Python in PySpark DSL. Basic loops, data structures, functions, and transformations."
      },
      {
        "id": "tcs-tr2-q7",
        "question": "Difference between for loop and while loop",
        "answer": "for loop: Executes for known number of iterations. Example: `for i in range(5)`.\nwhile loop: Executes until condition becomes false. Example: `while x < 5:`. Use while for dynamic or unknown iterations."
      },
      {
        "id": "tcs-tr2-q8",
        "question": "Scenario: first day, use SQL/PySpark DSL without self join",
        "input": "| from | to | dist |\n||\n| SEA | SF | 300 |\n| CHI | SEA | 2000 |\n| SF | SEA | 300 |\n| SEA | CHI | 2000 |\n| SEA | LND | 500 |\n| LND | SEA | 500 |\n| LND | CHI | 1000 |\n| CHI | NDL | 180 |",
        "expected_output": "| from | total_dist |\n||\n| SEA | 2800 |\n| CHI | 2180 |\n| SF | 300 |\n| LND | 1500 |",
        "answer": "PySpark example:\n```python\ndf.groupBy('from').sum('dist').show()\n```"
      },
      {
        "id": "tcs-tr2-q9",
        "question": "Table join output",
        "input": "| table1 | table2 |\n||\n| 1,2,1,0,0,None,None,4 | 1,2,2,1,0,None,0,7 |",
        "expected_output": "| matched_indices |\n||\n| (1,1) |\n| (2,2) |\n| (0,0) |\n| (4,7) |",
        "answer": "Example (Python/PySpark):\n```python\ntable1 = [1,2,1,0,0,None,None,4]\ntable2 = [1,2,2,1,0,None,0,7]\noutput = [(table1[i],table2[i]) for i in range(len(table1)) if table1[i] is not None and table2[i] is not None]\nprint(output)\n```"
      },
      {
        "id": "tcs-tr2-q10",
        "question": "Which AWS component is used to check usage cluster and performance other than CloudWatch and EMR",
        "answer": "AWS tools: AWS Glue job metrics, AWS S3 analytics, CloudTrail for activity logs, EMR metrics on YARN ResourceManager UI, AWS Cost Explorer for usage tracking."
      },
      {
        "id": "tcs-tr2-q11",
        "question": "Check some knowledge in AWS",
        "answer": "Basic knowledge: S3 storage, EMR cluster management, EC2 instance types, Lambda for serverless jobs, IAM roles for access, CloudWatch for monitoring, VPC for networking."
      },
      {
        "id": "tcs-tr2-q12",
        "question": "Having some experience in Snowflake, check that as well",
        "answer": "Snowflake: Cloud data warehouse, separates storage & compute. Supports semi-structured data (JSON, Parquet). Good for analytics, zero-maintenance scaling, and running SQL queries. Used for reporting or joining multiple data sources."
      },
      {
        "id": "tcs-tr2-q13",
        "question": "Mostly check some knowledge of all data engineering concepts",
        "answer": "Be ready to discuss: ETL pipelines, batch vs streaming, partitioning/bucketing, data lake vs warehouse, performance tuning, Spark/Hive basics, Python transformations, cloud deployment, monitoring, and automation."
      }
    ]
  },
  {
    "company": "Accenture",
    "experience": "0-3 years",
    "questions": [
      {
        "id": "acc-q1",
        "question": "Python - remove duplicate elements in an array",
        "input": "| arr |\n||\n| 1,2,3,2,1,4 |",
        "expected_output": "| unique_arr |\n||\n| 1,2,3,4 |",
        "answer": "Python example:\n```python\narr = [1,2,3,2,1,4]\n# Using set (order not preserved)\nunique_arr = list(set(arr))\nprint(unique_arr)\n\n# Preserve order\nunique_arr = []\nseen = set()\nfor x in arr:\n    if x not in seen:\n        unique_arr.append(x)\n        seen.add(x)\nprint(unique_arr)\n```"
      },
      {
        "id": "acc-q2",
        "question": "SQL - perform joins and explain",
        "input": "| Employee | Department |\n|||\n| id,name,dept_id | dept_id,dept_name |",
        "expected_output": "| name | dept_name |\n|||\n| Alice | HR |\n| Bob   | IT |",
        "answer": "Example:\n```sql\n-- Inner join: only matching rows\nSELECT e.name, d.dept_name\nFROM Employee e\nINNER JOIN Department d ON e.dept_id = d.dept_id;\n\n-- Left join: all employees, department NULL if no match\nSELECT e.name, d.dept_name\nFROM Employee e\nLEFT JOIN Department d ON e.dept_id = d.dept_id;\n```"
      },
      {
        "id": "acc-q3",
        "question": "PySpark - filter year in timestamp",
        "input": "| timestamp_col |\n||\n| 2025-01-01 10:00:00 |\n| 2024-05-03 15:00:00 |",
        "expected_output": "| timestamp_col |\n||\n| 2025-01-01 10:00:00 |",
        "answer": "```python\nfrom pyspark.sql.functions import year, col\nfiltered_df = df.filter(year(col('timestamp_col')) == 2025)\nfiltered_df.show()\n```"
      },
      {
        "id": "acc-q4",
        "question": "PySpark - pivot scenario",
        "input": "| product | month | sales |\n||||\n| A       | Jan   | 100   |\n| A       | Feb   | 200   |\n| B       | Jan   | 150   |",
        "expected_output": "| product | Jan | Feb |\n||||\n| A       | 100 | 200 |\n| B       | 150 | NULL |",
        "answer": "```python\npivot_df = df.groupBy('product').pivot('month').sum('sales')\npivot_df.show()\n```"
      },
      {
        "id": "acc-q5",
        "question": "PySpark - window scenario",
        "input": "| name | dept | salary |\n||||\n| John | HR   | 5000   |\n| Jane | HR   | 6000   |\n| Jim  | IT   | 5500   |",
        "expected_output": "| name | dept | salary | rank |\n|||||\n| Jane | HR   | 6000   | 1    |\n| John | HR   | 5000   | 2    |\n| Jim  | IT   | 5500   | 1    |",
        "answer": "```python\nfrom pyspark.sql.window import Window\nfrom pyspark.sql.functions import rank, col\nwindowSpec = Window.partitionBy('dept').orderBy(col('salary').desc())\ndf.withColumn('rank', rank().over(windowSpec)).show()\n```"
      },
      {
        "id": "acc-q6",
        "question": "Self introduction and explain roles & responsibilities",
        "answer": "Introduce yourself, education, and experience. Example: 'I work as a Data Engineer handling ETL pipelines. I perform data ingestion from multiple sources, transform data using PySpark/Hive, load into warehouse, optimize queries, schedule and monitor jobs, and manage AWS EMR clusters.'"
      },
      {
        "id": "acc-q7",
        "question": "Managed and external table difference",
        "answer": "Managed: Hive owns metadata and data; dropping table deletes data. External: Hive owns only metadata; data resides outside; dropping table does not delete data."
      },
      {
        "id": "acc-q8",
        "question": "What is Spark and explain Spark architecture",
        "answer": "Spark is a distributed processing engine. Architecture: Driver (controls job execution), Cluster Manager (allocates resources), Executors (perform tasks). Data processed as RDD/DataFrame using DAG, transformations, and actions."
      },
      {
        "id": "acc-q9",
        "question": "Dynamic and static resource allocation",
        "answer": "Static: fixed executors/cores. Dynamic: Spark adjusts executor count based on workload, optimizing cluster utilization."
      },
      {
        "id": "acc-q10",
        "question": "Spark lineage",
        "answer": "Lineage tracks transformations for RDD/DataFrame. Enables recomputation of lost partitions for fault tolerance."
      },
      {
        "id": "acc-q11",
        "question": "Coalesce and repartition",
        "answer": "Coalesce: reduce partitions without shuffle.\nRepartition: change partitions with shuffle for even distribution.\n```python\ndf.coalesce(2)\ndf.repartition(4)\n```"
      },
      {
        "id": "acc-q12",
        "question": "Cache vs persist",
        "answer": "Cache: store in memory (MEMORY_ONLY). Persist: store using custom storage levels (MEMORY_AND_DISK, DISK_ONLY).\n```python\ndf.cache()\ndf.persist(StorageLevel.MEMORY_AND_DISK)\n```"
      },
      {
        "id": "acc-q13",
        "question": "What is MSCK",
        "answer": "MSCK REPAIR TABLE updates Hive metastore with partitions present in HDFS but not in metadata. Example: `MSCK REPAIR TABLE sales;`"
      },
      {
        "id": "acc-q14",
        "question": "Spark submit command",
        "answer": "```bash\nspark-submit --master yarn --deploy-mode cluster --driver-memory 2g --executor-memory 4g my_job.py\n```"
      },
      {
        "id": "acc-q15",
        "question": "How to handle file issues in Spark",
        "answer": "Use `badRecordsPath` to skip corrupted rows, check file format, remove or fix corrupt files in HDFS/S3."
      },
      {
        "id": "acc-q16",
        "question": "How to read and write CSV in Spark",
        "answer": "```python\n# Read CSV\ndf = spark.read.option('header',True).csv('s3://bucket/file.csv')\n# Write CSV\ndf.write.mode('overwrite').option('header',True).csv('s3://bucket/output/')\n```"
      },
      {
        "id": "acc-q17",
        "question": "AWS cloud project description and questions",
        "answer": "Project: AWS ETL using S3 (storage), EMR (Spark processing), Lambda (lightweight transformations), CloudWatch (monitoring). Automated Spark jobs with Airflow. Loaded processed data into Snowflake.\nQuestions: AWS services used, job scheduling/monitoring, cluster scaling, IAM roles."
      }
    ]
  },
  {
    "company": "HCL",
    "experience": "0-3 years",
    "questions": [
      {
        "id": "hcl-q1",
        "question": "Predicate Pushdown",
        "answer": "Predicate pushdown is an optimization technique where filters are applied as early as possible in data processing, ideally at the data source, to reduce data read and improve query performance. \n\nExample in Spark: When reading a Parquet/ORC file:\n```python\n# Only rows where age > 30 are read from disk\ndf = spark.read.parquet('s3://bucket/employee').filter('age > 30')\ndf.show()\n```"
      },
      {
        "id": "hcl-q2",
        "question": "Types of tables in Hive",
        "answer": "1. Managed (Internal) Table: Hive owns both data and metadata. Dropping table deletes data and metadata.\n2. External Table: Hive only manages metadata. Dropping table keeps data in HDFS.\n3. Partitioned Table: Data divided into partitions (by date, country, etc.) for faster query.\n4. Bucketed Table: Data divided into fixed number of buckets using hash function for joins/sampling."
      },
      {
        "id": "hcl-q3",
        "question": "Cache vs Persist in Spark",
        "answer": "Cache: Stores DataFrame/RDD in memory only (MEMORY_ONLY) for faster reuse.\nPersist: Stores DataFrame/RDD in specified storage level, e.g., MEMORY_AND_DISK, DISK_ONLY.\n\nExample:\n```python\ndf.cache()\ndf.persist(StorageLevel.MEMORY_AND_DISK)\n```"
      },
      {
        "id": "hcl-q4",
        "question": "AWS cloud project questions",
        "answer": "Example project: ETL pipeline using AWS S3 (storage), EMR (Spark processing), Lambda (lightweight transformations), and CloudWatch (monitoring). Tasks include data ingestion, transformation, job scheduling (Airflow), and loading into Redshift/Snowflake. Be ready to answer: cluster scaling, IAM roles, security, monitoring, and cost optimization."
      },
      {
        "id": "hcl-q5",
        "question": "Spark Scenarios",
        "answer": "Be prepared for scenarios like:\n- Filtering and aggregating large datasets\n- Join optimization (broadcast joins)\n- Ranking or top N per group\n- Window functions for cumulative metrics\n- Handling skewed data"
      },
      {
        "id": "hcl-q6",
        "question": "Inbound and Outbound security in AWS",
        "answer": "Inbound rules: control incoming traffic to EC2 instances (security groups, NACLs). Outbound rules: control outgoing traffic from EC2 instances. Always follow least privilege principle and open only required ports (e.g., 22 for SSH, 443 for HTTPS)."
      },
      {
        "id": "hcl-q7",
        "question": "Spark Architecture",
        "answer": "Spark Architecture Components:\n1. Driver: Main program that schedules jobs.\n2. Cluster Manager: Allocates resources (YARN, Standalone, Mesos).\n3. Executors: Perform computations and store data.\n4. Tasks: Smallest unit of execution.\n5. DAG Scheduler: Handles job stages.\n\nData is processed using RDD/DataFrame transformations and actions."
      },
      {
        "id": "hcl-q8",
        "question": "Executor memory calculation",
        "answer": "Executor Memory Calculation:\n- Total Cluster Memory = Number of nodes * memory per node\n- Executor Memory = (Total Memory per Node - overhead) / Number of Executors per Node\n\nExample: 4 nodes, 16GB per node, 2 executors per node:\n- Memory per executor = (16GB - 1GB overhead)/2 = 7.5GB"
      },
      {
        "id": "hcl-q9",
        "question": "Project passage questions",
        "answer": "Be ready to explain:\n- Dataset and size\n- Tools used (Spark, Hive, AWS/S3)\n- Your role (ETL, transformations, aggregations, automation)\n- Performance tuning and optimization"
      },
      {
        "id": "hcl-q10",
        "question": "PySpark Scenario 1: Find 2nd highest salary",
        "input": "| id | name | salary |\n||\n| 1 | John | 5000 |\n| 2 | Jane | 6000 |\n| 3 | Jim | 5500 |",
        "expected_output": "| second_highest |\n||\n| 5500 |",
        "answer": "SQL:\n```sql\nSELECT MAX(salary) AS second_highest\nFROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);\n```\nPySpark:\n```python\nmax_salary = df.agg({'salary':'max'}).collect()[0][0]\ndf.filter(df.salary < max_salary).agg({'salary':'max'}).show()\n```"
      },
      {
        "id": "hcl-q11",
        "question": "PySpark Scenario 2: Total sales per product pivot",
        "input": "| product | month | sales |\n||\n| A | Jan | 100 |\n| A | Feb | 200 |\n| B | Jan | 150 |",
        "expected_output": "| product | Jan | Feb |\n||\n| A | 100 | 200 |\n| B | 150 | NULL |",
        "answer": "PySpark Pivot:\n```python\npivot_df = df.groupBy('product').pivot('month').sum('sales')\npivot_df.show()\n```"
      },
      {
        "id": "hcl-q12",
        "question": "Joins Scenario - All joins",
        "input": "| table1 | table2 |\n||\n| 1,2,3 | 2,3,4 |",
        "expected_output": "| inner_join | left_join | right_join | full_outer |\n||\n| 2,3 | 1,2,3 | 2,3,4 | 1,2,3,4 |",
        "answer": "SQL:\n```sql\n-- Inner Join\nSELECT t1.id FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id;\n-- Left Join\nSELECT t1.id FROM table1 t1 LEFT JOIN table2 t2 ON t1.id = t2.id;\n-- Right Join\nSELECT t2.id FROM table1 t1 RIGHT JOIN table2 t2 ON t1.id = t2.id;\n-- Full Outer Join\nSELECT COALESCE(t1.id, t2.id) FROM table1 t1 FULL OUTER JOIN table2 t2 ON t1.id = t2.id;\n```\nPySpark:\n```python\ninner = df1.join(df2, 'id', 'inner')\nleft = df1.join(df2, 'id', 'left')\nright = df1.join(df2, 'id', 'right')\nfull = df1.join(df2, 'id', 'outer')\n```"
      }
    ]
  },
  {
    "company": "Medtronic",
    "experience": "0-3 years",
    "questions": [
      {
        "id": "med-q1",
        "question": "Project passage explanation",
        "answer": "Explain your project clearly: dataset size, business problem, tools used (Spark, Hive, AWS/S3), and your role. Focus on ETL, transformations, aggregation, automation, and handling large-scale data. Example: 'Worked on healthcare analytics project processing 2TB of patient and device data using Spark for ETL, Hive for reporting, and deployed on AWS EMR. Handled data cleansing, joins, aggregations, and scheduled jobs via Airflow.'"
      },
      {
        "id": "med-q2",
        "question": "How did you handle memory collapse",
        "answer": "Memory collapse occurs when Spark executors run out of memory due to large shuffle operations or caching. Solutions:\n- Increase executor memory (`--executor-memory`)\n- Reduce parallelism (`repartition`/`coalesce`)\n- Persist using MEMORY_AND_DISK\n- Use `reduceByKey` instead of `groupByKey`\n- Broadcast small lookup tables to avoid shuffles"
      },
      {
        "id": "med-q3",
        "question": "What is EC2 memory leakage",
        "answer": "Memory leakage in EC2 happens when an application gradually consumes memory without releasing it, leading to OOM errors. In Spark: inefficient caching, accumulating large RDDs/DataFrames, or improper job configuration can cause it. Mitigation includes: monitoring via CloudWatch, GC tuning, avoiding unnecessary caching, and restarting long-running jobs."
      },
      {
        "id": "med-q4",
        "question": "How did you handle huge data during shuffling",
        "answer": "Shuffling large data can cause memory pressure. Solutions:\n- Use `reduceByKey` or `aggregateByKey` instead of `groupByKey`\n- Broadcast small tables to avoid shuffle joins\n- Repartition data based on keys to balance partitions\n- Persist intermediate results with MEMORY_AND_DISK\n- Tune Spark configs: `spark.sql.shuffle.partitions`"
      },
      {
        "id": "med-q5",
        "question": "How you read nested JSON",
        "answer": "PySpark example:\n```python\nfrom pyspark.sql.functions import col, explode\n# Read nested JSON\ndf = spark.read.option('multiline',True).json('s3://bucket/nested.json')\ndf.printSchema()\n# Access nested field\nnested_df = df.select(col('outer.field'), col('outer.inner_field'))\n# Explode array if needed\nexploded_df = df.select(explode(col('outer.array_field')).alias('item'))\n```"
      },
      {
        "id": "med-q6",
        "question": "How did you write JSON format",
        "answer": "PySpark example:\n```python\ndf.write.mode('overwrite').json('s3://bucket/output/')\n# For pretty JSON\ndf.write.mode('overwrite').option('pretty',True).json('s3://bucket/output/')\n```"
      },
      {
        "id": "med-q7",
        "question": "In AWS, how you configure Airflow",
        "answer": "AWS setup:\n- Use Amazon MWAA (Managed Workflows for Apache Airflow) or EC2/EMR cluster for Airflow\n- Configure S3 bucket for DAG storage\n- Configure IAM roles for task permissions\n- Set Airflow connections for databases/EMR/S3\n- Schedule DAGs to trigger Spark jobs or ETL pipelines\n- Monitor DAG runs via Airflow UI"
      },
      {
        "id": "med-q8",
        "question": "Where/why did you use repartition in your project",
        "answer": "Repartition is used to increase or balance the number of partitions, especially before heavy shuffles or joins. Example: after reading a large JSON with 1 partition, `df.repartition(50)` ensures parallelism and avoids OOM during join/aggregation."
      },
      {
        "id": "med-q9",
        "question": "Have you used AWS Redshift, RDS, Glue?",
        "answer": "Yes, for example:\n- Redshift: Analytics on structured datasets\n- RDS: OLTP relational database storage\n- Glue: Serverless ETL for schema discovery, transformations, and loading into Redshift/S3"
      },
      {
        "id": "med-q10",
        "question": "PySpark Join scenario with change_type column",
        "input": "| id | name | status |\n||\n| 1 | John | A |\n| 2 | Jane | B |\n| 3 | Jim | C |\n| 4 | Jack | D |\n\n| id | name | status |\n||\n| 1 | John | A |\n| 2 | Jane | C |\n| 5 | Jill | E |",
        "expected_output": "| id | name | status | change_type |\n||\n| 1 | John | A | NO CHANGE |\n| 2 | Jane | C | UPDATED |\n| 3 | Jim | C | DELETED |\n| 4 | Jack | D | DELETED |\n| 5 | Jill | E | INSERTED |",
        "answer": "PySpark complete solution:\n```python\nfrom pyspark.sql.functions import expr, coalesce\n\n# Rename columns to avoid conflict\ndf1 = df.withColumnRenamed('status','status_1').withColumnRenamed('name','name_1')\ndf2 = df2.withColumnRenamed('status','status_2').withColumnRenamed('name','name_2')\n\n# Full outer join and compute change_type\nresult = df1.join(df2, 'id', 'full')\\\n    .withColumn('change_type', expr('''\n        CASE\n        WHEN status_2 IS NULL THEN 'DELETED'\n        WHEN status_1 IS NULL THEN 'INSERTED'\n        WHEN status_1 != status_2 THEN 'UPDATED'\n        ELSE 'NO CHANGE'\n        END\n    '''))\\\n    .selectExpr('id', 'coalesce(name_1,name_2) as name', 'coalesce(status_1,status_2) as status', 'change_type')\n\nresult.show()\n```"
      }
    ]
  },
  {
  "company": "Tech Mahindra / CGI",
  "experience": "0-3 years",
  "questions": [
    {
      "id": "tm-q1",
      "question": "Find which city has spent the most on outgoing calls",
      "input": "| Origin | Destination | CallDuration |\n||\n| Coimbatore | Thirunelveli | 20 |\n| Madurai | Thirunelveli | 15 |\n| Madurai | Thootukudi | 150 |\n| Madurai | Coimbatore | 15 |\n| Coimbatore | Chennai | 15 |\n| Tiruchi | Coimbatore | 15 |",
      "expected_output": "| Origin | total_duration |\n||\n| Madurai | 180 |",
      "answer": "PySpark solution:\n```python\nfrom pyspark.sql.functions import sum as _sum\n\n# Group by origin and sum call duration\nresult = df.groupBy('Origin').agg(_sum('CallDuration').alias('total_duration'))\n# Find city with max outgoing call duration\nresult.orderBy(result.total_duration.desc()).show(1)\n```"
    },
    {
      "id": "tm-q2",
      "question": "Show number of occurrences where speed changed more than 700 rpm between consecutive time samples",
      "input": "| time | engrpm |\n||\n| 1 | 2000 |\n| 2 | 2100 |\n| 3 | 4000 |\n| 5 | 4500 |\n| 6 | 60 |\n| 7 | 90 |\n| 8 | 9000 |",
      "expected_output": "| instances |\n||\n| 4 |",
      "answer": "PySpark solution:\n```python\nfrom pyspark.sql.window import Window\nfrom pyspark.sql.functions import lag, col, abs\n\nwindowSpec = Window.orderBy('time')\ndf_with_lag = df.withColumn('prev_rpm', lag('engrpm').over(windowSpec))\ndf_with_lag = df_with_lag.withColumn('diff', abs(col('engrpm') - col('prev_rpm')))\ndf_with_lag.filter(col('diff') > 700).count()\n```"
    },
    {
      "id": "tm-q3",
      "question": "Find number of instances where Signal1 > 50 and Signal2 > 55 for the same vehicle & timestamp",
      "answer": "PySpark solution:\n```python\nfrom pyspark.sql.functions import col\n\nsignal1_df = df.filter((col('Signal Name')=='Signal1') & (col('Value')>50))\nsignal2_df = df.filter((col('Signal Name')=='Signal2') & (col('Value')>55))\njoined_df = signal1_df.join(signal2_df, ['Vehicle Number','Time Stamp'], 'inner')\njoined_df.count()\n```"
    },
    {
      "id": "cgi-q1",
      "question": "Python: Convert list of numbers into consecutive pairs",
      "input": "| INPUT |\n||\n| [1,2,3,4,5,7] |",
      "expected_output": "| OUTPUT |\n||\n| [(1,2),(3,4),(5,7)] |",
      "answer": "Python solution:\n```python\nlst = [1,2,3,4,5,7]\noutput = [(lst[i], lst[i+1]) for i in range(0,len(lst),2)]\nprint(output)\n```"
    },
    {
      "id": "cgi-q2",
      "question": "SQL: ALL JOINS output for two tables",
      "input": "| table1 |\n||\n| 1 |\n| 0 |\n| 1 |\n\n| table2 |\n||\n| 0 |\n| 0 |\n| 1 |",
      "answer": "SQL example:\n```sql\n-- Inner join\nSELECT * FROM table1 t1 INNER JOIN table2 t2 ON t1.id = t2.id;\n-- Left join\nSELECT * FROM table1 t1 LEFT JOIN table2 t2 ON t1.id = t2.id;\n-- Right join\nSELECT * FROM table1 t1 RIGHT JOIN table2 t2 ON t1.id = t2.id;\n-- Full outer join\nSELECT * FROM table1 t1 FULL OUTER JOIN table2 t2 ON t1.id = t2.id;\n```"
    },
    {
      "id": "cgi-q3",
      "question": "SQL: Find 2nd highest salary",
      "answer": "SQL solution:\n```sql\nSELECT MAX(salary) AS second_highest\nFROM employees\nWHERE salary < (SELECT MAX(salary) FROM employees);\n```\nPySpark solution:\n```python\nfrom pyspark.sql.functions import col\nsecond_highest = df.agg({'salary':'max'}).collect()[0][0]\ndf.filter(col('salary') < second_highest).agg({'salary':'max'}).show()\n```"
    },
    {
      "id": "cgi-q4",
      "question": "Use case for stored procedure, view, materialized view",
      "answer": "- Stored procedure: encapsulate repetitive SQL logic, ETL tasks\n- View: logical representation of query, dynamically reflects data\n- Materialized view: precomputed and stored result for faster queries, especially aggregation-heavy tables"
    },
    {
      "id": "cgi-q5",
      "question": "PySpark: Difference between cache and persist",
      "answer": "Cache: stores DataFrame/RDD in memory only\nPersist: allows different storage levels like MEMORY_AND_DISK, DISK_ONLY\n```python\ndf.cache()\ndf.persist(StorageLevel.MEMORY_AND_DISK)\n```"
    },
    {
      "id": "cgi-q6",
      "question": "PySpark: Difference between coalesce and repartition",
      "answer": "Coalesce: Reduce number of partitions without shuffle\nRepartition: Increase or redistribute partitions with shuffle for load balancing\n```python\ndf.coalesce(2)\ndf.repartition(4)\n```"
    },
    {
      "id": "cgi-q7",
      "question": "Explain DAG and stages/tasks in Spark",
      "answer": "DAG (Directed Acyclic Graph) represents all transformations in Spark. Stages are groups of tasks that can run in parallel. Tasks are the smallest units of work executed on partitions."
    },
    {
      "id": "cgi-q8",
      "question": "Broadcast join",
      "answer": "Used when one table is small. Broadcast it to all executors to avoid shuffle:\n```python\nfrom pyspark.sql.functions import broadcast\nresult = large_df.join(broadcast(small_df), 'id')\n```"
    },
    {
      "id": "cgi-q9",
      "question": "What is data skewness",
      "answer": "Data skew occurs when some partitions have much more data than others. Leads to slow tasks. Mitigation: salting keys, repartitioning, using map-side reductions."
    }
  ]
},
{
  "company": "Tiger Analytics",
  "experience": "0-3 years",
  "questions": [
    {
      "id": "ta-q1",
      "question": "Find 2nd highest salary",
      "input": "| id | name | salary |\n| 1  | A    | 3000   |\n| 2  | B    | 5000   |\n| 3  | C    | 4000   |",
      "expected_output": "| second_highest |\n| 4000 |",
      "answer": "SQL:\nSELECT MAX(salary) AS second_highest FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);\n\nPySpark:\nfrom pyspark.sql.functions import col\nsecond_highest = df.agg({'salary':'max'}).collect()[0][0]\ndf.filter(col('salary') < second_highest).agg({'salary':'max'}).show()"
    },
    {
      "id": "ta-q2",
      "question": "Use of window functions",
      "answer": "Window functions operate on a subset of rows (window) and return a value for each row. Example: ranking salaries by department:\n\nSQL:\nSELECT name, salary, RANK() OVER(PARTITION BY dept ORDER BY salary DESC) as rank FROM employees;\n\nPySpark:\nfrom pyspark.sql.window import Window\nfrom pyspark.sql.functions import rank, col\nwindowSpec = Window.partitionBy('dept').orderBy(col('salary').desc())\ndf.withColumn('rank', rank().over(windowSpec)).show()"
    },
    {
      "id": "ta-q3",
      "question": "Difference between cache and persist",
      "answer": "Cache stores DataFrame/RDD in memory (default MEMORY_ONLY). Persist allows specifying storage level (MEMORY_AND_DISK, DISK_ONLY). Persist gives more control over storage, especially for large datasets."
    },
    {
      "id": "ta-q4",
      "question": "Difference between coalesce and repartition",
      "answer": "Coalesce reduces number of partitions without shuffle (efficient for narrow transformations). Repartition reshuffles data to change partition number (useful for parallelism or after filter)."
    },
    {
      "id": "ta-q5",
      "question": "Explain DAG (Directed Acyclic Graph) in Spark",
      "answer": "DAG is Spark's execution plan for transformations. Each transformation creates a new stage; DAG ensures dependencies are resolved and avoids cycles. DAG optimizes task scheduling and fault tolerance."
    },
    {
      "id": "ta-q6",
      "question": "What is data skewness and how to handle it",
      "answer": "Data skew occurs when some partitions have much more data, causing long-running tasks. Solutions: add salt to keys, repartition skewed keys, use map-side combine, or broadcast smaller tables in joins."
    },
    {
      "id": "ta-q7",
      "question": "Stages and tasks in Spark",
      "answer": "Stage: A set of parallel tasks that can run without shuffle. Task: Single unit of work sent to executor. Spark splits jobs into stages and tasks to optimize execution and parallelism."
    },
    {
      "id": "ta-q8",
      "question": "Spark submit command",
      "answer": "Example:\nspark-submit --master yarn --deploy-mode cluster --driver-memory 2g --executor-memory 4g my_job.py"
    },
    {
      "id": "ta-q9",
      "question": "Deploy modes in Spark",
      "answer": "Cluster mode: Driver runs on cluster node. Client mode: Driver runs on local machine. Use cluster mode for production, client mode for testing."
    },
    {
      "id": "ta-q10",
      "question": "Performance tuning techniques in Spark",
      "answer": "Use partitioning/bucketing, cache/persist, reduceByKey instead of groupByKey, broadcast small tables, optimize joins, tune executor memory and cores, and use efficient file formats like Parquet/ORC."
    },
    {
      "id": "ta-q11",
      "question": "Bucketing and partitions difference",
      "answer": "Partitioning divides data into directories based on column value. Bucketing divides data into fixed number of files based on hash of column. Partitioning helps prune data scans; bucketing helps joins and sampling."
    },
    {
      "id": "ta-q12",
      "question": "Broadcast join example",
      "answer": "Use broadcast when one table is small enough to fit in memory. Example:\n\nfrom pyspark.sql.functions import broadcast\njoined_df = large_df.join(broadcast(small_df), 'id')\njoined_df.show()"
    }
  ]
},
{
  "company": "Hexaware",
  "experience": "0-3 years",
  "questions": [
    {
      "id": "hex-q1",
      "question": "Python: Find pairs that sum up to 8",
      "input": "| lst       | mtch |\n| [4,3,2,6,5,4,3,1] | 8 |",
      "expected_output": "| pairs |\n| (2,6) |\n| (3,5) |\n| (3,5) |",
      "answer": "Python solution:\n```python\nlst = [4,3,2,6,5,4,3,1]\nmtch = 8\npairs = []\nseen = set()\nfor num in lst:\n    target = mtch - num\n    if target in seen:\n        pairs.append((target,num))\n    seen.add(num)\nprint(pairs)\n```"
    },
    {
      "id": "hex-q2",
      "question": "SQL: Customer 1 travel from Bangalore to Tamil Nadu",
      "input": "| cust_id | source    | des1na1on |\n| 1       | Bangalore | Delhi      |\n| 1       | Delhi     | Srinagar   |\n| 1       | Srinagar  | Tamil Nadu |\n| 2       | Chennai   | Mumbai     |",
      "expected_output": "| cust_id | route                    |\n| 1       | Bangalore -> Delhi -> Srinagar -> Tamil Nadu |",
      "answer": "SQL query:\n```sql\nWITH RECURSIVE travel_path AS (\n    SELECT cust_id, source, des1na1on, CAST(source AS VARCHAR(255)) AS route\n    FROM customer_travel\n    WHERE cust_id = 1\n  UNION ALL\n    SELECT t.cust_id, c.source, c.des1na1on, CONCAT(t.route,' -> ',c.des1na1on)\n    FROM travel_path t\n    JOIN customer_travel c\n    ON t.des1na1on = c.source AND t.cust_id = c.cust_id\n)\nSELECT cust_id, route\nFROM travel_path\nWHERE des1na1on = 'Tamil Nadu';\n```"
    },
    {
      "id": "hex-q3",
      "question": "Broadcast join example",
      "answer": "Use broadcast when one table is small and can fit in memory. Example:\n\n```python\nfrom pyspark.sql.functions import broadcast\njoined_df = large_df.join(broadcast(small_df), 'id')\njoined_df.show()\n```"
    },
    {
      "id": "hex-q4",
      "question": "Explain Spark architecture",
      "answer": "Spark architecture: Driver (controls application and job scheduling), Cluster Manager (YARN/Mesos/K8s allocates resources), Executors (perform tasks and store cached data). Data processed as RDD/DataFrame via DAG, transformations, and actions."
    },
    {
      "id": "hex-q5",
      "question": "How to schedule a Spark job",
      "answer": "You can schedule Spark jobs using:\n- Cron jobs with `spark-submit`\n- Apache Airflow DAGs\n- Oozie or Luigi for workflow orchestration\n- YARN scheduler for automatic job scheduling in cluster mode"
    },
    {
      "id": "hex-q6",
      "question": "Explain hashing algorithm",
      "answer": "Hashing algorithm maps data to a fixed-size value (hash) for fast lookup or partitioning. In Spark, hashing is used in partitioning data across executors, e.g., `hash(partitionKey) % numPartitions`."
    },
    {
      "id": "hex-q7",
      "question": "Explain different joins in Spark",
      "answer": "Types of joins in Spark:\n- Inner Join: Only matching keys\n- Left/Right Outer Join: All keys from one side + matched from other\n- Full Outer Join: All keys from both sides\n- Semi Join: Only keys from left that match\n- Anti Join: Only keys from left that do NOT match\nExample:\n```python\njoined_df = df1.join(df2, 'id', 'inner')\njoined_df.show()\n```"
    }
  ]
},
{
  "company": "HCL L1",
  "experience": "0-3 years",
  "questions": [
    {
      "id": "hcl-l1-q1",
      "question": "What is broadcast join and why have you used it?",
      "answer": "Broadcast join is used to join a large DataFrame with a smaller DataFrame efficiently. The smaller DataFrame is sent to all worker nodes, reducing shuffle and improving performance. Used when one table is significantly smaller than the other."
    },
    {
      "id": "hcl-l1-q2",
      "question": "Write a broadcast join code using CSV data",
      "input": "| df1.csv | df2.csv |\n|||\n| id,name| id,dept|",
      "expected_output": "| id | name | dept |\n||||\n| 1  | John | HR   |\n| 2  | Bob  | IT   |",
      "answer": "```python\nfrom pyspark.sql import SparkSession\nfrom pyspark.sql.functions import broadcast\n\nspark = SparkSession.builder.appName('HCL').getOrCreate()\ndf1 = spark.read.format('csv').option('header',True).load('df1.csv')\ndf2 = spark.read.format('csv').option('header',True).load('df2.csv')\nbroadcast_join = df1.join(broadcast(df2), 'id')\nbroadcast_join.show()\n```"
    },
    {
      "id": "hcl-l1-q3",
      "question": "If broadcast is written in a separate file and you get ambiguous error, how do you handle it?",
      "answer": "Ambiguous error occurs when columns have the same name in both DataFrames. Solution: Rename columns before join using `withColumnRenamed` or select specific columns explicitly."
    },
    {
      "id": "hcl-l1-q4",
      "question": "How many jobs, stages, and tasks in Spark with explanation",
      "answer": "Job: Spark action triggers a job. Stage: Computation steps separated by shuffle boundaries. Task: Unit of work executed on a partition. Example: `df.groupBy().sum().show()` triggers one job, may have multiple stages, each stage contains tasks per partition."
    },
    {
      "id": "hcl-l1-q5",
      "question": "Separate date, year, month, day from timestamp",
      "input": "| date_time |\n||\n| 2025-08-19 10:00:00 |",
      "expected_output": "| date       | year | month | day |\n|||||\n| 2025-08-19 | 2025 | 8     | 19  |",
      "answer": "```python\nfrom pyspark.sql.functions import to_date, year, month, dayofmonth, col\n\ndf = df.withColumn('date', to_date(col('date_time')))\n        .withColumn('year', year(col('date_time')))\n        .withColumn('month', month(col('date_time')))\n        .withColumn('day', dayofmonth(col('date_time')))\ndf.show()\n```"
    },
    {
      "id": "hcl-l1-q6",
      "question": "How to optimize Spark code performance",
      "answer": "Techniques: use broadcast join for small tables, persist/cache intermediate results, reduce shuffles using reduceByKey, filter early, use columnar formats (Parquet/ORC), partition/bucket data, and tune executor memory/cores."
    },
    {
      "id": "hcl-l1-q7",
      "question": "What is Catalyst optimizer",
      "answer": "Catalyst optimizer is Spark SQL's query optimizer. It applies rule-based and cost-based optimization on logical plans to generate efficient physical plans for execution."
    },
    {
      "id": "hcl-l1-q8",
      "question": "AWS cluster configuration",
      "answer": "Cluster config depends on job: number of master, core, and task nodes, instance types, memory/CPU allocation, HDFS replication, and YARN configuration. Example: 1 master, 2 core nodes, 3 task nodes with r5.xlarge instances."
    },
    {
      "id": "hcl-l1-q9",
      "question": "If AWS EMR memory is full handling 1TB data, what challenges you faced?",
      "answer": "Challenges: executor OOM, shuffle spills, slow jobs. Solutions: increase executor memory, increase number of partitions, use disk spill, optimize joins with broadcast, persist only needed data, filter early."
    },
    {
      "id": "hcl-l1-q10",
      "question": "How to identify data skewness",
      "answer": "Check partition sizes using `rdd.mapPartitions(lambda it: [len(list(it))]).collect()`. Skewed partitions have many more rows than average. Also monitor stage/task duration in Spark UI."
    },
    {
      "id": "hcl-l1-q11",
      "question": "If SQL query takes too much time, what will you do?",
      "answer": "Analyze execution plan, check for skewed joins, use columnar formats, filter early, broadcast small tables, cache repeated data, increase parallelism, and optimize partitioning."
    },
    {
      "id": "hcl-l1-q12",
      "question": "How will you optimize SQL queries",
      "answer": "Techniques: partition pruning, using indexes, broadcasting small tables, avoiding wide transformations, using proper joins, caching intermediate tables, and analyzing Spark query plan using `explain()`."
    }
  ]
},




];

export default companyProblems;
