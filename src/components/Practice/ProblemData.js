export const problemsByTrack = {
  'daily-announcements': [
    {
      id: 'welcome-update',
      title: 'Welcome to Daily Announcements',
      description: 'This is your central space to view all important daily mentor updates, batch-wise reminders, and inspirational notes. Visit here regularly.',
      sampleInput: '',
      sampleOutput: '',
    },
  ],

  daily: [
    {
      id: 'day-1',
      title: 'Daily Coding: FizzBuzz',
      description: 'Print numbers from 1 to 100. For multiples of 3, print Fizz. For 5, print Buzz. For both, print FizzBuzz.',
      sampleInput: '',
      sampleOutput: '1\n2\nFizz\n4\nBuzz\n...',
      difficulty: 'Easy',
    },
  ],

  'bigdata-concepts': [
    {
      id: 'bdc-1',
      title: 'What is Big Data?',
      description: 'Explain the 5Vs of Big Data.',
      sampleInput: '',
      sampleOutput: 'Volume, Velocity, Variety, Veracity, Value',
      difficulty: 'Easy',
    },
  ],

  'pyspark-concepts': [
    {
      id: 'psc-1',
      title: 'RDD vs DataFrame',
      description: 'Explain the difference between RDD and DataFrame in PySpark.',
      sampleInput: '',
      sampleOutput: 'Descriptive difference',
      difficulty: 'Medium',
    },
  ],

  python: [
    {
      id: 'py-1',
      title: 'Print Hello World',
      description: 'This is your first Python program. It is designed to show how to display a message on the screen. The program uses a built-in function to print a simple message. When the program runs, it directly shows "Hello, World!" as output. There is no input required from the user.',
      sampleInput: 'None',
      sampleOutput: 'Hello World',
      difficulty: 'Easy'
    },
    {
      id: 'py-2',
      title: 'Take Name as Input and Print Greeting',
      description: 'This program teaches how to take user input and store it in a variable. The program will ask the user to enter their name. Whatever the user types is stored in a variable (let’s say name). The program then displays a greeting by combining a fixed message like “Hello,” with the value stored in that variable. For example, if the user types Alice, the output will be Hello, Alice!.',
      sampleInput: 'Alice',
      sampleOutput: 'Hello, Alice!',
      difficulty: 'Easy'
    },
    {
      id: 'py-3',
      title: 'Add Two Numbers',
      description: 'This program takes two numbers as input from the user. These numbers are stored in two separate variables (like a and b). Then, the program adds these two numbers and stores the result in another variable (let’s say sum). Finally, it displays the value of sum. For example, if the user enters 12 and 13, the variables will hold those values, and the program will display the result as 25.',
      sampleInput: '12\n13',
      sampleOutput: 'Sum: 25',
      difficulty: 'Easy'
    },
    {
      id: 'py-4',
      title: 'Check if Number is Positive, Negative, or Zero',
      description: 'This program takes an integer from the user and checks whether the number is positive, negative, or zero. It does this by storing the input in a variable (say, num) and then comparing it with zero. If num is greater than zero, it’s positive; if less than zero, it’s negative; and if equal to zero, the program prints that it is zero.',
      sampleInput: '-8\n0\n4',
      sampleOutput: 'Negative number\nZero\nPositive number',
      difficulty: 'Easy'
    },
    {
      id: 'py-5',
      title: 'Find Largest of Two Numbers',
      description: 'This program accepts two numbers from the user and determines which one is larger. Each number is stored in a separate variable. The program compares the two values using a conditional check. If the first number is greater, it will print that number as the larger one; otherwise, it will print the second number. This helps beginners understand how comparisons work in programming.',
      sampleInput: '8\n14',
      sampleOutput: '14 is greater',
      difficulty: 'Easy'
    },
    {
      id: 'py-6',
      title: 'Even or Odd Checker',
      description: 'This program checks whether a number entered by the user is even or odd. It first stores the number in a variable. Then it checks whether this number can be divided exactly by 2 (i.e., no remainder). If there is no remainder, the number is even; otherwise, it is odd. For example, if the user enters 11, the program checks and finds it is not divisible by 2, so it prints "Odd".',
      sampleInput: '19\n24',
      sampleOutput: 'Odd\nEven',
      difficulty: 'Easy'
    },
    {
      id: 'py-7',
      title: 'Print 1 to N using a Loop',
      description: "This program prints numbers starting from 1 up to a number entered by the user (let's say N). The value is stored in a variable, and a loop is used to repeatedly print numbers starting from 1 until it reaches N. For example, if the user enters 5, the loop will print 1, 2, 3, 4, and 5 on separate lines. This helps understand how repetition works using loops.",
      sampleInput: '5',
      sampleOutput: '1\n2\n3\n4\n5',
      difficulty: 'Easy'
    },
    {
      id: 'py-8',
      title: 'Sum of First N Natural Numbers',
      description: 'This program calculates the sum of the first N natural numbers, where N is entered by the user. The number is stored in a variable. A loop is then used to add all numbers from 1 to N, one by one, and the total is stored in another variable. For example, if Rupesh enters 4, the program adds 1 + 2 + 3 + 4 and gives the result 10.',
      sampleInput: '4',
      sampleOutput: 'Sum: 10',
      difficulty: 'Easy'
    },
    {
      id: 'py-9',
      title: 'Print Multiplication Table',
      description: 'This program prints the multiplication table for any number provided by the user. Suppose Rupesh enters 3, the program stores that in a variable and then uses a loop to multiply 3 with numbers from 1 to 10. The result of each multiplication is printed line by line. This helps beginners understand both multiplication and how loops can repeat tasks.',
      sampleInput: '3',
      sampleOutput: '3 x 1 = 3  \n3 x 2 = 6  \n3 x 3 = 9  \n...  \n3 x 10 = 30',
      difficulty: 'Easy'
    },
    {
      id: 'py-10',
      title: 'Count Vowels in a String',
      description: 'This program counts how many vowels (a, e, i, o, u) are present in a word or sentence entered by the user. The entered text is stored in a variable. Then, the program goes through each character in the text and checks whether it is a vowel. A counter variable is used to keep track of how many vowels are found. For example, if Rupesh enters the word education, the program counts the vowels and prints the total, which is 5.',
      sampleInput: 'education',
      sampleOutput: 'Vowels: 5',
      difficulty: 'Easy'
    },
    {
      id: 'py-11',
      title: 'Reverse a String',
      description: 'This program takes a word or sentence from the user and prints it in reverse order. The entered text is stored in a variable. The program then accesses each character starting from the end and goes backward until it reaches the beginning. This reversed order is then displayed. For example, if Rupesh enters hello, the program will process the string from the last character o to the first character h, and the result will be olleh.',
      sampleInput: 'hello',
      sampleOutput: 'olleh',
      difficulty: 'Easy'
    },
    {
      id: 'py-12',
      title: 'Find Maximum in a List',
      description: 'This program helps the user find the largest number in a list. The user is asked to enter a few numbers, which are stored together in a list-like structure. The program then goes through each number and compares it with the current largest value found. If a bigger number is found, it updates the largest value. After checking all numbers, the final maximum is printed. For example, if the list is [2, 8, 1, 10, 5], the largest number is 10.',
      sampleInput: '2 8 1 10 5',
      sampleOutput: 'Maximum: 10',
      difficulty: 'Easy'
    },
    {
      id: 'py-13',
      title: 'Count Occurrences of an Element',
      description: 'This program counts how many times a specific number appears in a list of numbers entered by the user. First, the user enters several numbers, which are stored together in a list. Then the user is asked to enter one number to check. The program goes through the list and counts how many times that number appears. For example, if the list is [1, 2, 2, 3, 2, 4] and the number to find is 2, it will find that 2 appears 3 times.',
      sampleInput: 'List: 1 2 2 3 2 4  \nNumber to find: 2',
      sampleOutput: 'Occurrences: 3',
      difficulty: 'Easy'
    },
    {
      id: 'py-14',
      title: 'Check Element in Tuple',
      description: 'This program checks whether a specific value exists inside a fixed collection of values called a tuple. The user first sees or creates a group of numbers (called a tuple), and then enters a number to search for. The program looks through the tuple and checks whether the number is present. If found, it confirms its presence; otherwise, it says it’s not found. For example, if the tuple is (1, 2, 3, 4, 5) and the user checks for 3, it will say that 3 is found.',
      sampleInput: 'Tuple: 1 2 3 4 5  \nElement: 3',
      sampleOutput: '3 found in tuple',
      difficulty: 'Easy'
    },
    {
      id: 'py-15',
      title: 'Frequency of Characters using Dictionary',
      description: 'This program helps in finding how many times each character appears in a word entered by the user. The word is stored in a variable. Then, for each character in the word, the program keeps track of how many times it has been seen using something similar to a dictionary (a structure that stores key-value pairs). For example, if Rupesh types the word banana, the program will go through each letter and count them, resulting in b: 1, a: 3, and n: 2.',
      sampleInput: 'banana',
      sampleOutput: 'b: 1  \na: 3  \nn: 2',
      difficulty: 'Easy'
    },
    {
      id: 'py-16',
      title: 'Set Intersection',
      description: 'This program finds the common elements between two sets. Sets are collections where each value is unique. The user enters values for two separate sets. The program then compares both sets and identifies which values appear in both. These common values are called the intersection. For example, if the first set is {1, 2, 3} and the second set is {2, 3, 4}, the program will identify that 2 and 3 are present in both sets.',
      sampleInput: 'Set 1: 1 2 3  \nSet 2: 2 3 4',
      sampleOutput: 'Common: {2, 3}',
      difficulty: 'Easy'
    },
    {
      id: 'py-17',
      title: 'Array Sum',
      description: 'This program calculates the total of all numbers in an array (a fixed-type collection of values). The user provides several numbers, which are stored in an array. The program then adds all the values one by one and displays the result. For example, if Rupesh provides [1, 2, 3, 4], the program adds them (1 + 2 + 3 + 4) and shows the result 10.',
      sampleInput: '1 2 3 4',
      sampleOutput: 'Sum: 10',
      difficulty: 'Easy'
    },
    {
      id: 'py-18',
      title: 'Squares using List Comprehension',
      description: 'This program generates a list of squares for numbers from 1 up to a number provided by the user. Let’s say the user enters 5, then the program will generate values like 1*1, 2*2, ..., 5*5, and collect all of them into a list. The result becomes [1, 4, 9, 16, 25]. This helps users understand how to build new lists based on an existing range of numbers using a single line approach.',
      sampleInput: '5',
      sampleOutput: '[1, 4, 9, 16, 25]',
      difficulty: 'Easy'
    },
    {
      id: 'py-19',
      title: 'Filter Even Numbers using List Comprehension',
      description: 'This program filters out only the even numbers from a list given by the user. The program checks each number to see if it is divisible by 2, and if it is, the number is added to a new list. This process is done using list comprehension to make it more compact. For example, if the input list is [1, 2, 3, 4, 5, 6], the output will be [2, 4, 6] because those are the only even numbers.',
      sampleInput: '1 2 3 4 5 6',
      sampleOutput: '[2, 4, 6]',
      difficulty: 'Easy'
    },
    {
      id: 'py-20',
      title: 'Nested If to Check Range',
      description: "This program checks if a number entered by the user is in a specific range (between 1 and 100). If the number is in that range, it further checks whether it is less than or greater than 50. So, there are two layers of checking: first for the range, and then for comparison with 50. For example, if the number is 67, the program first confirms that it's between 1 and 100, and then reports that it’s greater than 50.",
      sampleInput: '67',
      sampleOutput: 'Number is in range  \nGreater than 50',
      difficulty: 'Easy'
    },
    {
      id: 'py-21',
      title: 'Check for Palindrome',
      description: 'This program checks whether a word is a palindrome. A palindrome is a word that reads the same backward as forward. The user is asked to enter a word, which is stored in a variable. The program then creates a reversed version of that word and compares both the original and reversed versions. If both match, it is a palindrome. For example, if the input is madam, the original word and its reversed version are the same, so the output is "Palindrome".',
      sampleInput: 'madam',
      sampleOutput: 'Palindrome',
      difficulty: 'Medium'
    },
    {
      id: 'py-22',
      title: 'Count Frequency of Words in a Sentence',
      description: 'This program takes a full sentence as input and tells you how many times each word appears. The sentence is first broken into words (for example: "Rupesh is learning Python" becomes ["Rupesh", "is", "learning", "Python"]). Then, it goes word by word, checking how many times each one occurs and keeps a count. If the word appears again later in the sentence, its count is increased. Finally, the program displays each word and its corresponding count.',
      sampleInput: 'Rupesh is learning Python and Rupesh loves Python',
      sampleOutput: 'Rupesh: 2  \nis: 1  \nlearning: 1  \nPython: 2  \nand: 1  \nloves: 1',
      difficulty: 'Medium'
    },
    {
      id: 'py-23',
      title: 'Check if Two Strings are Anagrams',
      description: 'This program checks whether two given words are anagrams. An anagram means that both words use exactly the same letters but possibly in a different order. For example, if you enter listen and silent, the program will sort the letters of each word and compare them. If both sorted versions are the same (like eilnst), then the words are anagrams.',
      sampleInput: 'listen  \nsilent',
      sampleOutput: 'Anagram',
      difficulty: 'Medium'
    },
    {
      id: 'py-24',
      title: 'Find All Prime Numbers Between Two Numbers',
      description: 'This program helps find all prime numbers between two numbers provided by the user. A prime number is a number that has only two divisors — 1 and itself. The user inputs two numbers: a starting value and an ending value. The program checks every number in that range one by one. For each number, it checks whether it is divisible by any number other than 1 and itself. If no such divisors are found, that number is added to the list of primes to be printed.',
      sampleInput: '10  \n20',
      sampleOutput: '11 13 17 19',
      difficulty: 'Medium'
    },
    {
      id: 'py-25',
      title: 'Print Fibonacci Series up to N Terms',
      description: 'The Fibonacci sequence is a series of numbers where each number is the sum of the two numbers before it. It starts with 0 and 1. In this program, the user enters a number N, and the program prints the first N terms of the Fibonacci sequence. For example, if N = 7, the program starts with 0 and 1, then adds 0+1 to get 1, then 1+1 to get 2, and so on until 7 numbers are printed.',
      sampleInput: '7',
      sampleOutput: '0 1 1 2 3 5 8',
      difficulty: 'Medium'
    },
    {
      id: 'py-26',
      title: 'Find the Largest Word in a Sentence',
      description: 'This program takes a full sentence from the user and identifies the longest word in it. The sentence is split into individual words using spaces. Then each word’s length is checked one by one. The program keeps track of the longest word seen so far as it compares. For example, if the sentence is “Rupesh practices Python regularly”, the program will detect that "regularly" has the most characters.',
      sampleInput: 'Rupesh practices Python regularly',
      sampleOutput: 'Longest word: regularly',
      difficulty: 'Medium'
    },
    {
      id: 'py-27',
      title: 'Sum of Digits of a Number',
      description: 'This program calculates the sum of all digits in a number. The user enters a number (like 453), and the program separates each digit and adds them. For example, 4 + 5 + 3 = 12. The logic involves processing each digit one at a time and summing them all.',
      sampleInput: '453',
      sampleOutput: 'Sum: 12',
      difficulty: 'Medium'
    },
    {
      id: 'py-28',
      title: 'Check Armstrong Number',
      description: "This program checks whether a number is an Armstrong number. An Armstrong number is one where the sum of each digit raised to the power of the total number of digits equals the number itself. For example, 153 has 3 digits. 1 cube + 5 cube + 3 cube = 1 + 125 + 27 =153. The program calculates the sum of each digit raised to the appropriate power and checks if it equals the original number.",
      sampleInput: '153',
      sampleOutput: 'Armstrong number',
      difficulty: 'Medium'
    },
    {
      id: 'py-29',
      title: 'Print Pattern using Nested Loops',
      description: 'This program prints a pattern of stars based on the number of rows the user inputs. For example, if the user inputs 5, the program prints: *  \n**  \n***  \n****  \n***** \nThe logic involves using a loop to print each row, and inside that loop, another loop prints the correct number of * symbols for that row. So in the first row 1 star is printed, in the second row 2 stars, and so on.',
      sampleInput: '5',
      sampleOutput: '*  \n**  \n***  \n****  \n*****',
      difficulty: 'Medium'
    },
    {
      id: 'py-30',
      title: 'Find Duplicates in a List',
      description: 'This program finds which values in a list are duplicates — that is, values that appear more than once. The user inputs multiple values (like names or numbers), and the program checks each value while keeping track of how often it appears. If a value is already seen before, it is marked as a duplicate. This helps understand how to count and detect repeated items in a list.',
      sampleInput: '1 2 3 4 2 3 5',
      sampleOutput: 'Duplicates: 2 3',
      difficulty: 'Medium'
    },
    {
      id: 'py-31',
      title: 'Check if a Number is a Perfect Number',
      description: 'A perfect number is a number that is equal to the sum of its proper divisors (excluding itself). For example, for 28, its divisors are 1, 2, 4, 7, and 14 — and their sum is 28. The program asks the user to enter a number. Then, it checks which numbers divide it exactly (i.e., remainder is 0), adds those divisors, and compares the total to the original number. If both match, the number is perfect.',
      sampleInput: '28',
      sampleOutput: 'Perfect number',
      difficulty: 'Medium'
    },
    {
      id: 'py-32',
      title: 'Reverse a Number',
      description: 'This program reverses a given number. For example, if the input is 1456, the output should be 6541. The number is processed digit by digit from right to left. Each digit is extracted and added to a new number by placing it in reverse order. This is commonly asked to test your understanding of loops and number manipulation.',
      sampleInput: '1456',
      sampleOutput: '6541',
      difficulty: 'Medium'
    },
    {
      id: 'py-33',
      title: 'Find Common Elements Between Two Lists',
      description: 'The user inputs two separate lists (could be numbers or words), and the program finds the elements that exist in both lists. For example, if list 1 is [1, 2, 3, 4] and list 2 is [3, 4, 5, 6], the common elements are 3 and 4. The program compares each element of the first list with the second and stores the matching items.',
      sampleInput: 'List 1: 1 2 3 4  \nList 2: 3 4 5 6',
      sampleOutput: 'Common elements: 3 4',
      difficulty: 'Medium'
    },
    {
      id: 'py-34',
      title: 'Find Second Largest Number in a List',
      description: 'This program takes a list of numbers and finds the second largest number. It first identifies the largest number, removes it, and then finds the next largest number from the remaining values. For example, in the list [4, 6, 1, 9, 7], the largest is 9, so it’s ignored, and the next largest is 7.',
      sampleInput: '4 6 1 9 7',
      sampleOutput: 'Second largest: 7',
      difficulty: 'Medium'
    },
    {
      id: 'py-35',
      title: 'Merge Two Dictionaries',
      description: 'The program asks the user to enter two dictionaries (key-value pairs), and then merges them into one. If the same key exists in both, the value from the second dictionary should overwrite the first. The logic involves going through both dictionaries and combining them by adding all key-value pairs into a new one.',
      sampleInput: "Dict 1: { 'a': 1, 'b': 2 }  \nDict 2: { 'b': 3, 'c': 4 }",
      sampleOutput: "Merged dictionary: { 'a': 1, 'b': 3, 'c': 4 }",
      difficulty: 'Medium'
    },
    {
      id: 'py-36',
      title: 'Count Frequency of Words in a Sentence',
      description: 'This program takes a sentence as input and tells how many times each word appears. The sentence is split into individual words, and a count is maintained for each. For example, in “Rupesh is smart and Rupesh is kind”, “Rupesh” and “is” both appear twice. This helps understand how to use dictionaries to track counts.',
      sampleInput: 'Rupesh is smart and Rupesh is kind',
      sampleOutput: 'Rupesh: 2  \nis: 2  \nsmart: 1  \nand: 1  \nkind: 1',
      difficulty: 'Medium'
    },
    {
      id: 'py-37',
      title: 'Sort a List of Tuples by Second Value',
      description: 'The user provides a list of tuples (like (name, age) or (product, price)), and the program sorts the list based on the second value in each tuple. For example, if you input student marks as [("Alice", 85), ("Bob", 75), ("Rupesh", 90)], the program will sort it by the marks (second value in each tuple).',
      sampleInput: '[("Alice", 85), ("Bob", 75), ("Rupesh", 90)]',
      sampleOutput: '[("Bob", 75), ("Alice", 85), ("Rupesh", 90)]',
      difficulty: 'Medium'
    },
    {
      id: 'py-38',
      title: 'Check Anagram Strings',
      description: 'This program checks whether two words are anagrams — meaning they have the same letters in a different order. For example, “listen” and “silent” are anagrams. The logic involves converting both words to lowercase, sorting the characters, and comparing them. If the sorted versions match, the words are anagrams.',
      sampleInput: 'listen  \nsilent',
      sampleOutput: 'Anagram',
      difficulty: 'Medium'
    },
    {
      id: 'py-39',
      title: 'Remove Vowels from a String',
      description: 'The user enters a string, and the program removes all the vowels (a, e, i, o, u) from it. The logic checks each character of the string and skips it if it’s a vowel. For example, if the string is “Rupesh is coding”, the output becomes “Rpsh s cdng”.',
      sampleInput: 'Rupesh is coding',
      sampleOutput: 'Rpsh s cdng',
      difficulty: 'Medium'
    },
    {
      id: 'py-40',
      title: 'Find the Intersection of Two Sets',
      description: 'This program helps the user find which elements are common between two sets. A set is a collection of unique items. If the user enters two sets like {1, 2, 3, 4} and {3, 4, 5}, the intersection is the elements that appear in both sets. The logic simply compares the elements and prints only the shared ones.',
      sampleInput: 'Set 1: {1, 2, 3, 4}  \nSet 2: {3, 4, 5}',
      sampleOutput: 'Intersection: {3, 4}',
      difficulty: 'Medium'
    },
    {
      id: 'py-41',
      title: 'Find the Longest Substring Without Repeating Characters',
      description: 'This program accepts a string and finds the longest continuous substring where no characters repeat. For example, in "abcabcbb", the longest substring without repeating letters is "abc". The program must go character by character, track seen characters, and restart when a duplicate is found, all while remembering the longest unique stretch.',
      sampleInput: 'abcabcbb',
      sampleOutput: 'abc',
      difficulty: 'Hard'
    },
    {
      id: 'py-42',
      title: 'Group Anagrams from a List of Words',
      description: 'Given a list of words, group them so that all anagrams appear together. For example, from ["eat", "tea", "tan", "ate", "nat", "bat"], the words like "eat", "tea", "ate" are grouped. The logic involves sorting each word to get a standard pattern and then grouping words with the same pattern using a dictionary.',
      sampleInput: '["eat", "tea", "tan", "ate", "nat", "bat"]',
      sampleOutput: '[["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]',
      difficulty: 'Hard'
    },
    {
      id: 'py-43',
      title: 'Find All Pairs with a Given Sum in a List',
      description: 'The program takes a list of integers and a target sum. It finds all unique pairs that add up to that target. For example, from [1, 3, 2, 2, 4, 0] with a target of 4, the valid pairs are (1,3), (2,2), and (4,0). The logic includes checking each possible pair and ensuring duplicates aren’t repeated.',
      sampleInput: 'List: 1 3 2 2 4 0  \nTarget: 4',
      sampleOutput: 'Pairs: (1,3), (2,2), (4,0)',
      difficulty: 'Hard'
    },
    {
      id: 'py-44',
      title: 'Implement a Simple Calculator with Operator Precedence',
      description: 'Build a program that functions like a basic calculator. It should accept a string such as "2 + 3 * 4" and evaluate it correctly using operator precedence (i.e., multiplication before addition). This means the answer should be 14, not 20. You must process the expression from left to right while handling operations in the correct order.',
      sampleInput: '2 + 3 * 4',
      sampleOutput: '14',
      difficulty: 'Hard'
    },
    {
      id: 'py-45',
      title: 'Count Substrings that are Palindromes',
      description: 'This program asks for a string and returns the total number of substrings that are palindromes. For example, "abba" has 6 palindromic substrings: "a", "b", "b", "a", "bb", "abba". The logic uses nested loops to generate all possible substrings and then checks each for palindrome properties.',
      sampleInput: 'abba',
      sampleOutput: '6',
      difficulty: 'Hard'
    },
    {
      id: 'py-46',
      title: 'Find First Non-Repeating Character in a String',
      description: 'This program takes a string as input and finds the first character that does not repeat anywhere else in the string. For example, in "aabbcdeff", the first non-repeating character is "c". You’ll scan the string and count how many times each character appears using a dictionary. Then, go through the original string again to find the first with a count of 1.',
      sampleInput: 'aabbcdeff',
      sampleOutput: 'c',
      difficulty: 'Hard'
    },
    {
      id: 'py-47',
      title: 'Flatten a Nested List',
      description: 'This program takes a list that can contain other lists inside it (nested) and flattens it into a single list. For example, [1, [2, [3, 4]], 5] becomes [1, 2, 3, 4, 5]. The logic uses recursion to check if an element is a list and then goes deeper until it reaches a simple value.',
      sampleInput: '[1, [2, [3, 4]], 5]',
      sampleOutput: '[1, 2, 3, 4, 5]',
      difficulty: 'Hard'
    },
    {
      id: 'py-48',
      title: 'Rotate a Matrix Clockwise by 90 Degrees',
      description: 'This program takes a square 2D matrix and rotates it 90 degrees clockwise. For example, a matrix: \n1 2 3  \n4 5 6  \n7 8 9  \nshould become: \n7 4 1  \n8 5 2  \n9 6 3 \nThe logic involves transposing the matrix and then reversing each row.',
      sampleInput: '[[1,2,3],[4,5,6],[7,8,9]]',
      sampleOutput: '[[7,4,1],[8,5,2],[9,6,3]]',
      difficulty: 'Hard'
    },
    {
      id: 'py-49',
      title: 'Validate a String of Balanced Brackets',
      description: 'The input is a string containing brackets like (), {}, [], and the goal is to check whether all brackets are balanced and correctly nested. For example, "[{()}]" is valid, but "[{]}" is not. The logic uses a stack — when an opening bracket is found, it is pushed, and when a closing bracket appears, the top of the stack must match.',
      sampleInput: '[{()}]',
      sampleOutput: 'Valid',
      difficulty: 'Hard'
    },
    {
      id: 'py-50',
      title: 'Find Longest Common Prefix Among Strings',
      description: 'This program accepts a list of strings and returns the longest starting characters (prefix) common in all of them. For example, ["flower", "flow", "flight"] have "fl" in common. The logic is to compare the first string with each other string character by character until the matching part ends.',
      sampleInput: '["flower", "flow", "flight"]',
      sampleOutput: 'fl',
      difficulty: 'Hard'
    }
  ],

  sql: [
  {
    "id": "sql-1",
    "title": "Employees with High Salary",
    "description": "Given a table 'employees' with columns ID, Name, and Salary, write a SQL query to return the names of employees who earn more than 50000. This helps practice SELECT and WHERE clause for basic filtering.",
    "sampleTableInput": "+----+--------+--------+ \n| ID | Name   | Salary | \n+----+--------+--------+ \n| 1  | Alice  | 60000  | \n| 2  | Bob    | 48000  | \n| 3  | Carol  | 70000  | \n+----+--------+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Alice  | \n| Carol  | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-2",
    "title": "List All Customers",
    "description": "Given a table 'customers' with columns ID, Name, and City, write a SQL query to retrieve all columns and rows from the table. This tests basic SELECT * usage.",
    "sampleTableInput": "+----+----------+----------+ \n| ID | Name     | City     | \n+----+----------+----------+ \n| 1  | John     | Mumbai   | \n| 2  | Priya    | Delhi    | \n| 3  | Akash    | Chennai  | \n+----+----------+----------+ ",
    "sampleTableOutput": "+----+----------+----------+ \n| ID | Name     | City     | \n+----+----------+----------+ \n| 1  | John     | Mumbai   | \n| 2  | Priya    | Delhi    | \n| 3  | Akash    | Chennai  | \n+----+----------+----------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-3",
    "title": "Products in Stock",
    "description": "Given a table 'products' with columns ProductID, ProductName, and InStock (boolean), write a SQL query to return the names of products that are in stock (InStock = TRUE).",
    "sampleTableInput": "+-----------+--------------+----------+ \n| ProductID | ProductName  | InStock  | \n+-----------+--------------+----------+ \n| 1         | Laptop       | TRUE     | \n| 2         | Mouse        | FALSE    | \n| 3         | Keyboard     | TRUE     | \n+-----------+--------------+----------+ ",
    "sampleTableOutput": "+--------------+ \n| ProductName  | \n+--------------+ \n| Laptop       | \n| Keyboard     | \n+--------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-4",
    "title": "Employees in a Department",
    "description": "Given a table 'employees' with columns ID, Name, and Department, write a SQL query to return the names of employees working in the 'Sales' department.",
    "sampleTableInput": "+----+---------+-------------+ \n| ID | Name    | Department  | \n+----+---------+-------------+ \n| 1  | Anil    | Sales       | \n| 2  | Sneha   | HR          | \n| 3  | Rahul   | Sales       | \n+----+---------+-------------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Anil   | \n| Rahul  | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-5",
    "title": "Order by Salary Descending",
    "description": "Given a table 'employees' with columns ID, Name, and Salary, write a SQL query to return all employee names sorted by salary in descending order.",
    "sampleTableInput": "+----+--------+--------+ \n| ID | Name   | Salary | \n+----+--------+--------+ \n| 1  | Alice  | 60000  | \n| 2  | Bob    | 48000  | \n| 3  | Carol  | 70000  | \n+----+--------+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Carol  | \n| Alice  | \n| Bob    | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-6",
    "title": "Customers from Specific Cities",
    "description": "Given a table 'customers' with columns ID, Name, and City, write a SQL query to return names of customers from either 'Delhi' or 'Mumbai'.",
    "sampleTableInput": "+----+--------+--------+ \n| ID | Name   | City   | \n+----+--------+--------+ \n| 1  | Raj    | Delhi  | \n| 2  | Simran | Pune   | \n| 3  | Aman   | Mumbai | \n+----+--------+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Raj    | \n| Aman   | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-7",
    "title": "Find Specific Product",
    "description": "Given a table 'products' with columns ProductID and ProductName, write a SQL query to return the details of the product with ProductID = 2.",
    "sampleTableInput": "+-----------+--------------+ \n| ProductID | ProductName  | \n+-----------+--------------+ \n| 1         | Monitor      | \n| 2         | Mouse        | \n| 3         | Keyboard     | \n+-----------+--------------+ ",
    "sampleTableOutput": "+-----------+--------------+ \n| ProductID | ProductName  | \n+-----------+--------------+ \n| 2         | Mouse        | \n+-----------+--------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-8",
    "title": "Count Total Customers",
    "description": "Given a table 'customers' with columns ID and Name, write a SQL query to count the total number of customers.",
    "sampleTableInput": "+----+---------+ \n| ID | Name    | \n+----+---------+ \n| 1  | Ravi    | \n| 2  | Meena   | \n| 3  | Suresh  | \n+----+---------+ ",
    "sampleTableOutput": "+-------+ \n| Count | \n+-------+ \n| 3     | \n+-------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-9",
    "title": "Get Unique Cities",
    "description": "Given a table 'customers' with columns ID, Name, and City, write a SQL query to return the list of unique cities customers belong to.",
    "sampleTableInput": "+----+--------+----------+ \n| ID | Name   | City     | \n+----+--------+----------+ \n| 1  | Nitin  | Delhi    | \n| 2  | Riya   | Mumbai   | \n| 3  | Tia    | Delhi    | \n+----+--------+----------+ ",
    "sampleTableOutput": "+--------+ \n| City   | \n+--------+ \n| Delhi  | \n| Mumbai | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-10",
    "title": "Employees with Name Starting with A",
    "description": "Given a table 'employees' with columns ID and Name, write a SQL query to return names of employees whose name starts with the letter 'A'.",
    "sampleTableInput": "+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Anjali | \n| 2  | Bharat | \n| 3  | Aryan  | \n+----+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Anjali | \n| Aryan  | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-11",
    "title": "List Products Priced Below 100",
    "description": "Given a table 'products' with columns ProductID, ProductName, and Price, write a SQL query to return all products priced below 100.",
    "sampleTableInput": "+-----------+--------------+--------+ \n| ProductID | ProductName  | Price  | \n+-----------+--------------+--------+ \n| 1         | Pen          | 20     | \n| 2         | Notebook     | 120    | \n| 3         | Eraser       | 10     | \n+-----------+--------------+--------+ ",
    "sampleTableOutput": "+--------------+ \n| ProductName  | \n+--------------+ \n| Pen          | \n| Eraser       | \n+--------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-12",
    "title": "List Students Ordered by Name",
    "description": "Given a table 'students' with columns ID and Name, write a SQL query to return all student names in alphabetical order.",
    "sampleTableInput": "+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Ravi   | \n| 2  | Aman   | \n| 3  | Sita   | \n+----+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Aman   | \n| Ravi   | \n| Sita   | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-13",
    "title": "Retrieve First 2 Employees",
    "description": "Given a table 'employees' with columns ID, Name, and Age, write a SQL query to retrieve the first 2 rows using LIMIT.",
    "sampleTableInput": "+----+--------+-----+ \n| ID | Name   | Age | \n+----+--------+-----+ \n| 1  | Rahul  | 30  | \n| 2  | Sneha  | 25  | \n| 3  | Karan  | 35  | \n+----+--------+-----+ ",
    "sampleTableOutput": "+----+--------+-----+ \n| ID | Name   | Age | \n+----+--------+-----+ \n| 1  | Rahul  | 30  | \n| 2  | Sneha  | 25  | \n+----+--------+-----+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-14",
    "title": "List Employees Aged Over 40",
    "description": "Given a table 'employees' with columns ID, Name, and Age, write a SQL query to return names of employees older than 40.",
    "sampleTableInput": "+----+--------+-----+ \n| ID | Name   | Age | \n+----+--------+-----+ \n| 1  | Vikram | 45  | \n| 2  | Rani   | 38  | \n| 3  | John   | 50  | \n+----+--------+-----+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Vikram | \n| John   | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-15",
    "title": "Customers Not From Chennai",
    "description": "Given a table 'customers' with columns ID, Name, and City, write a SQL query to return customers who are not from 'Chennai'.",
    "sampleTableInput": "+----+--------+----------+ \n| ID | Name   | City     | \n+----+--------+----------+ \n| 1  | Priya  | Delhi    | \n| 2  | Arjun  | Chennai  | \n| 3  | Neha   | Mumbai   | \n+----+--------+----------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Priya  | \n| Neha   | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-16",
    "title": "Find Maximum Salary",
    "description": "Given a table 'employees' with columns ID, Name, and Salary, write a SQL query to find the maximum salary among all employees.",
    "sampleTableInput": "+----+--------+--------+ \n| ID | Name   | Salary | \n+----+--------+--------+ \n| 1  | Ravi   | 55000  | \n| 2  | Simran | 72000  | \n| 3  | Kunal  | 61000  | \n+----+--------+--------+ ",
    "sampleTableOutput": "+--------------+ \n| Max(Salary)  | \n+--------------+ \n| 72000        | \n+--------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-17",
    "title": "List All Distinct Departments",
    "description": "Given a table 'employees' with a Department column, write a SQL query to list all unique department names.",
    "sampleTableInput": "+----+--------+------------+ \n| ID | Name   | Department | \n+----+--------+------------+ \n| 1  | Anu    | HR         | \n| 2  | Raj    | Sales      | \n| 3  | Tina   | HR         | \n+----+--------+------------+ ",
    "sampleTableOutput": "+------------+ \n| Department | \n+------------+ \n| HR         | \n| Sales      | \n+------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-18",
    "title": "List Customers with 'i' in Name",
    "description": "Given a table 'customers' with columns ID and Name, write a SQL query to return names of customers containing the letter 'i'.",
    "sampleTableInput": "+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Rani   | \n| 2  | Mohan  | \n| 3  | Simmi  | \n+----+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Rani   | \n| Simmi  | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-19",
    "title": "List All Product Names",
    "description": "Given a table 'products' with ProductID and ProductName, write a SQL query to list only the product names.",
    "sampleTableInput": "+-----------+--------------+ \n| ProductID | ProductName  | \n+-----------+--------------+ \n| 1         | Monitor      | \n| 2         | Mouse        | \n| 3         | Keyboard     | \n+-----------+--------------+ ",
    "sampleTableOutput": "+--------------+ \n| ProductName  | \n+--------------+ \n| Monitor      | \n| Mouse        | \n| Keyboard     | \n+--------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-20",
    "title": "List Customers in Alphabetical Order of City",
    "description": "Given a table 'customers' with columns Name and City, write a SQL query to return customer names sorted by city name alphabetically.",
    "sampleTableInput": "+--------+----------+ \n| Name   | City     | \n+--------+----------+ \n| Riya   | Mumbai   | \n| Akash  | Delhi    | \n| Simran | Chennai  | \n+--------+----------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Simran | \n| Akash  | \n| Riya   | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-21",
    "title": "List Employees with Even IDs",
    "description": "Given a table 'employees' with columns ID and Name, write a SQL query to return the names of employees whose ID is even.",
    "sampleTableInput": "+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Ravi   | \n| 2  | Sneha  | \n| 3  | Kunal  | \n| 4  | Priya  | \n+----+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Sneha  | \n| Priya  | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-22",
    "title": "Find Minimum Product Price",
    "description": "Given a table 'products' with columns ProductName and Price, write a SQL query to return the minimum price among all products.",
    "sampleTableInput": "+--------------+--------+ \n| ProductName  | Price  | \n+--------------+--------+ \n| Pen          | 20     | \n| Notebook     | 50     | \n| Eraser       | 10     | \n+--------------+--------+ ",
    "sampleTableOutput": "+-------------+ \n| Min(Price)  | \n+-------------+ \n| 10          | \n+-------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-23",
    "title": "Count Products in Stock",
    "description": "Given a table 'products' with columns ProductName and InStock (boolean), write a SQL query to count how many products are currently in stock.",
    "sampleTableInput": "+--------------+----------+ \n| ProductName  | InStock  | \n+--------------+----------+ \n| Pen          | TRUE     | \n| Notebook     | FALSE    | \n| Eraser       | TRUE     | \n+--------------+----------+ ",
    "sampleTableOutput": "+--------+ \n| Count  | \n+--------+ \n| 2      | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-24",
    "title": "List Employees in Ascending Age",
    "description": "Given a table 'employees' with Name and Age, write a SQL query to list employee names ordered by age in ascending order.",
    "sampleTableInput": "+--------+-----+ \n| Name   | Age | \n+--------+-----+ \n| Raj    | 35  | \n| Aman   | 25  | \n| Kiran  | 30  | \n+--------+-----+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Aman   | \n| Kiran  | \n| Raj    | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-25",
    "title": "List All Cities Without Duplicates",
    "description": "Given a table 'customers' with City column, write a SQL query to return all unique city names.",
    "sampleTableInput": "+----------+ \n| City     | \n+----------+ \n| Mumbai   | \n| Delhi    | \n| Mumbai   | \n| Chennai  | \n+----------+ ",
    "sampleTableOutput": "+----------+ \n| City     | \n+----------+ \n| Mumbai   | \n| Delhi    | \n| Chennai  | \n+----------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-26",
    "title": "List Employees with Names Ending in 'a'",
    "description": "Given a table 'employees' with Name column, write a SQL query to return names of employees ending with the letter 'a'.",
    "sampleTableInput": "+--------+ \n| Name   | \n+--------+ \n| Riya   | \n| Karan  | \n| Sneha  | \n+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Riya   | \n| Sneha  | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-27",
    "title": "Find Average Age of Employees",
    "description": "Given a table 'employees' with Age column, write a SQL query to calculate the average age of all employees.",
    "sampleTableInput": "+--------+-----+ \n| Name   | Age | \n+--------+-----+ \n| Amit   | 30  | \n| Neha   | 40  | \n| Ramesh | 35  | \n+--------+-----+ ",
    "sampleTableOutput": "+----------------+ \n| Avg(Age)       | \n+----------------+ \n| 35.0           | \n+----------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-28",
    "title": "Customers Whose Name Contains 'sh'",
    "description": "Given a table 'customers' with Name column, write a SQL query to return names of customers that contain the substring 'sh'.",
    "sampleTableInput": "+--------+ \n| Name   | \n+--------+ \n| Ashok  | \n| Ritesh | \n| Anil   | \n+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Ashok  | \n| Ritesh | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-29",
    "title": "List Top 2 Highest Salaries",
    "description": "Given a table 'employees' with columns Name and Salary, write a SQL query to return names of top 2 highest earning employees.",
    "sampleTableInput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 40000  | \n| Rani   | 55000  | \n| Mohit  | 60000  | \n+--------+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Mohit  | \n| Rani   | \n+--------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-30",
    "title": "Find Total Salary Paid",
    "description": "Given a table 'employees' with a Salary column, write a SQL query to return the total salary paid to all employees.",
    "sampleTableInput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 30000  | \n| Sneha  | 45000  | \n| Rohit  | 25000  | \n+--------+--------+ ",
    "sampleTableOutput": "+-------------+ \n| TotalSalary | \n+-------------+ \n| 100000      | \n+-------------+",
    "difficulty": "Easy"
  },
  {
    "id": "sql-31",
    "title": "Count Employees by Department",
    "description": "Given a table 'employees' with columns ID, Name, and Department, write a SQL query to count the number of employees in each department. Use GROUP BY to group the results.",
    "sampleTableInput": "+----+--------+-------------+ \n| ID | Name   | Department  | \n+----+--------+-------------+ \n| 1  | Anil   | HR          | \n| 2  | Sneha  | Sales       | \n| 3  | Kiran  | HR          | \n+----+--------+-------------+ ",
    "sampleTableOutput": "+-------------+-------+ \n| Department  | Count | \n+-------------+-------+ \n| HR          | 2     | \n| Sales       | 1     | \n+-------------+-------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-32",
    "title": "Average Salary by Department",
    "description": "Given a table 'employees' with columns Name, Department, and Salary, write a SQL query to return the average salary for each department.",
    "sampleTableInput": "+--------+-------------+--------+ \n| Name   | Department  | Salary | \n+--------+-------------+--------+ \n| Raj    | IT          | 60000  | \n| Priya  | IT          | 40000  | \n| Arun   | HR          | 50000  | \n+--------+-------------+--------+ ",
    "sampleTableOutput": "+-------------+--------------+ \n| Department  | Avg(Salary)  | \n+-------------+--------------+ \n| IT          | 50000.0      | \n| HR          | 50000.0      | \n+-------------+--------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-33",
    "title": "Find Customers with Orders",
    "description": "Given two tables 'customers(ID, Name)' and 'orders(OrderID, CustomerID)', write a SQL query to return names of customers who have placed at least one order.",
    "sampleTableInput": "Customers:\n+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Riya   | \n| 2  | Mohan  | \n| 3  | Akash  | \n+----+--------+\n\nOrders:\n+---------+-------------+ \n| OrderID | CustomerID  | \n+---------+-------------+ \n| 101     | 1           | \n| 102     | 3           | \n+---------+-------------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Riya   | \n| Akash  | \n+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-34",
    "title": "Find Customers Without Orders",
    "description": "Given two tables 'customers(ID, Name)' and 'orders(OrderID, CustomerID)', write a SQL query to return names of customers who have never placed an order.",
    "sampleTableInput": "Customers:\n+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Riya   | \n| 2  | Mohan  | \n| 3  | Akash  | \n+----+--------+\n\nOrders:\n+---------+-------------+ \n| OrderID | CustomerID  | \n+---------+-------------+ \n| 101     | 1           | \n| 102     | 3           | \n+---------+-------------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Mohan  | \n+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-35",
    "title": "Get Highest Salary by Department",
    "description": "Given a table 'employees' with columns Name, Department, and Salary, write a SQL query to return the highest salary for each department.",
    "sampleTableInput": "+--------+-------------+--------+ \n| Name   | Department  | Salary | \n+--------+-------------+--------+ \n| Anil   | IT          | 60000  | \n| Raj    | IT          | 45000  | \n| Sneha  | HR          | 50000  | \n+--------+-------------+--------+ ",
    "sampleTableOutput": "+-------------+--------------+ \n| Department  | Max(Salary)  | \n+-------------+--------------+ \n| IT          | 60000        | \n| HR          | 50000        | \n+-------------+--------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-36",
    "title": "Filter Departments Having More Than 1 Employee",
    "description": "Given a table 'employees' with columns ID, Name, and Department, write a SQL query to return departments having more than 1 employee.",
    "sampleTableInput": "+----+--------+-------------+ \n| ID | Name   | Department  | \n+----+--------+-------------+ \n| 1  | Anil   | HR          | \n| 2  | Sneha  | Sales       | \n| 3  | Kiran  | HR          | \n| 4  | Rahul  | IT          | \n| 5  | Neha   | IT          | \n+----+--------+-------------+ ",
    "sampleTableOutput": "+-------------+ \n| Department  | \n+-------------+ \n| HR          | \n| IT          | \n+-------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-37",
    "title": "Get Total Orders per Customer",
    "description": "Given tables 'customers(ID, Name)' and 'orders(OrderID, CustomerID)', write a SQL query to get total number of orders placed by each customer.",
    "sampleTableInput": "Customers:\n+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Riya   | \n| 2  | Mohan  | \n| 3  | Akash  | \n+----+--------+\n\nOrders:\n+---------+-------------+ \n| OrderID | CustomerID  | \n+---------+-------------+ \n| 101     | 1           | \n| 102     | 3           | \n| 103     | 1           | \n+---------+-------------+ ",
    "sampleTableOutput": "+--------+------------+ \n| Name   | OrderCount | \n+--------+------------+ \n| Riya   | 2          | \n| Mohan  | 0          | \n| Akash  | 1          | \n+--------+------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-38",
    "title": "Use CASE WHEN to Categorize Salary",
    "description": "Given a table 'employees' with Name and Salary, write a SQL query to categorize salaries as 'High' (>=60000), 'Medium' (40000–59999), or 'Low' (<40000).",
    "sampleTableInput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 35000  | \n| Sneha  | 50000  | \n| Raj    | 65000  | \n+--------+--------+ ",
    "sampleTableOutput": "+--------+----------+ \n| Name   | Category | \n+--------+----------+ \n| Anil   | Low      | \n| Sneha  | Medium   | \n| Raj    | High     | \n+--------+----------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-39",
    "title": "Find Employees with Same Salary",
    "description": "Given a table 'employees' with Name and Salary, write a SQL query to find all employees who share the same salary with someone else.",
    "sampleTableInput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 50000  | \n| Sneha  | 60000  | \n| Raj    | 50000  | \n+--------+--------+ ",
    "sampleTableOutput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 50000  | \n| Raj    | 50000  | \n+--------+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-40",
    "title": "Retrieve 2nd Highest Salary",
    "description": "Given a table 'employees' with Name and Salary, write a SQL query to return the second highest salary in the table using subqueries.",
    "sampleTableInput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 50000  | \n| Sneha  | 60000  | \n| Raj    | 45000  | \n+--------+--------+ ",
    "sampleTableOutput": "+--------+ \n| Salary | \n+--------+ \n| 50000  | \n+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-41",
    "title": "Get Departments Without Employees",
    "description": "Given tables 'departments(ID, Name)' and 'employees(ID, Name, DepartmentID)', write a SQL query to list department names that have no employees assigned.",
    "sampleTableInput": "Departments:\n+----+----------+ \n| ID | Name     | \n+----+----------+ \n| 1  | HR       | \n| 2  | IT       | \n| 3  | Finance  | \n+----+----------+\n\nEmployees:\n+----+--------+--------------+ \n| ID | Name   | DepartmentID | \n+----+--------+--------------+ \n| 1  | Anil   | 1            | \n| 2  | Sneha  | 2            | \n+----+--------+--------------+ ",
    "sampleTableOutput": "+----------+ \n| Name     | \n+----------+ \n| Finance  | \n+----------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-42",
    "title": "Find Employees with Above Average Salary",
    "description": "Given a table 'employees' with columns Name and Salary, write a SQL query to find employees whose salary is above the average salary.",
    "sampleTableInput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 40000  | \n| Sneha  | 60000  | \n| Raj    | 50000  | \n+--------+--------+ ",
    "sampleTableOutput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Sneha  | 60000  | \n+--------+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-43",
    "title": "List Employees with No Manager",
    "description": "Given a table 'employees' with columns ID, Name, and ManagerID, write a SQL query to return employees who do not report to any manager (i.e., ManagerID is NULL).",
    "sampleTableInput": "+----+--------+-----------+ \n| ID | Name   | ManagerID | \n+----+--------+-----------+ \n| 1  | Anil   | NULL      | \n| 2  | Sneha  | 1         | \n| 3  | Raj    | 1         | \n+----+--------+-----------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Anil   | \n+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-44",
    "title": "List Employees and Their Manager Names",
    "description": "Given a table 'employees' with columns ID, Name, and ManagerID (foreign key to ID), write a SQL query to list employee names along with their manager's name.",
    "sampleTableInput": "+----+--------+-----------+ \n| ID | Name   | ManagerID | \n+----+--------+-----------+ \n| 1  | Anil   | NULL      | \n| 2  | Sneha  | 1         | \n| 3  | Raj    | 1         | \n| 4  | Kiran  | 2         | \n+----+--------+-----------+ ",
    "sampleTableOutput": "+--------+------------+ \n| Name   | Manager    | \n+--------+------------+ \n| Sneha  | Anil       | \n| Raj    | Anil       | \n| Kiran  | Sneha      | \n+--------+------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-45",
    "title": "Employees Working in Multiple Departments",
    "description": "Given a table 'employee_departments' with columns EmployeeID and Department, write a SQL query to find employees assigned to more than one department.",
    "sampleTableInput": "+------------+-------------+ \n| EmployeeID | Department  | \n+------------+-------------+ \n| 1          | HR          | \n| 1          | IT          | \n| 2          | Sales       | \n+------------+-------------+ ",
    "sampleTableOutput": "+------------+ \n| EmployeeID | \n+------------+ \n| 1          | \n+------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-46",
    "title": "Employees With Longest Name",
    "description": "Given a table 'employees' with Name column, write a SQL query to find employees with the longest name length.",
    "sampleTableInput": "+--------+ \n| Name   | \n+--------+ \n| Anil   | \n| Ramesh | \n| Abhimanyu | \n+--------+ ",
    "sampleTableOutput": "+------------+ \n| Name       | \n+------------+ \n| Abhimanyu  | \n+------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-47",
    "title": "Get Employees Hired in 2023",
    "description": "Given a table 'employees' with columns Name and HireDate (DATE), write a SQL query to list employees who were hired in the year 2023.",
    "sampleTableInput": "+--------+------------+ \n| Name   | HireDate   | \n+--------+------------+ \n| Anil   | 2023-04-10 | \n| Sneha  | 2022-11-15 | \n| Raj    | 2023-01-22 | \n+--------+------------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Anil   | \n| Raj    | \n+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-48",
    "title": "Top N Salaries per Department",
    "description": "Given a table 'employees' with Department, Name, and Salary, write a SQL query to return the top 2 highest paid employees from each department.",
    "sampleTableInput": "+-------------+--------+--------+ \n| Department  | Name   | Salary | \n+-------------+--------+--------+ \n| IT          | Anil   | 60000  | \n| IT          | Raj    | 55000  | \n| IT          | Sneha  | 50000  | \n| HR          | Kiran  | 40000  | \n| HR          | Riya   | 42000  | \n+-------------+--------+--------+ ",
    "sampleTableOutput": "+-------------+--------+--------+ \n| Department  | Name   | Salary | \n+-------------+--------+--------+ \n| IT          | Anil   | 60000  | \n| IT          | Raj    | 55000  | \n| HR          | Riya   | 42000  | \n| HR          | Kiran  | 40000  | \n+-------------+--------+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-49",
    "title": "Get Employee Join Month",
    "description": "Given a table 'employees' with Name and JoinDate, write a SQL query to return employee name and the month (as text) in which they joined.",
    "sampleTableInput": "+--------+------------+ \n| Name   | JoinDate   | \n+--------+------------+ \n| Anil   | 2022-01-15 | \n| Sneha  | 2022-04-12 | \n| Raj    | 2022-01-30 | \n+--------+------------+ ",
    "sampleTableOutput": "+--------+--------+ \n| Name   | Month  | \n+--------+--------+ \n| Anil   | January| \n| Sneha  | April  | \n| Raj    | January| \n+--------+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-50",
    "title": "Count Employees per Join Year",
    "description": "Given a table 'employees' with JoinDate, write a SQL query to count how many employees joined in each year.",
    "sampleTableInput": "+--------+------------+ \n| Name   | JoinDate   | \n+--------+------------+ \n| Anil   | 2023-04-10 | \n| Sneha  | 2022-11-15 | \n| Raj    | 2023-01-22 | \n+--------+------------+ ",
    "sampleTableOutput": "+------+-------+ \n| Year | Count | \n+------+-------+ \n| 2022 | 1     | \n| 2023 | 2     | \n+------+-------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-51",
    "title": "Second Highest Salary",
    "description": "Given a table 'employees' with Name and Salary, write a SQL query to find the second highest salary in the table.",
    "sampleTableInput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 40000  | \n| Sneha  | 60000  | \n| Raj    | 50000  | \n+--------+--------+ ",
    "sampleTableOutput": "+--------+ \n| Salary | \n+--------+ \n| 50000  | \n+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-52",
    "title": "Find Duplicate Emails",
    "description": "Given a table 'users' with column Email, write a SQL query to find all duplicate email addresses (appearing more than once).",
    "sampleTableInput": "+----+------------------+ \n| ID | Email            | \n+----+------------------+ \n| 1  | a@example.com    | \n| 2  | b@example.com    | \n| 3  | a@example.com    | \n+----+------------------+ ",
    "sampleTableOutput": "+------------------+ \n| Email            | \n+------------------+ \n| a@example.com    | \n+------------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-53",
    "title": "Employees with Odd ID",
    "description": "Given a table 'employees' with ID and Name, write a SQL query to return all employees with an odd ID.",
    "sampleTableInput": "+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Anil   | \n| 2  | Sneha  | \n| 3  | Raj    | \n+----+--------+ ",
    "sampleTableOutput": "+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Anil   | \n| 3  | Raj    | \n+----+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-54",
    "title": "Count Employees in Each Salary Range",
    "description": "Given a table 'employees' with Salary, write a SQL query to count how many employees fall into these ranges: <30000, 30000–50000, >50000.",
    "sampleTableInput": "+--------+--------+ \n| Name   | Salary | \n+--------+--------+ \n| Anil   | 25000  | \n| Sneha  | 40000  | \n| Raj    | 60000  | \n+--------+--------+ ",
    "sampleTableOutput": "+---------------+-------+ \n| Range         | Count | \n+---------------+-------+ \n| Below 30000   | 1     | \n| 30000-50000   | 1     | \n| Above 50000   | 1     | \n+---------------+-------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-55",
    "title": "Longest Tenured Employee",
    "description": "Given a table 'employees' with Name and JoinDate, write a SQL query to find the employee who joined earliest.",
    "sampleTableInput": "+--------+------------+ \n| Name   | JoinDate   | \n+--------+------------+ \n| Anil   | 2022-01-10 | \n| Sneha  | 2023-03-15 | \n| Raj    | 2021-12-01 | \n+--------+------------+ ",
    "sampleTableOutput": "+--------+------------+ \n| Name   | JoinDate   | \n+--------+------------+ \n| Raj    | 2021-12-01 | \n+--------+------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-56",
    "title": "Employees with Highest Salary in Department",
    "description": "Given a table 'employees' with Name, Salary, and Department, write a SQL query to find employees with the highest salary in each department.",
    "sampleTableInput": "+--------+--------+-------------+ \n| Name   | Salary | Department  | \n+--------+--------+-------------+ \n| Anil   | 60000  | IT          | \n| Sneha  | 55000  | IT          | \n| Raj    | 45000  | HR          | \n| Kiran  | 47000  | HR          | \n+--------+--------+-------------+ ",
    "sampleTableOutput": "+--------+-------------+ \n| Name   | Department  | \n+--------+-------------+ \n| Anil   | IT          | \n| Kiran  | HR          | \n+--------+-------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-57",
    "title": "Sort Employees by Department and Salary Descending",
    "description": "Given a table 'employees' with Department, Name, and Salary, write a SQL query to sort employees first by Department ascending and then by Salary descending.",
    "sampleTableInput": "+-------------+--------+--------+ \n| Department  | Name   | Salary | \n+-------------+--------+--------+ \n| IT          | Anil   | 60000  | \n| IT          | Sneha  | 55000  | \n| HR          | Kiran  | 47000  | \n| HR          | Raj    | 45000  | \n+-------------+--------+--------+ ",
    "sampleTableOutput": "+-------------+--------+--------+ \n| Department  | Name   | Salary | \n+-------------+--------+--------+ \n| HR          | Kiran  | 47000  | \n| HR          | Raj    | 45000  | \n| IT          | Anil   | 60000  | \n| IT          | Sneha  | 55000  | \n+-------------+--------+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-58",
    "title": "Employees with Names Starting with Vowel",
    "description": "Given a table 'employees' with Name column, write a SQL query to find employees whose names start with a vowel (A, E, I, O, U).",
    "sampleTableInput": "+--------+ \n| Name   | \n+--------+ \n| Anil   | \n| Sneha  | \n| Uma    | \n+--------+ ",
    "sampleTableOutput": "+--------+ \n| Name   | \n+--------+ \n| Anil   | \n| Uma    | \n+--------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-59",
    "title": "Find Missing Employee IDs",
    "description": "Given a table 'employees' with sequential Employee IDs (some missing), write a SQL query to find all missing IDs in the sequence.",
    "sampleTableInput": "+----+--------+ \n| ID | Name   | \n+----+--------+ \n| 1  | Anil   | \n| 2  | Sneha  | \n| 4  | Raj    | \n+----+--------+ ",
    "sampleTableOutput": "+----+ \n| ID | \n+----+ \n| 3  | \n+----+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-60",
    "title": "Calculate Total Experience per Employee",
    "description": "Given a table 'experiences' with EmployeeID, CompanyName, StartDate, and EndDate, write a SQL query to calculate total experience (in years) for each employee.",
    "sampleTableInput": "+------------+-------------+------------+------------+ \n| EmployeeID | CompanyName | StartDate  | EndDate    | \n+------------+-------------+------------+------------+ \n| 1          | ABC Corp    | 2018-01-01 | 2020-01-01 | \n| 1          | XYZ Ltd     | 2020-02-01 | 2023-01-01 | \n| 2          | MNO Inc     | 2019-05-01 | 2022-04-01 | \n+------------+-------------+------------+------------+ ",
    "sampleTableOutput": "+------------+------------------+ \n| EmployeeID | TotalExperience  | \n+------------+------------------+ \n| 1          | 5.0              | \n| 2          | 2.9              | \n+------------+------------------+",
    "difficulty": "Medium"
  },
  {
    "id": "sql-61",
    "title": "Find Employees with Gaps in Employment",
    "description": "You are given a table 'employment_history' with columns EmployeeID, CompanyName, StartDate, and EndDate. For each employee, identify those who had a gap of more than 30 days between two consecutive jobs. This requires using the LAG window function to find previous EndDate and compare it with current StartDate. This is a common pattern in resume/employment history analysis.",
    "sampleTableInput": "+------------+-------------+------------+------------+\n| EmployeeID | CompanyName | StartDate  | EndDate    |\n+------------+-------------+------------+------------+\n| 1          | ABC Corp    | 2018-01-01 | 2020-01-01 |\n| 1          | XYZ Ltd     | 2020-02-10 | 2023-01-01 |\n| 2          | MNO Inc     | 2019-05-01 | 2022-04-01 |\n| 2          | PQR Inc     | 2022-04-10 | 2024-01-01 |\n+------------+-------------+------------+------------+",
    "sampleTableOutput": "+------------+\n| EmployeeID |\n+------------+\n| 1          |\n+------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-62",
    "title": "Calculate Rolling 3-Month Sales Average",
    "description": "Given a table 'sales' with columns Region, SaleMonth (in YYYY-MM format), and TotalSales, calculate a rolling 3-month average sales for each Region ordered by month. Use the AVG() OVER(PARTITION BY Region ORDER BY SaleMonth ROWS BETWEEN 2 PRECEDING AND CURRENT ROW).",
    "sampleTableInput": "+--------+-----------+------------+\n| Region | SaleMonth | TotalSales |\n+--------+-----------+------------+\n| East   | 2023-01   | 1000       |\n| East   | 2023-02   | 1200       |\n| East   | 2023-03   | 900        |\n| East   | 2023-04   | 1500       |\n+--------+-----------+------------+",
    "sampleTableOutput": "+--------+-----------+--------------------+\n| Region | SaleMonth | RollingAvg3Months  |\n+--------+-----------+--------------------+\n| East   | 2023-01   | 1000.00            |\n| East   | 2023-02   | 1100.00            |\n| East   | 2023-03   | 1033.33            |\n| East   | 2023-04   | 1200.00            |\n+--------+-----------+--------------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-63",
    "title": "Find Customers with Increasing Monthly Orders",
    "description": "Given a table 'orders' with columns CustomerID, OrderMonth (YYYY-MM), and OrderCount, find customers whose order count has increased every month for 3 consecutive months. This requires LEAD and LAG window functions to compare values across rows.",
    "sampleTableInput": "+-------------+------------+-------------+\n| CustomerID  | OrderMonth | OrderCount  |\n+-------------+------------+-------------+\n| 1           | 2023-01    | 2           |\n| 1           | 2023-02    | 4           |\n| 1           | 2023-03    | 5           |\n| 2           | 2023-01    | 3           |\n| 2           | 2023-02    | 2           |\n| 2           | 2023-03    | 4           |\n+-------------+------------+-------------+",
    "sampleTableOutput": "+-------------+\n| CustomerID  |\n+-------------+\n| 1           |\n+-------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-64",
    "title": "Find First Purchase After Signup",
    "description": "You are given two tables: 'users' (UserID, SignupDate) and 'purchases' (UserID, PurchaseDate). Find the first purchase date for each user after their signup date. This requires filtering purchases that happen after the signup and finding the MIN(PurchaseDate).",
    "sampleTableInput": "**users**\n+--------+------------+\n| UserID | SignupDate |\n+--------+------------+\n| 1      | 2023-01-01 |\n| 2      | 2023-02-01 |\n+--------+------------+\n\n**purchases**\n+--------+--------------+\n| UserID | PurchaseDate |\n+--------+--------------+\n| 1      | 2023-01-15   |\n| 1      | 2023-03-01   |\n| 2      | 2023-01-25   |\n| 2      | 2023-02-10   |\n+--------+--------------+",
    "sampleTableOutput": "+--------+--------------+\n| UserID | FirstPurchase |\n+--------+--------------+\n| 1      | 2023-01-15    |\n| 2      | 2023-02-10    |\n+--------+--------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-65",
    "title": "Find Employees Who Never Had a Manager",
    "description": "You are given an 'employees' table with columns ID, Name, and ManagerID. Identify employees who were never listed as a ManagerID for anyone else. This involves a LEFT JOIN of employees against distinct ManagerIDs and filtering for NULLs. It's a classic anti-join pattern.",
    "sampleTableInput": "+----+--------+-----------+\n| ID | Name   | ManagerID |\n+----+--------+-----------+\n| 1  | Alice  | NULL      |\n| 2  | Bob    | 1         |\n| 3  | Carol  | 1         |\n| 4  | Dave   | 2         |\n+----+--------+-----------+",
    "sampleTableOutput": "+--------+\n| Name   |\n+--------+\n| Dave   |\n+--------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-66",
    "title": "Find Top 2 Earners in Each Department",
    "description": "You have a table 'employees' with columns ID, Name, Salary, and Department. Write a SQL query to return the top 2 earners from each department. This requires use of the RANK() or DENSE_RANK() window function partitioned by Department and ordered by Salary DESC.",
    "sampleTableInput": "+----+--------+--------+------------+\n| ID | Name   | Salary | Department |\n+----+--------+--------+------------+\n| 1  | Alice  | 90000  | IT         |\n| 2  | Bob    | 85000  | IT         |\n| 3  | Carol  | 95000  | HR         |\n| 4  | Dave   | 87000  | IT         |\n| 5  | Eve    | 88000  | HR         |\n+----+--------+--------+------------+",
    "sampleTableOutput": "+--------+------------+\n| Name   | Department |\n+--------+------------+\n| Alice  | IT         |\n| Bob    | IT         |\n| Carol  | HR         |\n| Eve    | HR         |\n+--------+------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-67",
    "title": "Identify Consecutive Login Streaks",
    "description": "Given a table 'logins' with UserID and LoginDate, write a query to find the longest streak of consecutive login days for each user. You must use window functions like ROW_NUMBER() and group by a calculated difference between dates and row numbers.",
    "sampleTableInput": "+--------+------------+\n| UserID | LoginDate  |\n+--------+------------+\n| 1      | 2024-01-01 |\n| 1      | 2024-01-02 |\n| 1      | 2024-01-04 |\n| 1      | 2024-01-05 |\n| 2      | 2024-02-10 |\n| 2      | 2024-02-11 |\n+--------+------------+",
    "sampleTableOutput": "+--------+-------+\n| UserID | Streak|\n+--------+-------+\n| 1      | 2     |\n| 2      | 2     |\n+--------+-------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-68",
    "title": "Find Customers with Monthly Increase in Orders",
    "description": "You are given a table 'orders' with CustomerID, OrderDate, and OrderID. Write a SQL query to find customers whose number of orders increased every month over 3 consecutive months. Use DATE_TRUNC, GROUP BY, and window functions to solve this.",
    "sampleTableInput": "+-------------+------------+---------+\n| CustomerID  | OrderDate  | OrderID |\n+-------------+------------+---------+\n| 1           | 2024-01-10 | 101     |\n| 1           | 2024-02-15 | 102     |\n| 1           | 2024-02-20 | 103     |\n| 1           | 2024-03-05 | 104     |\n| 2           | 2024-01-11 | 105     |\n| 2           | 2024-02-10 | 106     |\n| 2           | 2024-02-20 | 107     |\n+-------------+------------+---------+",
    "sampleTableOutput": "+-------------+\n| CustomerID  |\n+-------------+\n| 1           |\n+-------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-69",
    "title": "Find Employees Who Got Consecutive Promotions",
    "description": "Given a table 'promotions' with EmployeeID, PromotionDate, and NewTitle, identify employees who were promoted more than once within a 6-month period. Use LEAD/LAG functions and date difference logic to solve this.",
    "sampleTableInput": "+------------+---------------+------------+\n| EmployeeID | NewTitle      | PromotionDate |\n+------------+---------------+---------------+\n| 1          | Senior Dev    | 2021-01-01     |\n| 1          | Lead Engineer | 2021-05-15     |\n| 2          | Manager       | 2020-03-01     |\n| 2          | Director      | 2021-04-01     |\n+------------+---------------+---------------+",
    "sampleTableOutput": "+------------+\n| EmployeeID |\n+------------+\n| 1          |\n+------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-70",
    "title": "Calculate Rolling Average Order Value per User",
    "description": "You are given a table 'orders' with UserID, OrderDate, and Amount. Calculate the rolling 3-order average amount for each user, ordered by OrderDate. This involves window functions with ROWS BETWEEN.",
    "sampleTableInput": "+--------+------------+--------+\n| UserID | OrderDate  | Amount |\n+--------+------------+--------+\n| 1      | 2024-01-01 | 100    |\n| 1      | 2024-01-10 | 150    |\n| 1      | 2024-01-15 | 200    |\n| 1      | 2024-01-20 | 300    |\n| 2      | 2024-02-01 | 120    |\n| 2      | 2024-02-10 | 130    |\n+--------+------------+--------+",
    "sampleTableOutput": "+--------+------------+---------------------+\n| UserID | OrderDate  | RollingAvg3Orders   |\n+--------+------------+---------------------+\n| 1      | 2024-01-01 | 100.00              |\n| 1      | 2024-01-10 | 125.00              |\n| 1      | 2024-01-15 | 150.00              |\n| 1      | 2024-01-20 | 216.67              |\n| 2      | 2024-02-01 | 120.00              |\n| 2      | 2024-02-10 | 125.00              |\n+--------+------------+---------------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-71",
    "title": "Calculate Rolling Average Sales",
    "description": "Given a 'sales' table with columns Date, ProductID, and Revenue, calculate a 3-day rolling average revenue for each product. Use the ROWS BETWEEN window frame with PARTITION BY and ORDER BY. This is common in trend analysis and reporting.",
    "sampleTableInput": "+------------+-----------+---------+\n| Date       | ProductID | Revenue |\n+------------+-----------+---------+\n| 2023-01-01 | 1         | 100     |\n| 2023-01-02 | 1         | 200     |\n| 2023-01-03 | 1         | 300     |\n| 2023-01-01 | 2         | 50      |\n| 2023-01-02 | 2         | 100     |\n+------------+-----------+---------+",
    "sampleTableOutput": "+------------+-----------+------------------+\n| Date       | ProductID | RollingAvg       |\n+------------+-----------+------------------+\n| 2023-01-01 | 1         | 100.00           |\n| 2023-01-02 | 1         | 150.00           |\n| 2023-01-03 | 1         | 200.00           |\n| 2023-01-01 | 2         | 50.00            |\n| 2023-01-02 | 2         | 75.00            |\n+------------+-----------+------------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-72",
    "title": "Find Consecutive Login Streaks",
    "description": "Given a 'logins' table with UserID and LoginDate, identify the longest consecutive login streak per user. This problem involves using DENSE_RANK or ROW_NUMBER combined with date arithmetic and grouping by (LoginDate - ROW_NUMBER).",
    "sampleTableInput": "+--------+------------+\n| UserID | LoginDate  |\n+--------+------------+\n| 1      | 2023-01-01 |\n| 1      | 2023-01-02 |\n| 1      | 2023-01-04 |\n| 2      | 2023-01-01 |\n| 2      | 2023-01-02 |\n+--------+------------+",
    "sampleTableOutput": "+--------+--------+\n| UserID | MaxStreak |\n+--------+--------+\n| 1      | 2        |\n| 2      | 2        |\n+--------+--------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-73",
    "title": "Find Customers With No Orders in Last 6 Months",
    "description": "Given tables 'customers' and 'orders', return customers who haven't placed any orders in the last 6 months. This requires a LEFT JOIN with date filtering on the 'orders' table and NULL check.",
    "sampleTableInput": "+------------+------------+\n| CustomerID | OrderDate  |\n+------------+------------+\n| 1          | 2023-01-01 |\n| 2          | 2023-05-01 |\n| 3          | 2022-10-01 |\n+------------+------------+",
    "sampleTableOutput": "+------------+\n| CustomerID |\n+------------+\n| 3          |\n+------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-74",
    "title": "Find Employee Salary Rank Within Department",
    "description": "Given an 'employees' table with DepartmentID and Salary, return each employee along with their rank based on salary within the department. Use RANK or DENSE_RANK partitioned by DepartmentID.",
    "sampleTableInput": "+------------+-------------+--------+\n| EmpID      | DepartmentID| Salary |\n+------------+-------------+--------+\n| 1          | 10          | 5000   |\n| 2          | 10          | 7000   |\n| 3          | 20          | 6000   |\n| 4          | 20          | 6000   |\n+------------+-------------+--------+",
    "sampleTableOutput": "+------------+-------------+--------+------+\n| EmpID      | DepartmentID| Salary | Rank |\n+------------+-------------+--------+------+\n| 2          | 10          | 7000   | 1    |\n| 1          | 10          | 5000   | 2    |\n| 3          | 20          | 6000   | 1    |\n| 4          | 20          | 6000   | 1    |\n+------------+-------------+--------+------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-75",
    "title": "Detect Duplicate Transactions Within 1 Minute",
    "description": "Given a 'transactions' table with UserID, Amount, and Timestamp, find transactions made by the same user for the same amount within 1 minute of each other. Use LAG or LEAD to compare current and previous records.",
    "sampleTableInput": "+--------+--------+---------------------+\n| UserID | Amount | Timestamp           |\n+--------+--------+---------------------+\n| 1      | 100    | 2023-01-01 10:00:00 |\n| 1      | 100    | 2023-01-01 10:00:45 |\n| 2      | 200    | 2023-01-01 11:00:00 |\n| 2      | 200    | 2023-01-01 11:02:00 |\n+--------+--------+---------------------+",
    "sampleTableOutput": "+--------+--------+---------------------+\n| UserID | Amount | Timestamp           |\n+--------+--------+---------------------+\n| 1      | 100    | 2023-01-01 10:00:45 |\n+--------+--------+---------------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-76",
    "title": "Top N Products by Monthly Sales",
    "description": "Given a 'sales' table with ProductID, SaleDate, and Amount, find top 2 selling products per month by revenue. Use ROW_NUMBER or RANK partitioned by month.",
    "sampleTableInput": "+-----------+------------+--------+\n| ProductID | SaleDate   | Amount |\n+-----------+------------+--------+\n| 1         | 2023-01-01 | 300    |\n| 2         | 2023-01-02 | 400    |\n| 3         | 2023-01-03 | 200    |\n| 1         | 2023-02-01 | 500    |\n| 2         | 2023-02-02 | 100    |\n+-----------+------------+--------+",
    "sampleTableOutput": "+-----------+------------+--------+\n| ProductID | SaleDate   | Amount |\n+-----------+------------+--------+\n| 2         | 2023-01-02 | 400    |\n| 1         | 2023-01-01 | 300    |\n| 1         | 2023-02-01 | 500    |\n| 2         | 2023-02-02 | 100    |\n+-----------+------------+--------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-77",
    "title": "Customer Retention by Month",
    "description": "Given a table 'orders' with CustomerID and OrderDate, find for each month how many customers are new (first-time orders) vs returning. Use MIN(OrderDate) in CTE and join.",
    "sampleTableInput": "+------------+------------+\n| CustomerID | OrderDate  |\n+------------+------------+\n| 1          | 2023-01-01 |\n| 2          | 2023-01-15 |\n| 1          | 2023-02-10 |\n| 3          | 2023-02-15 |\n+------------+------------+",
    "sampleTableOutput": "+----------+----------+------------+\n| Month    | NewUsers | Returning  |\n+----------+----------+------------+\n| 2023-01  | 2        | 0          |\n| 2023-02  | 1        | 1          |\n+----------+----------+------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-78",
    "title": "Find Products Never Sold",
    "description": "Given 'products' and 'sales' tables, list all products that have never been sold. This involves anti-join (LEFT JOIN + IS NULL).",
    "sampleTableInput": "+-----------+-------------+\n| ProductID | ProductName |\n+-----------+-------------+\n| 1         | Pen         |\n| 2         | Pencil      |\n| 3         | Eraser      |\n+-----------+-------------+\n\n+-----------+------------+\n| ProductID | SaleDate   |\n+-----------+------------+\n| 1         | 2023-01-01 |\n+-----------+------------+",
    "sampleTableOutput": "+-----------+-------------+\n| ProductID | ProductName |\n+-----------+-------------+\n| 2         | Pencil      |\n| 3         | Eraser      |\n+-----------+-------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-79",
    "title": "Average Time Between Orders per Customer",
    "description": "Given a table 'orders' with CustomerID and OrderDate, calculate the average time (in days) between orders for each customer. Use LAG to get previous order and AVG DATEDIFF.",
    "sampleTableInput": "+------------+------------+\n| CustomerID | OrderDate  |\n+------------+------------+\n| 1          | 2023-01-01 |\n| 1          | 2023-01-05 |\n| 1          | 2023-01-10 |\n| 2          | 2023-01-01 |\n+------------+------------+",
    "sampleTableOutput": "+------------+----------------+\n| CustomerID | AvgGapInDays   |\n+------------+----------------+\n| 1          | 4.5            |\n| 2          | NULL           |\n+------------+----------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-80",
    "title": "Identify Leaders Who Manage the Most Projects",
    "description": "Given a 'projects' table with ProjectID and LeaderID, return the leaders who manage the most number of projects. Use GROUP BY with MAX and HAVING.",
    "sampleTableInput": "+-----------+----------+\n| ProjectID | LeaderID |\n+-----------+----------+\n| 1         | 101      |\n| 2         | 102      |\n| 3         | 101      |\n| 4         | 103      |\n| 5         | 101      |\n+-----------+----------+",
    "sampleTableOutput": "+----------+\n| LeaderID |\n+----------+\n| 101      |\n+----------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-81",
    "title": "Top N Orders per Customer",
    "description": "Given 'orders' with OrderID, CustomerID, OrderDate, and Amount, return top 2 highest orders (by Amount) for each customer. Use ROW_NUMBER() or RANK() window function partitioned by CustomerID.",
    "sampleTableInput": "+----------+------------+------------+--------+\n| OrderID  | CustomerID | OrderDate  | Amount |\n+----------+------------+------------+--------+\n| 1        | 101        | 2023-01-10 | 500    |\n| 2        | 101        | 2023-01-15 | 800    |\n| 3        | 101        | 2023-02-01 | 300    |\n| 4        | 102        | 2023-01-11 | 200    |\n| 5        | 102        | 2023-01-20 | 400    |\n+----------+------------+------------+--------+",
    "sampleTableOutput": "+----------+------------+--------+\n| OrderID  | CustomerID | Amount |\n+----------+------------+--------+\n| 2        | 101        | 800    |\n| 1        | 101        | 500    |\n| 5        | 102        | 400    |\n| 4        | 102        | 200    |\n+----------+------------+--------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-82",
    "title": "Find Users With Consecutive Failed Logins",
    "description": "From 'logins' with columns UserID, LoginDate, and Status (Success/Fail), find users who had 3 consecutive failed logins. Use window functions with LEAD/LAG or COUNT with GROUPS.",
    "sampleTableInput": "+--------+------------+--------+\n| UserID | LoginDate  | Status |\n+--------+------------+--------+\n| 1      | 2023-01-01 | Fail   |\n| 1      | 2023-01-02 | Fail   |\n| 1      | 2023-01-03 | Fail   |\n| 2      | 2023-01-01 | Success|\n| 2      | 2023-01-02 | Fail   |\n| 2      | 2023-01-03 | Fail   |\n+--------+------------+--------+",
    "sampleTableOutput": "+--------+\n| UserID |\n+--------+\n| 1      |\n+--------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-83",
    "title": "Monthly Revenue Change by Product",
    "description": "From 'sales' table with ProductID, SaleDate, and Revenue, compute month-on-month change in revenue for each product. Use DATE_TRUNC and LAG().",
    "sampleTableInput": "+-----------+------------+---------+\n| ProductID | SaleDate   | Revenue |\n+-----------+------------+---------+\n| 1         | 2023-01-01 | 100     |\n| 1         | 2023-02-01 | 150     |\n| 1         | 2023-03-01 | 120     |\n| 2         | 2023-01-01 | 200     |\n| 2         | 2023-02-01 | 300     |\n+-----------+------------+---------+",
    "sampleTableOutput": "+-----------+----------+-----------------+\n| ProductID | Month    | RevenueChange   |\n+-----------+----------+-----------------+\n| 1         | 2023-02  | 50              |\n| 1         | 2023-03  | -30             |\n| 2         | 2023-02  | 100             |\n+-----------+----------+-----------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-84",
    "title": "Customers Without Orders in Last 6 Months",
    "description": "From 'customers' and 'orders' tables, find customers who placed no orders in the last 6 months from a given date. Use LEFT JOIN and filter with DATE_DIFF.",
    "sampleTableInput": "+-------------+-------------+\n| CustomerID  | Name        |\n+-------------+-------------+\n| 1           | Alice       |\n| 2           | Bob         |\n| 3           | Charlie     |\n+-------------+-------------+\n\n+----------+-------------+------------+\n| OrderID  | CustomerID  | OrderDate  |\n+----------+-------------+------------+\n| 101      | 1           | 2023-01-01 |\n| 102      | 2           | 2023-06-01 |\n+----------+-------------+------------+",
    "sampleTableOutput": "+-------------+--------+\n| CustomerID  | Name   |\n+-------------+--------+\n| 3           | Charlie|\n+-------------+--------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-85",
    "title": "First and Last Transaction of Each Customer",
    "description": "From a 'transactions' table with columns UserID, TransDate, and Amount, retrieve each user's first and last transaction. Use ROW_NUMBER() and UNION or CTE with MIN/MAX.",
    "sampleTableInput": "+--------+------------+--------+\n| UserID | TransDate  | Amount |\n+--------+------------+--------+\n| 1      | 2023-01-01 | 100    |\n| 1      | 2023-02-01 | 200    |\n| 2      | 2023-01-05 | 300    |\n| 2      | 2023-01-10 | 400    |\n+--------+------------+--------+",
    "sampleTableOutput": "+--------+------------+--------+\n| UserID | TransDate  | Amount |\n+--------+------------+--------+\n| 1      | 2023-01-01 | 100    |\n| 1      | 2023-02-01 | 200    |\n| 2      | 2023-01-05 | 300    |\n| 2      | 2023-01-10 | 400    |\n+--------+------------+--------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-86",
    "title": "Detect Salary Increments",
    "description": "Given an 'employees' table with EmpID, Salary, and EffectiveDate, identify when an employee’s salary increased compared to their previous value. Use LAG and CASE WHEN.",
    "sampleTableInput": "+--------+--------+---------------+\n| EmpID  | Salary | EffectiveDate |\n+--------+--------+---------------+\n| 1      | 50000  | 2023-01-01    |\n| 1      | 60000  | 2023-06-01    |\n| 2      | 45000  | 2023-02-01    |\n| 2      | 45000  | 2023-07-01    |\n+--------+--------+---------------+",
    "sampleTableOutput": "+--------+---------------+\n| EmpID  | EffectiveDate |\n+--------+---------------+\n| 1      | 2023-06-01    |\n+--------+---------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-87",
    "title": "Find Average Session Duration per User",
    "description": "Given a 'sessions' table with UserID, SessionStart, SessionEnd, calculate average session duration (in minutes) for each user. Use TIMESTAMPDIFF or TIME functions.",
    "sampleTableInput": "+--------+---------------------+---------------------+\n| UserID | SessionStart        | SessionEnd          |\n+--------+---------------------+---------------------+\n| 1      | 2023-08-01 09:00:00 | 2023-08-01 10:00:00 |\n| 1      | 2023-08-02 09:30:00 | 2023-08-02 10:15:00 |\n| 2      | 2023-08-01 11:00:00 | 2023-08-01 11:30:00 |\n+--------+---------------------+---------------------+",
    "sampleTableOutput": "+--------+----------------------+\n| UserID | AvgSessionDuration   |\n+--------+----------------------+\n| 1      | 52.5                 |\n| 2      | 30.0                 |\n+--------+----------------------+\n",
    "difficulty": "Hard"
  },
  {
    "id": "sql-88",
    "title": "Find Managers with Highest Avg Team Salary",
    "description": "You have 'employees' with EmpID, Name, ManagerID, and Salary. Find the manager(s) whose direct reports have the highest average salary. Use self-join and aggregation.",
    "sampleTableInput": "+--------+--------+-----------+--------+\n| EmpID  | Name   | ManagerID | Salary |\n+--------+--------+-----------+--------+\n| 1      | Alice  | NULL      | 150000 |\n| 2      | Bob    | 1         | 90000  |\n| 3      | Carol  | 1         | 95000  |\n| 4      | Dave   | 2         | 60000  |\n+--------+--------+-----------+--------+",
    "sampleTableOutput": "+-----------+--------+\n| ManagerID | AvgSalary |\n+-----------+--------+\n| 1         | 92500    |\n+-----------+--------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-89",
    "title": "Find Products Never Sold",
    "description": "Given a 'products' table and a 'sales' table, return products that were never sold. Use LEFT JOIN or NOT EXISTS.",
    "sampleTableInput": "+-----------+-------------+\n| ProductID | ProductName |\n+-----------+-------------+\n| 1         | Keyboard    |\n| 2         | Mouse       |\n| 3         | Monitor     |\n+-----------+-------------+\n\n+----------+-----------+\n| SaleID   | ProductID |\n+----------+-----------+\n| 1        | 1         |\n| 2        | 2         |\n+----------+-----------+",
    "sampleTableOutput": "+-----------+-------------+\n| ProductID | ProductName |\n+-----------+-------------+\n| 3         | Monitor     |\n+-----------+-------------+",
    "difficulty": "Hard"
  },
  {
    "id": "sql-90",
    "title": "Rank Departments by Total Salary Budget",
    "description": "Given 'employees' with DeptID and Salary, return departments ranked by total salary budget. Use SUM() and RANK().",
    "sampleTableInput": "+--------+--------+--------+\n| EmpID  | DeptID | Salary |\n+--------+--------+--------+\n| 1      | 10     | 50000  |\n| 2      | 10     | 60000  |\n| 3      | 20     | 70000  |\n| 4      | 30     | 80000  |\n+--------+--------+--------+",
    "sampleTableOutput": "+--------+-------------+------+\n| DeptID | TotalSalary | Rank |\n+--------+-------------+------+\n| 30     | 80000       | 1    |\n| 20     | 70000       | 2    |\n| 10     | 110000      | 3    |\n+--------+-------------+------+",
    "difficulty": "Hard"
  }
  ],

  'bigdata-hadoop': [
    {
      id: 'hdp-1',
      title: 'List Files in Directory',
      description: 'You are given a directory path `/user/cloudera` in HDFS. Your task is to list all the files and directories present in this path along with their details such as permissions, owner, group, size, and last modified timestamp.',
      sampleInput: '',
      sampleOutput: 'List of all files and directories in /user/cloudera with their details.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-2',
      title: 'Recursive List of Files',
      description: 'Consider that the directory `/user/cloudera` contains multiple nested folders and files. You are asked to list all files and directories under this path, including the contents of all its subdirectories recursively.',
      sampleInput: '',
      sampleOutput: 'Recursive list of all files and directories under /user/cloudera.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-3',
      title: 'Create Directory',
      description: 'You are required to create a new directory named `/user/cloudera` in HDFS. Assume that the parent path already exists and you just need to create this single directory.',
      sampleInput: '',
      sampleOutput: 'A new directory /user/cloudera is created in HDFS.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-4',
      title: 'Recursive Folder Creation',
      description: 'You are asked to create nested folders under `/user/cloudera` such that the final structure should be `/user/cloudera/folder1/folder2/folder3`. Even if the intermediate directories do not exist, they should be created automatically.',
      sampleInput: '',
      sampleOutput: 'All nested folders /user/cloudera/folder1/folder2/folder3 are created successfully.',
      difficulty: 'Medium',
    },
    {
      id: 'hdp-5',
      title: 'Remove Empty Directory',
      description: 'In the HDFS path `/user/cloudera`, there is an empty directory that needs to be removed. Ensure that the directory is empty before performing the delete operation.',
      sampleInput: '',
      sampleOutput: 'The empty directory /user/cloudera is removed.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-6',
      title: 'Remove Directory Recursively',
      description: 'The path `/user/cloudera` contains files and subdirectories. You are required to delete this directory and all its contents recursively.',
      sampleInput: '',
      sampleOutput: 'The directory /user/cloudera and all its contents are deleted.',
      difficulty: 'Medium',
    },
    {
      id: 'hdp-7',
      title: 'View File Content',
      description: 'You are given a file stored in HDFS at `/user/cloudera/file.txt`. Your task is to display the entire contents of this file.',
      sampleInput: '',
      sampleOutput: 'Contents of the file file.txt are displayed on the screen.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-8',
      title: 'Create Empty File',
      description: 'You are required to create an empty file in HDFS at the location `/user/cloudera/empty.txt`. The file should be created with zero bytes.',
      sampleInput: '',
      sampleOutput: 'An empty file named empty.txt is created in /user/cloudera.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-9',
      title: 'Upload File to HDFS',
      description: 'You have a file stored locally on your computer (for example `local.txt`). Your task is to upload this file into HDFS under the path `/user/cloudera/`.',
      sampleInput: 'local.txt',
      sampleOutput: 'The file local.txt is successfully uploaded to /user/cloudera/.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-10',
      title: 'Append Data to File',
      description: 'You have a local file containing additional data that needs to be appended to an existing file in HDFS located at `/user/cloudera/existing.txt`. Your task is to append the contents of the local file to the HDFS file.',
      sampleInput: 'local_append.txt',
      sampleOutput: 'Contents of local_append.txt are appended to /user/cloudera/existing.txt.',
      difficulty: 'Medium',
    },
    {
      id: 'hdp-11',
      title: 'Copy File within HDFS',
      description: 'You are required to copy a file from one location in HDFS to another. For example, copy the file `/user/cloudera/file1.txt` to `/user/cloudera/copy.txt`.',
      sampleInput: '',
      sampleOutput: 'A new file copy.txt is created in /user/cloudera with the same contents as file1.txt.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-12',
      title: 'Move File within HDFS',
      description: 'You are asked to move a file from one location in HDFS to another. For example, move `/user/cloudera/file1.txt` to `/user/cloudera/moved.txt`.',
      sampleInput: '',
      sampleOutput: 'The file file1.txt is moved to the new location /user/cloudera/moved.txt.',
      difficulty: 'Easy',
    },
    {
      id: 'hdp-13',
      title: 'Check Disk Usage',
      description: 'You are tasked with checking the size of files and directories present in HDFS under the path `/user/cloudera`. The output should display the disk space consumed by each file and directory.',
      sampleInput: '',
      sampleOutput: 'Disk usage report showing the size of files and directories in /user/cloudera.',
      difficulty: 'Medium',
    },
    {
      id: 'hdp-14',
      title: 'Check Filesystem Capacity',
      description: 'You are required to check the total, used, and available space of the HDFS filesystem. The command should display details about the capacity of the cluster at a given path `/user/cloudera`.',
      sampleInput: '',
      sampleOutput: 'Filesystem capacity report showing total, used, and available space.',
      difficulty: 'Medium',
    },
    {
      id: 'hdp-15',
      title: 'View File as Text',
      description: 'A file in HDFS may be compressed or encoded. You are asked to display the contents of such a file in human-readable text format. Example path: `/user/cloudera/file.gz`.',
      sampleInput: '',
      sampleOutput: 'Decompressed file contents are displayed in plain text.',
      difficulty: 'Medium',
    },
    {
      id: 'hdp-16',
      title: 'Check File Block Size',
      description: 'You are given a file in HDFS located at `/user/cloudera/file.txt`. Your task is to retrieve the block size of this file.',
      sampleInput: '',
      sampleOutput: 'Block size of file.txt in bytes.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-17',
      title: 'Check File Replication Factor',
      description: 'In HDFS, each file can have multiple replicas. You are required to check the replication factor of a given file located at `/user/cloudera/file.txt`.',
      sampleInput: '',
      sampleOutput: 'Replication factor of the file file.txt.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-18',
      title: 'Set File Replication Factor',
      description: 'You are tasked with changing the replication factor of a file in HDFS. For example, update the file `/user/cloudera/file.txt` to have 3 replicas across the cluster.',
      sampleInput: 'Replication factor: 3',
      sampleOutput: 'The replication factor of /user/cloudera/file.txt is successfully updated to 3.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-19',
      title: 'Project Folder Setup with File Creation',
      description: 'You are asked to set up a project workspace in HDFS. First, create a directory structure `/user/cloudera/project/data`. Inside this folder, create an empty file named `input.txt`. After creating the file, upload a local file containing initial data into this HDFS file so that it contains meaningful text.',
      sampleInput: 'Local file: input_local.txt',
      sampleOutput: 'Folder /user/cloudera/project/data created, input.txt file created, and data from input_local.txt uploaded into input.txt.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-20',
      title: 'Nested Directory with Multiple Files',
      description: 'You are required to create a folder structure `/user/cloudera/reports/2025/january`. Inside this folder, create two files: `sales.txt` and `inventory.txt`. Upload local files containing sales and inventory data into these respective HDFS files. Once uploaded, list the directory contents recursively to ensure all files are present.',
      sampleInput: 'Local files: sales_local.txt, inventory_local.txt',
      sampleOutput: 'Nested directories created, sales.txt and inventory.txt uploaded, and recursive listing shows both files under january folder.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-21',
      title: 'Append and Verify File Content',
      description: 'A file `log.txt` already exists in HDFS under `/user/cloudera/logs/`. First, append new log entries from a local file `new_logs.txt` into this HDFS file. After appending, display the contents of `log.txt` to verify that the new data is correctly added at the end.',
      sampleInput: 'Local file: new_logs.txt',
      sampleOutput: 'Contents of new_logs.txt are appended to log.txt, and displaying log.txt shows both old and new logs.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-22',
      title: 'Copy and Move Data Files',
      description: 'You are given a dataset file `customers.txt` stored in `/user/cloudera/raw/`. First, make a copy of this file under `/user/cloudera/backup/`. Next, move the original file from `/user/cloudera/raw/` to `/user/cloudera/processed/`. Finally, verify that the file exists in both backup and processed directories but not in raw.',
      sampleInput: '',
      sampleOutput: 'customers.txt copied to backup and moved to processed folder. Raw folder no longer contains the file.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-23',
      title: 'Check and Update Replication Factor',
      description: 'A file `transactions.txt` is stored in HDFS under `/user/cloudera/data/`. First, check the current replication factor of this file. Then, update its replication factor to 3. Finally, verify again to ensure the replication factor is updated.',
      sampleInput: 'Replication factor: 3',
      sampleOutput: 'transactions.txt replication factor updated from old value to 3 successfully.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-24',
      title: 'Create Dataset and Analyze Space Usage',
      description: 'Create a new directory `/user/cloudera/analytics/`. Inside it, upload two local files: `dataset1.csv` and `dataset2.csv`. After uploading, check the disk usage of these files and also check the overall HDFS capacity available at this location.',
      sampleInput: 'Local files: dataset1.csv, dataset2.csv',
      sampleOutput: 'analytics folder created, dataset files uploaded, disk usage and filesystem capacity reports displayed.',
      difficulty: 'Hard',
    },
    {
      id: 'hdp-25',
      title: 'End-to-End Data Pipeline Simulation',
      description: 'Simulate a small data pipeline in HDFS. Create a folder `/user/cloudera/pipeline/input/`. Upload a local file `data.txt` into this folder. Next, create a new file `processed.txt` inside `/user/cloudera/pipeline/output/`. Append the contents of `data.txt` into `processed.txt`. Finally, display the contents of `processed.txt` to verify that the pipeline has executed successfully.',
      sampleInput: 'Local file: data.txt',
      sampleOutput: 'Pipeline folders created, data.txt uploaded to input, processed.txt created in output with data contents, and verified by displaying processed.txt.',
      difficulty: 'Hard',
    },
  ],

  'bigdata-sqoop': [
    {
      id: 'sqoop-1',
      title: 'Import Data using Sqoop',
      description: 'Command to import MySQL data to HDFS using Sqoop.',
      sampleInput: '',
      sampleOutput: 'Imported files',
      difficulty: 'Easy',
    },
  ],

  'bigdata-hive': [
    {
      id: 'hive-1',
      title: 'Create Hive Table',
      description: 'Create a managed table in Hive.',
      sampleInput: '',
      sampleOutput: 'Hive table created',
      difficulty: 'Easy',
    },
  ],

  'pyspark-basic': [
    {
      "id": "psb-1",
      "title": "Create DataFrame from List",
      "description": "You're starting to learn PySpark and want to practice how to create a DataFrame from Python native data types. Given a list of tuples containing employee names and ages, use PySpark to create a DataFrame with columns 'name' and 'age'. This helps you understand how to initialize a DataFrame manually without loading from an external file.",
      "sampleInput": "Input: [('Alice', 25), ('Bob', 30), ('Cathy', 28)]\nSchema: ['name', 'age']",
      "sampleOutput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n| Cathy |  28 |\n+-------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-2",
      "title": "Select Specific Columns",
      "description": "You are given an employee DataFrame with multiple fields, but for reporting purposes, you need to extract only specific columns. Your task is to use PySpark to select only the 'name' and 'department' columns from the DataFrame. This problem helps in learning how to extract and view selective data.",
      "sampleInput": "+-------+-----+------------+\n| name  | age | department |\n+-------+-----+------------+\n| Alice |  25 |    HR      |\n| Bob   |  30 |    IT      |\n+-------+-----+------------+",
      "sampleOutput": "+-------+------------+\n| name  | department |\n+-------+------------+\n| Alice |    HR      |\n| Bob   |    IT      |\n+-------+------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-3",
      "title": "Filter Rows by Condition",
      "description": "You want to perform basic filtering operations in PySpark. Given a DataFrame of employees and their ages, return only those records where the employee’s age is greater than 28. This is useful in filtering large datasets based on conditions using `filter()` or `where()` methods.",
      "sampleInput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n| John  |  29 |\n+-------+-----+",
      "sampleOutput": "+------+-----+\n| name | age |\n+------+-----+\n| Bob  |  30 |\n| John |  29 |\n+------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-4",
      "title": "Add Constant Column Using withColumn",
      "description": "In many real-world data processing tasks, you often need to add new columns with constant or derived values. In this task, you're asked to add a new column named 'country' with the constant value 'India' for all rows. You'll use `withColumn()` along with `lit()` for this purpose.",
      "sampleInput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n+-------+-----+",
      "sampleOutput": "+-------+-----+---------+\n| name  | age | country |\n+-------+-----+---------+\n| Alice |  25 |  India  |\n| Bob   |  30 |  India  |\n+-------+-----+---------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-5",
      "title": "Convert Names to Uppercase",
      "description": "Standardizing text fields like names is common in data cleaning. In this task, you're given a DataFrame of employee names, and your job is to convert the 'name' column to uppercase using built-in PySpark string functions. This improves consistency in textual data across systems.",
      "sampleInput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n+-------+-----+",
      "sampleOutput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| ALICE |  25 |\n| BOB   |  30 |\n+-------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-6",
      "title": "Rename Column in DataFrame",
      "description": "Renaming columns is common when cleaning or standardizing data. In this task, you have a DataFrame with a column 'emp_name', and you are asked to rename it to 'employee_name'. Use PySpark’s `withColumnRenamed()` function to perform this change.",
      "sampleInput": "+----------+-----+\n| emp_name | age |\n+----------+-----+\n| Alice    |  25 |\n| Bob      |  30 |\n+----------+-----+",
      "sampleOutput": "+--------------+-----+\n| employee_name| age |\n+--------------+-----+\n| Alice        |  25 |\n| Bob          |  30 |\n+--------------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-7",
      "title": "Drop Column from DataFrame",
      "description": "Sometimes, unnecessary columns need to be removed for processing or reporting. You’re given a DataFrame with 'name', 'age', and 'temp_col', and you are asked to drop the 'temp_col'. Use the `drop()` method for this task.",
      "sampleInput": "+-------+-----+----------+\n| name  | age | temp_col |\n+-------+-----+----------+\n| Alice |  25 |   val1   |\n| Bob   |  30 |   val2   |\n+-------+-----+----------+",
      "sampleOutput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n+-------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-8",
      "title": "Sort DataFrame by Column",
      "description": "Sorting is a fundamental operation for reporting or ranking. Given a DataFrame with employee names and ages, sort the DataFrame by the 'age' column in ascending order using PySpark’s `orderBy()` method.",
      "sampleInput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n| Cathy |  28 |\n+-------+-----+",
      "sampleOutput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Cathy |  28 |\n| Bob   |  30 |\n+-------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-9",
      "title": "Remove Duplicate Rows",
      "description": "Removing duplicates is critical in data deduplication tasks. You are given a DataFrame with some duplicate records. Use `dropDuplicates()` to remove exact duplicates and retain only distinct records.",
      "sampleInput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n| Alice |  25 |\n+-------+-----+",
      "sampleOutput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n+-------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-10",
      "title": "Add Computed Column (Increment Age)",
      "description": "You are working on a transformation step where you need to derive a new column based on existing ones. Given a DataFrame with an 'age' column, add a new column called 'age_next_year' that increments the age by 1. Use `withColumn()` and arithmetic operations to solve this.",
      "sampleInput": "+-------+-----+\n| name  | age |\n+-------+-----+\n| Alice |  25 |\n| Bob   |  30 |\n+-------+-----+",
      "sampleOutput": "+-------+-----+---------------+\n| name  | age | age_next_year |\n+-------+-----+---------------+\n| Alice |  25 |      26       |\n| Bob   |  30 |      31       |\n+-------+-----+---------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-11",
      "title": "Convert Date String to Date Type",
      "description": "You are working with a DataFrame that contains a column 'date_joined', which has dates stored as strings in the format 'yyyy-MM-dd'. These are not actual date types yet, so you can't use date functions like year(), month(), etc., directly on them.\n\nYour task is to convert the 'date_joined' column from string to proper DateType using PySpark's `to_date()` function from `pyspark.sql.functions`.\n\nUse:\n- `from pyspark.sql.functions import to_date`\n- Apply: `df.withColumn('date_joined', to_date('date_joined', 'yyyy-MM-dd'))`",
      "sampleInput": "+----------+------------+\n| name     | date_joined|\n+----------+------------+\n| Alice    | 2023-01-10 |\n| Bob      | 2022-12-01 |\n+----------+------------+",
      "sampleOutput": "+----------+------------+\n| name     | date_joined|\n+----------+------------+\n| Alice    | 2023-01-10 |\n| Bob      | 2022-12-01 |\n+----------+------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-12",
      "title": "Check for Null Values",
      "description": "Sometimes in real-world data, some columns have missing values (represented as null). These can cause issues in analysis, so it's important to identify such rows.\n\nIn this problem, your task is to filter out and return only those rows where the 'salary' column is null.\n\nUse:\n- `from pyspark.sql.functions import col`\n- Filter using: `df.filter(col('salary').isNull())`",
      "sampleInput": "+-------+--------+\n| name  | salary |\n+-------+--------+\n| Alice | 50000  |\n| Bob   |  null  |\n+-------+--------+",
      "sampleOutput": "+------+--------+\n| name | salary |\n+------+--------+\n| Bob  |  null  |\n+------+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-13",
      "title": "Fill Null Values",
      "description": "When you find null values in your dataset, one common approach is to replace them with a default value. In this case, we will replace null salaries with 0.\n\nUse PySpark’s `fillna()` function:\n- Syntax: `df.fillna({'salary': 0})`\n\nThis helps to prevent errors in further calculations like aggregations or comparisons.",
      "sampleInput": "+-------+--------+\n| name  | salary |\n+-------+--------+\n| Alice | 50000  |\n| Bob   |  null  |\n+-------+--------+",
      "sampleOutput": "+-------+--------+\n| name  | salary |\n+-------+--------+\n| Alice | 50000  |\n| Bob   |    0   |\n+-------+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-14",
      "title": "Replace Column Values",
      "description": "Your DataFrame has a column 'department' with short codes like 'HR'. You want to make the values more readable by replacing 'HR' with 'Human Resources'.\n\nUse either:\n- `replace({'HR': 'Human Resources'}, subset=['department'])`\n- OR use `when(col('department') == 'HR', 'Human Resources').otherwise(col('department'))`\n\nThis is helpful when preparing data for reports or dashboards.",
      "sampleInput": "+-------+-------------+\n| name  | department  |\n+-------+-------------+\n| Alice | HR          |\n| Bob   | IT          |\n+-------+-------------+",
      "sampleOutput": "+-------+-------------------+\n| name  | department        |\n+-------+-------------------+\n| Alice | Human Resources   |\n| Bob   | IT                |\n+-------+-------------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-15",
      "title": "Extract Year from Date",
      "description": "You want to create a new column that shows only the year from an existing 'date_joined' column.\n\nThis is useful when analyzing data by year (e.g., number of people who joined per year).\n\nUse:\n- `from pyspark.sql.functions import year`\n- Syntax: `df.withColumn('year_joined', year('date_joined'))`",
      "sampleInput": "+----------+------------+\n| name     | date_joined|\n+----------+------------+\n| Alice    | 2023-01-10 |\n| Bob      | 2022-12-01 |\n+----------+------------+",
      "sampleOutput": "+----------+------------+-------------+\n| name     | date_joined| year_joined |\n+----------+------------+-------------+\n| Alice    | 2023-01-10 |    2023     |\n| Bob      | 2022-12-01 |    2022     |\n+----------+------------+-------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-16",
      "title": "Concatenate Two Columns",
      "description": "You have two separate columns: 'first_name' and 'last_name'. You want to create a new column 'full_name' that joins them together with a space.\n\nUse:\n- `from pyspark.sql.functions import concat_ws`\n- Syntax: `df.withColumn('full_name', concat_ws(' ', 'first_name', 'last_name'))`\n\nThis is common in user data processing or for reporting.",
      "sampleInput": "+-----------+----------+\n| first_name| last_name|\n+-----------+----------+\n| Alice     | Smith    |\n| Bob       | Brown    |\n+-----------+----------+",
      "sampleOutput": "+-----------+----------+-------------+\n| first_name| last_name| full_name   |\n+-----------+----------+-------------+\n| Alice     | Smith    | Alice Smith |\n| Bob       | Brown    | Bob Brown   |\n+-----------+----------+-------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-17",
      "title": "Calculate String Length",
      "description": "You want to find out how long each person's name is. Create a new column that contains the length of the string in the 'name' column.\n\nUse:\n- `from pyspark.sql.functions import length`\n- Syntax: `df.withColumn('name_length', length('name'))`\n\nUseful when filtering by character limits or doing text analysis.",
      "sampleInput": "+--------+\n| name   |\n+--------+\n| Alice  |\n| Bob    |\n+--------+",
      "sampleOutput": "+--------+-------------+\n| name   | name_length |\n+--------+-------------+\n| Alice  |      5      |\n| Bob    |      3      |\n+--------+-------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-18",
      "title": "Apply Filter Using isin()",
      "description": "You want to filter the rows and keep only those where the 'department' is either 'HR' or 'IT'. This is a common scenario where you want to select multiple values from a column.\n\nUse:\n- `df.filter(col('department').isin('HR', 'IT'))`",
      "sampleInput": "+-------+-------------+\n| name  | department  |\n+-------+-------------+\n| Alice | HR          |\n| Bob   | IT          |\n| Cathy | Finance     |\n+-------+-------------+",
      "sampleOutput": "+-------+-------------+\n| name  | department  |\n+-------+-------------+\n| Alice | HR          |\n| Bob   | IT          |\n+-------+-------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-19",
      "title": "Get Distinct Values",
      "description": "You want to find all unique departments in your dataset. Use the `distinct()` function after selecting the 'department' column.\n\nThis is often done during data exploration.\n\nUse:\n- `df.select('department').distinct()`",
      "sampleInput": "+-------+-------------+\n| name  | department  |\n+-------+-------------+\n| Alice | HR          |\n| Bob   | IT          |\n| Cathy | HR          |\n+-------+-------------+",
      "sampleOutput": "+-------------+\n| department  |\n+-------------+\n| HR          |\n| IT          |\n+-------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psb-20",
      "title": "Group by and Count",
      "description": "You want to know how many people are there in each department. Use `groupBy('department')` followed by `count()` to get this summary.\n\nUse:\n- `df.groupBy('department').count()`\n\nThis is one of the most basic and powerful aggregation patterns in PySpark.",
      "sampleInput": "+-------+-------------+\n| name  | department  |\n+-------+-------------+\n| Alice | HR          |\n| Bob   | IT          |\n| Cathy | HR          |\n+-------+-------------+",
      "sampleOutput": "+-------------+-------+\n| department  | count |\n+-------------+-------+\n| HR          |   2   |\n| IT          |   1   |\n+-------------+-------+",
      "difficulty": "Easy"
    },
    {
      "id": "psbm-21",
      "title": "Filter Employees Older Than 30 and Sort by Name",
      "description": "You are given a DataFrame containing employee information, including their names and ages. Your task is to filter all employees whose age is greater than 30 and then sort the result by the employee name in ascending order. This combines basic filtering and sorting, often used in real-world reporting.",
      "sampleInput": "+----------+-----+\n| name     | age |\n+----------+-----+\n| Alice    |  25 |\n| Bob      |  35 |\n| Charlie  |  32 |\n| David    |  28 |\n+----------+-----+",
      "sampleOutput": "+----------+-----+\n| name     | age |\n+----------+-----+\n| Bob      |  35 |\n| Charlie  |  32 |\n+----------+-----+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-22",
      "title": "Group by Department and Calculate Average Salary",
      "description": "You are given a DataFrame with employee data including department and salary. Your task is to group the employees by department and calculate the average salary for each department using `groupBy()` and `avg()` aggregation.",
      "sampleInput": "+----------+-------------+--------+\n| name     | department  | salary |\n+----------+-------------+--------+\n| Alice    | HR          | 50000  |\n| Bob      | IT          | 70000  |\n| Charlie  | HR          | 60000  |\n| David    | IT          | 80000  |\n+----------+-------------+--------+",
      "sampleOutput": "+-------------+--------------+\n| department  | avg_salary   |\n+-------------+--------------+\n| HR          | 55000.0      |\n| IT          | 75000.0      |\n+-------------+--------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-23",
      "title": "Join Two DataFrames on ID Column",
      "description": "You are given two DataFrames. One contains employee details with an ID, and the other contains salary information also keyed by ID. Your task is to join both DataFrames using the 'id' column using an inner join, and return the employee name and their corresponding salary.",
      "sampleInput": "DF1 (Employees):\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n| 2  | Bob    |\n| 3  | Charlie|\n\nDF2 (Salaries):\n+----+--------+\n| id | salary |\n+----+--------+\n| 1  | 50000  |\n| 2  | 70000  |\n+----+--------+",
      "sampleOutput": "+--------+--------+\n| name   | salary |\n+--------+--------+\n| Alice  | 50000  |\n| Bob    | 70000  |\n+--------+--------+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-24",
      "title": "Add Bonus Column Based on Salary Threshold",
      "description": "You are given a DataFrame with employee salary data. You need to add a new column called 'bonus_eligible' which should be 'Yes' if the salary is greater than or equal to 70000 and 'No' otherwise. Use `withColumn()` and `when().otherwise()` functions.",
      "sampleInput": "+--------+--------+\n| name   | salary |\n+--------+--------+\n| Alice  | 50000  |\n| Bob    | 70000  |\n| Charlie| 80000  |\n+--------+--------+",
      "sampleOutput": "+--------+--------+----------------+\n| name   | salary | bonus_eligible |\n+--------+--------+----------------+\n| Alice  | 50000  | No             |\n| Bob    | 70000  | Yes            |\n| Charlie| 80000  | Yes            |\n+--------+--------+----------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-25",
      "title": "Count Number of Employees per Department",
      "description": "Given a DataFrame containing employee names and their departments, your task is to calculate how many employees are there in each department. Use `groupBy()` and `count()` functions for this aggregation.",
      "sampleInput": "+--------+-------------+\n| name   | department  |\n+--------+-------------+\n| Alice  | HR          |\n| Bob    | IT          |\n| Charlie| HR          |\n| David  | IT          |\n| Eve    | IT          |\n+--------+-------------+",
      "sampleOutput": "+-------------+--------+\n| department  | count  |\n+-------------+--------+\n| HR          |   2    |\n| IT          |   3    |\n+-------------+--------+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-26",
      "title": "Find Maximum Salary per Department",
      "description": "You are given a DataFrame containing employee salaries and departments. Your task is to find the maximum salary in each department using the `groupBy()` and `max()` functions.",
      "sampleInput": "+--------+-------------+--------+\n| name   | department  | salary |\n+--------+-------------+--------+\n| Alice  | HR          | 50000  |\n| Bob    | IT          | 70000  |\n| Charlie| HR          | 60000  |\n| David  | IT          | 80000  |\n+--------+-------------+--------+",
      "sampleOutput": "+-------------+-------------+\n| department  | max_salary  |\n+-------------+-------------+\n| HR          | 60000       |\n| IT          | 80000       |\n+-------------+-------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-27",
      "title": "Calculate Salary Hike of 10% for All Employees",
      "description": "Given a DataFrame with employee salaries, add a new column `updated_salary` where each salary is increased by 10%. This problem requires use of arithmetic operations inside `withColumn()`.",
      "sampleInput": "+--------+--------+\n| name   | salary |\n+--------+--------+\n| Alice  | 50000  |\n| Bob    | 60000  |\n+--------+--------+",
      "sampleOutput": "+--------+--------+---------------+\n| name   | salary | updated_salary|\n+--------+--------+---------------+\n| Alice  | 50000  | 55000.0       |\n| Bob    | 60000  | 66000.0       |\n+--------+--------+---------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-28",
      "title": "Concatenate First and Last Names into Full Name",
      "description": "You are given a DataFrame with 'first_name' and 'last_name'. Your task is to add a new column 'full_name' by concatenating these two columns with a space. Use `concat_ws()` from `pyspark.sql.functions`.",
      "sampleInput": "+-----------+----------+\n| first_name| last_name|\n+-----------+----------+\n| Alice     | Smith    |\n| Bob       | Johnson  |\n+-----------+----------+",
      "sampleOutput": "+-----------+----------+------------+\n| first_name| last_name| full_name  |\n+-----------+----------+------------+\n| Alice     | Smith    | Alice Smith|\n| Bob       | Johnson  | Bob Johnson|\n+-----------+----------+------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-29",
      "title": "Get Employees with Top 2 Salaries in Each Department",
      "description": "Given a DataFrame with employee salaries and departments, your task is to find the top 2 salary earners from each department using `Window` functions with partitioning and `row_number()`.",
      "sampleInput": "+--------+-------------+--------+\n| name   | department  | salary |\n+--------+-------------+--------+\n| Alice  | HR          | 50000  |\n| Bob    | HR          | 60000  |\n| Charlie| HR          | 55000  |\n| David  | IT          | 70000  |\n| Eve    | IT          | 80000  |\n| Frank  | IT          | 75000  |\n+--------+-------------+--------+",
      "sampleOutput": "+--------+-------------+--------+\n| name   | department  | salary |\n+--------+-------------+--------+\n| Bob    | HR          | 60000  |\n| Charlie| HR          | 55000  |\n| Eve    | IT          | 80000  |\n| Frank  | IT          | 75000  |\n+--------+-------------+--------+",
      "difficulty": "Medium"
    },
    {
      "id": "psbm-30",
      "title": "Find Number of Employees Having Same Salary",
      "description": "You are given a DataFrame with employee names and their salaries. Count how many employees are earning the same salary using `groupBy(salary)` and `count()`. This simulates frequency analysis used in payroll audits.",
      "sampleInput": "+--------+--------+\n| name   | salary |\n+--------+--------+\n| Alice  | 50000  |\n| Bob    | 60000  |\n| Cathy  | 50000  |\n| David  | 70000  |\n| Eve    | 60000  |\n+--------+--------+",
      "sampleOutput": "+--------+-------+\n| salary | count |\n+--------+-------+\n| 50000  |   2   |\n| 60000  |   2   |\n| 70000  |   1   |\n+--------+-------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-31",
      "title": "Group and Aggregate by Single Column",
      "description": "You are given a DataFrame with sales data containing columns: region, product, and revenue. Your task is to calculate the total revenue generated in each region. This problem helps understand how to perform groupBy and aggregation using PySpark, which is essential in data summarization tasks.",
      "sampleInput": "+--------+----------+--------+\n| region | product  | revenue|\n+--------+----------+--------+\n| East   | Laptop   | 2000   |\n| West   | Laptop   | 1800   |\n| East   | Phone    | 1200   |\n| West   | Phone    | 800    |\n+--------+----------+--------+",
      "sampleOutput": "+--------+-------------+\n| region | total_revenue|\n+--------+-------------+\n| East   | 3200        |\n| West   | 2600        |\n+--------+-------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-32",
      "title": "Group by Multiple Columns and Aggregate",
      "description": "You are given a sales DataFrame with columns: region, product, and revenue. Your task is to calculate the total revenue for each combination of region and product. This problem helps understand groupBy on multiple columns and using aggregations like sum.",
      "sampleInput": "+--------+----------+--------+\n| region | product  | revenue|\n+--------+----------+--------+\n| East   | Laptop   | 2000   |\n| West   | Laptop   | 1800   |\n| East   | Phone    | 1200   |\n| East   | Laptop   | 800    |\n+--------+----------+--------+",
      "sampleOutput": "+--------+---------+-------------+\n| region | product | total_revenue|\n+--------+---------+-------------+\n| East   | Laptop  | 2800         |\n| West   | Laptop  | 1800         |\n| East   | Phone   | 1200         |\n+--------+---------+-------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-33",
      "title": "Filter After Aggregation",
      "description": "Given a DataFrame of employee salaries by department, calculate the average salary per department, then return only those departments where the average salary is greater than 50,000. This problem teaches how to chain groupBy, agg, and filter operations.",
      "sampleInput": "+------------+--------+\n| department | salary |\n+------------+--------+\n| HR         | 40000  |\n| HR         | 60000  |\n| IT         | 80000  |\n| IT         | 90000  |\n+------------+--------+",
      "sampleOutput": "+------------+--------------+\n| department | avg_salary   |\n+------------+--------------+\n| IT         | 85000        |\n+------------+--------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-34",
      "title": "Join Two DataFrames on a Key",
      "description": "You are given two DataFrames – one with employee details and another with department names. Join these DataFrames on the department_id column to get a complete view of employee names along with department names. This tests your understanding of joins in PySpark.",
      "sampleInput": "**Employee Data:**\n+------+-------------+\n| name | department_id |\n+------+-------------+\n| John | 1             |\n| Alice| 2             |\n\n**Department Data:**\n+-------------+----------------+\n| dept_id     | dept_name      |\n+-------------+----------------+\n| 1           | HR             |\n| 2           | IT             |",
      "sampleOutput": "+------+-------------+----------------+\n| name | department_id | dept_name     |\n+------+-------------+----------------+\n| John | 1             | HR            |\n| Alice| 2             | IT            |",
      "difficulty": "Medium"
    },
    {
      "id": "psb-35",
      "title": "Calculate Percentage from Grouped Totals",
      "description": "Given a DataFrame with student scores per subject, calculate the total score per student and the percentage score based on a maximum score of 300. This teaches how to use aggregations and derived calculations using withColumn.",
      "sampleInput": "+--------+----------+-------+\n| student| subject  | score |\n+--------+----------+-------+\n| Alice  | Math     | 90    |\n| Alice  | Science  | 85    |\n| Alice  | English  | 80    |\n| Bob    | Math     | 70    |\n| Bob    | Science  | 75    |\n| Bob    | English  | 65    |\n+--------+----------+-------+",
      "sampleOutput": "+--------+------------+-----------+\n| student| total_score| percentage|\n+--------+------------+-----------+\n| Alice  | 255        | 85.0      |\n| Bob    | 210        | 70.0      |\n+--------+------------+-----------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-36",
      "title": "Replace Null Values in Column",
      "description": "You have a DataFrame with null values in the 'city' column. Replace all nulls with the string 'Unknown'. This is useful in real data pipelines where missing values need to be handled explicitly using `fillna()` or `na.fill()`.",
      "sampleInput": "+-------+--------+\n| name  | city   |\n+-------+--------+\n| Alice | Delhi  |\n| Bob   | null   |\n| Cathy | null   |\n+-------+--------+",
      "sampleOutput": "+-------+---------+\n| name  | city    |\n+-------+---------+\n| Alice | Delhi   |\n| Bob   | Unknown |\n| Cathy | Unknown |\n+-------+---------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-37",
      "title": "Use of withColumn to Derive New Column",
      "description": "Given a DataFrame with columns 'price' and 'tax', derive a new column 'final_price' which is the sum of price and tax. This problem tests your ability to use withColumn and basic arithmetic operations.",
      "sampleInput": "+--------+------+\n| price  | tax  |\n+--------+------+\n| 100    | 18   |\n| 200    | 36   |\n+--------+------+",
      "sampleOutput": "+--------+------+-------------+\n| price  | tax  | final_price |\n+--------+------+-------------+\n| 100    | 18   | 118         |\n| 200    | 36   | 236         |\n+--------+------+-------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-38",
      "title": "Sort DataFrame by Multiple Columns",
      "description": "Given a DataFrame of students with name and score, sort the data by descending score and then ascending name. Sorting is a common requirement during data cleaning and feature engineering.",
      "sampleInput": "+--------+-------+\n| name   | score |\n+--------+-------+\n| Alice  | 90    |\n| Bob    | 90    |\n| Cathy  | 80    |\n+--------+-------+",
      "sampleOutput": "+--------+-------+\n| name   | score |\n+--------+-------+\n| Alice  | 90    |\n| Bob    | 90    |\n| Cathy  | 80    |\n+--------+-------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-39",
      "title": "Drop Duplicates Based on a Column",
      "description": "Given a DataFrame with customer entries where a customer might appear multiple times, remove duplicate records based only on the 'email' column. This helps in understanding deduplication using dropDuplicates.",
      "sampleInput": "+--------+-------------------+\n| name   | email             |\n+--------+-------------------+\n| Alice  | a@gmail.com       |\n| Bob    | b@gmail.com       |\n| Alice  | a@gmail.com       |\n+--------+-------------------+",
      "sampleOutput": "+--------+-------------------+\n| name   | email             |\n+--------+-------------------+\n| Alice  | a@gmail.com       |\n| Bob    | b@gmail.com       |\n+--------+-------------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-40",
      "title": "Rename Multiple Columns",
      "description": "You are given a DataFrame with long column names like 'emp_name' and 'emp_salary'. Rename these columns to 'name' and 'salary'. This tests your ability to use withColumnRenamed and chaining operations.",
      "sampleInput": "+----------+------------+\n| emp_name | emp_salary |\n+----------+------------+\n| Alice    | 50000      |\n| Bob      | 60000      |\n+----------+------------+",
      "sampleOutput": "+--------+--------+\n| name   | salary |\n+--------+--------+\n| Alice  | 50000  |\n| Bob    | 60000  |\n+--------+--------+",
      "difficulty": "Medium"
    },
    {
      "id": "psb-41",
      "title": "Find Top-N Salaries per Department",
      "description": "You are given a DataFrame with employee data including department and salary. Write a PySpark query to find the top 2 highest paid employees in each department. This helps practice partitioning with ROW_NUMBER() or RANK() over window functions.",
      "sampleInput": "employees(id INT, name STRING, department STRING, salary INT)\n+----+--------+-------------+--------+\n| id | name   | department  | salary |\n+----+--------+-------------+--------+\n| 1  | Alice  | HR          | 60000  |\n| 2  | Bob    | HR          | 58000  |\n| 3  | John   | IT          | 90000  |\n| 4  | Tom    | IT          | 87000  |\n| 5  | Jerry  | IT          | 80000  |\n+----+--------+-------------+--------+",
      "sampleOutput": "Top 2 salaries per department:\n+--------+-------------+--------+\n| name   | department  | salary |\n+--------+-------------+--------+\n| Alice  | HR          | 60000  |\n| Bob    | HR          | 58000  |\n| John   | IT          | 90000  |\n| Tom    | IT          | 87000  |\n+--------+-------------+--------+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-42",
      "title": "Running Average Over a Window",
      "description": "Given a DataFrame of daily temperature readings, compute the running average temperature for each city using a window of the previous 3 days including the current day. This tests sliding window aggregation using rangeBetween or rowsBetween.",
      "sampleInput": "temperatures(date DATE, city STRING, temp INT)\n+------------+--------+------+\n| date       | city   | temp |\n+------------+--------+------+\n| 2023-01-01 | Delhi  | 25   |\n| 2023-01-02 | Delhi  | 26   |\n| 2023-01-03 | Delhi  | 28   |\n| 2023-01-04 | Delhi  | 30   |\n+------------+--------+------+",
      "sampleOutput": "Running average temp with 3-day sliding window:\n+------------+--------+------+------------------+\n| date       | city   | temp | avg_temp_last_3  |\n+------------+--------+------+------------------+\n| 2023-01-01 | Delhi  | 25   | 25.0             |\n| 2023-01-02 | Delhi  | 26   | 25.5             |\n| 2023-01-03 | Delhi  | 28   | 26.3             |\n| 2023-01-04 | Delhi  | 30   | 28.0             |\n+------------+--------+------+------------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-43",
      "title": "Get Employees with Increasing Salary Trend",
      "description": "Given an employee salary history DataFrame, write a PySpark query to identify employees whose salary increased continuously year over year. This problem tests lag/lead window functions and group-based filtering logic.",
      "sampleInput": "salaries(emp_id INT, year INT, salary INT)\n+--------+------+--------+\n| emp_id | year | salary |\n+--------+------+--------+\n| 1      | 2020 | 50000  |\n| 1      | 2021 | 52000  |\n| 1      | 2022 | 55000  |\n| 2      | 2020 | 60000  |\n| 2      | 2021 | 58000  |\n+--------+------+--------+",
      "sampleOutput": "Employees with increasing salaries:\n+--------+\n| emp_id |\n+--------+\n| 1      |\n+--------+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-44",
      "title": "Detect Duplicate Rows with Row Hashing",
      "description": "Given a DataFrame with messy data, identify duplicate rows using hashing techniques (e.g., SHA2). This problem teaches data quality checks using row-level fingerprinting.",
      "sampleInput": "records(id INT, name STRING, age INT)\n+----+-------+-----+\n| id | name  | age |\n+----+-------+-----+\n| 1  | Alice | 25  |\n| 2  | Alice | 25  |\n| 3  | Bob   | 30  |\n+----+-------+-----+",
      "sampleOutput": "Duplicate Rows:\n+----+-------+-----+\n| id | name  | age |\n+----+-------+-----+\n| 1  | Alice | 25  |\n| 2  | Alice | 25  |\n+----+-------+-----+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-45",
      "title": "Pivot Table with Aggregation",
      "description": "Create a pivot table to summarize sales data per region per product. This will test your ability to use the pivot function and aggregations (like SUM or COUNT) in PySpark.",
      "sampleInput": "sales(region STRING, product STRING, revenue INT)\n+--------+---------+---------+\n| region | product | revenue |\n+--------+---------+---------+\n| East   | A       | 100     |\n| East   | B       | 150     |\n| West   | A       | 200     |\n+--------+---------+---------+",
      "sampleOutput": "Pivoted revenue per product:\n+--------+-----+-----+\n| region |  A  |  B  |\n+--------+-----+-----+\n| East   | 100 | 150 |\n| West   | 200 |  0  |\n+--------+-----+-----+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-46",
      "title": "Fill Missing Dates with Rolling Sum",
      "description": "Given a DataFrame with transaction data, fill in missing dates for each customer and compute a 7-day rolling sum of purchases. This involves date generation, joins, and window rolling aggregation.",
      "sampleInput": "transactions(date DATE, customer_id INT, amount INT)\n+------------+-------------+--------+\n| date       | customer_id | amount |\n+------------+-------------+--------+\n| 2023-01-01 | 1           | 100    |\n| 2023-01-03 | 1           | 200    |\n+------------+-------------+--------+",
      "sampleOutput": "Filled dates + 7-day rolling sum:\n+------------+-------------+--------+-----------------+\n| date       | customer_id | amount | rolling_7_day   |\n+------------+-------------+--------+-----------------+\n| 2023-01-01 | 1           | 100    | 100             |\n| 2023-01-02 | 1           | 0      | 100             |\n| 2023-01-03 | 1           | 200    | 300             |\n+------------+-------------+--------+-----------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-47",
      "title": "Longest Streak of Attendance",
      "description": "Given a DataFrame tracking student attendance by date, write a PySpark query to compute the longest continuous streak of present days per student. This challenges understanding of dense ranking and lag-based grouping.",
      "sampleInput": "attendance(student_id INT, date DATE, status STRING)\n+------------+------------+--------+\n| student_id | date       | status |\n+------------+------------+--------+\n| 1          | 2023-01-01 | P      |\n| 1          | 2023-01-02 | P      |\n| 1          | 2023-01-03 | A      |\n| 1          | 2023-01-04 | P      |\n| 1          | 2023-01-05 | P      |\n+------------+------------+--------+",
      "sampleOutput": "Streaks of Present Days:\n+------------+--------+\n| student_id | streak |\n+------------+--------+\n| 1          | 2      |\n+------------+--------+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-48",
      "title": "Customer Segmentation by Purchase Behavior",
      "description": "Using a customer purchase DataFrame, segment customers into categories: High, Medium, Low based on total spending. Apply quantiles or bucketizer techniques for segmentation.",
      "sampleInput": "purchases(customer_id INT, amount INT)\n+-------------+--------+\n| customer_id | amount |\n+-------------+--------+\n| 1           | 1000   |\n| 2           | 200    |\n| 3           | 4000   |\n+-------------+--------+",
      "sampleOutput": "Customer Segments:\n+-------------+--------+----------+\n| customer_id | amount | segment  |\n+-------------+--------+----------+\n| 1           | 1000   | Medium   |\n| 2           | 200    | Low      |\n| 3           | 4000   | High     |\n+-------------+--------+----------+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-49",
      "title": "Daily Active Users Count with Distinct Sessions",
      "description": "Given a user activity log, calculate the daily number of unique active users and their session counts. Helps build understanding of distinct aggregations and groupBy key strategies.",
      "sampleInput": "logs(user_id INT, session_id STRING, date DATE)\n+---------+------------+------------+\n| user_id | session_id | date       |\n+---------+------------+------------+\n| 1       | abc        | 2023-01-01 |\n| 1       | def        | 2023-01-01 |\n| 2       | ghi        | 2023-01-01 |\n+---------+------------+------------+",
      "sampleOutput": "Daily Unique Users:\n+------------+-------------------+-----------------+\n| date       | unique_users      | session_count   |\n+------------+-------------------+-----------------+\n| 2023-01-01 | 2                 | 3               |\n+------------+-------------------+-----------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-50",
      "title": "Explode Nested JSON and Flatten Structure",
      "description": "Given a DataFrame with nested JSON columns, write a PySpark query to explode arrays and flatten nested fields into a flat schema. This is critical when dealing with semi-structured data.",
      "sampleInput": "orders(order_id INT, items ARRAY<STRUCT<item_id: INT, price: INT>>)\n+----------+-----------------------------------+\n| order_id | items                             |\n+----------+-----------------------------------+\n| 1        | [{101, 200}, {102, 300}]          |\n+----------+-----------------------------------+",
      "sampleOutput": "Flattened items:\n+----------+---------+-------+\n| order_id | item_id | price |\n+----------+---------+-------+\n| 1        | 101     | 200   |\n| 1        | 102     | 300   |\n+----------+---------+-------+",
      "difficulty": "Hard"
    },
    {
      "id": "psb-51",
      "title": "Find Daily Active Users (DAU)",
      "description": "You are given a log DataFrame of user actions with columns: user_id, action_time (timestamp), and action_type. Write a PySpark program to compute the count of distinct active users for each day. A user is considered active if they performed at least one action on that day.",
      "sampleInput": "user_id | action_time          | action_type\n--------+------------------------+--------------\nU1      | 2024-07-01 10:15:00    | click\nU2      | 2024-07-01 11:00:00    | purchase\nU1      | 2024-07-02 09:00:00    | click",
      "sampleOutput": "date       | dau_count\n-----------+-----------\n2024-07-01 | 2\n2024-07-02 | 1",
      "difficulty": "Hard"
    },
    {
      "id": "psb-52",
      "title": "Top N Products by Category",
      "description": "Given a DataFrame of product sales with columns: product_id, category, and revenue, write a PySpark query to extract the top 2 highest revenue-generating products in each category. Use window functions with partitioning.",
      "sampleInput": "product_id | category | revenue\n-----------+----------+--------\nP1         | A        | 500\nP2         | A        | 600\nP3         | A        | 400\nP4         | B        | 900\nP5         | B        | 850",
      "sampleOutput": "product_id | category | revenue\n-----------+----------+--------\nP2         | A        | 600\nP1         | A        | 500\nP4         | B        | 900\nP5         | B        | 850",
      "difficulty": "Hard"
    },
    {
      "id": "psb-53",
      "title": "User Retention - Rolling 7 Day",
      "description": "You are given a DataFrame of login records with columns: user_id, login_date. Calculate the number of distinct users who have logged in at least once in the rolling 7-day window for each date. Use window functions and sliding window logic.",
      "sampleInput": "user_id | login_date\n--------+-------------\nU1      | 2024-06-01\nU2      | 2024-06-02\nU1      | 2024-06-04\nU3      | 2024-06-06\nU1      | 2024-06-07",
      "sampleOutput": "date       | active_users_last_7_days\n-----------+--------------------------\n2024-06-07 | 3",
      "difficulty": "Hard"
    },
    {
      "id": "psb-54",
      "title": "Running Total Per User Per Month",
      "description": "You are given a DataFrame with user_id, event_date, and amount_spent. Calculate running total of amount_spent per user, resetting every new month.",
      "sampleInput": "user_id | event_date | amount_spent\n--------+-------------+--------------\nU1      | 2024-01-01  | 100\nU1      | 2024-01-03  | 200\nU1      | 2024-02-01  | 300",
      "sampleOutput": "user_id | event_date | running_total\n--------+-------------+----------------\nU1      | 2024-01-01  | 100\nU1      | 2024-01-03  | 300\nU1      | 2024-02-01  | 300",
      "difficulty": "Hard"
    },
    {
      "id": "psb-55",
      "title": "Join Two Datasets with Skew Handling",
      "description": "You are given a very large sales DataFrame and a small lookup DataFrame (product_id to category). Perform an optimized join using broadcast join to avoid data skew. Write efficient PySpark code for the same.",
      "sampleInput": "sales_df: product_id | sales_amount\n----------+--------------\nP1        | 100\nP2        | 200\n\nlookup_df: product_id | category\n----------+----------\nP1        | Electronics\nP2        | Grocery",
      "sampleOutput": "product_id | sales_amount | category\n-----------+---------------+-----------\nP1         | 100           | Electronics\nP2         | 200           | Grocery",
      "difficulty": "Hard"
    },
    {
      "id": "psb-56",
      "title": "Detect Anomalous Spikes in Data",
      "description": "You are given a DataFrame with device_id, event_date, and data_consumed (MB). For each device, find the days where the consumption was more than 2 times the average of last 3 days (sliding window).",
      "sampleInput": "device_id | event_date | data_consumed\n----------+------------+----------------\nD1        | 2024-07-01 | 100\nD1        | 2024-07-02 | 150\nD1        | 2024-07-03 | 130\nD1        | 2024-07-04 | 500",
      "sampleOutput": "event_date | device_id | is_spike\n-----------+-----------+----------\n2024-07-04 | D1        | True",
      "difficulty": "Hard"
    },
    {
      "id": "psb-57",
      "title": "Customer Lifetime Value (CLV) Computation",
      "description": "Given transaction logs with user_id, purchase_date, and amount, compute the Customer Lifetime Value as total amount spent by each user. Also rank customers by CLV descending.",
      "sampleInput": "user_id | purchase_date | amount\n--------+----------------+--------\nU1      | 2024-01-01     | 100\nU2      | 2024-01-03     | 200\nU1      | 2024-01-04     | 150",
      "sampleOutput": "user_id | clv  | rank\n--------+------+------\nU1      | 250  | 1\nU2      | 200  | 2",
      "difficulty": "Hard"
    },
    {
      "id": "psb-58",
      "title": "Multi-Level Aggregation with Rollups",
      "description": "You're given a DataFrame with columns: region, state, sales. Use rollup to compute total sales at each level: region+state, region total, and grand total. Present nulls appropriately for subtotal levels.",
      "sampleInput": "region | state | sales\n--------+--------+------\nNorth  | NY     | 100\nNorth  | NJ     | 200\nSouth  | TX     | 150",
      "sampleOutput": "region | state | total_sales\n--------+--------+------------\nNorth  | NY     | 100\nNorth  | NJ     | 200\nNorth  | null   | 300\nSouth  | TX     | 150\nSouth  | null   | 150\nnull   | null   | 450",
      "difficulty": "Hard"
    },
    {
      "id": "psb-59",
      "title": "Pivot Product Sales by Month",
      "description": "You are given a DataFrame of sales with columns: product_id, month, revenue. Pivot the data to get revenue per product per month as columns (e.g., Jan, Feb, Mar...).",
      "sampleInput": "product_id | month | revenue\n-----------+--------+--------\nP1         | Jan    | 100\nP1         | Feb    | 200\nP2         | Jan    | 150",
      "sampleOutput": "product_id | Jan | Feb\n-----------+-----+-----\nP1         | 100 | 200\nP2         | 150 | null",
      "difficulty": "Hard"
    },
    {
      "id": "psb-60",
      "title": "Sessionize User Clickstream",
      "description": "Given user click logs with user_id and click_time, generate session IDs where a new session starts if the difference between clicks is more than 30 minutes. Use lag and window functions.",
      "sampleInput": "user_id | click_time\n--------+-------------------\nU1      | 2024-01-01 10:00\nU1      | 2024-01-01 10:20\nU1      | 2024-01-01 11:00",
      "sampleOutput": "user_id | click_time         | session_id\n--------+--------------------+-------------\nU1      | 2024-01-01 10:00   | 1\nU1      | 2024-01-01 10:20   | 1\nU1      | 2024-01-01 11:00   | 2",
      "difficulty": "Hard"
    }
  ],

  'pyspark-intermediate': [
    {
      "id": "psi-1",
      "title": "Filter Null Values from Multiple Columns",
      "description": "You're given a DataFrame containing columns with potential null values. Use PySpark to filter out rows where any of the specified columns contain nulls. This tests your understanding of DataFrame filtering with `isNull()` and logical operators.",
      "sampleInput": "DataFrame: students (id: int, name: string, grade: double)\n+----+--------+-------+\n| id | name   | grade |\n+----+--------+-------+\n| 1  | Alice  | 85.5  |\n| 2  | Bob    | null  |\n| 3  | null   | 76.0  |\n| 4  | David  | 92.0  |\n+----+--------+-------+",
      "sampleOutput": "Expected Output (no nulls in 'name' and 'grade'):\n+----+--------+-------+\n| id | name   | grade |\n+----+--------+-------+\n| 1  | Alice  | 85.5  |\n| 4  | David  | 92.0  |\n+----+--------+-------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-2",
      "title": "Replace Null Values Using fillna",
      "description": "You're given a DataFrame with missing values. Use PySpark's `fillna()` to replace nulls with default values based on data type or column name. Helps practice handling missing data efficiently.",
      "sampleInput": "DataFrame: employees (id: int, name: string, department: string)\n+----+--------+-------------+\n| id | name   | department  |\n+----+--------+-------------+\n| 1  | Alice  | HR          |\n| 2  | Bob    | null        |\n| 3  | null   | Sales       |\n+----+--------+-------------+",
      "sampleOutput": "Replace null name with 'Unknown', department with 'General':\n+----+--------+-------------+\n| id | name   | department  |\n+----+--------+-------------+\n| 1  | Alice  | HR          |\n| 2  | Bob    | General     |\n| 3  | Unknown| Sales       |\n+----+--------+-------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-3",
      "title": "Extract Domain from Email Address",
      "description": "Given a DataFrame with email addresses, use string functions to extract the domain name (after '@'). This covers usage of functions like `split()`, `regexp_extract()`, and column transformation.",
      "sampleInput": "DataFrame: users (id: int, email: string)\n+----+----------------------+\n| id | email                |\n+----+----------------------+\n| 1  | alice@gmail.com      |\n| 2  | bob@yahoo.com        |\n| 3  | charlie@openai.com   |\n+----+----------------------+",
      "sampleOutput": "Output DataFrame with extracted domain:\n+----+----------------------+-----------+\n| id | email                | domain    |\n+----+----------------------+-----------+\n| 1  | alice@gmail.com      | gmail.com |\n| 2  | bob@yahoo.com        | yahoo.com |\n| 3  | charlie@openai.com   | openai.com|\n+----+----------------------+-----------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-4",
      "title": "Rename Multiple Columns in a DataFrame",
      "description": "Practice renaming multiple columns in a PySpark DataFrame using either `withColumnRenamed()` or a mapping approach. Useful when cleaning or preparing data for joins or reports.",
      "sampleInput": "DataFrame: raw_data (user_id: int, user_name: string, age: int)\n+--------+----------+-----+\n| user_id| user_name| age |\n+--------+----------+-----+\n| 1      | Alice    | 30  |\n| 2      | Bob      | 25  |\n+--------+----------+-----+",
      "sampleOutput": "Expected renamed columns: id, name, user_age\n+----+-------+---------+\n| id | name  | user_age|\n+----+-------+---------+\n| 1  | Alice | 30      |\n| 2  | Bob   | 25      |\n+----+-------+---------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-5",
      "title": "Check if Value Exists in a Column",
      "description": "Use PySpark to filter rows based on a condition where a value exists in a column using `isin()` or simple `==`. Helps practice conditional filters.",
      "sampleInput": "DataFrame: fruits (id: int, name: string)\n+----+----------+\n| id | name     |\n+----+----------+\n| 1  | Apple    |\n| 2  | Banana   |\n| 3  | Mango    |\n| 4  | Orange   |\n+----+----------+",
      "sampleOutput": "Check if fruit is in ('Apple', 'Mango'):\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Apple  |\n| 3  | Mango  |\n+----+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-6",
      "title": "Select Columns by Data Type",
      "description": "You're given a DataFrame with mixed data types. Use PySpark to programmatically select only numeric or string columns. This tests dynamic column selection using `df.dtypes` or `select_dtypes` equivalent logic.",
      "sampleInput": "DataFrame: info (id: int, name: string, score: double, passed: boolean)\n+----+--------+-------+--------+\n| id | name   | score | passed |\n+----+--------+-------+--------+\n| 1  | Alice  | 88.5  | true   |\n| 2  | Bob    | 76.0  | false  |\n+----+--------+-------+--------+",
      "sampleOutput": "Select only numeric columns:\n+----+-------+\n| id | score |\n+----+-------+\n| 1  | 88.5  |\n| 2  | 76.0  |\n+----+-------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-7",
      "title": "Add Column with Constant Value",
      "description": "Add a new column with a constant value using `withColumn()` and `lit()` function. Very common transformation for tagging or flagging records in a dataset.",
      "sampleInput": "DataFrame: products (id: int, name: string)\n+----+------------+\n| id | name       |\n+----+------------+\n| 1  | iPhone     |\n| 2  | Galaxy     |\n+----+------------+",
      "sampleOutput": "Add column 'category' = 'Smartphone'\n+----+---------+-------------+\n| id | name    | category    |\n+----+---------+-------------+\n| 1  | iPhone  | Smartphone  |\n| 2  | Galaxy  | Smartphone  |\n+----+---------+-------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-8",
      "title": "Drop Duplicate Rows",
      "description": "Use PySpark to remove duplicate rows from a DataFrame using `dropDuplicates()` or `distinct()`. Essential for data cleanup steps before aggregation or export.",
      "sampleInput": "DataFrame: logs (user: string, action: string)\n+--------+--------+\n| user   | action |\n+--------+--------+\n| Alice  | Login  |\n| Bob    | Logout |\n| Alice  | Login  |\n+--------+--------+",
      "sampleOutput": "Drop duplicate rows:\n+--------+--------+\n| user   | action |\n+--------+--------+\n| Alice  | Login  |\n| Bob    | Logout |\n+--------+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-9",
      "title": "Filter Rows Based on String Pattern",
      "description": "Filter rows where a column value starts with a given prefix using `startswith()` or `like`. Often used in logs, domain filtering, or customer IDs.",
      "sampleInput": "DataFrame: customers (id: string, name: string)\n+---------+--------+\n| id      | name   |\n+---------+--------+\n| CUST001 | Alice  |\n| CUST002 | Bob    |\n| EMP001  | John   |\n+---------+--------+",
      "sampleOutput": "Filter where ID starts with 'CUST':\n+---------+--------+\n| id      | name   |\n+---------+--------+\n| CUST001 | Alice  |\n| CUST002 | Bob    |\n+---------+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-10",
      "title": "Convert Column Case to Uppercase",
      "description": "Transform string column to uppercase using `upper()` function. Helps standardize data like city names, product types, or states.",
      "sampleInput": "DataFrame: cities (id: int, city: string)\n+----+-----------+\n| id | city      |\n+----+-----------+\n| 1  | Mumbai    |\n| 2  | bangalore |\n+----+-----------+",
      "sampleOutput": "Convert 'city' to uppercase:\n+----+-----------+\n| id | city      |\n+----+-----------+\n| 1  | MUMBAI    |\n| 2  | BANGALORE |\n+----+-----------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-11",
      "title": "Add a Column with Current Date",
      "description": "Add a new column called 'ingestion_date' to a given DataFrame that contains the current system date for each record. This task introduces basic date functions in PySpark.",
      "sampleInput": "DataFrame: employees\nSchema: id INT, name STRING\nData:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n| 2  | Bob    |\n+----+--------+",
      "sampleOutput": "DataFrame: employees_with_date\nSchema: id INT, name STRING, ingestion_date DATE\nData:\n+----+--------+----------------+\n| id | name   | ingestion_date |\n+----+--------+----------------+\n| 1  | Alice  | 2025-08-06      |\n| 2  | Bob    | 2025-08-06      |\n+----+--------+----------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-12",
      "title": "Capitalize Names in DataFrame",
      "description": "Convert all names in the 'name' column to capitalized format (first letter uppercase, rest lowercase). This problem helps practice string transformations in PySpark.",
      "sampleInput": "DataFrame: users\nSchema: id INT, name STRING\nData:\n+----+----------+\n| id | name     |\n+----+----------+\n| 1  | alICE     |\n| 2  | bOB       |\n+----+----------+",
      "sampleOutput": "DataFrame: users_transformed\nSchema: id INT, name STRING\nData:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n| 2  | Bob    |\n+----+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-13",
      "title": "Remove Duplicate Rows",
      "description": "Remove exact duplicate rows from a PySpark DataFrame. Helps understand the `dropDuplicates()` method.",
      "sampleInput": "DataFrame: purchases\nSchema: user_id INT, item STRING\nData:\n+--------+-------+\n| user_id| item  |\n+--------+-------+\n| 1      | pen   |\n| 1      | pen   |\n| 2      | book  |\n+--------+-------+",
      "sampleOutput": "DataFrame: purchases_clean\nSchema: user_id INT, item STRING\nData:\n+--------+-------+\n| user_id| item  |\n+--------+-------+\n| 1      | pen   |\n| 2      | book  |\n+--------+-------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-14",
      "title": "Concatenate Two Columns",
      "description": "Create a full name column by concatenating 'first_name' and 'last_name' with a space. Useful for string manipulation and basic column operations.",
      "sampleInput": "DataFrame: people\nSchema: first_name STRING, last_name STRING\nData:\n+-----------+----------+\n| first_name| last_name|\n+-----------+----------+\n| Alice     | Smith    |\n| Bob       | Johnson  |\n+-----------+----------+",
      "sampleOutput": "DataFrame: people_full_name\nSchema: full_name STRING\nData:\n+-------------+\n| full_name   |\n+-------------+\n| Alice Smith |\n| Bob Johnson |\n+-------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-15",
      "title": "Cast Column Type",
      "description": "Convert the 'price' column from STRING to FLOAT. This helps beginners work with schema transformations and type casting.",
      "sampleInput": "DataFrame: items\nSchema: id INT, price STRING\nData:\n+----+--------+\n| id | price  |\n+----+--------+\n| 1  | 12.50  |\n| 2  | 15.75  |\n+----+--------+",
      "sampleOutput": "DataFrame: items_casted\nSchema: id INT, price FLOAT\nData:\n+----+--------+\n| id | price  |\n+----+--------+\n| 1  | 12.50  |\n| 2  | 15.75  |\n+----+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-16",
      "title": "Add Constant Column",
      "description": "Add a new column 'country' with the same constant value (e.g., 'India') across all rows. Useful for applying `lit()` in PySpark.",
      "sampleInput": "DataFrame: employees\nSchema: name STRING\nData:\n+--------+\n| name   |\n+--------+\n| Alice  |\n| Bob    |\n+--------+",
      "sampleOutput": "DataFrame: employees_with_country\nSchema: name STRING, country STRING\nData:\n+--------+--------+\n| name   | country|\n+--------+--------+\n| Alice  | India  |\n| Bob    | India  |\n+--------+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-17",
      "title": "Filter Rows Using IN Clause",
      "description": "Filter rows where 'department' is in a specific list of departments (e.g., 'HR', 'IT'). Helps understand filtering with `isin()`.",
      "sampleInput": "DataFrame: staff\nSchema: name STRING, department STRING\nData:\n+--------+-----------+\n| name   | department|\n+--------+-----------+\n| Alice  | HR        |\n| Bob    | Finance   |\n| Eve    | IT        |\n+--------+-----------+",
      "sampleOutput": "DataFrame: filtered_staff\nSchema: name STRING, department STRING\nData:\n+--------+-----------+\n| name   | department|\n+--------+-----------+\n| Alice  | HR        |\n| Eve    | IT        |\n+--------+-----------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-18",
      "title": "Replace Null Values",
      "description": "Replace NULL values in the 'email' column with the string 'not_provided'. This helps beginners deal with missing data using `fillna()`.",
      "sampleInput": "DataFrame: users\nSchema: id INT, email STRING\nData:\n+----+-----------------+\n| id | email           |\n+----+-----------------+\n| 1  | alice@mail.com  |\n| 2  | null            |\n+----+-----------------+",
      "sampleOutput": "DataFrame: users_filled\nSchema: id INT, email STRING\nData:\n+----+------------------+\n| id | email            |\n+----+------------------+\n| 1  | alice@mail.com   |\n| 2  | not_provided     |\n+----+------------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-19",
      "title": "Remove Rows with Nulls",
      "description": "Drop rows that have NULL values in any column using `dropna()`. This is an essential data-cleaning operation.",
      "sampleInput": "DataFrame: users\nSchema: id INT, name STRING\nData:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n| 2  | null   |\n+----+--------+",
      "sampleOutput": "DataFrame: users_cleaned\nSchema: id INT, name STRING\nData:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n+----+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-20",
      "title": "Drop a Column from DataFrame",
      "description": "Remove an unwanted column, such as 'temporary_flag', using the `drop()` method. Useful for pruning datasets before transformations or exports.",
      "sampleInput": "DataFrame: customers\nSchema: id INT, name STRING, temporary_flag BOOLEAN\nData:\n+----+--------+---------------+\n| id | name   | temporary_flag|\n+----+--------+---------------+\n| 1  | Alice  | true          |\n| 2  | Bob    | false         |\n+----+--------+---------------+",
      "sampleOutput": "DataFrame: customers_clean\nSchema: id INT, name STRING\nData:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n| 2  | Bob    |\n+----+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psi-21",
      "title": "Join Orders and Customers with Filters",
      "description": "You are given two DataFrames — 'orders' with columns (order_id, customer_id, amount, order_date) and 'customers' with columns (customer_id, name, city). Perform an inner join to associate each order with the corresponding customer details. Then, filter for only those customers from 'Bangalore' whose order amount is greater than 5000.",
      "sampleInput": "orders:\n+----------+-------------+--------+------------+\n| order_id | customer_id | amount | order_date |\n+----------+-------------+--------+------------+\n| 101      | 1           | 6000   | 2023-01-10 |\n| 102      | 2           | 4500   | 2023-01-12 |\n\ncustomers:\n+-------------+--------+-----------+\n| customer_id | name   | city      |\n+-------------+--------+-----------+\n| 1           | Alice  | Bangalore |\n| 2           | Bob    | Mumbai    |",
      "sampleOutput": "+----------+-------------+--------+------------+--------+-----------+\n| order_id | customer_id | amount | order_date | name   | city      |\n+----------+-------------+--------+------------+--------+-----------+\n| 101      | 1           | 6000   | 2023-01-10 | Alice  | Bangalore |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-22",
      "title": "Calculate Running Total of Sales per Product",
      "description": "Given a 'sales' DataFrame with columns (product_id, sale_date, amount), calculate the running total (cumulative sum) of 'amount' for each 'product_id' ordered by 'sale_date'. Use window functions with proper partitioning and ordering.",
      "sampleInput": "+------------+------------+--------+\n| product_id | sale_date  | amount |\n+------------+------------+--------+\n| P1         | 2023-01-01 | 100    |\n| P1         | 2023-01-03 | 200    |\n| P2         | 2023-01-02 | 150    |\n| P2         | 2023-01-04 | 250    |",
      "sampleOutput": "+------------+------------+--------+--------------+\n| product_id | sale_date  | amount | running_total |\n+------------+------------+--------+--------------+\n| P1         | 2023-01-01 | 100    | 100           |\n| P1         | 2023-01-03 | 200    | 300           |\n| P2         | 2023-01-02 | 150    | 150           |\n| P2         | 2023-01-04 | 250    | 400           |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-23",
      "title": "Find Customers with Multiple Orders on the Same Day",
      "description": "Given a DataFrame 'orders' with (order_id, customer_id, order_date), identify all customers who placed more than one order on the same day. Return their customer_id, order_date, and order count.",
      "sampleInput": "+----------+-------------+------------+\n| order_id | customer_id | order_date |\n+----------+-------------+------------+\n| 1        | 101         | 2023-01-01 |\n| 2        | 101         | 2023-01-01 |\n| 3        | 102         | 2023-01-02 |\n| 4        | 101         | 2023-01-02 |",
      "sampleOutput": "+-------------+------------+-------------+\n| customer_id | order_date | order_count |\n+-------------+------------+-------------+\n| 101         | 2023-01-01 | 2           |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-24",
      "title": "Explode and Aggregate Tags for Articles",
      "description": "You are given a DataFrame 'articles' with (article_id, title, tags) where 'tags' is an array of strings. Explode the tags and count the number of times each tag appears across all articles.",
      "sampleInput": "+------------+----------------+----------------------+\n| article_id | title          | tags                 |\n+------------+----------------+----------------------+\n| 1          | PySpark Intro  | ['big data', 'spark']|\n| 2          | ML with Spark  | ['spark', 'ml']      |",
      "sampleOutput": "+--------+-----------+\n| tag    | frequency |\n+--------+-----------+\n| spark  | 2         |\n| big data | 1       |\n| ml     | 1         |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-25",
      "title": "Calculate Average Time Between Orders Per Customer",
      "description": "Given a DataFrame 'orders' with (customer_id, order_date), calculate the average number of days between successive orders per customer. Use window functions with lag and date operations.",
      "sampleInput": "+-------------+------------+\n| customer_id | order_date |\n+-------------+------------+\n| 1           | 2023-01-01 |\n| 1           | 2023-01-05 |\n| 1           | 2023-01-10 |\n| 2           | 2023-01-02 |\n| 2           | 2023-01-08 |",
      "sampleOutput": "+-------------+--------------------------+\n| customer_id | avg_days_between_orders  |\n+-------------+--------------------------+\n| 1           | 4.5                      |\n| 2           | 6.0                      |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-26",
      "title": "Identify Consecutive Login Streaks",
      "description": "Given a DataFrame 'logins' with (user_id, login_date), identify the longest streak of consecutive login days per user. The goal is to detect engagement trends using date_diff and row_number.",
      "sampleInput": "+--------+------------+\n| user_id| login_date |\n+--------+------------+\n| 1      | 2023-01-01 |\n| 1      | 2023-01-02 |\n| 1      | 2023-01-04 |\n| 2      | 2023-01-01 |\n| 2      | 2023-01-03 |",
      "sampleOutput": "+--------+------------------+\n| user_id| longest_streak   |\n+--------+------------------+\n| 1      | 2                |\n| 2      | 1                |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-27",
      "title": "Group-wise Top-N Elements using Window Function",
      "description": "Given a 'sales' DataFrame with (region, salesperson, amount), find the top 2 highest sale entries per region using the row_number window function.",
      "sampleInput": "+--------+-------------+--------+\n| region | salesperson | amount |\n+--------+-------------+--------+\n| East   | Alice       | 5000   |\n| East   | Bob         | 7000   |\n| East   | Carol       | 6000   |\n| West   | David       | 8000   |",
      "sampleOutput": "+--------+-------------+--------+\n| East   | Bob         | 7000   |\n| East   | Carol       | 6000   |\n| West   | David       | 8000   |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-28",
      "title": "Unnest Nested Struct Columns",
      "description": "You are given a DataFrame 'users' with (user_id, details), where 'details' is a StructType with fields (email, age, gender). Flatten the struct into separate columns.",
      "sampleInput": "+--------+-----------------------------+\n| user_id| details                     |\n+--------+-----------------------------+\n| 1      | {email: a@mail.com, age: 28, gender: M} |\n| 2      | {email: b@mail.com, age: 25, gender: F} |",
      "sampleOutput": "+--------+-------------+-----+--------+\n| user_id| email       | age | gender |\n+--------+-------------+-----+--------+\n| 1      | a@mail.com  | 28  | M      |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-29",
      "title": "Handle Nulls in Grouped Aggregation",
      "description": "You are given a 'feedback' DataFrame with (product_id, rating). Calculate the average rating per product, excluding any null ratings. If all ratings for a product are null, the average should be null too.",
      "sampleInput": "+------------+--------+\n| product_id | rating |\n+------------+--------+\n| P1         | 4      |\n| P1         | null   |\n| P2         | null   |",
      "sampleOutput": "+------------+-----------------+\n| product_id | avg_rating      |\n+------------+-----------------+\n| P1         | 4.0             |\n| P2         | null            |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-30",
      "title": "Count of Unique Visitors per Day",
      "description": "Given a 'web_logs' DataFrame with (user_id, visit_date), find the number of unique users visiting on each day. Return visit_date and unique_visitor_count.",
      "sampleInput": "+--------+------------+\n| user_id| visit_date |\n+--------+------------+\n| 1      | 2023-01-01 |\n| 2      | 2023-01-01 |\n| 1      | 2023-01-01 |\n| 3      | 2023-01-02 |",
      "sampleOutput": "+------------+----------------------+\n| visit_date | unique_visitor_count |\n+------------+----------------------+\n| 2023-01-01 | 2                    |\n| 2023-01-02 | 1                    |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-31",
      "title": "Average Transaction Value per User per Month",
      "description": "You are given a transaction DataFrame containing user_id, transaction_amount, and transaction_date. Your task is to compute the average transaction amount per user, per calendar month. Return columns user_id, year_month, and avg_transaction.",
      "sampleInput": "DataFrame: transactions\nSchema: user_id (int), transaction_amount (float), transaction_date (string: 'yyyy-MM-dd')\n\n+--------+-------------------+-------------------+\n|user_id |transaction_amount |transaction_date   |\n+--------+-------------------+-------------------+\n|1       |100.0              |2023-01-15         |\n|1       |200.0              |2023-01-20         |\n|2       |300.0              |2023-01-22         |\n|1       |400.0              |2023-02-01         |\n+--------+-------------------+-------------------+",
      "sampleOutput": "DataFrame: avg_transactions\nSchema: user_id (int), year_month (string), avg_transaction (float)\n\n+--------+------------+------------------+\n|user_id |year_month  |avg_transaction   |\n+--------+------------+------------------+\n|1       |2023-01     |150.0             |\n|1       |2023-02     |400.0             |\n|2       |2023-01     |300.0             |\n+--------+------------+------------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psi-32",
      "title": "Join Customer with Country Code Details",
      "description": "You are provided with two DataFrames: 'customers' with user_id, name, and country_code, and 'country_info' with country_code and country_name. Join these two DataFrames to replace the code with the actual country name.",
      "sampleInput": "DataFrame: customers\nSchema: user_id (int), name (string), country_code (string)\n+--------+---------+--------------+\n|user_id |name     |country_code  |\n+--------+---------+--------------+\n|1       |John     |US            |\n|2       |Alice    |IN            |\n\nDataFrame: country_info\nSchema: country_code (string), country_name (string)\n+--------------+--------------+\n|country_code  |country_name |\n+--------------+--------------+\n|US            |United States|\n|IN            |India        |",
      "sampleOutput": "DataFrame: enriched_customers\nSchema: user_id (int), name (string), country_name (string)\n+--------+---------+--------------+\n|user_id |name     |country_name  |\n+--------+---------+--------------+\n|1       |John     |United States |\n|2       |Alice    |India         |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-33",
      "title": "Get Last Purchase Info Using Window Function",
      "description": "Given a purchases DataFrame with user_id, product, and purchase_date, find each user's latest (most recent) purchase details using window functions.",
      "sampleInput": "DataFrame: purchases\nSchema: user_id (int), product (string), purchase_date (string)\n+--------+----------+--------------+\n|user_id |product   |purchase_date |\n+--------+----------+--------------+\n|1       |Mobile    |2023-03-01    |\n|1       |Laptop    |2023-03-05    |\n|2       |Tablet    |2023-03-04    |\n+--------+----------+--------------+",
      "sampleOutput": "DataFrame: latest_purchases\nSchema: user_id (int), product (string), purchase_date (string)\n+--------+----------+--------------+\n|user_id |product   |purchase_date |\n+--------+----------+--------------+\n|1       |Laptop    |2023-03-05    |\n|2       |Tablet    |2023-03-04    |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-34",
      "title": "Users with Consecutive Login Days",
      "description": "You are given a login log DataFrame with columns user_id and login_date. Write a PySpark job to identify users who logged in on at least 3 consecutive days.",
      "sampleInput": "DataFrame: login_logs\nSchema: user_id (int), login_date (date)\n+--------+------------+\n|user_id |login_date  |\n+--------+------------+\n|1       |2023-08-01  |\n|1       |2023-08-02  |\n|1       |2023-08-03  |\n|2       |2023-08-01  |\n|2       |2023-08-03  |\n+--------+------------+",
      "sampleOutput": "DataFrame: active_users\nSchema: user_id (int)\n+--------+\n|user_id |\n+--------+\n|1       |\n+--------+",
      "difficulty": "Medium"
    },
    {
      "id": "psi-35",
      "title": "Replace Nulls in Nested Struct Columns",
      "description": "Given a DataFrame where some columns are nested structs and may contain null values (e.g., address.city, address.zip), write a PySpark job to fill missing values within the nested structure.",
      "sampleInput": "DataFrame: people\nSchema: name (string), address (struct<city:string, zip:string>)\n+-------+------------------------+\n|name   |address                 |\n+-------+------------------------+\n|John   |{New York, 10001}       |\n|Alice  |{null, null}            |\n+-------+------------------------+",
      "sampleOutput": "DataFrame: filled_people\nSchema: name (string), address (struct<city:string, zip:string>)\n+-------+------------------------+\n|name   |address                 |\n+-------+------------------------+\n|John   |{New York, 10001}       |\n|Alice  |{Unknown, 00000}        |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-36",
      "title": "Explode Tags and Count Occurrence",
      "description": "You are given a DataFrame of posts where each post has a list of tags. Explode the tags and count how many times each tag appears in the entire DataFrame.",
      "sampleInput": "DataFrame: posts\nSchema: post_id (int), tags (array<string>)\n+--------+-------------------------+\n|post_id |tags                    |\n+--------+-------------------------+\n|1       |[spark, bigdata]        |\n|2       |[spark, python]         |\n+--------+-------------------------+",
      "sampleOutput": "DataFrame: tag_counts\nSchema: tag (string), count (int)\n+--------+------+\n|tag     |count |\n+--------+------+\n|spark   |2     |\n|bigdata |1     |\n|python  |1     |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-37",
      "title": "Filter Rows Based on Map Column Value",
      "description": "Given a DataFrame containing a column of MapType (e.g., preferences: Map<String, String>), filter only those users who have a specific value for a given key in the map.",
      "sampleInput": "DataFrame: users\nSchema: user_id (int), preferences (map<string, string>)\n+--------+-----------------------------+\n|user_id |preferences                  |\n+--------+-----------------------------+\n|1       |{\"theme\": \"dark\"}           |\n|2       |{\"theme\": \"light\"}          |\n+--------+-----------------------------+",
      "sampleOutput": "DataFrame: dark_users\nSchema: user_id (int)\n+--------+\n|user_id |\n+--------+\n|1       |\n+--------+",
      "difficulty": "Medium"
    },
    {
      "id": "psi-38",
      "title": "Compute Percentile Rank of Students by Score",
      "description": "Given a DataFrame with student_id and test_score, compute each student's percentile rank using window functions.",
      "sampleInput": "DataFrame: scores\nSchema: student_id (int), test_score (int)\n+------------+------------+\n|student_id |test_score  |\n+------------+------------+\n|1          |90          |\n|2          |80          |\n|3          |70          |\n+------------+------------+",
      "sampleOutput": "DataFrame: ranked_scores\nSchema: student_id (int), test_score (int), percentile_rank (double)\n+------------+------------+------------------+\n|student_id |test_score  |percentile_rank   |\n+------------+------------+------------------+\n|1          |90          |1.0               |\n|2          |80          |0.5               |\n|3          |70          |0.0               |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-39",
      "title": "Normalize Values Within Groups",
      "description": "Given a DataFrame with group_id and value, normalize the 'value' column within each group using min-max normalization. That is, for each row, compute (value - min) / (max - min) per group.",
      "sampleInput": "DataFrame: metrics\nSchema: group_id (int), value (int)\n+---------+--------+\n|group_id |value   |\n+---------+--------+\n|1        |10      |\n|1        |20      |\n|1        |30      |\n|2        |50      |\n|2        |100     |\n+---------+--------+",
      "sampleOutput": "DataFrame: normalized_metrics\nSchema: group_id (int), value (int), normalized (double)\n+---------+--------+-----------+\n|group_id |value   |normalized |\n+---------+--------+-----------+\n|1        |10      |0.0        |\n|1        |20      |0.5        |\n|1        |30      |1.0        |\n|2        |50      |0.0        |\n|2        |100     |1.0        |",
      "difficulty": "Medium"
    },
    {
      "id": "psi-40",
      "title": "Calculate Sliding Sum Over Time Window",
      "description": "You are given a sales DataFrame with user_id, sale_amount, and sale_time (timestamp). Use a sliding window of 1 hour (sliding every 30 minutes) to compute total sales per user.",
      "sampleInput": "DataFrame: sales\nSchema: user_id (int), sale_amount (float), sale_time (timestamp)\n+--------+------------+----------------------+\n|user_id |sale_amount|sale_time            |\n+--------+------------+----------------------+\n|1       |100.0      |2023-08-01 10:00:00   |\n|1       |200.0      |2023-08-01 10:30:00   |\n|1       |150.0      |2023-08-01 11:00:00   |\n+--------+------------+----------------------+",
      "sampleOutput": "DataFrame: sliding_sales\nSchema: user_id (int), window_start (timestamp), window_end (timestamp), total_sales (float)\n+--------+---------------------+---------------------+-------------+\n|user_id |window_start         |window_end           |total_sales  |\n+--------+---------------------+---------------------+-------------+\n|1       |2023-08-01 10:00:00  |2023-08-01 11:00:00  |300.0        |\n|1       |2023-08-01 10:30:00  |2023-08-01 11:30:00  |350.0        |\n+--------+---------------------+---------------------+-------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psi-41",
      "title": "Monthly Average Spend per Category Using Window",
      "description": "Given a transaction DataFrame with columns `user_id`, `category`, `amount`, and `date`, calculate the monthly average spend per category using window functions. This tests your ability to handle time-based grouping with partitioning.",
      "sampleInput": "Columns: user_id (int), category (string), amount (double), date (date)\nSample:\n| user_id | category | amount | date       |\n|---------|----------|--------|------------|\n| 1       | Grocery  | 100.0  | 2023-06-15 |\n| 2       | Grocery  | 150.0  | 2023-06-20 |\n| 1       | Grocery  | 200.0  | 2023-07-01 |",
      "sampleOutput": "Columns: user_id, category, date, avg_monthly_spend\nSample:\n| user_id | category | date       | avg_monthly_spend |\n|---------|----------|------------|--------------------|\n| 1       | Grocery  | 2023-06-15 | 125.0              |\n| 2       | Grocery  | 2023-06-20 | 125.0              |\n| 1       | Grocery  | 2023-07-01 | 200.0              |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-42",
      "title": "Group-wise Median Using Approximate Percentiles",
      "description": "Given a DataFrame of student scores with columns `student_id`, `subject`, and `score`, compute the median score per subject. Use the `percentile_approx` function to estimate the median efficiently in distributed processing.",
      "sampleInput": "Columns: student_id (int), subject (string), score (int)\nSample:\n| student_id | subject | score |\n|------------|---------|-------|\n| 1          | Math    | 90    |\n| 2          | Math    | 80    |\n| 3          | Math    | 70    |\n| 4          | English | 85    |\n| 5          | English | 95    |",
      "sampleOutput": "Columns: subject, median_score\nSample:\n| subject | median_score |\n|---------|---------------|\n| Math    | 80            |\n| English | 90            |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-43",
      "title": "Top-N Records per Category with Ties",
      "description": "Given a DataFrame with columns `category`, `item_id`, and `rating`, return the top 2 items with highest ratings per category. If multiple items have the same rating, include them all (i.e., consider ties). This requires window ranking and filtering.",
      "sampleInput": "Columns: category (string), item_id (int), rating (double)\nSample:\n| category | item_id | rating |\n|----------|---------|--------|\n| A        | 101     | 4.5    |\n| A        | 102     | 4.7    |\n| A        | 103     | 4.7    |\n| A        | 104     | 4.4    |",
      "sampleOutput": "Columns: category, item_id, rating\nSample:\n| category | item_id | rating |\n|----------|---------|--------|\n| A        | 102     | 4.7    |\n| A        | 103     | 4.7    |\n| A        | 101     | 4.5    |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-44",
      "title": "Sessionize Clickstream Using Event Gaps",
      "description": "Given clickstream logs with `user_id`, `event_time`, detect sessions by defining a new session if there is a gap of 30 minutes or more between consecutive events for a user. This requires lag, time-diff, and custom session logic.",
      "sampleInput": "Columns: user_id (int), event_time (timestamp)\nSample:\n| user_id | event_time        |\n|---------|-------------------|\n| 1       | 2023-06-01 10:00  |\n| 1       | 2023-06-01 10:20  |\n| 1       | 2023-06-01 11:00  |",
      "sampleOutput": "Columns: user_id, event_time, session_id\nSample:\n| user_id | event_time        | session_id |\n|---------|-------------------|------------|\n| 1       | 2023-06-01 10:00  | 1          |\n| 1       | 2023-06-01 10:20  | 1          |\n| 1       | 2023-06-01 11:00  | 2          |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-45",
      "title": "Explode and Aggregate Product Tags",
      "description": "Given a DataFrame where each product has a comma-separated string of tags in a column `tags`, write a query to explode the tags and count the total occurrence of each tag across all products. Tests string splitting, exploding, and grouping.",
      "sampleInput": "Columns: product_id (int), tags (string)\nSample:\n| product_id | tags                 |\n|------------|----------------------|\n| 1          | red,eco-friendly     |\n| 2          | blue,eco-friendly    |",
      "sampleOutput": "Columns: tag, count\nSample:\n| tag           | count |\n|---------------|--------|\n| red           | 1      |\n| eco-friendly  | 2      |\n| blue          | 1      |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-46",
      "title": "Pivot Table for Monthly Sales by Region",
      "description": "Given sales data with columns `region`, `month`, and `sales`, create a pivot table where each row is a region and columns represent months with total sales as values. Use the `pivot` and `groupBy` functions effectively.",
      "sampleInput": "Columns: region (string), month (string), sales (double)\nSample:\n| region | month | sales  |\n|--------|-------|--------|\n| East   | Jan   | 1000.0 |\n| East   | Feb   | 1500.0 |\n| West   | Jan   | 1200.0 |",
      "sampleOutput": "Columns: region, Jan, Feb\nSample:\n| region | Jan   | Feb   |\n|--------|-------|--------|\n| East   | 1000  | 1500  |\n| West   | 1200  | null  |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-47",
      "title": "Find All Duplicate Rows Based on Multiple Columns",
      "description": "Given a DataFrame with columns `name`, `dob`, and `city`, identify all rows that are exact duplicates (including multiple appearances). Do not drop any duplicates — just return all repeated records.",
      "sampleInput": "Columns: name (string), dob (date), city (string)\nSample:\n| name | dob        | city     |\n|------|------------|----------|\n| John | 1990-01-01 | New York |\n| John | 1990-01-01 | New York |\n| Alice| 1985-02-20 | LA       |",
      "sampleOutput": "Columns: name, dob, city\nSample:\n| name | dob        | city     |\n|------|------------|----------|\n| John | 1990-01-01 | New York |\n| John | 1990-01-01 | New York |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-48",
      "title": "Custom Sorting with Multiple Conditions",
      "description": "Given a list of orders with columns `order_id`, `priority`, and `order_date`, sort the DataFrame first by descending priority ('High' > 'Medium' > 'Low'), then by ascending `order_date`. You must use custom ordering via `when` or `expr`.",
      "sampleInput": "Columns: order_id (int), priority (string), order_date (date)\nSample:\n| order_id | priority | order_date |\n|----------|----------|------------|\n| 1        | Low      | 2023-06-01 |\n| 2        | High     | 2023-05-01 |\n| 3        | Medium   | 2023-06-01 |",
      "sampleOutput": "Sorted Columns: order_id, priority, order_date\nSample:\n| order_id | priority | order_date |\n|----------|----------|------------|\n| 2        | High     | 2023-05-01 |\n| 3        | Medium   | 2023-06-01 |\n| 1        | Low      | 2023-06-01 |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-49",
      "title": "Calculate Running Total per Group Using Cumulative Sum",
      "description": "Given a sales DataFrame with columns `store_id`, `date`, and `revenue`, compute a running total of revenue for each store ordered by date. This involves partitioning and `rowsBetween` in window specs.",
      "sampleInput": "Columns: store_id (int), date (date), revenue (double)\nSample:\n| store_id | date       | revenue |\n|----------|------------|---------|\n| 1        | 2023-06-01 | 100     |\n| 1        | 2023-06-02 | 150     |",
      "sampleOutput": "Columns: store_id, date, revenue, running_total\nSample:\n| store_id | date       | revenue | running_total |\n|----------|------------|---------|----------------|\n| 1        | 2023-06-01 | 100     | 100            |\n| 1        | 2023-06-02 | 150     | 250            |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-50",
      "title": "Filter Rows Using Complex Array Condition",
      "description": "Given a DataFrame with a column `tags` which is an array of strings, filter rows where the tag list contains both 'urgent' and 'important'. You must use `array_contains`, `filter`, or `expr` functions.",
      "sampleInput": "Columns: task_id (int), tags (array<string>)\nSample:\n| task_id | tags                     |\n|---------|--------------------------|\n| 1       | ['urgent', 'important'] |\n| 2       | ['optional']            |",
      "sampleOutput": "Columns: task_id, tags\nSample:\n| task_id | tags                     |\n|---------|--------------------------|\n| 1       | ['urgent', 'important'] |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-51",
      "title": "Daily Rank of Product Sales by Region",
      "description": "Given a sales DataFrame with columns `region`, `date`, `product_id`, and `sales_amount`, write a PySpark query that ranks products by daily sales within each region. Return `region`, `date`, `product_id`, `sales_amount`, and `daily_rank`. Use window functions with partitioning by region and date.",
      "sampleInput": "sales(region: string, date: date, product_id: int, sales_amount: float)\n\n+--------+------------+------------+--------------+\n| region |    date    | product_id | sales_amount |\n+--------+------------+------------+--------------+\n| East   | 2023-01-01 |     101    |     200.0     |\n| East   | 2023-01-01 |     102    |     150.0     |\n| West   | 2023-01-01 |     103    |     180.0     |\n+--------+------------+------------+--------------+",
      "sampleOutput": "region | date       | product_id | sales_amount | daily_rank\n-------+------------+------------+--------------+------------\nEast   | 2023-01-01 |    101     |     200.0     |     1\nEast   | 2023-01-01 |    102     |     150.0     |     2\nWest   | 2023-01-01 |    103     |     180.0     |     1",
      "difficulty": "Hard"
    },
    {
      "id": "psi-52",
      "title": "Identify Surging Products Based on Weekly Sales Spike",
      "description": "You are given weekly product sales data with `product_id`, `week`, and `total_sales`. Write a PySpark job to identify products whose sales in any week increased by more than 50% compared to the previous week. Use lag and percentage difference calculation. Return `product_id`, `week`, `total_sales`, `previous_week_sales`, and `sales_increase_pct`.",
      "sampleInput": "sales(product_id: int, week: string, total_sales: float)\n\n+------------+----------+-------------+\n| product_id |  week    | total_sales |\n+------------+----------+-------------+\n|    1       | 2023-W01 |   1000.0    |\n|    1       | 2023-W02 |   1600.0    |\n|    2       | 2023-W01 |   800.0     |\n|    2       | 2023-W02 |   1000.0    |\n+------------+----------+-------------+",
      "sampleOutput": "product_id | week     | total_sales | previous_week_sales | sales_increase_pct\n-----------+----------+-------------+----------------------+-------------------\n1          | 2023-W02 |   1600.0    |       1000.0         |       60.0",
      "difficulty": "Hard"
    },
    {
      "id": "psi-53",
      "title": "Customer Lifetime Value Calculation",
      "description": "Given customer transaction data, calculate the lifetime value for each customer. The DataFrame contains `customer_id`, `order_id`, `order_date`, and `order_amount`. You must group by `customer_id` and compute the total order value, total number of orders, and average order value. Return all three values per customer.",
      "sampleInput": "orders(customer_id: int, order_id: int, order_date: date, order_amount: float)\n\n+-------------+----------+------------+--------------+\n| customer_id | order_id | order_date | order_amount |\n+-------------+----------+------------+--------------+\n|     1       |   1001   | 2023-01-01 |     200.0     |\n|     1       |   1002   | 2023-01-05 |     150.0     |\n|     2       |   1003   | 2023-01-02 |     300.0     |\n+-------------+----------+------------+--------------+",
      "sampleOutput": "customer_id | total_orders | total_amount | avg_order_value\n------------+--------------+--------------+----------------\n1           |      2       |     350.0     |     175.0\n2           |      1       |     300.0     |     300.0",
      "difficulty": "Hard"
    },
    {
      "id": "psi-54",
      "title": "Find Products Purchased in Sequence by the Same Customer",
      "description": "Given an e-commerce order log, identify customers who bought the same product at least twice, consecutively. Use lag/lead to compare previous and current product IDs for each customer ordered by time. Input columns are `customer_id`, `order_time`, `product_id`. Return only such customer and product pairs.",
      "sampleInput": "orders(customer_id: int, order_time: timestamp, product_id: int)\n\n+-------------+---------------------+------------+\n| customer_id |    order_time       | product_id |\n+-------------+---------------------+------------+\n|     1       | 2023-01-01 10:00:00 |    101     |\n|     1       | 2023-01-01 11:00:00 |    101     |\n|     2       | 2023-01-01 12:00:00 |    103     |\n+-------------+---------------------+------------+",
      "sampleOutput": "customer_id | product_id\n------------+------------\n1           |    101",
      "difficulty": "Hard"
    },
    {
      "id": "psi-55",
      "title": "Rolling Average Login Time per User Over 3 Days",
      "description": "Given a log of user login times, compute the rolling average login duration over the past 3 days (including current). Input DataFrame has `user_id`, `login_date`, and `login_duration`. Use a window function with rangeBetween for 3-day rolling average.",
      "sampleInput": "logins(user_id: int, login_date: date, login_duration: float)\n\n+---------+-------------+----------------+\n| user_id | login_date  | login_duration |\n+---------+-------------+----------------+\n|   1     | 2023-01-01  |     30.0       |\n|   1     | 2023-01-02  |     45.0       |\n|   1     | 2023-01-03  |     60.0       |\n+---------+-------------+----------------+",
      "sampleOutput": "user_id | login_date | rolling_avg_3_day\n--------+------------+-------------------\n1       | 2023-01-03 |        45.0",
      "difficulty": "Hard"
    },
    {
      "id": "psi-56",
      "title": "Rolling Sum with RangeBetween Window",
      "description": "Using PySpark window function with `rangeBetween`, compute a rolling sum of sales for each store in a 7-day window centered on each day. Use date-based windowing.",
      "sampleInput": "df: (store_id, date, sales)\n+----------+------------+-------+\n| store_id | date       | sales |\n+----------+------------+-------+\n| S1       | 2023-01-01 | 100   |\n| S1       | 2023-01-02 | 150   |\n| S1       | 2023-01-03 | 200   |",
      "sampleOutput": "df_rolling: (store_id, date, rolling_sales)\n+----------+------------+---------------+\n| store_id | date       | rolling_sales |\n+----------+------------+---------------+\n| S1       | 2023-01-02 | 450           |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-57",
      "title": "Find Consecutive Login Streaks",
      "description": "For each user, identify the maximum number of consecutive days they logged in. Use lag function and running difference technique to group streaks.",
      "sampleInput": "df: (user_id, login_date)\n+---------+------------+\n| user_id | login_date |\n+---------+------------+\n| U1      | 2023-01-01 |\n| U1      | 2023-01-02 |\n| U1      | 2023-01-04 |\n| U1      | 2023-01-05 |\n| U2      | 2023-01-01 |",
      "sampleOutput": "df_streaks: (user_id, max_streak)\n+---------+------------+\n| user_id | max_streak |\n+---------+------------+\n| U1      | 2          |\n| U2      | 1          |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-58",
      "title": "Impute Missing Temperature by Location Average",
      "description": "You have weather sensor readings with some missing temperature values. Fill null temperatures with the average temperature for that sensor's location.",
      "sampleInput": "df: (sensor_id, location, temperature)\n+-----------+----------+------------+\n| sensor_id | location | temperature|\n+-----------+----------+------------+\n| S1        | Zone1    | 22.5       |\n| S2        | Zone1    | null       |\n| S3        | Zone2    | 20.0       |",
      "sampleOutput": "df_filled: (sensor_id, temperature)\n+-----------+------------+\n| sensor_id | temperature|\n+-----------+------------+\n| S2        | 22.5       |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-59",
      "title": "Deduplicate Records Based on Timestamp and ID",
      "description": "Given a dataset with possible duplicate entries for the same ID and timestamp, retain only the most recent record per ID. Use `row_number` with descending time.",
      "sampleInput": "df: (id, update_ts, value)\n+----+-------------------+-------+\n| id | update_ts         | value |\n+----+-------------------+-------+\n| A  | 2023-01-01 10:00  | X     |\n| A  | 2023-01-01 12:00  | Y     |\n| B  | 2023-01-02 09:00  | Z     |",
      "sampleOutput": "df_deduped: (id, update_ts, value)\n+----+-------------------+-------+\n| id | update_ts         | value |\n+----+-------------------+-------+\n| A  | 2023-01-01 12:00  | Y     |\n| B  | 2023-01-02 09:00  | Z     |",
      "difficulty": "Hard"
    },
    {
      "id": "psi-60",
      "title": "Detect Anomalies Using Z-Score",
      "description": "Given a DataFrame of numerical sensor readings, compute z-score and flag readings that deviate more than 2 standard deviations from the mean for that sensor.",
      "sampleInput": "df: (sensor_id, reading)\n+-----------+---------+\n| sensor_id | reading |\n+-----------+---------+\n| S1        | 10      |\n| S1        | 12      |\n| S1        | 50      |",
      "sampleOutput": "df_anomalies: (sensor_id, reading, is_anomaly)\n+-----------+---------+------------+\n| sensor_id | reading | is_anomaly |\n+-----------+---------+------------+\n| S1        | 50      | True       |",
      "difficulty": "Hard"
    }
  ],

  'pyspark-advanced': [
    {
      "id": "psa-1",
      "title": "Identify Null Columns in a DataFrame",
      "description": "You are given a DataFrame with multiple columns. Your task is to identify and return a list of all columns that contain at least one NULL value. This problem tests your understanding of PySpark's null handling and aggregation functions. It is important in data quality checks and validation steps in ETL pipelines, where missing data needs to be identified and treated accordingly.",
      "sampleInput": "Schema: id INT, name STRING, age INT\nData:\n+----+--------+-----+\n| id | name   | age |\n+----+--------+-----+\n| 1  | Alice  | 30  |\n| 2  | NULL   | 25  |\n| 3  | Bob    | NULL|\n+----+--------+-----+",
      "sampleOutput": "Columns with nulls: ['name', 'age']",
      "difficulty": "Easy"
    },
    {
      "id": "psa-2",
      "title": "Flatten Nested Struct Columns",
      "description": "Given a DataFrame that includes nested StructType columns (i.e., JSON-like hierarchical data), write PySpark code to flatten the structure so that each nested field becomes a top-level column. This is a common requirement when dealing with semi-structured data such as JSON, especially before loading it into relational databases or using it in flat-table reports.",
      "sampleInput": "Schema: id INT, info STRUCT<name: STRING, age: INT>\nData:\n+----+-------------------+\n| id | info              |\n+----+-------------------+\n| 1  | {Alice, 30}       |\n| 2  | {Bob, 25}         |\n+----+-------------------+",
      "sampleOutput": "Schema: id INT, name STRING, age INT\n+----+-------+-----+\n| id | name  | age |\n+----+-------+-----+\n| 1  | Alice | 30  |\n| 2  | Bob   | 25  |\n+----+-------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-3",
      "title": "Convert DataFrame to Dictionary",
      "description": "You are given a PySpark DataFrame with two columns: `key` and `value`. Convert this DataFrame into a Python dictionary using PySpark transformations and actions. This problem is useful in real-world applications where configuration, lookup tables, or broadcast variables are derived from DataFrames and converted to native Python structures for quick access.",
      "sampleInput": "Schema: key STRING, value INT\nData:\n+-------+--------+\n| key   | value  |\n+-------+--------+\n| A     | 100    |\n| B     | 200    |\n+-------+--------+",
      "sampleOutput": "Result: {'A': 100, 'B': 200}",
      "difficulty": "Easy"
    },
    {
      "id": "psa-4",
      "title": "Check for Duplicate Rows",
      "description": "Given a DataFrame, write PySpark logic to detect duplicate rows across all columns. Your task is to return those duplicated rows. This is often used as a data quality check before storing data in warehouses or using it for downstream analytics to ensure uniqueness and avoid skewed results.",
      "sampleInput": "Schema: id INT, name STRING\nData:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n| 2  | Bob    |\n| 1  | Alice  |\n+----+--------+",
      "sampleOutput": "Duplicate Rows:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n+----+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-5",
      "title": "Add Multiple Columns Using selectExpr",
      "description": "You are provided with a DataFrame containing employee salary and name. Use `selectExpr` to derive two additional columns: one that doubles the salary (`double_salary`) and another that converts the name to uppercase (`upper_name`). This tests your ability to use SQL-like expressions in PySpark for multi-column transformations efficiently, which is useful when dealing with derived columns in production jobs.",
      "sampleInput": "Schema: id INT, name STRING, salary INT\nData:\n+----+--------+--------+\n| id | name   | salary |\n+----+--------+--------+\n| 1  | Alice  | 1000   |\n| 2  | Bob    | 1500   |\n+----+--------+--------+",
      "sampleOutput": "Schema: id, name, salary, double_salary, upper_name\n+----+--------+--------+--------------+------------+\n| id | name   | salary | double_salary| upper_name |\n+----+--------+--------+--------------+------------+\n| 1  | Alice  | 1000   | 2000         | ALICE      |\n| 2  | Bob    | 1500   | 3000         | BOB        |\n+----+--------+--------+--------------+------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-6",
      "title": "Explode Array Column to Rows",
      "description": "You are given a DataFrame where one column contains arrays of values (e.g., list of items bought). Your task is to explode this array column so that each element becomes a separate row, while keeping the rest of the columns unchanged. This is commonly used when dealing with JSON or API ingested data where nested arrays need to be normalized for analysis or joins.",
      "sampleInput": "Schema: user_id INT, items ARRAY<STRING>\nData:\n+---------+----------------------+\n| user_id | items                |\n+---------+----------------------+\n| 1       | [apple, banana]      |\n| 2       | [orange]             |\n+---------+----------------------+",
      "sampleOutput": "Schema: user_id INT, item STRING\n+---------+--------+\n| user_id | item   |\n+---------+--------+\n| 1       | apple  |\n| 1       | banana |\n| 2       | orange |\n+---------+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-7",
      "title": "Filter Rows Based on Column List",
      "description": "Given a DataFrame and a list of values in Python, filter the DataFrame to keep only those rows where a specific column's value is in that list. This task tests your ability to integrate Python variables (like lists) into PySpark queries, which is a common pattern in dynamic ETL pipelines or user-defined filtering.",
      "sampleInput": "Schema: id INT, city STRING\nData:\n+----+------------+\n| id | city       |\n+----+------------+\n| 1  | Mumbai     |\n| 2  | Delhi      |\n| 3  | Bangalore  |\n+----+------------+\nPython List: ['Mumbai', 'Bangalore']",
      "sampleOutput": "Filtered Rows:\n+----+-----------+\n| id | city      |\n+----+-----------+\n| 1  | Mumbai    |\n| 3  | Bangalore |\n+----+-----------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-8",
      "title": "Rename All Columns to Uppercase",
      "description": "Write a PySpark program to convert all column names in a given DataFrame to uppercase. This helps ensure consistency across datasets, especially when ingesting from different sources (e.g., CSV, databases) that may use inconsistent casing for column headers.",
      "sampleInput": "Schema: id INT, name STRING, city STRING\nData:\n+----+--------+---------+\n| id | name   | city    |\n+----+--------+---------+\n| 1  | Alice  | Mumbai  |\n| 2  | Bob    | Delhi   |\n+----+--------+---------+",
      "sampleOutput": "Schema: ID INT, NAME STRING, CITY STRING\n+----+--------+---------+\n| ID | NAME   | CITY    |\n+----+--------+---------+\n| 1  | Alice  | Mumbai  |\n| 2  | Bob    | Delhi   |\n+----+--------+---------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-9",
      "title": "Replace Nulls with Default Values",
      "description": "You are provided a DataFrame that may contain NULL values. Your task is to replace nulls in specific columns with provided default values using `fillna`. This is a frequent requirement in data cleaning pipelines to avoid breaking aggregations or to prepare data for machine learning models.",
      "sampleInput": "Schema: id INT, name STRING, age INT\nData:\n+----+--------+-----+\n| id | name   | age |\n+----+--------+-----+\n| 1  | Alice  | 30  |\n| 2  | NULL   | NULL|\n+----+--------+-----+\nDefault Replacements: name='Unknown', age=0",
      "sampleOutput": "Schema: id INT, name STRING, age INT\n+----+---------+-----+\n| id | name    | age |\n+----+---------+-----+\n| 1  | Alice   | 30  |\n| 2  | Unknown | 0   |\n+----+---------+-----+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-10",
      "title": "Create Column from Existing Columns with Expression",
      "description": "Given a DataFrame, create a new column based on a transformation or arithmetic expression using two or more existing columns. For example, compute a 'total_cost' column as 'unit_price * quantity'. This task is foundational for any feature engineering or derived metric calculation during ETL processing.",
      "sampleInput": "Schema: item STRING, unit_price DOUBLE, quantity INT\nData:\n+--------+------------+----------+\n| item   | unit_price | quantity |\n+--------+------------+----------+\n| Apple  | 10.5       | 3        |\n| Banana | 5.0        | 6        |\n+--------+------------+----------+",
      "sampleOutput": "Schema: item, unit_price, quantity, total_cost\n+--------+------------+----------+------------+\n| item   | unit_price | quantity | total_cost |\n+--------+------------+----------+------------+\n| Apple  | 10.5       | 3        | 31.5       |\n| Banana | 5.0        | 6        | 30.0       |\n+--------+------------+----------+------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-11",
      "title": "Convert Timestamp to Date",
      "description": "You are given a DataFrame with a column of type `timestamp`. Your task is to extract the `date` part (i.e., year-month-day) from the timestamp and add it as a new column. This is frequently used in partitioning logic, time-based aggregation, or simplifying timestamp data for reporting and dashboards.",
      "sampleInput": "Schema: id INT, event_time TIMESTAMP\nData:\n+----+-----------------------+\n| id | event_time            |\n+----+-----------------------+\n| 1  | 2023-08-10 14:30:00   |\n| 2  | 2023-08-11 16:45:00   |\n+----+-----------------------+",
      "sampleOutput": "Schema: id, event_time, event_date\n+----+-----------------------+------------+\n| id | event_time            | event_date |\n+----+-----------------------+------------+\n| 1  | 2023-08-10 14:30:00   | 2023-08-10 |\n| 2  | 2023-08-11 16:45:00   | 2023-08-11 |\n+----+-----------------------+------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-12",
      "title": "Calculate String Length for Each Row",
      "description": "You are given a DataFrame containing text in a column. Your task is to create a new column that holds the length of each string using the `length()` function. This is often used in data validation, profiling, or to apply logic based on string size (e.g., username length constraints).",
      "sampleInput": "Schema: id INT, username STRING\nData:\n+----+----------+\n| id | username |\n+----+----------+\n| 1  | alice    |\n| 2  | bob123   |\n+----+----------+",
      "sampleOutput": "Schema: id, username, username_length\n+----+----------+------------------+\n| id | username | username_length |\n+----+----------+------------------+\n| 1  | alice    | 5                |\n| 2  | bob123   | 6                |\n+----+----------+------------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-13",
      "title": "Drop Duplicate Rows Based on Selected Columns",
      "description": "From a DataFrame, remove duplicate rows but only based on a subset of columns. This means that even if other columns differ, rows are considered duplicates if the selected subset matches. This is especially useful when deduplicating based on business keys or logical groupings (e.g., email + mobile).",
      "sampleInput": "Schema: id INT, name STRING, city STRING\nData:\n+----+--------+--------+\n| id | name   | city   |\n+----+--------+--------+\n| 1  | Alice  | NYC    |\n| 2  | Alice  | LA     |\n| 3  | Alice  | NYC    |\n+----+--------+--------+\nDrop duplicates based on: name, city",
      "sampleOutput": "Schema: id, name, city\n+----+--------+--------+\n| id | name   | city   |\n+----+--------+--------+\n| 1  | Alice  | NYC    |\n| 2  | Alice  | LA     |\n+----+--------+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-14",
      "title": "Filter Out Rows with Special Characters",
      "description": "You are provided with a DataFrame containing text data. Your task is to filter out all rows where a specified string column contains any special characters (like @, #, $, etc.). This is often part of input sanitization before feeding data into downstream systems that do not support such characters (e.g., usernames, product codes).",
      "sampleInput": "Schema: id INT, username STRING\nData:\n+----+------------+\n| id | username   |\n+----+------------+\n| 1  | user_123   |\n| 2  | @dmin!     |\n| 3  | helloWorld |\n+----+------------+",
      "sampleOutput": "Filtered Rows:\n+----+------------+\n| id | username   |\n+----+------------+\n| 1  | user_123   |\n| 3  | helloWorld |\n+----+------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-15",
      "title": "Concatenate Columns with Separator",
      "description": "Given a DataFrame with multiple columns, write a PySpark program to concatenate two or more string columns into one, separated by a given delimiter (e.g., '-', '_', '|'). This is frequently used to generate composite keys, file names, display names, or for exporting identifiers.",
      "sampleInput": "Schema: first_name STRING, last_name STRING\nData:\n+------------+-----------+\n| first_name | last_name |\n+------------+-----------+\n| John       | Doe       |\n| Alice      | Smith     |\n+------------+-----------+\nDelimiter: '_'",
      "sampleOutput": "Schema: first_name, last_name, full_name\n+------------+-----------+--------------+\n| first_name | last_name | full_name    |\n+------------+-----------+--------------+\n| John       | Doe       | John_Doe     |\n| Alice      | Smith     | Alice_Smith  |\n+------------+-----------+--------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-16",
      "title": "Add Ingestion Timestamp Column",
      "description": "You are processing a real-time or batch dataset, and you need to track when each row was ingested into your pipeline. Your task is to add a new column called `ingestion_time` that captures the current timestamp when the data is read or transformed. This is especially useful for audit logging, time-based partitioning, and debugging late-arriving data in data lakes.",
      "sampleInput": "Schema: id INT, name STRING\nData:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n| 2  | Bob    |\n+----+--------+",
      "sampleOutput": "Schema: id, name, ingestion_time (TIMESTAMP)\n+----+--------+---------------------+\n| id | name   | ingestion_time      |\n+----+--------+---------------------+\n| 1  | Alice  | 2025-08-06 14:30:00 |\n| 2  | Bob    | 2025-08-06 14:30:00 |\n+----+--------+---------------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-17",
      "title": "Generate Row Number Column Without Window",
      "description": "You are required to generate a simple row number for each row in the DataFrame without using window functions. This is typically useful in creating synthetic keys or exporting indexed datasets for downstream consumers. Use the `monotonically_increasing_id()` function and adjust as needed.",
      "sampleInput": "Schema: name STRING\nData:\n+--------+\n| name   |\n+--------+\n| Alice  |\n| Bob    |\n| Carol  |\n+--------+",
      "sampleOutput": "Schema: name, row_id\n+--------+--------+\n| name   | row_id |\n+--------+--------+\n| Alice  | 0      |\n| Bob    | 1      |\n| Carol  | 2      |\n+--------+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-18",
      "title": "Get First N Rows per Group Without Window Functions",
      "description": "Write PySpark logic to retrieve the first N rows per group (e.g., top 2 products per category), but **without using window functions**. This tests your ability to creatively use joins, groupBy, explode, or collect_list with slicing, which is helpful in limited environments where window functions are restricted.",
      "sampleInput": "Schema: category STRING, product STRING\nData:\n+----------+-----------+\n| category | product   |\n+----------+-----------+\n| Fruits   | Apple     |\n| Fruits   | Banana    |\n| Fruits   | Mango     |\n| Veggies  | Carrot    |\n| Veggies  | Peas      |\n+----------+-----------+\nRequired: First 2 products per category",
      "sampleOutput": "Output:\n+----------+-----------+\n| category | product   |\n+----------+-----------+\n| Fruits   | Apple     |\n| Fruits   | Banana    |\n| Veggies  | Carrot    |\n| Veggies  | Peas      |\n+----------+-----------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-19",
      "title": "Count Words in Text Column",
      "description": "You are provided a DataFrame with a column of text sentences. Write PySpark code to count how many words are present in each sentence and store it in a new column. This is often needed in NLP pipelines or when assessing field verbosity in unstructured text.",
      "sampleInput": "Schema: id INT, text STRING\nData:\n+----+-------------------------+\n| id | text                    |\n+----+-------------------------+\n| 1  | Hello world             |\n| 2  | Spark is fast and easy |\n+----+-------------------------+",
      "sampleOutput": "Schema: id, text, word_count\n+----+-------------------------+------------+\n| id | text                    | word_count |\n+----+-------------------------+------------+\n| 1  | Hello world             | 2          |\n| 2  | Spark is fast and easy | 5          |\n+----+-------------------------+------------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-20",
      "title": "Drop Columns Dynamically from a List",
      "description": "Given a list of column names in Python, write a PySpark job to drop those columns from a DataFrame dynamically. This is commonly used in parameterized ETL pipelines where unwanted or sensitive columns need to be removed at runtime (e.g., drop PII fields before exporting data).",
      "sampleInput": "Schema: id INT, name STRING, email STRING, phone STRING\nData:\n+----+--------+--------------------+-----------+\n| id | name   | email              | phone     |\n+----+--------+--------------------+-----------+\n| 1  | Alice  | alice@example.com  | 9999999999|\n| 2  | Bob    | bob@example.com    | 8888888888|\n+----+--------+--------------------+-----------+\nPython List: ['email', 'phone']",
      "sampleOutput": "Schema: id INT, name STRING\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\n| 2  | Bob    |\n+----+--------+",
      "difficulty": "Easy"
    },
    {
      "id": "psa-21",
      "title": "Get Top-N Records per Group Using Window Functions",
      "description": "You are given a sales dataset where each row represents a transaction with a category and sales amount. Your task is to find the top 2 transactions (by amount) for each category. Use PySpark window functions like `row_number()` to partition by category and order within the group. This pattern is common in ranking, leaderboard generation, or selecting best-performing entities within segments.",
      "sampleInput": "Schema: category STRING, transaction_id INT, amount INT\nData:\n+----------+---------------+--------+\n| category | transaction_id| amount |\n+----------+---------------+--------+\n| A        | 101           | 500    |\n| A        | 102           | 300    |\n| A        | 103           | 700    |\n| B        | 201           | 200    |\n| B        | 202           | 600    |\n+----------+---------------+--------+",
      "sampleOutput": "Top 2 by amount per category:\n+----------+---------------+--------+\n| category | transaction_id| amount |\n+----------+---------------+--------+\n| A        | 103           | 700    |\n| A        | 101           | 500    |\n| B        | 202           | 600    |\n| B        | 201           | 200    |\n+----------+---------------+--------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-22",
      "title": "Find Consecutive Login Days per User",
      "description": "You are given a logins table with `user_id` and `login_date`. Identify streaks of consecutive login days per user using window functions. This is a common scenario in engagement analytics and churn detection — e.g., reward users who log in 3 or more days in a row.",
      "sampleInput": "Schema: user_id INT, login_date DATE\nData:\n+---------+-------------+\n| user_id | login_date  |\n+---------+-------------+\n| 1       | 2025-08-01  |\n| 1       | 2025-08-02  |\n| 1       | 2025-08-04  |\n| 2       | 2025-08-01  |\n| 2       | 2025-08-03  |\n+---------+-------------+",
      "sampleOutput": "Output:\nUser 1 has 2-day streak (Aug 1-2), then a gap before Aug 4.\nUser 2 has no streak.\nReturn longest streak per user.",
      "difficulty": "Medium"
    },
    {
      "id": "psa-23",
      "title": "Calculate Rolling Average Over N Days",
      "description": "Given a DataFrame containing daily stock prices, calculate a 3-day rolling average for each stock using `window` and `rowsBetween`. This pattern is widely used in financial applications, anomaly detection, and trend analysis.",
      "sampleInput": "Schema: stock STRING, date DATE, price DOUBLE\nData:\n+--------+------------+--------+\n| stock  | date       | price  |\n+--------+------------+--------+\n| AAPL   | 2025-08-01 | 150.0  |\n| AAPL   | 2025-08-02 | 153.0  |\n| AAPL   | 2025-08-03 | 156.0  |\n| AAPL   | 2025-08-04 | 160.0  |\n+--------+------------+--------+",
      "sampleOutput": "Output (with 3-day rolling avg):\n+--------+------------+--------+----------------+\n| stock  | date       | price  | avg_last_3_days|\n+--------+------------+--------+----------------+\n| AAPL   | 2025-08-01 | 150.0  | 150.0          |\n| AAPL   | 2025-08-02 | 153.0  | 151.5          |\n| AAPL   | 2025-08-03 | 156.0  | 153.0          |\n| AAPL   | 2025-08-04 | 160.0  | 156.3          |\n+--------+------------+--------+----------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-24",
      "title": "Pivot Table: Sales by Month and Category",
      "description": "You are given a dataset with sales transactions including month, category, and amount. Create a pivot table where each row represents a category and columns represent months, showing the total sales amount in each. This use of `pivot()` is crucial in reporting, cross-tab analysis, and creating flat analytics tables for dashboards.",
      "sampleInput": "Schema: category STRING, month STRING, amount INT\nData:\n+----------+--------+--------+\n| category | month  | amount |\n+----------+--------+--------+\n| A        | Jan    | 100    |\n| A        | Feb    | 150    |\n| B        | Jan    | 200    |\n+----------+--------+--------+",
      "sampleOutput": "Output:\n+----------+-----+-----+\n| category | Jan | Feb |\n+----------+-----+-----+\n| A        | 100 | 150 |\n| B        | 200 | null|\n+----------+-----+-----+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-25",
      "title": "Join Latest Records Using Anti Join + Window",
      "description": "You are given two datasets — one with all employee records (`employee_updates`) and another with only the latest ones (`latest_updates`). Join them in such a way that you get only the outdated records (i.e., which are not the latest) for each employee. This requires combining `row_number()` with `left_anti` join. It's commonly used in slowly changing dimension (SCD) updates, data correction, and audit trail tracking.",
      "sampleInput": "employee_updates:\n+----+----------+-----------+\n| id | name     | updated_on|\n+----+----------+-----------+\n| 1  | Alice    | 2025-08-01|\n| 1  | Alice_v2 | 2025-08-03|\n| 2  | Bob      | 2025-08-02|\n\nlatest_updates:\n+----+----------+-----------+\n| id | name     | updated_on|\n+----+----------+-----------+\n| 1  | Alice_v2 | 2025-08-03|\n+----+----------+-----------+",
      "sampleOutput": "Outdated Records:\n+----+--------+------------+\n| id | name   | updated_on |\n+----+--------+------------+\n| 1  | Alice  | 2025-08-01 |\n| 2  | Bob    | 2025-08-02 |\n+----+--------+------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-26",
      "title": "Find Second Highest Salary per Department",
      "description": "Given an employee DataFrame with salary and department information, return the second highest salary in each department. This problem tests your ability to use window functions with partitioning and row numbering.",
      "sampleInput": "Schema: emp_id INT, name STRING, dept STRING, salary INT\nData:\n+--------+--------+--------+--------+\n| emp_id | name   | dept   | salary |\n+--------+--------+--------+--------+\n| 1      | Alice  | HR     | 4000   |\n| 2      | Bob    | HR     | 3500   |\n| 3      | Carol  | HR     | 3000   |\n| 4      | David  | IT     | 6000   |\n| 5      | Evan   | IT     | 5500   |\n+--------+--------+--------+--------+",
      "sampleOutput": "Schema: dept STRING, second_highest_salary INT\n+--------+------------------------+\n| dept   | second_highest_salary |\n+--------+------------------------+\n| HR     | 3500                   |\n| IT     | 5500                   |\n+--------+------------------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-27",
      "title": "Compute Daily Rolling Average of Sales",
      "description": "You are given sales data with a date field. Your task is to compute a rolling average over the past 3 days (including the current day) for each product. This is a common scenario in business reporting and forecasting where moving averages are used to smooth out trends.",
      "sampleInput": "Schema: product STRING, date DATE, sales INT\nData:\n+---------+------------+-------+\n| product | date       | sales |\n+---------+------------+-------+\n| A       | 2023-01-01 | 100   |\n| A       | 2023-01-02 | 200   |\n| A       | 2023-01-03 | 300   |\n| A       | 2023-01-04 | 400   |\n+---------+------------+-------+",
      "sampleOutput": "Schema: product STRING, date DATE, rolling_avg DOUBLE\n+---------+------------+-------------+\n| product | date       | rolling_avg |\n+---------+------------+-------------+\n| A       | 2023-01-01 | 100.0       |\n| A       | 2023-01-02 | 150.0       |\n| A       | 2023-01-03 | 200.0       |\n| A       | 2023-01-04 | 300.0       |\n+---------+------------+-------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-28",
      "title": "Identify Product with Maximum Monthly Sales per Region",
      "description": "Given a DataFrame with product sales by region and date, identify the product with the highest total sales per region per month. This tests your ability to perform grouping, aggregation, and row ranking using window functions.",
      "sampleInput": "Schema: region STRING, product STRING, date DATE, sales INT\nData:\n+--------+---------+------------+-------+\n| region | product | date       | sales |\n+--------+---------+------------+-------+\n| East   | A       | 2023-07-01 | 100   |\n| East   | B       | 2023-07-02 | 200   |\n| West   | A       | 2023-07-03 | 150   |\n| West   | C       | 2023-07-04 | 300   |\n| East   | A       | 2023-07-05 | 150   |\n+--------+---------+------------+-------+",
      "sampleOutput": "Schema: region STRING, month STRING, top_product STRING, total_sales INT\n+--------+--------+-------------+-------------+\n| region | month  | top_product | total_sales |\n+--------+--------+-------------+-------------+\n| East   | 2023-07| A           | 250         |\n| West   | 2023-07| C           | 300         |\n+--------+--------+-------------+-------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-29",
      "title": "Count Number of Employees Joining Each Month",
      "description": "Given employee data with joining dates, count the number of employees who joined in each month. Extract the month and year from the joining date and then perform the aggregation.",
      "sampleInput": "Schema: emp_id INT, name STRING, joining_date DATE\nData:\n+--------+--------+--------------+\n| emp_id | name   | joining_date |\n+--------+--------+--------------+\n| 1      | Alice  | 2023-01-15   |\n| 2      | Bob    | 2023-01-20   |\n| 3      | Carol  | 2023-02-10   |\n+--------+--------+--------------+",
      "sampleOutput": "Schema: joining_month STRING, employee_count INT\n+---------------+------------------+\n| joining_month | employee_count   |\n+---------------+------------------+\n| 2023-01       | 2                |\n| 2023-02       | 1                |\n+---------------+------------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-30",
      "title": "Group by with Average and Standard Deviation",
      "description": "You are given a DataFrame with students' scores grouped by subject. Calculate both average and standard deviation of scores for each subject. This will test your ability to use multiple aggregations during group-by operations.",
      "sampleInput": "Schema: student STRING, subject STRING, score INT\nData:\n+---------+---------+-------+\n| student | subject | score |\n+---------+---------+-------+\n| Alice   | Math    | 90    |\n| Bob     | Math    | 80    |\n| Carol   | Math    | 70    |\n| Alice   | English | 85    |\n| Bob     | English | 95    |\n+---------+---------+-------+",
      "sampleOutput": "Schema: subject STRING, avg_score DOUBLE, stddev_score DOUBLE\n+---------+-----------+---------------+\n| subject | avg_score | stddev_score  |\n+---------+-----------+---------------+\n| Math    | 80.0      | 10.0          |\n| English | 90.0      | 7.07          |\n+---------+-----------+---------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-31",
      "title": "Apply Lag with Custom Default Value",
      "description": "Write PySpark code using the `lag()` window function to retrieve the previous transaction amount for each user. If the previous value does not exist (i.e., for the first record), return a custom default value like 0 instead of null.",
      "sampleInput": "Schema: user_id INT, transaction_date DATE, amount INT\nData:\n+--------+----------------+--------+\n|user_id |transaction_date| amount |\n+--------+----------------+--------+\n|1       |2023-01-01      | 100    |\n|1       |2023-01-05      | 200    |\n|1       |2023-01-10      | 150    |\n|2       |2023-01-03      | 300    |\n+--------+----------------+--------+",
      "sampleOutput": "Schema: user_id, transaction_date, amount, prev_amount\n+--------+----------------+--------+------------+\n|user_id |transaction_date| amount | prev_amount|\n+--------+----------------+--------+------------+\n|1       |2023-01-01      | 100    | 0          |\n|1       |2023-01-05      | 200    | 100        |\n|1       |2023-01-10      | 150    | 200        |\n|2       |2023-01-03      | 300    | 0          |\n+--------+----------------+--------+------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-32",
      "title": "Extract Domain from Email Address",
      "description": "Given a DataFrame with email addresses, write a PySpark expression to extract the domain name (everything after '@') and add it as a new column. Use PySpark string functions like split or regexp_extract.",
      "sampleInput": "Schema: id INT, email STRING\nData:\n+----+----------------------+\n| id | email                |\n+----+----------------------+\n| 1  | alice@example.com    |\n| 2  | bob@test.org         |\n+----+----------------------+",
      "sampleOutput": "Schema: id, email, domain\n+----+-------------------+------------+\n| id | email             | domain     |\n+----+-------------------+------------+\n| 1  | alice@example.com | example.com|\n| 2  | bob@test.org      | test.org   |\n+----+-------------------+------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-33",
      "title": "Identify First and Last Transactions per User",
      "description": "Use window functions to identify the first and last transaction date for each user based on the transaction timestamp. Add two new columns: first_txn_date and last_txn_date. Use window partitioning and aggregation.",
      "sampleInput": "Schema: user_id INT, txn_date DATE\nData:\n+--------+------------+\n|user_id | txn_date   |\n+--------+------------+\n|1       |2023-01-01  |\n|1       |2023-01-05  |\n|1       |2023-01-10  |\n|2       |2023-01-02  |\n|2       |2023-01-09  |\n+--------+------------+",
      "sampleOutput": "Schema: user_id, txn_date, first_txn_date, last_txn_date\n+--------+------------+----------------+---------------+\n|user_id | txn_date   | first_txn_date | last_txn_date |\n+--------+------------+----------------+---------------+\n|1       |2023-01-01  |2023-01-01      |2023-01-10     |\n|1       |2023-01-05  |2023-01-01      |2023-01-10     |\n|1       |2023-01-10  |2023-01-01      |2023-01-10     |\n|2       |2023-01-02  |2023-01-02      |2023-01-09     |\n|2       |2023-01-09  |2023-01-02      |2023-01-09     |\n+--------+------------+----------------+---------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-34",
      "title": "Create JSON String from Multiple Columns",
      "description": "Write PySpark code to generate a new column that represents selected fields as a JSON string. This is helpful for logging or exporting rows in structured format. Use functions like `to_json()` and `struct()`.",
      "sampleInput": "Schema: id INT, name STRING, age INT\nData:\n+----+-------+-----+\n| id | name  | age |\n+----+-------+-----+\n| 1  | Alice | 30  |\n| 2  | Bob   | 25  |\n+----+-------+-----+",
      "sampleOutput": "Schema: id, name, age, json_data\n+----+-------+-----+-------------------------+\n| id | name  | age | json_data               |\n+----+-------+-----+-------------------------+\n| 1  | Alice | 30  | {\"name\":\"Alice\",\"age\":30}|\n| 2  | Bob   | 25  | {\"name\":\"Bob\",\"age\":25}  |\n+----+-------+-----+-------------------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-35",
      "title": "Group and Concatenate Strings per Group",
      "description": "For a given DataFrame, group by a categorical column and concatenate the string values from another column into a single comma-separated string using `collect_list()` and `concat_ws()`.",
      "sampleInput": "Schema: group_id INT, item STRING\nData:\n+---------+--------+\n|group_id | item   |\n+---------+--------+\n|1        | Apple  |\n|1        | Banana |\n|2        | Carrot |\n|2        | Dates  |\n+---------+--------+",
      "sampleOutput": "Schema: group_id, item_list\n+---------+-----------------+\n|group_id | item_list       |\n+---------+-----------------+\n|1        | Apple,Banana    |\n|2        | Carrot,Dates    |\n+---------+-----------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-36",
      "title": "Find Most Frequent Value per Group",
      "description": "Given a DataFrame with a categorical column and a group identifier, write PySpark code to find the most frequent value (mode) in the category column for each group. This requires using window functions along with `count`, `rank` or `row_number`.",
      "sampleInput": "Schema: group_id INT, item STRING\nData:\n+----------+--------+\n| group_id | item   |\n+----------+--------+\n| 1        | apple  |\n| 1        | apple  |\n| 1        | orange |\n| 2        | banana |\n| 2        | banana |\n| 2        | apple  |\n+----------+--------+",
      "sampleOutput": "Schema: group_id INT, most_frequent_item STRING\n+----------+--------------------+\n| group_id | most_frequent_item |\n+----------+--------------------+\n| 1        | apple              |\n| 2        | banana             |\n+----------+--------------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-37",
      "title": "Convert Delimited String Column into Array",
      "description": "Given a column that contains delimited string values (e.g., comma-separated tags), convert it into an array column. Then explode it to create one row per element if required.",
      "sampleInput": "Schema: id INT, tags STRING\nData:\n+----+---------------------+\n| id | tags                |\n+----+---------------------+\n| 1  | spark,hadoop,scala  |\n| 2  | sql,python           |\n+----+---------------------+",
      "sampleOutput": "Schema: id INT, tag STRING\n+----+--------+\n| id | tag    |\n+----+--------+\n| 1  | spark  |\n| 1  | hadoop |\n| 1  | scala  |\n| 2  | sql    |\n| 2  | python |\n+----+--------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-38",
      "title": "Apply Custom UDF for Complex Transformation",
      "description": "Write a PySpark User Defined Function (UDF) that performs a custom logic on each row. For example, given a full name column, extract and return a dictionary with first and last name split by space.",
      "sampleInput": "Schema: id INT, full_name STRING\nData:\n+----+--------------+\n| id | full_name    |\n+----+--------------+\n| 1  | Alice Smith  |\n| 2  | Bob Johnson  |\n+----+--------------+",
      "sampleOutput": "Schema: id INT, name_info MAP<STRING, STRING>\n+----+-----------------------------+\n| id | name_info                  |\n+----+-----------------------------+\n| 1  | {'first': 'Alice', 'last': 'Smith'} |\n| 2  | {'first': 'Bob', 'last': 'Johnson'} |\n+----+-----------------------------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-39",
      "title": "Calculate Percentage of Total per Group",
      "description": "Given a DataFrame with sales data grouped by category, calculate the percentage contribution of each row's value to the total of its group. This requires use of window functions and aggregation.",
      "sampleInput": "Schema: category STRING, product STRING, sales INT\nData:\n+----------+----------+-------+\n| category | product  | sales |\n+----------+----------+-------+\n| A        | apple    | 100   |\n| A        | orange   | 200   |\n| B        | banana   | 300   |\n| B        | mango    | 100   |\n+----------+----------+-------+",
      "sampleOutput": "Schema: category, product, sales, percentage\n+----------+----------+-------+-----------+\n| category | product  | sales | percentage|\n+----------+----------+-------+-----------+\n| A        | apple    | 100   | 33.33     |\n| A        | orange   | 200   | 66.67     |\n| B        | banana   | 300   | 75.00     |\n| B        | mango    | 100   | 25.00     |\n+----------+----------+-------+-----------+",
      "difficulty": "Medium"
    },
    {
      "id": "psa-40",
      "title": "Ranking Within Partitions Based on Multiple Columns",
      "description": "Using PySpark's window functions, rank rows within each partition based on two columns: first by score (descending), then by timestamp (ascending). Handle ties with dense rank.",
      "sampleInput": "Schema: class STRING, student STRING, score INT, ts TIMESTAMP\nData:\n+-------+---------+-------+-------------------+\n| class | student | score | ts                |\n+-------+---------+-------+-------------------+\n| A     | John    | 90    | 2024-01-01 09:00  |\n| A     | Alice   | 90    | 2024-01-01 08:00  |\n| A     | Bob     | 85    | 2024-01-01 07:00  |\n+-------+---------+-------+-------------------+",
      "sampleOutput": "Schema: class, student, score, ts, rank\n+-------+---------+-------+-------------------+------+\n| class | student | score | ts                | rank |\n+-------+---------+-------+-------------------+------+\n| A     | Alice   | 90    | 2024-01-01 08:00  | 1    |\n| A     | John    | 90    | 2024-01-01 09:00  | 1    |\n| A     | Bob     | 85    | 2024-01-01 07:00  | 2    |\n+-------+---------+-------+-------------------+------+\n(Note: dense_rank used here)",
      "difficulty": "Medium"
    },
    {
      "id": "psa-41",
      "title": "Compute Rolling Average Within Time Window",
      "description": "Given a DataFrame with user activity logs (timestamped), compute the 1-hour rolling average of events per user. You should use a time-based window along with a rolling aggregation to show how many events happened per hour for each user.",
      "sampleInput": "Schema: user_id STRING, event_time TIMESTAMP\nData:\n+---------+-------------------+\n| user_id | event_time        |\n+---------+-------------------+\n| U1      | 2024-01-01 10:01  |\n| U1      | 2024-01-01 10:20  |\n| U1      | 2024-01-01 11:00  |\n| U2      | 2024-01-01 10:15  |\n+---------+-------------------+",
      "sampleOutput": "Schema: user_id, window_start, window_end, event_count\n+---------+-------------------+-------------------+-------------+\n| U1      | 2024-01-01 10:00  | 2024-01-01 11:00  | 2           |\n| U1      | 2024-01-01 11:00  | 2024-01-01 12:00  | 1           |\n| U2      | 2024-01-01 10:00  | 2024-01-01 11:00  | 1           |\n+---------+-------------------+-------------------+-------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-42",
      "title": "Explode and Aggregate Nested JSON Arrays",
      "description": "You are given a DataFrame where one column contains an array of JSON objects. Each object represents a product purchased with price and quantity. Write a PySpark job to explode the JSON array and compute total revenue per user.",
      "sampleInput": "Schema: user_id STRING, purchases ARRAY<STRUCT<product: STRING, price: DOUBLE, quantity: INT>>\nData:\n+--------+----------------------------------------------------+\n| user_id| purchases                                          |\n+--------+----------------------------------------------------+\n| U1     | [{A, 10.0, 2}, {B, 20.0, 1}]                        |\n| U2     | [{A, 10.0, 1}, {C, 15.0, 2}]                        |\n+--------+----------------------------------------------------+",
      "sampleOutput": "Schema: user_id, total_revenue\n+--------+---------------+\n| user_id| total_revenue |\n+--------+---------------+\n| U1     | 40.0          |\n| U2     | 40.0          |\n+--------+---------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-43",
      "title": "Group-wise Nested Aggregation Using Window",
      "description": "Given a DataFrame with transactions, compute for each user the transaction amount, along with the max, min, and average transaction for that user using window functions — all in a single DataFrame.",
      "sampleInput": "Schema: user_id STRING, transaction_id STRING, amount DOUBLE\nData:\n+---------+------------------+--------+\n| user_id | transaction_id   | amount |\n+---------+------------------+--------+\n| U1      | T1               | 100.0  |\n| U1      | T2               | 300.0  |\n| U2      | T3               | 200.0  |\n| U2      | T4               | 400.0  |\n+---------+------------------+--------+",
      "sampleOutput": "Schema: user_id, transaction_id, amount, max_amount, min_amount, avg_amount\n+---------+------------------+--------+------------+------------+------------+\n| U1      | T1               | 100.0  | 300.0      | 100.0      | 200.0      |\n| U1      | T2               | 300.0  | 300.0      | 100.0      | 200.0      |\n| U2      | T3               | 200.0  | 400.0      | 200.0      | 300.0      |\n| U2      | T4               | 400.0  | 400.0      | 200.0      | 300.0      |\n+---------+------------------+--------+------------+------------+------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-44",
      "title": "Apply UDF to Parse and Transform Complex String",
      "description": "You are given a DataFrame with logs that contain embedded key-value pairs as strings. Write a PySpark UDF to parse the string into a struct and extract specific fields.",
      "sampleInput": "Schema: id INT, log_entry STRING\nData:\n+----+-----------------------------------------+\n| id | log_entry                               |\n+----+-----------------------------------------+\n| 1  | user=U1,status=200,response_time=320ms  |\n| 2  | user=U2,status=500,response_time=800ms  |\n+----+-----------------------------------------+",
      "sampleOutput": "Schema: id, user, status, response_time\n+----+------+--------+---------------+\n| id | user | status | response_time |\n+----+------+--------+---------------+\n| 1  | U1   | 200    | 320           |\n| 2  | U2   | 500    | 800           |\n+----+------+--------+---------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-45",
      "title": "Sessionize User Events with Gaps Over 30 Minutes",
      "description": "Given a DataFrame of user events with timestamps, write a PySpark script to assign session IDs where a new session starts if there is a 30-minute gap between events for the same user. Use window functions and time difference calculations.",
      "sampleInput": "Schema: user_id STRING, event_time TIMESTAMP\nData:\n+--------+---------------------+\n| user_id| event_time          |\n+--------+---------------------+\n| U1     | 2024-01-01 10:00:00 |\n| U1     | 2024-01-01 10:20:00 |\n| U1     | 2024-01-01 11:00:00 |\n| U2     | 2024-01-01 10:10:00 |\n+--------+---------------------+",
      "sampleOutput": "Schema: user_id, event_time, session_id\n+--------+---------------------+------------+\n| user_id| event_time          | session_id |\n+--------+---------------------+------------+\n| U1     | 2024-01-01 10:00:00 | 1          |\n| U1     | 2024-01-01 10:20:00 | 1          |\n| U1     | 2024-01-01 11:00:00 | 2          |\n| U2     | 2024-01-01 10:10:00 | 1          |\n+--------+---------------------+------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-46",
      "title": "Read Nested JSON with Multi-level Structures",
      "description": "You are given a deeply nested JSON file. Write PySpark code to read the file and flatten all nested structures, including structs and arrays. Use `explode`, `withColumn`, and `selectExpr` to achieve a fully tabular structure.",
      "sampleInput": "File: nested_data.json\n{\n  \"user\": {\n    \"id\": 1,\n    \"details\": {\n      \"name\": \"Alice\",\n      \"contacts\": [\n        {\"type\": \"email\", \"value\": \"alice@example.com\"}\n      ]\n    }\n  }\n}",
      "sampleOutput": "Schema: id INT, name STRING, type STRING, value STRING\n+----+-------+-------+-------------------+\n| id | name  | type  | value             |\n+----+-------+-------+-------------------+\n| 1  | Alice | email | alice@example.com |\n+----+-------+-------+-------------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-47",
      "title": "Write Optimized Partitioned Parquet Files",
      "description": "Write a DataFrame to disk in Parquet format, partitioned by year and month. Apply Snappy compression and use `overwrite` mode. Verify the partitioning structure.",
      "sampleInput": "Schema: id INT, amount DOUBLE, year INT, month INT\n+----+--------+------+-------+\n| id | amount | year | month |\n+----+--------+------+-------+\n| 1  | 1000   | 2023 | 1     |\n| 2  | 2500   | 2023 | 1     |\n+----+--------+------+-------+",
      "sampleOutput": "Files saved to path: /output/year=2023/month=1/*.parquet\nUsing compression: snappy, mode: overwrite",
      "difficulty": "Hard"
    },
    {
      "id": "psa-48",
      "title": "Schema Evolution in Parquet Files",
      "description": "You have existing Parquet data with schema A (`id`, `name`). A new DataFrame includes an additional column `age`. Demonstrate schema merging by reading both paths together using `mergeSchema=true`.",
      "sampleInput": "Path 1 (old): id, name\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\nPath 2 (new): id, name, age\n+----+--------+-----+\n| id | name   | age |\n+----+--------+-----+\n| 2  | Bob    | 30  |",
      "sampleOutput": "Merged Schema: id INT, name STRING, age INT\n+----+--------+-----+\n| id | name   | age |\n+----+--------+-----+\n| 1  | Alice  | null|\n| 2  | Bob    | 30  |\n+----+--------+-----+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-49",
      "title": "Read Compressed Avro Files",
      "description": "Load Avro files compressed with Snappy, then extract nested fields from a struct. Use Spark’s `spark-avro` package.",
      "sampleInput": "Schema: id INT, profile STRUCT<name: STRING, email: STRING>\nAvro File: /data/users.avro (Snappy compressed)",
      "sampleOutput": "Schema: id INT, name STRING, email STRING\n+----+--------+-------------------+\n| id | name   | email             |\n+----+--------+-------------------+\n| 1  | Alice  | alice@example.com |\n+----+--------+-------------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-50",
      "title": "Delta Table Update with Merge Condition",
      "description": "You are given a Delta table `users` and a DataFrame with new user data. Perform a merge operation to update records if `id` matches, or insert if not.",
      "sampleInput": "Target Delta Table: id INT, name STRING\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alice  |\nUpdate DataFrame:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alicia |\n| 2  | Bob    |\n+----+--------+",
      "sampleOutput": "After merge:\n+----+--------+\n| id | name   |\n+----+--------+\n| 1  | Alicia |\n| 2  | Bob    |\n+----+--------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-51",
      "title": "Read ORC File and Select Top-N by Partition",
      "description": "You are given an ORC file containing sales data. Load the ORC file and for each `region`, select the top 2 `salespeople` based on `total_sales`. Use window functions and partitioning.",
      "sampleInput": "ORC File Schema: region STRING, salesperson STRING, total_sales DOUBLE\n+--------+-------------+------------+\n| region | salesperson | total_sales|\n+--------+-------------+------------+\n| East   | Alice       | 5000       |\n| East   | Bob         | 3000       |\n| East   | Carl        | 7000       |\n| West   | Dan         | 8000       |\n| West   | Eva         | 2000       |\n+--------+-------------+------------+",
      "sampleOutput": "Top 2 salespeople per region:\n+--------+-------------+------------+\n| region | salesperson | total_sales|\n+--------+-------------+------------+\n| East   | Carl        | 7000       |\n| East   | Alice       | 5000       |\n| West   | Dan         | 8000       |\n| West   | Eva         | 2000       |\n+--------+-------------+------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-52",
      "title": "Streaming Ingestion of JSON Files",
      "description": "You have a folder where JSON files are continuously added. Create a structured streaming job to ingest these files and output real-time aggregation of event counts per category.",
      "sampleInput": "Incoming JSON files:\n{\n  \"event_id\": 101,\n  \"category\": \"login\"\n}\n{\n  \"event_id\": 102,\n  \"category\": \"purchase\"\n}",
      "sampleOutput": "Real-time aggregation:\n+----------+-------+\n| category | count |\n+----------+-------+\n| login    | 1     |\n| purchase | 1     |\n+----------+-------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-53",
      "title": "Optimize Parquet Read with Column Pruning and Predicate Pushdown",
      "description": "Read a large Parquet file but only load columns `user_id` and `timestamp` where `country = 'IN'`. Demonstrate that Spark performs predicate pushdown and column pruning for optimized performance.",
      "sampleInput": "Parquet File Schema: user_id INT, name STRING, timestamp TIMESTAMP, country STRING\n+---------+-------+-------------------+---------+\n| user_id | name  | timestamp         | country |\n+---------+-------+-------------------+---------+\n| 101     | Alice | 2023-01-01 10:00  | IN      |\n| 102     | Bob   | 2023-01-01 11:00  | US      |\n+---------+-------+-------------------+---------+",
      "sampleOutput": "Result (only needed columns and rows):\n+---------+-------------------+\n| user_id | timestamp         |\n+---------+-------------------+\n| 101     | 2023-01-01 10:00  |\n+---------+-------------------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-54",
      "title": "Delta Table History and Time Travel",
      "description": "You have a Delta table with multiple versions. Retrieve the table's full operation history and then perform a time-travel read to a specific version using version number.",
      "sampleInput": "Delta Table Path: /delta/events\nOperations: \n- v0: Initial insert\n- v1: Update event types\n- v2: Delete old events",
      "sampleOutput": "Delta Table History:\n+-------+----------+--------------------+\n|version|operation |timestamp           |\n+-------+----------+--------------------+\n| 0     | WRITE    | 2023-01-01 10:00:00|\n| 1     | UPDATE   | 2023-01-02 11:00:00|\n| 2     | DELETE   | 2023-01-03 09:00:00|\n+-------+----------+--------------------+\nTime travel read with version=1 returns data as it was after update but before delete.",
      "difficulty": "Hard"
    },
    {
      "id": "psa-55",
      "title": "Read from S3 using Optimized File Format and IAM Role",
      "description": "Read a large dataset stored in S3 in Parquet format using a temporary AWS IAM role. Use the Hadoop `s3a://` connector and configure access credentials securely using Spark session.",
      "sampleInput": "S3 Path: s3a://my-bucket/data/events.parquet\nIAM Role: arn:aws:iam::1234567890:role/S3ReadOnly\nRequired Columns: event_id, user_id, timestamp",
      "sampleOutput": "DataFrame with schema: event_id INT, user_id INT, timestamp TIMESTAMP\nData successfully loaded from S3 using the IAM role and Hadoop S3A connector.",
      "difficulty": "Hard"
    },
    {
      "id": "psa-56",
      "title": "Write Partitioned and Bucketed ORC Table",
      "description": "You are given a transaction dataset. Write it to an ORC file format, partitioned by `year`, and bucketed by `customer_id` into 8 buckets. Ensure the output is optimized for query performance.",
      "sampleInput": "DataFrame Schema: transaction_id INT, customer_id INT, amount DOUBLE, year INT\n+---------------+-------------+--------+------+\n| transaction_id| customer_id | amount | year |\n+---------------+-------------+--------+------+\n| 1001          | 101         | 200.5  | 2023 |\n| 1002          | 102         | 150.0  | 2023 |\n+---------------+-------------+--------+------+\n",
      "sampleOutput": "Data successfully written to ORC with:\n- Partitioned by: year\n- Bucketed by: customer_id into 8 buckets",
      "difficulty": "Hard"
    },
    {
      "id": "psa-57",
      "title": "Delta Merge for Upserts from Staging Table",
      "description": "You have a Delta table `customers` and a staging DataFrame with new updates. Use Delta's `MERGE INTO` to perform upsert: update existing records by `customer_id`, and insert if not found.",
      "sampleInput": "Delta Table: customer_id INT, name STRING, city STRING\nStaging DataFrame:\n+-------------+--------+----------+\n| customer_id | name   | city     |\n+-------------+--------+----------+\n| 101         | Alice  | Delhi    |\n| 104         | Ravi   | Mumbai   |\n+-------------+--------+----------+",
      "sampleOutput": "Upsert Result:\n- If customer_id 101 exists → update name and city.\n- If customer_id 104 does not exist → insert new record.",
      "difficulty": "Hard"
    },
    {
      "id": "psa-58",
      "title": "Streaming Join with Static Dimension Table",
      "description": "You have a streaming source of `clickstream` data and a static dimension table `users`. Join the stream with the static dimension to enrich click events with user information.",
      "sampleInput": "Streaming Schema: user_id INT, page STRING, event_time TIMESTAMP\nStatic Table: user_id INT, name STRING, age INT\n\nStream Example:\n+--------+-----------+---------------------+\n|user_id|page       |event_time           |\n+--------+-----------+---------------------+\n| 101    | /home     |2023-08-01 12:00:00  |\n+--------+-----------+---------------------+\nStatic Table:\n+--------+------+-----+\n|user_id|name  | age |\n+--------+------+-----+\n| 101    | Alice| 28  |\n+--------+------+-----+",
      "sampleOutput": "+--------+-----------+---------------------+-------+-----+\n|user_id|page       |event_time           | name  | age |\n+--------+-----------+---------------------+-------+-----+\n| 101    | /home     |2023-08-01 12:00:00  | Alice | 28  |\n+--------+-----------+---------------------+-------+-----+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-59",
      "title": "Read and Flatten Nested Avro Data",
      "description": "You are provided an Avro file with deeply nested fields. Read the file, flatten the structure (explode arrays, extract structs), and display it as a flat table using PySpark.",
      "sampleInput": "Avro Schema: order_id INT, customer STRUCT<id: INT, name: STRING>, items ARRAY<STRUCT<item_id: INT, price: DOUBLE>>\n+---------+----------------------+-------------------------------+\n|order_id |customer              |items                          |\n+---------+----------------------+-------------------------------+\n| 1       |{101, 'Alice'}        |[{201, 20.5}, {202, 35.0}]     |\n+---------+----------------------+-------------------------------+",
      "sampleOutput": "+---------+ customer_id | customer_name | item_id | price +\n|    1    |     101      |    Alice      |   201   | 20.5  |\n|    1    |     101      |    Alice      |   202   | 35.0  |\n+---------+--------------+---------------+---------+--------+",
      "difficulty": "Hard"
    },
    {
      "id": "psa-60",
      "title": "Compare Storage Format Sizes and Read Speeds",
      "description": "Given the same dataset, write it to Parquet, Avro, and Delta formats. Measure and compare file sizes and read times to analyze performance and storage efficiency.",
      "sampleInput": "DataFrame: 10 million rows with schema (id INT, name STRING, timestamp TIMESTAMP)\nFormats: parquet, avro, delta\nOperations: Write to disk and read back with `.count()` and `.explain()`",
      "sampleOutput": "Output Example:\n- Parquet: Size 150 MB, read time 3.2 sec\n- Avro:    Size 180 MB, read time 5.4 sec\n- Delta:   Size 160 MB, read time 2.8 sec\nAnalysis: Delta performed best for read, Parquet for compact storage.",
      "difficulty": "Hard"
    }
  ],

  'pyspark-aws': [
    {
      "id": "psaws-1",
      "title": "Filter Customer Records from S3 and Write as Partitioned Parquet",
      "description": "You are given a customer data file stored in AWS S3 in CSV format. Your task is to load the data using PySpark, filter out customers from the USA only, and write the filtered results back to another S3 location in Parquet format, partitioned by the 'state' column. This problem introduces S3 file operations, basic DataFrame transformations, and output partitioning.",
      "sampleInput": "Input S3 Path: s3://input-bucket/customers.csv\nSchema:\n| customer_id | name   | country | state | signup_date |\n|-------------|--------|---------|-------|--------------|\n| 1           | Alice  | USA     | NY    | 2021-05-01   |\n| 2           | Raj    | India   | KA    | 2022-01-15   |\n| 3           | Bob    | USA     | CA    | 2020-11-20   |",
      "sampleOutput": "Output S3 Path: s3://output-bucket/filtered_customers/\nFormat: Parquet (partitioned by 'state')\nData:\n| customer_id | name  | country | signup_date |\n|-------------|-------|---------|--------------|\n| 1           | Alice | USA     | 2021-05-01   |\n| 3           | Bob   | USA     | 2020-11-20   |\nPartition folders:\ns3://output-bucket/filtered_customers/state=NY/\ns3://output-bucket/filtered_customers/state=CA/",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-2",
      "title": "Convert JSON to Parquet in S3 using Glue Job",
      "description": "You are provided with a nested JSON file in S3 containing order data. Your task is to use a PySpark Glue job to flatten the data and write it back to S3 in Parquet format. This problem introduces Glue, nested JSON processing, and format conversion.",
      "sampleInput": "Input S3 Path: s3://ecommerce-raw/orders.json\nSchema (flattened):\n| order_id | customer_name | total_amount | order_date |\n|----------|----------------|--------------|-------------|\n| 1001     | Alice          | 250.00       | 2023-02-01  |\n| 1002     | Bob            | 480.00       | 2023-02-02  |",
      "sampleOutput": "Output S3 Path: s3://ecommerce-processed/orders_parquet/\nFormat: Parquet\nFiles: part-0000.parquet, part-0001.parquet",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-3",
      "title": "Aggregate Sales by Region and Save to S3",
      "description": "You have a CSV file in S3 containing sales transactions. Use PySpark to group the data by 'region' and calculate the total sales amount. Write the result as a CSV file to an output S3 bucket.",
      "sampleInput": "Input S3 Path: s3://sales-input/transactions.csv\nSchema:\n| transaction_id | region | amount |\n|----------------|--------|--------|\n| T001           | East   | 100.0  |\n| T002           | West   | 200.0  |\n| T003           | East   | 150.0  |",
      "sampleOutput": "Output S3 Path: s3://sales-output/region_sales.csv\nSchema:\n| region | total_amount |\n|--------|---------------|\n| East   | 250.0         |\n| West   | 200.0         |",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-4",
      "title": "Load Data from S3 and Create Glue Table with Crawler",
      "description": "You have CSV files stored in an S3 path. Your task is to configure an AWS Glue Crawler to automatically detect the schema and create a table in the AWS Glue Data Catalog. This introduces metadata cataloging using Crawler for downstream querying via Athena or Glue jobs.",
      "sampleInput": "S3 Location: s3://logs-data/website_logs/\nSample Schema:\n| timestamp           | user_id | event_type |\n|---------------------|---------|------------|\n| 2023-01-01 12:00:00 | U1001   | login      |",
      "sampleOutput": "Glue Catalog Table: website_logs in database 'analytics'\nDetected format: CSV\nCrawler Output: Table created with 3 columns in Glue Data Catalog",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-5",
      "title": "Use IAM Role to Access S3 and Filter Logs by Date",
      "description": "You are running a Spark job on EMR. Using an IAM role with access to S3, read log data in JSON format and filter records for a specific date. Save the output in ORC format in a target S3 bucket. This tests security configuration with IAM and ORC format usage.",
      "sampleInput": "Input Path: s3://server-logs/all_logs.json\nIAM Role: EMR_DefaultRole with S3 read permission\nSchema:\n| log_id | log_date   | level | message        |\n|--------|------------|-------|----------------|\n| L001   | 2023-07-10 | INFO  | Started job    |\n| L002   | 2023-07-11 | ERROR | Failed to load |",
      "sampleOutput": "Output Path: s3://filtered-logs/2023-07-10/\nFormat: ORC\nRecords filtered: 1 log with log_date = '2023-07-10'",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-6",
      "title": "Convert JSON Logs from S3 to ORC Format",
      "description": "A JSON file containing website logs is stored in an S3 bucket. Your task is to read this data using PySpark and write it back to another S3 path in ORC format. This helps practice file format conversions using Spark.",
      "sampleInput": "Input Path: s3://web-logs-bucket/logs.json\nSchema:\n| session_id | user_id | activity  | timestamp           |\n|------------|---------|-----------|----------------------|\n| s1         | u1      | login     | 2022-11-01 10:10:10  |\n| s2         | u2      | click     | 2022-11-01 10:12:00  |",
      "sampleOutput": "Output Path: s3://processed-logs-bucket/logs_orc/\nFormat: ORC\nSchema remains the same.",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-7",
      "title": "Read Product CSV from S3 and Save as Parquet in Glue Table",
      "description": "A CSV file with product catalog data is stored in an S3 bucket. Load it using PySpark and write it in Parquet format into another S3 bucket. Register the output location as a Glue Catalog Table using GlueContext.",
      "sampleInput": "Input Path: s3://source-bucket/products.csv\nSchema:\n| product_id | name       | category | price  |\n|------------|------------|----------|--------|\n| 101        | Mobile     | Electronics | 299.99 |\n| 102        | Keyboard   | Accessories | 19.99  |",
      "sampleOutput": "Output Path: s3://target-bucket/glue-products/\nFormat: Parquet\nRegistered Glue Table: `catalog_name`.`db_name`.`products_table`",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-8",
      "title": "Filter S3 CSV Data and Save to EC2 Local Path",
      "description": "An EC2 instance has PySpark running and IAM permissions to access S3. Load CSV data from S3, filter rows with price > 100, and save the result to the local disk (`/mnt/data/high_value_items.parquet`) in Parquet format.",
      "sampleInput": "S3 Input Path: s3://data-bucket/items.csv\nSchema:\n| item_id | name      | price  |\n|---------|-----------|--------|\n| 1       | TV        | 499.99 |\n| 2       | Book      | 29.99  |\n| 3       | Laptop    | 999.99 |",
      "sampleOutput": "Output Path (local): /mnt/data/high_value_items.parquet\nData:\n| item_id | name   | price  |\n|---------|--------|--------|\n| 1       | TV     | 499.99 |\n| 3       | Laptop | 999.99 |",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-9",
      "title": "Use Glue Crawler to Catalog Parquet Files Written by PySpark",
      "description": "You have a PySpark job that writes a Parquet file to S3. After writing, use a Glue Crawler to catalog the dataset so it becomes queryable via Athena. Define the schema and crawler configuration requirements.",
      "sampleInput": "PySpark Output Path: s3://analytics-zone/parquet/sales_data/\nSchema:\n| sale_id | region | amount |\n|---------|--------|--------|\n| 1       | East   | 230.5  |\n| 2       | West   | 100.0  |",
      "sampleOutput": "Crawler Name: `sales-crawler`\nOutput Table: `analytics_db`.`sales_data`\nClassification: parquet",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-10",
      "title": "Run PySpark Script on EMR Cluster to Transform S3 Data",
      "description": "Write a PySpark script to be executed on an EMR cluster that reads a CSV file from S3, drops null rows, and writes the result back to S3 as compressed Parquet using Snappy compression. This introduces distributed PySpark execution on AWS EMR.",
      "sampleInput": "Input S3 Path: s3://raw-zone/customers.csv\nSchema:\n| id | name   | age |\n|----|--------|-----|\n| 1  | Alice  | 30  |\n| 2  | NULL   | 25  |",
      "sampleOutput": "Output S3 Path: s3://processed-zone/customers_cleaned/\nFormat: Parquet (Snappy compression)\nResult:\n| id | name  | age |\n|----|-------|-----|\n| 1  | Alice | 30  |",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-11",
      "title": "Write Filtered S3 Data as Partitioned Parquet",
      "description": "Load a CSV file from S3 containing order data. Filter orders with status='completed', and write it back to another S3 location in partitioned Parquet format using 'order_date' as the partition column.",
      "sampleInput": "S3 Input Path: s3://orders-zone/raw/orders.csv\nSchema:\n| order_id | customer_id | order_date | status     |\n|----------|-------------|------------|------------|\n| 1        | 101         | 2024-12-01 | completed  |\n| 2        | 102         | 2024-12-02 | pending    |",
      "sampleOutput": "S3 Output Path: s3://orders-zone/processed/completed_orders/\nPartitioned By: order_date\nFormat: Parquet\nResult will contain only completed orders.",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-12",
      "title": "Use IAM Role in EMR to Access S3 and Save Parquet",
      "description": "On an EMR cluster with appropriate IAM roles, write a PySpark job that reads JSON logs from S3, selects specific fields, and writes them in Parquet format to another S3 path. Use only fields 'session_id' and 'timestamp'.",
      "sampleInput": "Input: s3://emr-input-zone/logs.json\nSchema:\n| session_id | user_id | activity | timestamp           |\n|------------|---------|----------|---------------------|\n| s1         | u1      | login    | 2024-05-01 08:00:00 |",
      "sampleOutput": "Output: s3://emr-output-zone/logs_parquet/\nSchema:\n| session_id | timestamp           |\n|------------|---------------------|\n| s1         | 2024-05-01 08:00:00 |",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-13",
      "title": "Trigger SNS Notification After Parquet Write",
      "description": "After writing a filtered dataset from S3 to Parquet format, trigger an AWS SNS notification using Python `boto3`. The notification should confirm data was processed and written successfully.",
      "sampleInput": "Transformation: Filter orders where amount > 500 and save to s3://target/orders_high_value/\nMessage: 'High-value orders written to S3 successfully.'",
      "sampleOutput": "SNS Topic ARN: arn:aws:sns:us-east-1:123456789012:OrderNotifications\nMessage Published: true",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-14",
      "title": "Convert Excel File from S3 to CSV using PySpark",
      "description": "An Excel file (.xlsx) is uploaded to S3 with customer contact data. Use PySpark with appropriate libraries (like `com.crealytics.spark.excel`) to convert this file to CSV format and write it back to another S3 location.",
      "sampleInput": "S3 Input Path: s3://contacts-zone/input/customers.xlsx\nSheet: Contacts\nSchema:\n| Name    | Email             | Phone      |\n|---------|-------------------|------------|\n| Alice   | alice@mail.com    | 9999999999 |",
      "sampleOutput": "S3 Output Path: s3://contacts-zone/output/customers.csv\nFormat: CSV\nSame columns as input.",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-15",
      "title": "Create External Table in Athena for S3 Parquet Files",
      "description": "You've written Parquet files to S3 using PySpark. Now, define an external Athena table pointing to that path. Specify correct column names, data types, and partitions (if any).",
      "sampleInput": "S3 Path: s3://finance-data/processed/transactions/\nParquet File Schema:\n| txn_id | user_id | amount | txn_date   |\n|--------|---------|--------|------------|\n| 101    | u1001   | 250.00 | 2024-12-01 |",
      "sampleOutput": "Athena Table:\n```sql\nCREATE EXTERNAL TABLE IF NOT EXISTS finance_db.transactions (\n  txn_id INT,\n  user_id STRING,\n  amount DOUBLE,\n  txn_date DATE\n)\nSTORED AS PARQUET\nLOCATION 's3://finance-data/processed/transactions/';\n```",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-16",
      "title": "Create AWS Glue Crawler to Catalog Parquet Data",
      "description": "After writing Parquet files using PySpark to S3, configure a Glue Crawler to scan this location and create a table in the AWS Glue Data Catalog. Ensure crawler can handle partitioned data.",
      "sampleInput": "S3 Location: s3://data-warehouse/sales/\nPartitioned By: sale_date\nData Format: Parquet\nExpected Columns: sale_id, product_id, quantity, sale_date",
      "sampleOutput": "Glue Table Created: sales_table\nDatabase: retail_db\nPartitions Detected: sale_date",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-17",
      "title": "Log PySpark Job Execution to AWS CloudWatch",
      "description": "Within your PySpark job on EMR, use a custom Python logger to send log messages (like job start, row count, and success/failure status) to AWS CloudWatch Logs.",
      "sampleInput": "Job: Read users.csv from S3, count rows, and write to another S3 bucket\nExpected Logs: 'Job started', 'Row count: 1000', 'Job completed'",
      "sampleOutput": "CloudWatch Log Group: /emr/jobs/user_data_processing\nLog Stream: job-2025-01-01-001",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-18",
      "title": "Encrypt Parquet Output Using AWS KMS",
      "description": "Write a PySpark job that outputs sensitive customer data in Parquet format to S3. Enable server-side encryption using an AWS KMS key.",
      "sampleInput": "S3 Output Path: s3://secure-zone/customers/\nKMS Key ARN: arn:aws:kms:us-east-1:123456789012:key/abcd-1234-efgh-5678\nColumns: customer_id, name, email",
      "sampleOutput": "S3 Output Settings: Parquet format with SSE-KMS encryption enabled using specified key",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-19",
      "title": "Trigger PySpark Job from S3 File Upload",
      "description": "Set up an event-based architecture using S3 + Lambda that triggers a PySpark EMR job whenever a new file is uploaded to a specific S3 path.",
      "sampleInput": "S3 Trigger Path: s3://landing-zone/orders/\nTrigger: On new object creation (CSV)\nAction: Start EMR Step that processes the CSV",
      "sampleOutput": "Lambda + EMR Integration\nOutput Location: s3://processed-zone/orders/",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-20",
      "title": "Convert Gzip CSV to Snappy Parquet with PySpark",
      "description": "Read a compressed Gzip CSV file from S3 using PySpark and write it back in Snappy-compressed Parquet format to a different S3 location.",
      "sampleInput": "S3 Input Path: s3://archive-zone/input/customers.csv.gz\nColumns: customer_id, region, join_date",
      "sampleOutput": "S3 Output Path: s3://archive-zone/converted/customers/\nFormat: Parquet\nCompression: Snappy",
      "difficulty": "Easy"
    },
    {
      "id": "psaws-21",
      "title": "Join Orders and Customers Data from S3 and Write Aggregated Output to Parquet",
      "description": "You are provided two datasets in S3: 'orders.csv' and 'customers.csv'. Your task is to join both datasets on 'customer_id', calculate the total amount spent by each customer, and write the aggregated results back to S3 in Parquet format. Use Glue Catalog for schema inference and make sure to handle any null values before aggregation.",
      "sampleInput": "Input 1 (s3://data-lake/orders.csv):\n| order_id | customer_id | amount |\n|----------|-------------|--------|\n| 101      | 1           | 250.0  |\n| 102      | 2           | 400.0  |\n| 103      | 1           | 150.0  |\n\nInput 2 (s3://data-lake/customers.csv):\n| customer_id | name    | country |\n|-------------|---------|---------|\n| 1           | Alice   | USA     |\n| 2           | Bob     | UK      |",
      "sampleOutput": "Output (s3://data-output/customer_total_spent.parquet):\n| customer_id | name  | total_amount |\n|-------------|-------|---------------|\n| 1           | Alice | 400.0         |\n| 2           | Bob   | 400.0         |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-22",
      "title": "Read JSON Logs from S3 and Detect Failed Events using PySpark",
      "description": "You are given application log data in JSON format stored in S3. Your task is to read the data, filter out logs with 'status' = 'FAILED', and count the number of failed events per day. Store the result in S3 as a partitioned Parquet file using 'event_date' as the partition column.",
      "sampleInput": "Input (s3://logs-data/app_logs.json):\n| log_id | event_date | status  |\n|--------|------------|---------|\n| 1      | 2023-07-01 | SUCCESS |\n| 2      | 2023-07-01 | FAILED  |\n| 3      | 2023-07-02 | FAILED  |",
      "sampleOutput": "Output (s3://logs-output/failed_events/):\n| event_date | failure_count |\n|------------|----------------|\n| 2023-07-01 | 1              |\n| 2023-07-02 | 1              |\nPartition folders:\ns3://logs-output/failed_events/event_date=2023-07-01/",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-23",
      "title": "Ingest CSV from S3 into Redshift Using Glue and PySpark",
      "description": "Given a CSV file in S3 containing product information, write a PySpark Glue job that loads the file and writes the content into an Amazon Redshift table. Use IAM roles to allow Glue to write to Redshift. You must handle data type casting and column renaming before ingestion.",
      "sampleInput": "Input (s3://products-data/products.csv):\n| pid | pname     | price  |\n|-----|-----------|--------|\n| 1   | Monitor   | 150.0  |\n| 2   | Keyboard  | 40.0   |",
      "sampleOutput": "Redshift Table (public.products):\n| product_id | product_name | product_price |\n|------------|--------------|----------------|\n| 1          | Monitor      | 150.0          |\n| 2          | Keyboard     | 40.0           |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-24",
      "title": "Process Multi-format Files in S3 with PySpark and Write Unified Output",
      "description": "You are provided with three files in S3 of different formats: CSV, JSON, and Parquet. Each file represents user information with a common schema. Your job is to read all the files, unify them into a single DataFrame, remove duplicates, and store the output as a single Parquet file to a new S3 location.",
      "sampleInput": "Files:\ns3://bucket/user_data.csv\ns3://bucket/user_data.json\ns3://bucket/user_data.parquet\nSchema:\n| user_id | name  | age |\n|---------|-------|-----|\n| 1       | Alice | 30  |\n| 2       | Bob   | 28  |\n| 1       | Alice | 30  |",
      "sampleOutput": "Output (s3://output-bucket/cleaned_user_data.parquet):\n| user_id | name  | age |\n|---------|-------|-----|\n| 1       | Alice | 30  |\n| 2       | Bob   | 28  |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-25",
      "title": "Trigger Email Notification via SNS on Data Quality Failure",
      "description": "Create a PySpark job that reads customer data from S3 and performs basic validation checks like null checks on important fields (e.g., customer_id, email). If the data quality check fails (i.e., nulls are found), trigger an SNS topic to notify stakeholders. Assume the SNS topic is already configured in AWS.",
      "sampleInput": "Input (s3://raw-data/customers.csv):\n| customer_id | name  | email            |\n|-------------|-------|------------------|\n| 1           | Alice | alice@mail.com   |\n| 2           | Bob   | NULL             |",
      "sampleOutput": "If any nulls are found:\n- Publish message: 'Data quality check failed - null values in email field.'\n- SNS Topic ARN: arn:aws:sns:us-east-1:123456789012:data-quality-alerts",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-26",
      "title": "Read Avro Files from S3 and Write Compressed Parquet to Another S3 Bucket",
      "description": "You are provided with Avro files in an S3 bucket. Your task is to read these files using PySpark, apply a filter to select records where 'transaction_amount' > 5000, and write the result as Parquet files with Snappy compression to a different S3 bucket.",
      "sampleInput": "Input S3 Path: s3://sales-raw-data/transactions.avro\nSchema:\n| txn_id | user_id | transaction_amount | txn_date   |\n|--------|---------|---------------------|------------|\n| 1001   | u1      | 4500                | 2023-06-01 |\n| 1002   | u2      | 8000                | 2023-06-02 |",
      "sampleOutput": "Output S3 Path: s3://sales-clean-data/high_value_txn/\nFormat: Parquet (Snappy)\nFiltered Records:\n| txn_id | user_id | transaction_amount | txn_date   |\n|--------|---------|---------------------|------------|\n| 1002   | u2      | 8000                | 2023-06-02 |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-27",
      "title": "Use Glue Crawler for Schema Inference and Load into PySpark",
      "description": "A JSON dataset is placed in an S3 bucket. You have to configure a Glue Crawler to infer schema and create a Glue table in the Data Catalog. Then, read the data using PySpark via the Glue Catalog and perform a transformation (add a new column ‘year’ from 'order_date'). Finally, write it back as partitioned Parquet files.",
      "sampleInput": "S3 Path: s3://ecommerce-orders/json/\nSample JSON:\n{ \"order_id\": 501, \"product\": \"Laptop\", \"order_date\": \"2023-09-10\" }",
      "sampleOutput": "Output S3 Path: s3://ecommerce-orders/processed/\nFormat: Parquet, partitioned by year\n| order_id | product | order_date | year |\n|----------|---------|------------|------|\n| 501      | Laptop  | 2023-09-10 | 2023 |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-28",
      "title": "Run PySpark on EMR Cluster to Join S3 Data and RDS Table",
      "description": "A product dataset is stored as CSV in S3, and customer purchase data resides in RDS (PostgreSQL). Launch an EMR cluster and write PySpark code to join these datasets on 'product_id' and produce a report showing total quantity sold per product. Save the final output in ORC format back to S3.",
      "sampleInput": "S3 Data: s3://retail/products.csv\nRDS Table: purchases\nJoin Key: product_id",
      "sampleOutput": "S3 Output: s3://retail/output/orc/\n| product_id | total_quantity |\n|------------|----------------|\n| 101        | 200            |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-29",
      "title": "Process CloudWatch Logs Stored in S3 using PySpark",
      "description": "CloudWatch logs are exported to an S3 bucket in text format. Your task is to read these logs using PySpark, extract the timestamp and error level from each line using regex, and store the result in Delta format back to S3.",
      "sampleInput": "S3 Path: s3://logs-bucket/cloudwatch/\nSample Log Line:\n[2025-08-05 12:00:00] ERROR Failed to connect to database",
      "sampleOutput": "Output S3 Path: s3://logs-bucket/processed/\nFormat: Delta\n| timestamp           | level | message                      |\n|---------------------|-------|-------------------------------|\n| 2025-08-05 12:00:00 | ERROR | Failed to connect to database |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-30",
      "title": "Use IAM Role with PySpark on EC2 to Access S3 Securely",
      "description": "You are running PySpark on an EC2 instance and need to access S3 data securely. Configure an IAM role and attach it to the EC2 instance to allow access to an S3 bucket containing Parquet files. Read the data, perform a null-value cleanup, and write the result in JSON format back to S3.",
      "sampleInput": "Input: s3://secure-data/parquet/\nOperation: drop rows with nulls in 'email'\nIAM Policy: Allow GetObject and PutObject for the bucket",
      "sampleOutput": "Output: s3://secure-data/cleaned-json/\n| user_id | email            |\n|---------|------------------|\n| 10      | user10@mail.com  |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-31",
      "title": "Trigger Glue Job from Lambda to Clean JSON Data with PySpark",
      "description": "You have JSON files arriving in S3 daily. A Lambda function is set up to trigger a Glue job upon file arrival. The Glue job (written in PySpark) should parse the JSON, remove any rows with missing 'order_id', and write the cleaned data to a new S3 path in Parquet format.",
      "sampleInput": "S3 Input Path: s3://ecommerce/raw/json/\nSample Record: {\"order_id\": null, \"amount\": 300}\nTrigger: S3 Event → Lambda → Glue Job",
      "sampleOutput": "S3 Output Path: s3://ecommerce/clean/parquet/\n| order_id | amount |\n|----------|--------|\n| 1023     | 300    |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-32",
      "title": "Join Athena Table with PySpark DataFrame and Write to S3",
      "description": "You have a dataset registered in Athena via the Glue catalog and a CSV file stored in S3. Read the Athena table using Spark SQL and join it with the CSV DataFrame on a common key. Write the resulting joined data in Delta format to S3.",
      "sampleInput": "Athena Table: sales_data (Glue catalog)\nS3 CSV: s3://crm-data/customer_info.csv\nJoin Key: customer_id",
      "sampleOutput": "S3 Output Path: s3://analytics/curated/delta/\n| customer_id | name  | total_sales |\n|-------------|-------|-------------|\n| C101        | Alice | 5200        |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-33",
      "title": "Read Compressed CSV from S3, Normalize Columns, and Save as Parquet",
      "description": "A Gzip-compressed CSV file is stored in S3. You must read this file in PySpark, normalize the 'product_name' column to lowercase and trim spaces, then write the result in Parquet format with Snappy compression to a different S3 bucket.",
      "sampleInput": "S3 Input: s3://product-dump/compressed/products.csv.gz\nSchema: | product_id | product_name |\n|-----------|-----------------|\n| 101       |  Mobile Phone   |",
      "sampleOutput": "S3 Output: s3://product-cleaned/parquet/\n| product_id | product_name  |\n|------------|---------------|\n| 101        | mobile phone  |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-34",
      "title": "Use PySpark to Read from Multiple S3 Paths and Merge into a Single DataFrame",
      "description": "Data is distributed across multiple folders in an S3 bucket by region. You need to read all folders (e.g., s3://retail-data/region=*/), merge the files into a single PySpark DataFrame, and calculate the total sales per region. Write the result to S3 in ORC format.",
      "sampleInput": "S3 Input Paths:\n- s3://retail-data/region=us/\n- s3://retail-data/region=eu/\nData: | region | sales |\n| us     | 3000  |\n| eu     | 2000  |",
      "sampleOutput": "S3 Output: s3://retail-data/output/orc/\n| region | total_sales |\n|--------|-------------|\n| us     | 3000        |\n| eu     | 2000        |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-35",
      "title": "Mask PII Columns Before Writing to S3 using PySpark",
      "description": "You have user data in a Parquet file stored in S3 containing sensitive columns like 'email' and 'phone'. Read this data using PySpark, mask these columns (e.g., hide characters after the first 3), and write the result back to S3 as JSON.",
      "sampleInput": "S3 Input: s3://userdata/raw/parquet/\n| user_id | email              | phone        |\n|---------|--------------------|--------------|\n| u1      | abc@gmail.com      | 9876543210   |",
      "sampleOutput": "S3 Output: s3://userdata/masked/json/\n| user_id | email         | phone     |\n|---------|---------------|-----------|\n| u1      | abc********    | 987****** |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-36",
      "title": "Convert XML in S3 to Parquet using PySpark and Store Partitioned",
      "description": "You receive XML files in S3 which include a `country` field. Use PySpark to read and parse the XML files, convert them to DataFrames, and write the output to S3 in Parquet format partitioned by `country`.",
      "sampleInput": "S3 Input: s3://international-data/xml/\nSample Record:\n<customer>\n  <id>101</id>\n  <name>John</name>\n  <country>US</country>\n</customer>",
      "sampleOutput": "S3 Output: s3://international-data/processed/parquet/\nPartitions: country=US/, country=IN/, etc.\n| id  | name | country |\n|-----|------|---------|\n| 101 | John | US      |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-37",
      "title": "Trigger Glue Job from CloudWatch on Schedule and Load to Redshift",
      "description": "You have a daily job requirement to read data from S3, aggregate the sales per product, and load the final results into a Redshift table. Schedule the Glue job using CloudWatch Events to run at 2 AM daily.",
      "sampleInput": "S3 Input: s3://sales-raw/daily/\nData: | product_id | sale_amount |\n|------------|-------------|\n| P1         | 300         |",
      "sampleOutput": "Redshift Table: aggregated_sales\n| product_id | total_sales |\n|------------|-------------|\n| P1         | 300         |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-38",
      "title": "Handle Large S3 File with PySpark using Repartition and Save as Parquet",
      "description": "You are given a large CSV file (~100GB) in S3. Read it using PySpark, apply repartitioning to optimize parallel processing, and write the processed output to another S3 location in Parquet format with 50 partitions.",
      "sampleInput": "S3 Input: s3://big-data/raw/sales.csv\nColumns: order_id, amount, region",
      "sampleOutput": "S3 Output: s3://big-data/parquet/sales/\nTotal Output Files: ~50 (based on repartition)",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-39",
      "title": "Use Glue Crawler to Update Catalog and Query with Athena",
      "description": "You receive JSON files daily into S3. Configure a Glue Crawler to automatically update the schema in Glue Catalog. Then, use Athena to verify that the schema has captured new columns (e.g., 'promo_code') introduced in recent files.",
      "sampleInput": "S3 Path: s3://marketing-campaign/json/\nNew Column in JSON: promo_code",
      "sampleOutput": "Athena Table: marketing_campaign\n| campaign_id | user_id | promo_code |\n|-------------|---------|------------|\n| 101         | u12     | SAVE10     |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-40",
      "title": "Read Encrypted S3 Files with KMS and Decrypt with PySpark",
      "description": "Your company stores encrypted CSV files in S3 using AWS KMS. Using IAM roles and the correct KMS key permissions, read the encrypted data using PySpark and write decrypted output as ORC format to a target S3 location.",
      "sampleInput": "S3 Source: s3://secure-data/encrypted/\nEncryption: SSE-KMS (Key ID: abc123-kms)\nData: | id | email           |\n|----|------------------|\n| 1  | john@example.com |",
      "sampleOutput": "S3 Output: s3://secure-data/decrypted/orc/\n| id | email           |\n|----|------------------|\n| 1  | john@example.com |",
      "difficulty": "Medium"
    },
    {
      "id": "psaws-41",
      "title": "Secure and Partition Transaction Data from S3 with KMS Encryption",
      "description": "Read encrypted JSON transaction logs from an S3 bucket using KMS. Parse, transform, and write them as Parquet files partitioned by 'transaction_date' and 'region'. Apply compression and store the results in a different S3 bucket.",
      "sampleInput": "S3 Source: s3://secure-logs/input/ (KMS-encrypted JSON files)\nSchema: transaction_id (string), user_id (string), amount (float), transaction_date (date), region (string)",
      "sampleOutput": "S3 Target: s3://processed-logs/partitioned/\nFormat: Parquet\nPartitioned by: transaction_date, region\nCompression: snappy",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-42",
      "title": "Join Streaming Data with Historical Data and Write to Athena-Compatible Location",
      "description": "Ingest a real-time Kafka stream (via Glue streaming job) and join it with historical data from S3. The Kafka data includes live order updates, and the S3 contains product master data. Write the enriched results to an Athena-compatible S3 location in partitioned Parquet format.",
      "sampleInput": "Kafka Stream (Glue): live_order_updates\nS3: s3://data-mart/product_master/ (CSV)\nSchema: order_id, product_id, quantity, order_ts, product_name, price",
      "sampleOutput": "S3 Target: s3://athena/enriched_orders/\nFormat: Parquet\nPartitioned by: order_date\nAthena Table Name: enriched_orders",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-43",
      "title": "Recursive File Processing and ORC Conversion with Metadata Logging",
      "description": "Read nested directories in S3 containing daily ingestion logs (in JSON). Recursively traverse all subfolders, convert the files to ORC format, and write to a flattened S3 output path. Maintain a metadata log with processed file paths and processing timestamps in a DynamoDB table.",
      "sampleInput": "S3 Source: s3://raw-data/logs/YYYY/MM/DD/*.json\nSchema: id, event_type, timestamp, user_agent\nDynamoDB Table: log_metadata (file_path, processed_at)",
      "sampleOutput": "S3 Target: s3://curated-data/orc/\nFormat: ORC\nMetadata Logging: DynamoDB entries for each processed file",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-44",
      "title": "Multi-File Join from Different Formats and CloudWatch Failure Notification",
      "description": "Read customer data in CSV, order data in Parquet, and product data in JSON format from S3. Perform a three-way join to generate a customer-product order summary. If any of the inputs are missing or malformed, log the error and trigger an SNS notification using CloudWatch.",
      "sampleInput": "CSV: s3://sales/customers.csv\nParquet: s3://sales/orders.parquet\nJSON: s3://sales/products/*.json\nSchema: customer_id, order_id, product_id, quantity, amount, order_date",
      "sampleOutput": "S3 Output: s3://analytics/customer_order_summary/\nFormat: Parquet\nError Notification: CloudWatch logs and SNS alerts",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-45",
      "title": "Design Glue Crawler-Triggered Pipeline with Data Quality Checks",
      "description": "Use a Glue crawler to detect schema changes in incoming Avro files stored in S3. Once the schema is updated, trigger a PySpark job that performs data quality checks (null checks, type consistency, duplicate detection) and writes valid and rejected records to separate S3 folders.",
      "sampleInput": "S3 Input: s3://audit-data/avro/\nSchema: id, name, created_at, status, region\nCrawler: audit_crawler",
      "sampleOutput": "S3 Target (valid): s3://processed-audit/clean/\nS3 Target (rejected): s3://processed-audit/rejected/\nFormat: Parquet\nTrigger: Glue crawler schema update",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-46",
      "title": "Real-Time Fraud Detection Using Kinesis, S3, and Redshift",
      "description": "Read streaming transaction data from AWS Kinesis, filter suspicious transactions based on thresholds and geolocation anomalies using PySpark. Write filtered suspicious records to S3 (Parquet), and push summary aggregates to Amazon Redshift using the Spark-Redshift connector.",
      "sampleInput": "Kinesis Stream: transaction-stream\nSchema: txn_id, user_id, amount, location, txn_time",
      "sampleOutput": "Suspicious: s3://fraud-detection/suspicious/\nAggregates: redshift.fraud_summary (user_id, total_amount, suspicious_txn_count)",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-47",
      "title": "Curated Data Lake Architecture with Multi-Zone Partitioning",
      "description": "Design a PySpark pipeline that reads raw JSON logs from the landing zone in S3, performs cleaning and schema normalization, and writes to a bronze, silver, and gold layer structure with partitioning and incremental appends. Maintain processing audit in a PostgreSQL table.",
      "sampleInput": "S3 Raw Input: s3://datalake/landing/logs/YYYY/MM/DD/*.json\nSchema: user_id, event_type, event_ts, source",
      "sampleOutput": "S3 Bronze: /bronze/\nS3 Silver: /silver/\nS3 Gold: /gold/ partitioned by event_date\nAudit Table: postgres.audit_table",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-48",
      "title": "CDC Pipeline using AWS DMS and PySpark",
      "description": "Consume Change Data Capture (CDC) data generated by AWS DMS (in JSON format) for a MySQL source system. Parse insert/update/delete operations using PySpark, and apply them to a target S3 data lake in Delta format. Keep only the latest record per primary key.",
      "sampleInput": "S3 CDC Path: s3://cdc-mysql/orders/\nFields: op (I/U/D), order_id, user_id, amount, updated_at",
      "sampleOutput": "S3 Target: s3://delta/orders_latest/\nFormat: Delta\nFinal state: Only latest active records per order_id",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-49",
      "title": "Build Metadata-Driven PySpark Pipeline with IAM Role Access",
      "description": "Design a metadata-driven pipeline using Glue Catalog tables as configuration. Based on each table’s metadata, fetch the corresponding data from S3, apply standard transformations, and write outputs to destination S3 paths. Ensure secure access using IAM role chaining between jobs.",
      "sampleInput": "Glue Catalog: metadata_table (source_path, dest_path, format, partition_keys)\nIAM: Role A (read), Role B (write)",
      "sampleOutput": "For each row in metadata_table, read from source, transform, and write to destination in defined format with partitions",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-50",
      "title": "Multi-Stage Data Pipeline with Dependency Handling in EMR",
      "description": "Orchestrate a multi-stage data pipeline using Spark on EMR. Stage 1 reads CSVs and performs cleansing. Stage 2 performs joins and aggregations. Stage 3 runs anomaly detection and writes alerts to SNS. Ensure stage dependencies using custom EMR step logic or AWS Step Functions.",
      "sampleInput": "Stage 1 Input: s3://input/sensor_logs/*.csv\nSchema: sensor_id, temp, pressure, ts",
      "sampleOutput": "Stage 2 Output: s3://output/aggregated/\nStage 3 Alerts: SNS Topic - sensor_alerts\nExecution: Step-based EMR cluster",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-51",
      "title": "Enforce Data Quality Rules Before Writing to S3",
      "description": "Build a PySpark pipeline that validates input data against dynamic quality rules stored in a Glue table. Rules include null checks, threshold checks, and datatype conformity. Reject and log failed records separately, and only write quality-passed data to S3.",
      "sampleInput": "Input Path: s3://input/metrics/\nRules Table: glue.data_quality_rules (column_name, rule_type, rule_value)",
      "sampleOutput": "Passed Data: s3://output/clean_data/\nRejected Data: s3://output/rejected_data/\nLog: s3://output/logs/",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-52",
      "title": "Secure Pipeline with AWS KMS for Field-Level Encryption",
      "description": "Develop a PySpark job that reads sensitive data from S3, encrypts personally identifiable information (PII) columns using AWS KMS, and writes encrypted fields to a secure output path. Decryption logic should also be supported as part of a downstream pipeline.",
      "sampleInput": "Input: s3://secure/input/users.csv\nSchema: user_id, name, email, phone\nKMS Key: alias/pii-key",
      "sampleOutput": "Encrypted Output: s3://secure/output/encrypted_users.parquet\nFields: email, phone encrypted using envelope encryption",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-53",
      "title": "Partition Validation and Metrics with Athena + PySpark",
      "description": "After writing partitioned data to S3, use Athena queries (via PySpark using JDBC or SDK) to validate row counts, null stats, and partition coverage. Save the results of these metrics to a Delta audit table for daily review.",
      "sampleInput": "Data Path: s3://logs/partitioned/\nPartition Columns: date, source\nAthena DB: logs_db",
      "sampleOutput": "Validation Metrics: s3://audit/validation_results.parquet\nFields: partition, row_count, null_rate, check_status",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-54",
      "title": "Create Data Lineage Tracker for All PySpark Jobs",
      "description": "For every PySpark job execution, generate a lineage record capturing source table, destination table, columns used, transformation logic summary, and execution timestamp. Store these records in a searchable audit table in AWS Glue or RDS.",
      "sampleInput": "Job Metadata: job_id, source_path, target_path, selected_cols, transformation_desc",
      "sampleOutput": "Lineage Table: glue.data_lineage or RDS\nSchema: job_id, source, target, cols_used, logic_summary, ts",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-55",
      "title": "Versioned Data Writes to S3 Using PySpark",
      "description": "Develop a versioning mechanism for datasets written to S3. For every update, maintain previous versions in a `versioned` subdirectory. Use Glue Catalog to track the active/latest version. Ensure backward compatibility for reading historical versions.",
      "sampleInput": "Base Path: s3://datalake/sales/\nUpdates: new batch arrives daily",
      "sampleOutput": "Versioned Path: s3://datalake/sales/versioned/v1/, v2/...\nActive View: s3://datalake/sales/latest/",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-56",
      "title": "Cross-Account Data Transfer using PySpark and S3",
      "description": "Design a PySpark job that reads data from an S3 bucket in Account A using temporary credentials (assume role) and writes transformed output to an S3 bucket in Account B. The pipeline should handle permission validation and logging of data movement.",
      "sampleInput": "Source: s3://account-a-bucket/data/\nTarget: s3://account-b-bucket/output/\nAssume Role ARN: arn:aws:iam::123456789012:role/cross-account-role",
      "sampleOutput": "Final Output: s3://account-b-bucket/output/cleaned/\nLog Path: s3://account-b-bucket/audit_logs/",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-57",
      "title": "Schema Evolution Handling for Semi-Structured JSON Data",
      "description": "Implement a PySpark pipeline that can handle schema changes in JSON files over time. Use Glue catalog to manage schema evolution. The job should identify new columns, update the schema, and load the data into a structured Parquet format.",
      "sampleInput": "Input: s3://incoming/json_data/\nEvolving JSON files with different keys each day",
      "sampleOutput": "Output: s3://curated/parquet/\nGlue Table: schema evolves automatically",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-58",
      "title": "Trigger PySpark ETL on S3 Upload using EventBridge",
      "description": "Design an AWS pipeline that triggers a PySpark job (running on EMR or Glue) whenever a new file is uploaded to an S3 path. Use S3 Event Notifications → EventBridge → Lambda to invoke the job with the uploaded file path.",
      "sampleInput": "Trigger Path: s3://raw-data/input/\nUpload Event: new CSV file arrives",
      "sampleOutput": "Triggered Job: s3://processed/output/ + log file for triggered event",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-59",
      "title": "Implement GDPR Compliance: Mask & Forget User Data",
      "description": "Create a PySpark-based GDPR compliance job that masks or deletes user data upon request. Requests will come as user_id list in a secure S3 path. The job should locate all references of user_id in given datasets and either nullify or delete records as configured.",
      "sampleInput": "User Requests: s3://gdpr/requests/user_ids.csv\nTarget Dataset: s3://curated/users/",
      "sampleOutput": "Output Dataset: s3://gdpr_compliant/users/\nGDPR Audit Log: s3://gdpr/logs/mask_delete_log.json",
      "difficulty": "Hard"
    },
    {
      "id": "psaws-60",
      "title": "Audit Data Drift and Alert via SNS",
      "description": "Create a pipeline that runs daily checks comparing data statistics (like row counts, column averages, distinct values) with historical baselines. If significant drift is detected, send alerts via Amazon SNS and log details in a centralized dashboard.",
      "sampleInput": "Current Day Data: s3://daily/input/\nBaseline Metrics: s3://audit/baseline/\nSNS Topic: arn:aws:sns:us-east-1:111122223333:data-drift-topic",
      "sampleOutput": "Drift Report: s3://audit/drift_reports/\nAlert: SNS Notification sent with summary",
      "difficulty": "Hard"
    }
  ],
  
  interview: [
    {
      id: 'int-1',
      title: 'What is Python?',
      description: 'Explain what Python is in technical interviews.',
      sampleInput: '',
      sampleOutput: 'Descriptive answer',
      difficulty: 'Easy',
    },
  ],

  common: [
    {
      id: 'com-1',
      title: 'Palindrome Checker',
      description: 'Check if a string is a palindrome.',
      sampleInput: 'madam',
      sampleOutput: 'True',
      difficulty: 'Easy',
    },
  ],
};