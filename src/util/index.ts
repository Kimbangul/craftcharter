export const setBodyPreventScroll = (state: boolean) => {
  if (state === true) {
    document.body.style.height = '100vh';
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'auto';
  }
};
