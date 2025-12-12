  const normalize = (str: string): string => {
    return str.replace(/[“”]/g, '');
  };

  export default normalize