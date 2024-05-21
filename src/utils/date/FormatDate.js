const formatDate = date => {
  const todoDate = new Date(date);
  return todoDate.toLocaleDateString('tr-TR', {
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  });
};

export default formatDate;
