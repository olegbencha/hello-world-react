import React, { useState } from 'react';
import Button from '../components/Button';
import Container from '../components/Container';

function Home() {
  const [message, setMessage] = useState('');

  const handleClick = () => {
    setMessage('Hello World! 🎉');
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <Container title="Добро пожаловать!">
      <p>Это главная страница нашего React-приложения.</p>
      <p>Нажмите на кнопку, чтобы увидеть приветствие:</p>
      <Button onClick={handleClick} variant="primary">
        Сказать Hello World
      </Button>
      {message && <p style={{ marginTop: '20px', color: 'green', fontWeight: 'bold' }}>{message}</p>}
    </Container>
  );
}

export default Home;