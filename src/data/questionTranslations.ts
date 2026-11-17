import { LanguageCode, OptionLetter, QuestionItem } from '../types/edublox';

interface QuestionTranslationEntry {
  category: string;
  question: string;
  options?: Partial<Record<OptionLetter, string>>;
  statements?: string[];
  tfLabels?: [string, string];
  explanation: string;
}

const QUESTION_TRANSLATIONS: Record<'en' | 'ja', Record<number, QuestionTranslationEntry>> = {
  en: {
    1: {
      category: 'Search Engines',
      question:
        'Dina types the keyword "manfaat membaca" (benefits of reading) on Google and within seconds thousands of web pages appear. The most accurate statement about a search engine is ....',
      options: {
        A: 'A program that stores only one web page and cannot be updated',
        B: 'A computer program that helps find information from various sources on the internet based on keywords',
        C: 'Hardware used to store all data on the internet',
        D: 'An application used to edit other people’s web pages',
        E: 'A website that only contains information fact-checked by humans',
      },
      explanation:
        'A search engine is a computer program that helps users find information from various web pages on the internet based on entered keywords.',
    },
    2: {
      category: 'Search Operators',
      question:
        'Rani wants to search for information about "jaguar" as an animal, but she does not want results discussing cars (mobil). The best keyword to type in Google search is ....',
      options: {
        A: 'jaguar OR mobil',
        B: '"jaguar mobil"',
        C: 'jaguar ~mobil',
        D: 'jaguar -mobil',
        E: 'jaguar #mobil',
      },
      explanation:
        'The minus sign (-) before a keyword excludes that word from search results, so "jaguar -mobil" shows jaguar results without the word mobil.',
    },
    3: {
      category: 'Information Evaluation',
      question:
        'Dani reads an online article claiming that a certain herbal drink can cure all diseases. Instead of trusting the article, he opens several other trusted websites to compare what they say about the same claim. This reading strategy is called ....',
      options: {
        A: 'speed reading',
        B: 'silent reading',
        C: 'lateral reading',
        D: 'proofreading',
        E: 'reading aloud',
      },
      explanation:
        'Lateral reading is a strategy of opening multiple trusted sources to compare and verify the truthfulness of a claim on a website.',
    },
    4: {
      category: 'Python Web Scraping',
      question:
        'Look at HTML Code 1 and Program Code 1! Dimas runs Program Code 1 on a page containing HTML Code 1. The connection succeeds (status 200), but the program displays no price data and no error message. The most likely cause is ....',
      options: {
        A: 'the Requests library is not installed so the page cannot be fetched',
        B: 'the URL is wrong so the web page is not found',
        C: 'the program does not use Pandas to build a data table',
        D: 'the print() function cannot display text from HTML elements',
        E: 'the class name searched ("price") does not exist in the HTML, so find_all returns an empty list',
      },
      explanation:
        'In HTML Code 1, the <span> tag uses class="harga", whereas Program Code 1 searches for class_="price". As a result, find_all returns an empty list [] and nothing is printed.',
    },
    5: {
      category: 'Flowchart Symbols',
      question:
        'In a flowchart, the parallelogram symbol is used to represent ....',
      options: {
        A: 'data input or output',
        B: 'the start or end point of a process',
        C: 'data processing or calculation',
        D: 'decision making with yes or no branches',
        E: 'a connector to another page of the flowchart',
      },
      explanation:
        'In flowchart standards, a parallelogram represents data input or output operations.',
    },
    6: {
      category: 'Flowchart Tracing',
      question:
        'Look at Figure 1! If the user enters the value 75, the output displayed by the flowchart is ....',
      options: {
        A: 'Remedial',
        B: 'Lulus and Remedial',
        C: 'Lulus',
        D: '75',
        E: 'No output',
      },
      explanation:
        'The decision condition is "nilai ≥ 75 ?". For 75, 75 ≥ 75 is True (Ya), so the branch Print "Lulus" is executed.',
    },
    7: {
      category: 'Python Web Scraping',
      question:
        'Look at Program Code 2! The program above is run and the request to the web server is processed successfully. What is displayed on the screen?',
      options: {
        A: 'Connection status: 100',
        B: 'Connection status: 200',
        C: 'Connection status: 404',
        D: 'Connection status: 500',
        E: 'Connection status: True',
      },
      explanation:
        'HTTP status code 200 OK indicates that the request to the web server was processed successfully.',
    },
    8: {
      category: 'Pseudocode Tracing',
      question:
        'Look at Pseudocode 1! If the input values are p = 5, l = 4, and t = 3, the value printed by the pseudocode is ....',
      options: {
        A: '12',
        B: '15',
        C: '20',
        D: '60',
        E: 'No value is printed',
      },
      explanation:
        'Luas = p * l = 5 * 4 = 20, then Volume = Luas * t = 20 * 3 = 60. The printed value is 60.',
    },
    9: {
      category: 'Algorithm Logic',
      question:
        'Raka designs an algorithm to calculate the average of two numbers. He writes the steps in the following order:\n1. Print the average.\n2. Divide the sum by 2.\n3. Read the values of a and b.\n4. Add a and b.\nWhich statement is correct?',
      options: {
        A: 'His order is correct because an algorithm always starts by printing the result.',
        B: 'His order is correct because the steps can be written in any order as long as all steps are included.',
        C: 'His order is incorrect; the logical order is 3, 2, 4, 1.',
        D: 'His order is incorrect; the logical order is 4, 3, 2, 1.',
        E: 'His order is incorrect; the logical order is 3, 4, 2, 1 because each step needs the result of the previous step.',
      },
      explanation:
        'An algorithm must follow a logical order: read a and b (3), add a and b (4), divide by 2 (2), then print the average (1).',
    },
    10: {
      category: 'Flowchart Loops',
      question:
        'Look at Figure 2! What value is displayed at "Cetak total" after the flowchart finishes running?',
      options: {
        A: '10',
        B: '4',
        C: '5',
        D: '6',
        E: '15',
      },
      explanation:
        'The loop runs for i = 1, 2, 3, 4 (while i ≤ 4): total = 0 + 1 + 2 + 3 + 4 = 10. When i = 5, the condition is False and 10 is printed.',
    },
    11: {
      category: 'Search Operators',
      question:
        'Raka wants to show only PDF documents about renewable energy ("energi terbarukan") from the website esdm.go.id. Select ALL search queries that achieve this goal!',
      options: {
        A: 'energi terbarukan site:esdm.go.id filetype:pdf',
        B: 'energi terbarukan filetype:esdm.go.id site:pdf',
        C: 'filetype:pdf site:esdm.go.id energi terbarukan',
        D: 'energi terbarukan site:esdm.go.id',
        E: '"energi terbarukan" site:esdm.go.id filetype:pdf',
      },
      explanation:
        'site:esdm.go.id limits results to that website and filetype:pdf limits results to PDF files. Operator order does not matter (A, C), and quoting the exact phrase (E) is also valid.',
    },
    12: {
      category: 'Types of Search Engines',
      question:
        'Rina is learning about the types of search engines. Select ALL correct pairs of a search engine type and its description!',
      options: {
        A: 'Computer Created Search Engine – the results are sorted with the direct help of human editors',
        B: 'Human Organized Search Engine – the results are arranged with human participation',
        C: 'Hybrid Search Engine – combines machine algorithms and human interaction',
        D: 'MetaCrawler – searches only the database of one search engine',
        E: 'MetaCrawler – collects results from several search engines at the same time',
      },
      explanation:
        'Human Organized Search Engines rely on human curation (B), Hybrid Search Engines combine machine algorithms and human input (C), and MetaCrawler gathers results from multiple search engines simultaneously (E).',
    },
    13: {
      category: 'Web Scraping Libraries',
      question:
        'A team is writing a Python program to collect product price data from an online store. Select ALL correct pairs of requirement and Python library!',
      options: {
        A: 'Fetching web page contents from the internet – Pandas',
        B: 'Fetching web page contents from the internet – Requests',
        C: 'Creating charts from scraped data – Scrapy',
        D: 'Parsing and extracting HTML structure – BeautifulSoup',
        E: 'Processing scraped data into tables – Requests',
      },
      explanation:
        'Requests fetches web pages via HTTP (B), while BeautifulSoup parses and extracts elements from HTML structure (D).',
    },
    14: {
      category: 'Pseudocode Tracing',
      question:
        'Look at Pseudocode 2! Select ALL true statements based on tracing the pseudocode!',
      options: {
        A: 'After line 3 executes, the value of a becomes 8.',
        B: 'After line 4 executes, the value of b becomes 2.',
        C: 'The output on line 6 is 8 and 2.',
        D: 'After line 5 executes, the value of a becomes 3.',
        E: 'At the end of the program, the values of a and b have swapped from their initial values.',
      },
      explanation:
        'Initial: a=5, b=3. Line 3: a=5+3=8 (A true). Line 4: b=8-3=5. Line 5: a=8-5=3 (D true). At the end, a=3 and b=5, so a and b have swapped (E true).',
    },
    15: {
      category: 'Pseudocode Structure',
      question:
        'Look at Pseudocode 3! Select ALL true statements about this pseudocode!',
      options: {
        A: 'The first line is a brief description of the algorithm’s goal.',
        B: 'The command Input r prints the value of r to the screen.',
        C: 'The text after // is a comment explaining the formula line.',
        D: 'If r = 14 is entered, the printed value is 88.',
        E: 'This pseudocode can only be understood if written using strict Python syntax.',
      },
      explanation:
        'Line 1 states the algorithm goal (A), // denotes a comment (C), and for r=14, 2 × 22 × 14 / 7 = 88 (D).',
    },
    16: {
      category: 'Flowchart Tracing',
      question:
        'Look at Figure 3! The flowchart is run with inputs A = 12, B = 20, and C = 15. Select ALL true statements!',
      options: {
        A: 'The output of the flowchart is 15.',
        B: 'The flowchart contains two decision symbols.',
        C: 'If inputs are changed to A = 30, B = 20, and C = 15, the first check evaluates to "Yes".',
        D: 'On the second check, the answer is "No" so the largest value remains 20.',
        E: 'After the first check, the largest value becomes 12.',
      },
      explanation:
        'There are two diamond decision symbols (B). With A=12, B=20, C=15: terbesar starts at 12, B>terbesar (20>12 -> Yes, terbesar=20), C>terbesar (15>20 -> No, stays 20) (D).',
    },
    17: {
      category: 'Search Operators',
      question:
        'Select ALL search goals that are matched with the correct search query!',
      options: {
        A: 'Finding pages whose title contains the word "python" – site:python',
        B: 'Finding only PDF files about digital marketing – digital marketing site:pdf',
        C: 'Finding pages that contain the exact phrase "internet of things" – "internet of things"',
        D: 'Finding pages about Python but not about snakes – python -snake',
        E: 'Finding results about Windows versions 7 to 10 – Windows 7..10',
      },
      explanation:
        'Quotes "..." search for exact phrases (C), minus - excludes words (D), and .. searches a numeric range (E). Title search uses intitle: and file type uses filetype:.',
    },
    18: {
      category: 'Fact-Checking Ecosystem',
      question:
        'Read the following case! A chain message circulates on WhatsApp: "Drinking boiled leaf X three times a day cures all diseases. Share so everyone stays safe!" It was created by an anonymous account @sehatalami without research sources. Dina forwards it to ten groups without checking. A fact-checking journalist verifies the claim and publishes a debunk article. Mr. Joko reads the debunk article and decides not to believe the message. Select ALL true statements!',
      options: {
        A: 'Mr. Joko acts as an information creator.',
        B: 'The @sehatalami account acts as an information creator.',
        C: 'The fact-checking journalist acts as an information checker.',
        D: 'Dina has not fulfilled the responsibility of an information sharer because she forwarded the message without verifying it.',
        E: 'Dina acts as an information checker because she forwarded the message to many groups.',
      },
      explanation:
        '@sehatalami created the message (B), the journalist verified it as an information checker (C), and Dina acted irresponsibly as a sharer by forwarding without verification (D).',
    },
    19: {
      category: 'Algorithm Concepts',
      question:
        'An algorithm is used to solve problems systematically. Select ALL correct statements about algorithms!',
      options: {
        A: 'The steps of an algorithm can be swapped randomly because the result is always the same.',
        B: 'An algorithm is a sequence of steps arranged logically and systematically to solve a problem.',
        C: 'An algorithm can only be written using a programming language.',
        D: 'A good algorithm does not need to produce a solution to the given problem.',
        E: 'A good algorithm has a clear beginning and a clear end.',
      },
      explanation:
        'An algorithm is a logical, systematic sequence of steps to solve a problem (B) with a clear start and end (E).',
    },
    20: {
      category: 'Pseudocode Loops & Conditions',
      question:
        'Look at Pseudocode 4! Select ALL true statements based on tracing this pseudocode!',
      options: {
        A: 'The addition operation is executed 5 times.',
        B: 'When i = 2, the value of total is still 0.',
        C: 'The printed value of total is 15.',
        D: 'When i = 3, the value of total becomes 3.',
        E: 'The printed value of total is 12.',
      },
      explanation:
        'The condition i > 2 only holds for i = 3, 4, 5 (3 additions). At i=2, total is 0 (B). At i=3, total = 3 (D). Finally total = 3 + 4 + 5 = 12 (E).',
    },
    21: {
      category: 'Search Operators',
      question:
        'Look at Rafi’s search query above! Rafi is looking for articles about cybersecurity trends. Decide whether each statement is True or False!',
      statements: [
        'Search results only include articles published after 2022.',
        'The after: operator is used to limit search results to a specific website.',
        'To view an archived version of an inactive web page, Rafi can use the cache: operator.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'after:2022 filters results published after 2022 (True). Limiting to one website uses site:, not after: (False). cache: shows an archived snapshot (True).',
    },
    22: {
      category: 'How Search Engines Work',
      question:
        'A user types "healthy breakfast" into a search engine. The search engine works through three stages: crawling, indexing, and ranking, before showing the results. Decide whether each statement is True or False!',
      statements: [
        'Crawling is the stage in which the search engine explores web pages automatically.',
        'Indexing is the stage that arranges the order of the results shown to the user.',
        'The results appear in a random order because the search engine does not rank web pages.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Crawling explores web pages automatically (True). Ordering results is ranking, not indexing (False), and results are ranked rather than random (False).',
    },
    23: {
      category: 'Python Web Scraping',
      question:
        'Look at Program Code 3! Decide whether each statement is True or False!',
      statements: [
        'The command requests.get(url) reads and selects <h3> elements on the web page.',
        'If the web page has no <h3> elements, the program prints nothing and shows no error message.',
        'If "h3" is replaced with "p", the program will extract text from paragraph elements.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'requests.get(url) downloads the page while soup.find_all("h3") selects <h3> elements (False). Empty results return [] with no error (True), and "p" extracts paragraph tags (True).',
    },
    24: {
      category: 'Flowchart Symbols',
      question:
        'Look at Figure 4! Decide whether each statement is True or False!',
      statements: [
        'Symbol (1) is used to mark the start or end point of a process.',
        'Symbol (2) is used to show a process or calculation.',
        'Symbol (3) is used to show decision making with yes or no branches.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Symbol (1) oval/terminator marks start/end (True), (2) rectangle marks process (True), and (3) parallelogram is input/output, not decision (False).',
    },
    25: {
      category: 'Algorithm Logic',
      question:
        'Doni writes a hand-washing algorithm in this order:\n1. Rinse hands with clean water.\n2. Wet hands with running water.\n3. Scrub all hand surfaces with soap.\n4. Dry hands with a clean towel.\nDecide whether each statement is True or False!',
      statements: [
        'The sequence written by Doni is already logical.',
        'The logical sequence is 2, 3, 1, 4.',
        'A good algorithm does not need a clear ending because its steps can continue endlessly.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Rinsing before wetting and using soap is illogical (False). The logical order is 2, 3, 1, 4 (True). A good algorithm must terminate clearly (False).',
    },
    26: {
      category: 'Algorithm Representation',
      question:
        'Algorithms can be presented in several forms so they are easy to understand and translate into code. Decide whether each statement is True or False!',
      statements: [
        'A flowchart is an algorithm presentation in structured text resembling program code.',
        'Pseudocode must be written with syntax as strict as an actual programming language.',
        'Algorithms can be presented visually (flowcharts) as well as in structured writing (pseudocode).',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Flowcharts are visual diagrams, not text (False). Pseudocode has flexible, human-readable syntax (False). Algorithms can be represented as flowcharts or pseudocode (True).',
    },
    27: {
      category: 'Pseudocode Loops',
      question:
        'Look at Pseudocode 5! The pseudocode is executed with bilangan = 2 and pangkat = 3. Decide whether each statement is True or False!',
      statements: [
        'After the second iteration finishes, the value of hasil is 4.',
        'The loop stops when pangkat reaches 0.',
        'If pangkat = 0 is entered, the loop still executes once before stopping.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Iter 1: hasil=2, pangkat=2. Iter 2: hasil=4, pangkat=1 (True). Iter 3: hasil=8, pangkat=0 then stops (True). Since "Selama pangkat > 0" is checked at the start, pangkat=0 runs 0 times (False).',
    },
    28: {
      category: 'Pseudocode Tracing',
      question:
        'Look at Pseudocode 6! Decide whether each statement is True or False!',
      statements: [
        'The command Input t, u displays the values of t and u on the screen.',
        'If t = 80 and u = 90, the printed value is 85.',
        'The text after // is a comment and is executed as a calculation step.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Input t, u reads user input rather than displaying values (False). (80+90)/2 = 85 (True). Comments after // are ignored during execution (False).',
    },
    29: {
      category: 'CRAAP Test',
      question:
        'Evaluate the following statements using the CRAAP Test! An article titled "Miracle Cure for All Diseases" was uploaded in 2015. It has an anonymous author, includes no references or supporting data, and contains links to buy the product.',
      statements: [
        'The lack of references and supporting data mainly relates to the Currency aspect.',
        'An anonymous author makes the Authority aspect of the article questionable.',
        'Links to purchase a product suggest a promotional Purpose, indicating potential bias.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Missing references relate to Accuracy rather than Currency (False). Anonymous authorship undermines Authority (True), and sales links show a promotional Purpose (True).',
    },
    30: {
      category: 'Web Scraping Flow',
      question:
        'Look at Figure 5! Decide whether each statement is True or False!',
      statements: [
        'A web scraping program reads the HTML structure of a web page to extract specific data.',
        'Extracted data immediately becomes a chart without needing to be stored in a table or dataset.',
        'Google Colab allows Python code to run in a web browser without installing extra software.',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Web scraping parses HTML to collect data (True). Scraped data is stored in tables/datasets before visualization (False). Google Colab runs Python in the cloud via browser (True).',
    },
    31: {
      category: 'Visual Search',
      question:
        'A student takes a photo of a historic building using a smartphone to learn its name and history without typing keywords. Google’s feature that recognizes objects in images and displays related information is called Google ....',
      explanation:
        'Google Lens is a visual search feature that recognizes objects, landmarks, and text from images.',
    },
    32: {
      category: 'Search Operators',
      question:
        'Bayu wants to search for "Python" only on wikipedia.org. He writes "Python ______:wikipedia.org". What search operator fills in the blank?',
      explanation:
        'The "site:" operator restricts search engine results to a specific domain or website.',
    },
    33: {
      category: 'Python Web Scraping',
      question:
        'Look at Program Code 4! The variable soup stores the HTML structure of a web page. Write the name of the command that completes the code above so that it finds ALL <h3> elements on the page.',
      explanation:
        'In BeautifulSoup, find_all("h3") finds and returns all <h3> elements in the HTML document.',
    },
    34: {
      category: 'Pseudocode Tracing',
      question:
        'Look at Pseudocode 7! What value is printed by the pseudocode?',
      explanation:
        'Start: a=0, b=1. Repeat 5 times: (1) b=1; (2) b=2; (3) b=3; (4) b=5; (5) b=8. Thus Print b outputs 8.',
    },
    35: {
      category: 'Flowchart Symbols',
      question:
        'Look again at Figure 1! The diamond-shaped symbol containing "nilai ≥ 75 ?" is called the .... symbol. (Indonesian or English term accepted)',
      explanation:
        'A diamond shape in a flowchart represents a decision (keputusan/percabangan) symbol.',
    },
    36: {
      category: 'Pseudocode Tracing',
      question:
        'Look at Pseudocode 8! The user enters N = 3, followed by 4, 9, and 6. What value is printed by the pseudocode?',
      explanation:
        'terbesar starts at 0. 4 -> 4; 9 -> 9; 6 -> stays 9. Output is 9.',
    },
    37: {
      category: 'CRAAP Test',
      question:
        'The CRAAP Test evaluates source credibility through Currency, Relevance, Authority, Accuracy, and Purpose. Which aspect evaluates why the information was written (education, entertainment, or promotion)?',
      explanation:
        'Purpose evaluates the reason an article was created—to inform, entertain, persuade, or sell.',
    },
    38: {
      category: 'CRAAP Test',
      question:
        'Sinta finds an article about smartphone prices that was published in 2014. She wants to use it as a reference in a report written in 2026. Which CRAAP aspect should she check first to decide whether the article is still suitable? The aspect is ....',
      explanation:
        'Currency evaluates timeliness and whether information from 2014 is outdated for a 2026 report.',
    },
    39: {
      category: 'Fact-Checking Ecosystem',
      question:
        'An organization receives a viral claim about an herbal drink, investigates it against scientific sources, and publishes verification results. In the fact-checking ecosystem, this organization acts as an information .... (e.g., fact-checker / pemeriksa)',
      explanation:
        'An organization that verifies viral claims against scientific evidence acts as a fact-checker (pemeriksa informasi).',
    },
    40: {
      category: 'Pseudocode Tracing',
      question:
        'Look again at Pseudocode 8! The user enters N = 3, followed by -5, -2, and -9. What value is printed by the pseudocode?',
      explanation:
        'terbesar is initialized to 0. Because -5, -2, and -9 are all less than 0, "terbesar < bilangan" is always false, so 0 is printed.',
    },
    41: {
      category: 'Flowchart Standards',
      question: 'Standard flowchart symbols were established by ....',
      options: {
        A: 'Microsoft and Google',
        B: 'ANSI and ISO',
        C: 'IEEE and Intel',
        D: 'Apple and Samsung',
      },
      explanation:
        'Standard flowchart symbols were standardized by ANSI and ISO so diagrams are universally readable.',
    },
    42: {
      category: 'Flowchart Symbols',
      question:
        'A rectangle with double vertical lines on both sides represents ....',
      options: {
        A: 'a subprogram, i.e., another predefined activity or process',
        B: 'a terminator',
        C: 'a decision branch',
        D: 'an on-page connector',
      },
      explanation:
        'A rectangle with double side lines denotes a subprogram (predefined process) defined elsewhere.',
    },
    43: {
      category: 'Flowchart Symbols',
      question: 'A small circle symbol in a flowchart is used as ....',
      options: {
        A: 'an off-page connector',
        B: 'an on-page connector (same page)',
        C: 'a terminator',
        D: 'a process',
      },
      explanation:
        'A small circle acts as an on-page connector linking flow lines on the same page.',
    },
    44: {
      category: 'Flowchart Tracing',
      question:
        'The process of reading and following the step-by-step flow of a flowchart is called ....',
      options: {
        A: 'declaration',
        B: 'compilation',
        C: 'iteration',
        D: 'tracing',
      },
      explanation:
        'Tracing is stepping through an algorithm by hand to understand its behavior and verify its logic.',
    },
    45: {
      category: 'Trace Table',
      question: 'A trace table is divided into three main parts, namely ....',
      options: {
        A: 'input, variable values, and output',
        B: 'symbol, name, and description',
        C: 'description, steps, and comments',
        D: 'variables, arrays, and operators',
      },
      explanation:
        'A trace table tracks inputs, changing variable values during execution, and final outputs.',
    },
    46: {
      category: 'Pseudocode Structure',
      question: 'Three important parts in writing pseudocode are ....',
      options: {
        A: 'description, steps, and comments',
        B: 'input, process, and output',
        C: 'start, process, and end',
        D: 'variables, arrays, and operators',
      },
      explanation:
        'Pseudocode consists of a description (purpose), structured steps (workflow), and comments (clarification).',
    },
    47: {
      category: 'Pseudocode Principles',
      question:
        'The process of allocating memory space to store data in a program is called ....',
      options: {
        A: 'input-output',
        B: 'operator',
        C: 'variable declaration',
        D: 'array',
      },
      explanation:
        'Variable declaration allocates memory by specifying a data type and variable name.',
    },
    48: {
      category: 'Arrays in Pseudocode',
      question: 'An array is a data structure that ....',
      options: {
        A: 'stores only a single value',
        B: 'stores multiple values of the same data type in an organized sequence',
        C: 'stores images only',
        D: 'stores values of different types without order',
      },
      explanation:
        'An array stores multiple elements of the same data type in an ordered sequence accessed by index.',
    },
    49: {
      category: 'Pseudocode Operators',
      question:
        'The "greater than" and "equal to" operators belong to .... operators.',
      options: {
        A: 'arithmetic',
        B: 'logical',
        C: 'array',
        D: 'comparison',
      },
      explanation:
        'Operators such as >, <, >=, <=, and == compare two values and are called comparison (relational) operators.',
    },
    50: {
      category: 'Pseudocode Loops',
      question:
        'In pseudocode that prints numbers from start (awal) to end (akhir), the loop continues while ....',
      options: {
        A: 'awal > akhir',
        B: 'awal = 0',
        C: 'akhir = 0',
        D: 'awal <= akhir',
      },
      explanation:
        'The loop continues with condition WHILE awal <= akhir, incrementing awal by 1 on each step.',
    },
  },

  ja: {
    1: {
      category: '検索エンジン',
      question:
        'ディナがGoogleで「manfaat membaca（読書の利点）」と検索すると、数秒で何千ものWebページが表示されました。検索エンジンについて最も適切な説明はどれですか？',
      options: {
        A: '1つのWebページだけを保存し、更新できないプログラム',
        B: 'キーワードに基づいてインターネット上のさまざまな情報源から情報を探すコンピュータプログラム',
        C: 'インターネット上のすべてのデータを保存するためのハードウェア',
        D: '他人のWebページを編集するためのアプリケーション',
        E: '人間が真偽を確認した情報だけを掲載するWebサイト',
      },
      explanation:
        '検索エンジンは、入力されたキーワードに基づいてインターネット上の多様なWebページから情報を探し出すプログラムです。',
    },
    2: {
      category: '検索演算子',
      question:
        'ラニは動物の「jaguar（ジャガー）」について調べたいのですが、車（mobil）に関する検索結果は除外したいです。Googleの検索窓に入力する最も適切なキーワードはどれですか？',
      options: {
        A: 'jaguar OR mobil',
        B: '"jaguar mobil"',
        C: 'jaguar ~mobil',
        D: 'jaguar -mobil',
        E: 'jaguar #mobil',
      },
      explanation:
        'キーワードの前にマイナス（-）を付けるとその単語を検索結果から除外できます。',
    },
    3: {
      category: '情報評価',
      question:
        'ダニは「あるハーブ飲料がすべての病気を治す」というオンライン記事を読みました。そのまま信じず、他の信頼できる複数のサイトを開いて同じ主張について比較・確認しました。この読み方を何といいますか？',
      options: {
        A: 'speed reading（速読）',
        B: 'silent reading（黙読）',
        C: 'lateral reading（水平読み）',
        D: 'proofreading（校正）',
        E: 'reading aloud（音読）',
      },
      explanation:
        '水平読み（lateral reading）は、複数の信頼できる外部ソースを同時に開いて情報の真偽を比較・検証する読み方です。',
    },
    4: {
      category: 'Python Webスクレイピング',
      question:
        'HTML Code 1とProgram Code 1を見てください！ディマスはHTML Code 1を含むページでProgram Code 1を実行しました。接続は成功（ステータス200）しましたが、価格データが表示されずエラーも出ません。最も考えられる原因はどれですか？',
      options: {
        A: 'Requestsライブラリが未インストールでページを取得できないため',
        B: 'URLが間違っておりWebページが見つからないため',
        C: 'Pandasを使ってデータ表を作っていないため',
        D: 'print()関数がHTML要素のテキストを表示できないため',
        E: '検索しているクラス名（"price"）がHTMLに存在せず、find_allが空リストを返しているため',
      },
      explanation:
        'HTMLでは class="harga" となっていますが、プログラムでは class_="price" を検索しているため、find_all の結果が空になり何も表示されません。',
    },
    5: {
      category: 'フローチャート記号',
      question: 'フローチャートにおいて、平行四辺形の記号は何を表しますか？',
      options: {
        A: 'データの入力（input）または出力（output）',
        B: '処理の開始点または終了点',
        C: 'データの処理や計算',
        D: 'はい／いいえの経路を持つ条件判断',
        E: '別ページのフローチャートへの結合子',
      },
      explanation:
        'フローチャート規格では、平行四辺形はデータの入力または出力を表します。',
    },
    6: {
      category: 'フローチャートのトレース',
      question:
        'Gambar 1（図1）を見てください！ユーザーが値 75 を入力した場合、このフローチャートが出力する結果はどれですか？',
      options: {
        A: 'Remedial',
        B: 'Lulus と Remedial',
        C: 'Lulus',
        D: '75',
        E: '出力なし',
      },
      explanation:
        '判断条件は「nilai ≥ 75 ?」です。75 ≥ 75 は「はい（Ya）」となるため、Cetak "Lulus" が実行されます。',
    },
    7: {
      category: 'Python Webスクレイピング',
      question:
        'Program Code 2を見てください！プログラムを実行し、Webサーバーへのリクエストが正常に処理されました。画面に表示されるものは何ですか？',
      options: {
        A: 'Connection status: 100',
        B: 'Connection status: 200',
        C: 'Connection status: 404',
        D: 'Connection status: 500',
        E: 'Connection status: True',
      },
      explanation:
        'HTTPステータスコード 200 OK は、リクエストが正常に処理されたことを意味します。',
    },
    8: {
      category: '擬似コードのトレース',
      question:
        'Pseudocode 1を見てください！p = 5, l = 4, t = 3 を入力したとき、出力される値は何ですか？',
      options: {
        A: '12',
        B: '15',
        C: '20',
        D: '60',
        E: '何も出力されない',
      },
      explanation:
        'Luas = 5 * 4 = 20、Volume = 20 * 3 = 60 となり、60 が出力されます。',
    },
    9: {
      category: 'アルゴリズムの論理',
      question:
        'ラカは2つの数の平均を求めるアルゴリズムを次の順序で書きました：\n1. 平均を表示する\n2. 合計を2で割る\n3. a と b の値を読み込む\n4. a と b を足す\n正しい説明はどれですか？',
      options: {
        A: 'アルゴリズムは常に結果を表示することから始まるため正しい',
        B: 'すべての手順が含まれていれば順番は自由なので正しい',
        C: '誤り。論理的な順序は 3, 2, 4, 1 である',
        D: '誤り。論理的な順序は 4, 3, 2, 1 である',
        E: '誤り。各手順は前の結果を使うため、論理的な順序は 3, 4, 2, 1 である',
      },
      explanation:
        '値の読み込み(3) → 加算(4) → 2で割る(2) → 出力(1) の順でなければ正しく計算できません。',
    },
    10: {
      category: 'フローチャートの反復',
      question:
        'Gambar 2（図2）を見てください！フローチャートを実行した後に「Cetak total」で表示される値はどれですか？',
      options: {
        A: '10',
        B: '4',
        C: '5',
        D: '6',
        E: '15',
      },
      explanation:
        'i = 1, 2, 3, 4 の間ループが回り、total = 0 + 1 + 2 + 3 + 4 = 10 となります。i = 5 で終了し 10 が出力されます。',
    },
    11: {
      category: '検索演算子',
      question:
        'ラカは esdm.go.id サイト内にある再生可能エネルギー（energi terbarukan）に関するPDF文書だけを表示したいです。目的を達成できる検索キーワードをすべて選んでください！',
      options: {
        A: 'energi terbarukan site:esdm.go.id filetype:pdf',
        B: 'energi terbarukan filetype:esdm.go.id site:pdf',
        C: 'filetype:pdf site:esdm.go.id energi terbarukan',
        D: 'energi terbarukan site:esdm.go.id',
        E: '"energi terbarukan" site:esdm.go.id filetype:pdf',
      },
      explanation:
        'site:esdm.go.id でサイトを限定し、filetype:pdf でPDF形式を指定します。演算子の順序は自由（A, C）で、フレーズ引用符（E）も有効です。',
    },
    12: {
      category: '検索エンジンの種類',
      question:
        'リナは検索エンジンの種類を学んでいます。検索エンジンの種類と説明の正しい組み合わせをすべて選んでください！',
      options: {
        A: 'Computer Created Search Engine – 人間の編集者の直接的な助けで結果が並べ替えられる',
        B: 'Human Organized Search Engine – 人間の参加によって結果が整理される',
        C: 'Hybrid Search Engine – 機械のアルゴリズムと人間の関与を組み合わせる',
        D: 'MetaCrawler – 1つの検索エンジンのデータベースのみを検索する',
        E: 'MetaCrawler – 複数の検索エンジンから同時に結果を収集する',
      },
      explanation:
        'Human Organized は人間が整理し（B）、Hybrid はアルゴリズムと人間を組み合わせ（C）、MetaCrawler は複数の検索エンジンを横断検索します（E）。',
    },
    13: {
      category: 'Webスクレイピングライブラリ',
      question:
        'あるチームがECサイトから商品価格を収集するPythonプログラムを作成しています。目的とPythonライブラリの正しい組み合わせをすべて選んでください！',
      options: {
        A: 'インターネットからWebページ内容を取得する – Pandas',
        B: 'インターネットからWebページ内容を取得する – Requests',
        C: 'スクレイピング結果からグラフを作成する – Scrapy',
        D: 'HTML構造を読み取りデータを抽出する – BeautifulSoup',
        E: 'スクレイピングしたデータを表に整理する – Requests',
      },
      explanation:
        'RequestsはWebページを取得し（B）、BeautifulSoupはHTML構造を解析・抽出します（D）。',
    },
    14: {
      category: '擬似コードのトレース',
      question:
        'Pseudocode 2を見てください！この擬似コードをトレースした結果として正しい文をすべて選んでください！',
      options: {
        A: '3行目の実行後、a の値は 8 になる。',
        B: '4行目の実行後、b の値は 2 になる。',
        C: '6行目の出力は 8 と 2 である。',
        D: '5行目の実行後、a の値は 3 になる。',
        E: 'プログラム終了時、a と b の値は初期値から入れ替わっている。',
      },
      explanation:
        '初期値 a=5, b=3。3行目: a=8 (A)。4行目: b=8-3=5。5行目: a=8-5=3 (D)。最終的に a=3, b=5 で値が入れ替わります (E)。',
    },
    15: {
      category: '擬似コードの構造',
      question:
        'Pseudocode 3を見てください！この擬似コードについて正しい文をすべて選んでください！',
      options: {
        A: '1行目はアルゴリズムの目的を簡潔に説明する記述である。',
        B: 'Input r は r の値を画面に出力する命令である。',
        C: '// の後のテキストは計算式を説明するコメントである。',
        D: 'r = 14 を入力すると、出力される値は 88 である。',
        E: 'この擬似コードはPythonの文法で書かないと理解できない。',
      },
      explanation:
        '1行目は目的の説明(A)、// 以降はコメント(C)、r=14 のとき 2×22×14/7 = 88 が出力されます(D)。',
    },
    16: {
      category: 'フローチャートのトレース',
      question:
        'Gambar 3（図3）を見てください！入力 A = 12, B = 20, C = 15 で実行したとき、正しい文をすべて選んでください！',
      options: {
        A: 'このフローチャートの出力は 15 である。',
        B: 'このフローチャートには2つの判断（分岐）記号が含まれている。',
        C: '入力を A = 30, B = 20, C = 15 に変えると、最初の判定は「Ya（はい）」になる。',
        D: '2回目の判定は「Tidak（いいえ）」となり、最大値は 20 のままになる。',
        E: '1回目の判定後、最大値は 12 になる。',
      },
      explanation:
        'ひし形の判断記号が2つあります(B)。A=12, B=20, C=15 では、1回目 20>12(Ya) で最大値20、2回目 15>20(Tidak) で最大値は20のままです(D)。',
    },
    17: {
      category: '検索演算子',
      question: '検索目的と正しい検索クエリの組み合わせをすべて選んでください！',
      options: {
        A: 'タイトルに "python" を含むページを探す – site:python',
        B: 'digital marketing に関するPDFのみを探す – digital marketing site:pdf',
        C: '"internet of things" という完全一致フレーズを含むページを探す – "internet of things"',
        D: 'Python に関するが snake（ヘビ）を含まないページを探す – python -snake',
        E: 'Windows バージョン 7 から 10 に関する結果を探す – Windows 7..10',
      },
      explanation:
        '引用符は完全一致(C)、マイナスは除外(D)、.. は数値範囲検索(E)です。タイトルは intitle:、ファイル形式は filetype: を使います。',
    },
    18: {
      category: 'ファクトチェックの仕組み',
      question:
        '次の事例を読んでください：WhatsAppで「Xの葉の煎じ汁を1日3回飲めばすべての病気が治る」というチェーンメッセージが匿名アカウント @sehatalami により拡散されました。ディナは確認せず10個のグループに転送しました。ファクトチェック記者が検証し反証記事を公開し、ジョコさんはそれを読んでメッセージを信じないことにしました。正しい文をすべて選んでください！',
      options: {
        A: 'ジョコさんは情報作成者としての役割を果たしている。',
        B: 'アカウント @sehatalami は情報作成者としての役割を果たしている。',
        C: 'ファクトチェック記者は情報検証者（チェック担当）の役割を果たしている。',
        D: 'ディナは検証せずに転送したため、情報拡散者としての責任を果たしていない。',
        E: 'ディナは多くのグループに転送したため、情報検証者である。',
      },
      explanation:
        '@sehatalami は情報作成者(B)、記者は情報検証者(C)、ディナは未確認のまま拡散した無責任な拡散者です(D)。',
    },
    19: {
      category: 'アルゴリズムの概念',
      question:
        'アルゴリズムは問題を体系的に解決するために使われます。アルゴリズムについて正しい文をすべて選んでください！',
      options: {
        A: 'アルゴリズムの手順は結果が常に同じなのでランダムに入れ替えてよい。',
        B: 'アルゴリズムとは、問題を解決するために論理的かつ体系的に並べられた手順の列である。',
        C: 'アルゴリズムはプログラミング言語でしか記述できない。',
        D: '良いアルゴリズムは問題の解を導き出す必要がない。',
        E: '良いアルゴリズムには明確な開始と終了がある。',
      },
      explanation:
        'アルゴリズムは論理的・体系的な手順の列(B)であり、明確な始まりと終わりを持ちます(E)。',
    },
    20: {
      category: '擬似コードの反復と分岐',
      question:
        'Pseudocode 4を見てください！この擬似コードをトレースした結果として正しい文をすべて選んでください！',
      options: {
        A: '加算処理は5回行われる。',
        B: 'i = 2 のとき、total の値はまだ 0 である。',
        C: '出力される total の値は 15 である。',
        D: 'i = 3 のとき、total の値は 3 になる。',
        E: '出力される total の値は 12 である。',
      },
      explanation:
        'i > 2 を満たすのは i = 3, 4, 5 の3回だけです。i=2 では total=0 (B)、i=3 で total=3 (D)、最終的に 3+4+5 = 12 が出力されます(E)。',
    },
    21: {
      category: '検索演算子',
      question:
        'ラフィの検索キーワードを見てください！各文が正しい（Benar）か誤り（Salah）かを選んでください。',
      statements: [
        '検索結果には2022年以降に公開された記事のみが含まれる。',
        'after: 演算子は特定の1つのWebサイトに検索を限定するために使われる。',
        'すでに非公開になったページのアーカイブ版を見るには、cache: 演算子を使える。',
      ],
      tfLabels: ['正しい', '誤り'],
      explanation:
        'after:2022 は2022年以降の記事に絞ります（正しい）。サイト限定は site: です（誤り）。cache: でアーカイブ版を確認できます（正しい）。',
    },
    22: {
      category: '検索エンジンの仕組み',
      question:
        '検索エンジンは「クローリング・インデキシング・ランキング」の3段階で動作します。各文について正しい（True）か誤り（False）かを選んでください！',
      statements: [
        'クローリングは検索エンジンが自動的にWebページを巡回して探索する段階である。',
        'インデキシングはユーザーに表示する検索結果の順位を並べる段階である。',
        '検索エンジンは順位付けを行わないため、結果はランダムな順で表示される。',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'クローリングは自動巡回（True）。順位付けはランキング段階（False）であり、ランダム表示ではありません（False）。',
    },
    23: {
      category: 'Python Webスクレイピング',
      question:
        'Kode Program 3を見てください！各文について正しいか誤りかを選んでください！',
      statements: [
        'requests.get(url) はWebページ上の <h3> 要素を読み取って選択する命令である。',
        'Webページに <h3> 要素がない場合、プログラムは何も出力せずエラーも表示しない。',
        '"h3" を "p" に変えると、プログラムは段落要素からテキストを取得する。',
      ],
      tfLabels: ['正しい', '誤り'],
      explanation:
        '<h3> の選択を行うのは soup.find_all("h3") です（誤り）。見つからない場合は空リストとなりエラーは出ません（正しい）。"p" にすれば段落テキストを取得できます（正しい）。',
    },
    24: {
      category: 'フローチャート記号',
      question: 'Gambar 4（図4）を見てください！各文の正誤を選んでください！',
      statements: [
        '記号(1)は処理の開始点または終了点を示すために使われる。',
        '記号(2)は処理や計算を示すために使われる。',
        '記号(3)は「はい／いいえ」の経路を持つ条件判断を示すために使われる。',
      ],
      tfLabels: ['正しい', '誤り'],
      explanation:
        '(1)端子は開始/終了（正しい）、(2)長方形は処理（正しい）、(3)平行四辺形は入出力であり条件判断ではありません（誤り）。',
    },
    25: {
      category: 'アルゴリズムの論理',
      question:
        'ドニは手洗いのアルゴリズムを次のように書きました：\n1. きれいな水ですすぐ\n2. 流水で手を濡らす\n3. 石けんで手全体をこする\n4. 清潔なタオルで拭く\n各文の正誤を選んでください！',
      statements: [
        'ドニが書いた手順の順序はすでに論理的である。',
        '論理的な手順の順序は 2, 3, 1, 4 である。',
        '良いアルゴリズムは手順が無限に続いてよいので明確な終わりがなくても構わない。',
      ],
      tfLabels: ['正しい', '誤り'],
      explanation:
        '濡らして石けんを使う前にすすぐのは不自然です（誤り）。正しい順序は 2, 3, 1, 4（正しい）。アルゴリズムには明確な終了が必要です（誤り）。',
    },
    26: {
      category: 'アルゴリズムの表現',
      question:
        'アルゴリズムは理解・実装しやすいようにいくつかの形式で表現できます。各文の正誤を選んでください！',
      statements: [
        'フローチャートはプログラムコードに似た構造化テキストによるアルゴリズム表現である。',
        '擬似コードは実際のプログラミング言語と同じくらい厳格な文法で書かなければならない。',
        'アルゴリズムは視覚的（フローチャート）にも構造化文章（擬似コード）でも表現できる。',
      ],
      tfLabels: ['正しい', '誤り'],
      explanation:
        'フローチャートは図形による表現です（誤り）。擬似コードに厳格な文法制約はありません（誤り）。図解と構造化文章の両方で表現できます（正しい）。',
    },
    27: {
      category: '擬似コードの反復',
      question:
        'Pseudocode 5を見てください！bilangan = 2, pangkat = 3 を入力して実行したとき、各文の正誤を選んでください！',
      statements: [
        '2回目の反復が終わった後、hasil の値は 4 である。',
        'pangkat の値が 0 に達したとき反復は終了する。',
        'pangkat = 0 を入力した場合でも、停止する前に1回だけ反復が実行される。',
      ],
      tfLabels: ['正しい', '誤り'],
      explanation:
        '1回目: hasil=2, pangkat=2。2回目: hasil=4, pangkat=1（正しい）。3回目: hasil=8, pangkat=0 で停止（正しい）。前判定ループのため pangkat=0 なら0回実行です（誤り）。',
    },
    28: {
      category: '擬似コードのトレース',
      question:
        'Pseudocode 6を見てください！各文について True または False を選んでください！',
      statements: [
        'Input t, u という命令は t と u の値を画面に表示する。',
        't = 80, u = 90 のとき、出力される値は 85 である。',
        '// の後ろのテキストはコメントであり、計算ステップとして実行される。',
      ],
      tfLabels: ['True', 'False'],
      explanation:
        'Input は入力を読み込む命令です（False）。(80+90)/2 = 85（True）。コメントは実行されません（False）。',
    },
    29: {
      category: 'CRAAPテスト',
      question:
        'CRAAPテストに基づいて評価してください！2015年に投稿された記事「すべての病気を治す魔法の薬」は、匿名著者で参考文献や裏付けデータがなく、商品購入リンクが貼られています。',
      statements: [
        '参考文献や裏付けデータがないことは主に Currency（最新性）に関係する。',
        '著者が匿名であることは記事の Authority（権威性）を疑わしくする。',
        '商品購入リンクがあることは、宣伝目的（Purpose）によるバイアスの可能性を示す。',
      ],
      tfLabels: ['正しい', '誤り'],
      explanation:
        '参考文献の欠如は Accuracy（正確性）の問題です（誤り）。匿名著者は権威性に欠け（正しい）、販売リンクは宣伝目的を示します（正しい）。',
    },
    30: {
      category: 'Webスクレイピングの流れ',
      question: 'Gambar 5（図5）を見てください！各文の正誤を選んでください！',
      statements: [
        'WebスクレイピングプログラムはWebページのHTML構造を読み取って特定データを取得する。',
        '取得したデータは直接グラフの形になるため、表やデータセットに保存する必要はない。',
        'Google Colab を使うと追加ソフトをインストールせずにブラウザ上でPythonを実行できる。',
      ],
      tfLabels: ['正しい', '誤り'],
      explanation:
        'スクレイピングはHTML構造からデータを抽出します（正しい）。データはまず表やデータセットに保存されます（誤り）。Google Colabはブラウザ上で動作します（正しい）。',
    },
    31: {
      category: '画像検索',
      question:
        'ある生徒が歴史的建造物をスマホで撮影し、キーワードを入力せずに建物の名前や歴史を調べたいと考えています。画像内の物体を認識して関連情報を表示するGoogleの機能は Google .... です。（Lens / レンズ）',
      explanation:
        'Google レンズ（Google Lens）はカメラや画像から物体・場所・文字を認識する視覚検索機能です。',
    },
    32: {
      category: '検索演算子',
      question:
        'バユは wikipedia.org サイト内だけで Python について検索したいです。「Python ______:wikipedia.org」の空欄に入る演算子はどれですか？',
      explanation:
        'site: 演算子は検索結果を指定したドメイン・Webサイト内に限定します。',
    },
    33: {
      category: 'Python Webスクレイピング',
      question:
        'Program Code 4を見てください！ページ上のすべての <h3> 要素を取得するために空欄に入るBeautifulSoupのメソッド名を書いてください。',
      explanation:
        'BeautifulSoupの find_all("h3") は、HTML文書内のすべての <h3> 要素をリストで取得します。',
    },
    34: {
      category: '擬似コードのトレース',
      question: 'Pseudocode 7を見てください！出力される値はいくつですか？',
      explanation:
        '初期値 a=0, b=1。5回繰り返すと b は 1→2→3→5→8 となり、8 が出力されます。',
    },
    35: {
      category: 'フローチャート記号',
      question:
        'Gambar 1（図1）をもう一度見てください！「nilai ≥ 75 ?」と書かれたひし形の記号は何記号と呼ばれますか？（例: decision / keputusan / 判断）',
      explanation:
        'ひし形の記号は条件分岐を表す判断記号（decision / keputusan）です。',
    },
    36: {
      category: '擬似コードのトレース',
      question:
        'Pseudocode 8を見てください！N = 3 を入力し、続けて 4, 9, 6 を入力したときに出力される値はいくつですか？',
      explanation:
        'terbesar の初期値は 0。4→4, 9→9, 6→9のまま。よって 9 が出力されます。',
    },
    37: {
      category: 'CRAAPテスト',
      question:
        'CRAAPテストの5要素（Currency, Relevance, Authority, Accuracy, Purpose）のうち、教育・娯楽・宣伝など「情報が書かれた目的」を評価する要素はどれですか？（英語または日本語で入力）',
      explanation:
        'Purpose（目的）は、その情報が教育・娯楽・説得・販売促進などのどの目的で作られたかを評価します。',
    },
    38: {
      category: 'CRAAPテスト',
      question:
        'シンタは2014年に公開されたスマホ価格の記事を2026年のレポートで引用しようとしています。まだ適切か判断するために最初に確認すべきCRAAP要素はどれですか？',
      explanation:
        'Currency（最新性）は情報の公開時期が現在に適しているかを評価します。',
    },
    39: {
      category: 'ファクトチェックの仕組み',
      question:
        'ある団体がSNSで拡散された主張を科学的根拠と比較・調査し、検証結果を公開しました。ファクトチェックの仕組みの中で、この団体は情報の「...」の役割を担っています。（例: fact-checker / pemeriksa / 検証者）',
      explanation:
        '科学的根拠に基づいて主張を検証し公開する団体は、情報の検証者（ファクトチェッカー / pemeriksa）です。',
    },
    40: {
      category: '擬似コードのトレース',
      question:
        'Pseudocode 8をもう一度見てください！N = 3 を入力し、続けて -5, -2, -9 を入力したときに出力される値はいくつですか？',
      explanation:
        'terbesar の初期値が 0 のため、-5, -2, -9 はいずれも「0 < 入力値」を満たさず、0 が出力されます。',
    },
    41: {
      category: 'フローチャート規格',
      question: 'フローチャートの標準記号を定めた機関はどれですか？',
      options: {
        A: 'Microsoft と Google',
        B: 'ANSI と ISO',
        C: 'IEEE と Intel',
        D: 'Apple と Samsung',
      },
      explanation:
        '世界共通で読めるように、フローチャートの標準記号は ANSI と ISO によって定められています。',
    },
    42: {
      category: 'フローチャート記号',
      question: '左右両端に二重線が入った長方形の記号は何を表しますか？',
      options: {
        A: 'サブルーチン（あらかじめ定義された別の処理・プロセス）',
        B: '端子（開始・終了）',
        C: '条件分岐',
        D: 'ページ内結合子',
      },
      explanation:
        '両端に二重線がある長方形は、定義済みの別処理（サブルーチン／サブプログラム）を表します。',
    },
    43: {
      category: 'フローチャート記号',
      question: 'フローチャートにおける小さな円の記号は何として使われますか？',
      options: {
        A: '別ページへの結合子',
        B: '同一ページ内の結合子',
        C: '端子',
        D: '処理',
      },
      explanation:
        '小さな円は、同じページ内で流れ線をつなぐ結合子（コネクタ）として使用されます。',
    },
    44: {
      category: 'フローチャートのトレース',
      question:
        'フローチャートの手順の流れを順に追って読み解く作業を何といいますか？',
      options: {
        A: '宣言（declaration）',
        B: 'コンパイル（compilation）',
        C: '反復（iteration）',
        D: 'トレース（tracing）',
      },
      explanation:
        'トレース（tracing）とは、アルゴリズムの動作や論理の正しさを確かめるために手順を1つずつ追うことです。',
    },
    45: {
      category: 'トレース表',
      question: 'トレース表（trace table）は主に次の3つの部分に分かれます。それはどれですか？',
      options: {
        A: '入力、変数の値、出力',
        B: '記号、名前、説明',
        C: '説明、手順、コメント',
        D: '変数、配列、演算子',
      },
      explanation:
        'トレース表は、初期データの入力、実行中の変数の変化、最終的な出力の3要素で構成されます。',
    },
    46: {
      category: '擬似コードの構造',
      question: '擬似コードを書く際の3つの重要な構成要素はどれですか？',
      options: {
        A: '説明（概要）、手順、コメント',
        B: '入力、処理、出力',
        C: '開始、処理、終了',
        D: '変数、配列、演算子',
      },
      explanation:
        '擬似コードは目的の説明、具体的な手順、補足のためのコメントの3つで構成されます。',
    },
    47: {
      category: '擬似コードの基本',
      question:
        'プログラム内でデータを保存するためのメモリ領域を確保する処理を何といいますか？',
      options: {
        A: '入出力',
        B: '演算子',
        C: '変数宣言',
        D: '配列',
      },
      explanation:
        '変数宣言とは、データ型と変数名を指定してメモリ領域を確保する処理です。',
    },
    48: {
      category: '擬似コードの配列',
      question: '配列（Array）とはどのようなデータ構造ですか？',
      options: {
        A: '1つの値だけを保存する',
        B: '同じデータ型の複数の値を整理された順序で保存する',
        C: '画像データだけを保存する',
        D: '異なるデータ型の値を順序なしで保存する',
      },
      explanation:
        '配列は同じデータ型の複数の値を順番に並べて管理し、インデックスで参照できるデータ構造です。',
    },
    49: {
      category: '擬似コードの演算子',
      question: '「より大きい（>）」や「等しい（==）」などの演算子はどれに分類されますか？',
      options: {
        A: '算術演算子',
        B: '論理演算子',
        C: '配列演算子',
        D: '比較演算子',
      },
      explanation:
        '2つの値の大小や等価性を比べる演算子は比較演算子（関係演算子）と呼ばれます。',
    },
    50: {
      category: '擬似コードの反復',
      question:
        'awal（開始値）から akhir（終了値）まで数字を順に出力する擬似コードでは、どのような条件の間ループが繰り返されますか？',
      options: {
        A: 'awal > akhir',
        B: 'awal = 0',
        C: 'akhir = 0',
        D: 'awal <= akhir',
      },
      explanation:
        'WHILE awal <= akhir の条件で繰り返し、毎回 awal に 1 を加算します。',
    },
  },
};

export function getLocalizedQuestion(q: QuestionItem, lang: LanguageCode): QuestionItem {
  if (lang === 'id') return q;
  const entry = QUESTION_TRANSLATIONS[lang]?.[q.id];
  if (!entry) return q;

  return {
    ...q,
    category: entry.category,
    question: entry.question,
    options: entry.options ? { ...q.options, ...entry.options } : q.options,
    statements: entry.statements || q.statements,
    tfLabels: entry.tfLabels || q.tfLabels,
    explanation: entry.explanation,
  };
}
