import { Center, SegmentedControl } from '@mantine/core';
import classes from './CareerTypeFilter.module.css';

export function CareerTypeFilter() {
  return (
    <Center pt={40} h={100} bg="var(--mantine-color-light)">
      <SegmentedControl
        radius="md"
        size="md"
        data={['All', 'Development', 'Design', 'Marketing', 'Management']}
        classNames={classes}
      />
    </Center>
  );
}