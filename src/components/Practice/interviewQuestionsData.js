// === src/components/Practice/interviewQuestionsData.js ===
export const interviewData = {
  hadoop: {
    title: "Hadoop",
    emoji: "🐘",
    questions: [
      {
        question: "What is Hadoop?",
        answer:
          "Hadoop is a distributed framework that uses HDFS for storage and MapReduce for processing. It is scalable and fault-tolerant.",
        keywords: ["HDFS", "MapReduce", "distributed", "scalable", "fault-tolerant"],
      },
      {
        question: "Explain the components of Hadoop.",
        answer:
          "Hadoop consists of NameNode, DataNodes, Secondary NameNode, JobTracker, and TaskTrackers.",
        keywords: ["NameNode", "DataNodes", "Secondary NameNode", "JobTracker", "TaskTrackers"],
      },
    ],
  },
  sqoop: {
    title: "Sqoop",
    emoji: "🔄",
    questions: [
      {
        question: "What is Sqoop?",
        answer:
          "Sqoop is a tool designed for efficiently transferring bulk data between Apache Hadoop and structured datastores such as relational databases.",
        keywords: ["Sqoop", "Hadoop", "RDBMS", "data transfer"],
      },
      {
        question: "How does Sqoop import work?",
        answer:
          "Sqoop uses JDBC to connect to RDBMS and MapReduce jobs to import data in parallel.",
        keywords: ["JDBC", "MapReduce", "import"],
      },
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
