import React from 'react';
import { create } from 'react-test-renderer';

import { ViewItem } from '../../../../src/components/viewItems';
const navigation = {
  navigate: jest.fn(),
};
const mockItemWithTitle = {
  __typename: 'Person',
  title: 'Title',
  size: 'Huge',
};
const mockItemWithName = {
  __typename: 'Something',
  name: 'Name',
  size: 'Really Small',
};

describe('ViewItem', () => {
  test('should render title props if isDetailed prop not passed', () => {
    const tree = create(
      <ViewItem item={mockItemWithTitle} navigation={navigation} />,
    );
    const text = tree.root.findByProps({ testID: 'notDetailedText' }).props;

    expect(text.children).toEqual([
      `${mockItemWithTitle.__typename.toUpperCase()}`,
      ' - ',
      'Title',
    ]);
  });

  test('should render name props if isDetailed prop not passed', () => {
    const tree = create(
      <ViewItem item={mockItemWithName} navigation={navigation} />,
    );
    const text = tree.root.findByProps({ testID: 'notDetailedText' }).props;

    expect(text.children).toEqual([
      `${mockItemWithName.__typename.toUpperCase()}`,
      ' - ',
      'Name',
    ]);
  });

  test('should render props as prettyText if isDetailed prop passed', () => {
    const tree = create(
      <ViewItem
        item={mockItemWithName}
        isDetailed={true}
        navigation={navigation}
      />,
    );
    const prettyText = tree.root.findAllByProps({ testID: 'detailPrettyText' });

    expect(prettyText).toBeTruthy();
  });

  test('should render proper text if isDetailed props not passed', () => {
    const tree = create(
      <ViewItem item={mockItemWithName} navigation={navigation} />,
    );
    const text = tree.root.findByProps({ testID: 'viewItemButtonText' }).props;

    expect(text.children).toBe('Details');
  });

  test('should render proper text if isDetailed props passed', () => {
    const tree = create(
      <ViewItem
        item={mockItemWithName}
        isDetailed={true}
        navigation={navigation}
      />,
    );
    const text = tree.root.findByProps({ testID: 'viewItemButtonText' }).props;

    expect(text.children).toBe('Go Back');
  });
});
