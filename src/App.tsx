import Button from 'components/Button/Button';

function App() {
  // eslint-disable-next-line
  console.log(process.env.REACT_APP_API_ENDPOINT);

  return (
    <div>
      Hello, World!
      <Button />
    </div>
  );
}

export default App;
