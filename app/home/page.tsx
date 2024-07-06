"use client";
import RouteLoading from "@/components/RouteLoading";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Home = () => {
  const [number, setNumber] = useState<number | undefined>(undefined);
  const [inputValue, setInputValue] = useState<string>("");
  const router = useRouter();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedNumber = localStorage.getItem("number");
    if (storedNumber) {
      setNumber(parseInt(storedNumber, 10));
    }
    setLoading(false);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    const num = parseInt(inputValue, 10);
    if (num >= 1 && num <= 30) {
      localStorage.setItem("number", num.toString());
      setNumber(num);
    } else {
      alert("Please enter a number between 1 and 30.");
    }
  };

  const getQuestion = (num: number): string => {
    // Example questions, you can replace these with your actual questions.
    const exercises = [
      "Question 1: What is React?",
      "Question 2: What is a component?",
      // Add more questions as needed...
      "Question 30: Explain the virtual DOM.",
    ];

    const questions = [
        "Simple Counter: Create a counter that increases and decreases a number when buttons are clicked.",
        "Toggle Text: Create a button that toggles between showing and hiding a piece of text.",
        "Input Mirror: Create an input field that displays the typed text below it in real-time.",
        "Color Switcher: Create a button that changes the background color of a div each time it's clicked.",
        "To-Do List: Create a simple to-do list where users can add and remove items.",
        "Character Counter: Create a text area that shows the number of characters typed.",
        "Show/Hide Password: Create an input field with a button to toggle between showing and hiding the password.",
        "Incremental List: Create a button that adds a new item to a list with each click.",
        "Random Number Generator: Create a button that generates a random number and displays it.",
        "Form Submission: Create a simple form with validation that displays submitted data.",
        "Image Gallery: Create a gallery where clicking on thumbnails displays a larger image.",
        "Stopwatch: Create a basic stopwatch with start, stop, and reset functionalities.",
        "Theme Switcher: Create a switch to toggle between dark and light themes.",
        "Accordion: Create a simple accordion where clicking a header shows/hides content.",
        "Temperature Converter: Create a tool to convert temperatures between Celsius and Fahrenheit.",
        "Simple Modal: Create a button that opens a modal dialog with some content.",
        "Favorite Items: Create a list of items with a button to mark them as favorite.",
        "Dynamic Greeting: Create a form to enter a name and display a personalized greeting.",
        "Emoji Picker: Create a dropdown to select an emoji and display it.",
        "Counter with Step: Create a counter where users can set the step value for increment/decrement.",
        "Random Quote Generator: Create a button that fetches and displays a random quote.",
        "Tab Navigation: Create a simple tab navigation component to switch between content sections.",
        "Simple Quiz: Create a quiz with multiple-choice questions and display the score.",
        "Image Carousel: Create a simple image carousel with next and previous buttons.",
        "Dropdown Menu: Create a dropdown menu that displays a list of options on click.",
        "Color Picker: Create a color picker input and display the selected color.",
        "Mouse Position Tracker: Create a component that tracks and displays the mouse position.",
        "Star Rating: Create a star rating component that allows users to select a rating.",
        "Weather App: Create a simple weather display using mock data.",
        "Currency Converter: Create a tool to convert amounts between different currencies using mock data."
      ];

      console.log(questions.length)
      
    return questions[num - 1];
  };

  if (loading) return <RouteLoading />;

  if (number !== undefined) {
    const question = getQuestion(number);
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24">
        <p className="mb-3 text-3xl w-[80%] mx-auto text-center">{question}</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <form onSubmit={handleSubmit}>
        <p className="mb-3">Enter a number between 1 and 30</p>
        <div className="relative flex h-10 w-full min-w-[400px] max-w-[50rem]">
          <button
            className="!absolute right-1 top-1 z-10 select-none rounded bg-pink-500 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none peer-placeholder-shown:pointer-events-none peer-placeholder-shown:bg-blue-gray-500 peer-placeholder-shown:opacity-50 peer-placeholder-shown:shadow-none"
            type="submit"
            data-ripple-light="true"
          >
            Submit
          </button>
          <input
            type="number"
            className="peer h-full w-full rounded-[7px] border border-blue-gray-200 bg-transparent px-3 py-2.5 pr-20 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            placeholder=" "
            value={inputValue}
            onChange={handleInputChange}
            required
            max={30}
            min={1}
          />
          <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
            Enter Number
          </label>
        </div>
      </form>
    </div>
  );
};

export default Home;
