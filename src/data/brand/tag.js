const tags = [
  { label: 'Lowest', value: 'Lowest', color: 'warning' },
  { label: 'Fast Selling', value: 'Fast Selling', color: 'negative' },
  { label: 'High Quality', value: 'High Quality', color: 'positive' },
  { label: 'Recommended', value: 'Recommended', color: 'primary' }
];

function findColor(value) {
  const result = tags.find((tag) => tag.value === value);
  return result.color;
}

export default findColor;
