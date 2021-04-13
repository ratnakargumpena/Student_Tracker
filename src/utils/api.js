import axios from 'axios';

const getStudentsInfo = async () => {
  const allSudents = await axios.get('https://randomuser.me/api?results=12');
  return (allSudents.data.results);
};

export default { getStudentsInfo };
