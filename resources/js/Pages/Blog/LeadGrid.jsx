import { Box, Container, Grid, SimpleGrid, Skeleton, rem } from '@mantine/core';

const PRIMARY_COL_HEIGHT = rem(300);

export function LeadGrid() {
  const SECONDARY_COL_HEIGHT = `calc(${PRIMARY_COL_HEIGHT} / 2 - var(--mantine-spacing-md) / 2)`;

  return (
    <Container my="md">
        <SimpleGrid 
          cols={{ base: 1, md: 3 }}
          spacing="md"
        >
        <Box
          style={{ gridColumn: 'span 2' }}
          sx={(theme) => ({
            padding: theme.spacing.md,
            backgroundColor: theme.colors.gray[0],
            textAlign: 'center',
          })}
        >
          <Skeleton height={PRIMARY_COL_HEIGHT} radius="md" animate={true} />
        </Box>
        <Box
          sx={(theme) => ({
            padding: theme.spacing.md,
            backgroundColor: theme.colors.gray[1],
            textAlign: 'center',
          })}
        >
          <Grid gutter="md">
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
            <Grid.Col>
              <Skeleton height={SECONDARY_COL_HEIGHT} radius="md" animate={false} />
            </Grid.Col>
          </Grid>
        </Box>
      </SimpleGrid>
    </Container>
  );
}