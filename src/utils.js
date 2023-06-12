export const checkVisited = (val = false) => {
  if (sessionStorage.getItem("visited")) {
    return sessionStorage.getItem("visited");
  }
  if (val) {
    sessionStorage.setItem("visited", true);
    return true;
  } else {
    return false;
  }
};
