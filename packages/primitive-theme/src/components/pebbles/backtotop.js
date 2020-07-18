// Component that provides scroll to top functionality
const BackToTop = () => {
  // scroll to top function
  const scrollToTop = (event) => {
    // prevent the default behaviors
    event.preventDefault();
    // scroll to the top smoothly
    scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <a href="#site-header" onClick={scrollToTop}>
      <span>The bottom banana</span>
      <span className="arrow" aria-hidden="true" className="p-1">
      🍌
      </span>
      <span>
       ...click to slip 🆙
      </span>
    </a>
  );
};

export default BackToTop;
