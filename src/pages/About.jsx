import React from 'react';
import Container from '../components/Container';
import Button from '../components/Button';

function About() {
  const handleLearnMore = () => {
    alert('Спасибо за интерес! Это React-приложение создано в рамках лабораторной работы.');
  };

  return (
    <Container title="О нас">
      <p>Это простое React-приложение, созданное с использованием компонентов:</p>
      <ul>
        <li>✅ Компонент Button - кнопка с разными стилями</li>
        <li>✅ Компонент Container - контейнер для контента</li>
        <li>✅ Компонент Navigation - панель навигации</li>
      </ul>
      <Button onClick={handleLearnMore} variant="secondary">
        Узнать больше
      </Button>
    </Container>
  );
}

export default About;