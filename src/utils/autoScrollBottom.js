export const autoScrollBottom = () => {
    setTimeout(() => {
      document.body.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 100);
  };