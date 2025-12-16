
export default function ThemeToggle({ dark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className=" p-2 rounded-full hover:scale-110 transition-transform"
    >
      {dark ? (
        <i className="fa-regular fa-sun"></i>
      ) : (
        <i className="fa-regular fa-moon"></i>
      )}
    </button>
  );
}