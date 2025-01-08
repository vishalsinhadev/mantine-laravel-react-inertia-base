import React from 'react';
import { Card, Container, Paper } from '@mantine/core';

const HtmlContentDisplay = ({ htmlContent }) => {
    console.log('htmlContent', htmlContent)
  return (
    <Container size="lg" style={{ paddingTop: 20 }}>
      <Card shadow="sm" padding="lg" radius="md">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </Card>
    </Container>
  );
};

export default HtmlContentDisplay;
