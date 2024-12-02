import Button from './components/Button';

const App = () => {
  const handleButtonClick = () => {
    console.log('버튼 누름');
  };
  return (
    <div>
      <Button onClick={handleButtonClick}>적용</Button>
    </div>
  );
};

export default App;
