import { Meta } from '@storybook/react';
import { UncontrolledTreeEnvironment } from '../uncontrolledEnvironment/UncontrolledTreeEnvironment';
import { StaticTreeDataProvider } from '../uncontrolledEnvironment/StaticTreeDataProvider';
import { Tree } from '../tree/Tree';
import React from 'react';
import { longTree } from './utils/treeData.stories';

export default {
  title: 'Drag-and-Drop Configurability',
} as Meta;


export const NoDragAndDrop = () => (
  <UncontrolledTreeEnvironment<string>
    dataProvider={new StaticTreeDataProvider(longTree.items)}
    getItemTitle={item => item.data}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts']
      }
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);

export const NoDropOnItemsAllowed = () => (
  <UncontrolledTreeEnvironment<string>
    dataProvider={new StaticTreeDataProvider(longTree.items)}
    allowDragAndDrop={true}
    allowReorderingItems={true}
    getItemTitle={item => item.data}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts']
      }
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);

export const NoReorderingAllowed = () => (
  <UncontrolledTreeEnvironment<string>
    dataProvider={new StaticTreeDataProvider(longTree.items)}
    allowDragAndDrop={true}
    allowDropOnItemWithChildren={true}
    getItemTitle={item => item.data}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts']
      }
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);

export const AllowDraggingOnlyItemsStartingWithA = () => (
  <UncontrolledTreeEnvironment<string>
    dataProvider={new StaticTreeDataProvider(longTree.items)}
    allowDragAndDrop={true}
    allowDropOnItemWithChildren={true}
    allowReorderingItems={true}
    canDrag={items => items.map(item => (item.data as string).startsWith('A'))
      .reduce((a, b) => a && b, true)}
    getItemTitle={item => item.data}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts']
      }
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);

export const AllowDroppingOnlyOnItemsStartingWithA = () => (
  <UncontrolledTreeEnvironment<string>
    dataProvider={new StaticTreeDataProvider(longTree.items)}
    allowDragAndDrop={true}
    allowDropOnItemWithChildren={true}
    allowReorderingItems={true}
    canDropAt={(items, target) => target.targetType === 'between-items'
      ? (target.parentItem as string).startsWith('A') : (target.targetItem as string).startsWith('A')}
    getItemTitle={item => item.data}
    viewState={{
      ['tree-1']: {
        expandedItems: ['Fruit', 'Meals', 'America', 'Europe', 'Asia', 'Desserts']
      }
    }}
  >
    <Tree treeId="tree-1" rootItem="root" treeLabel="Tree Example" />
  </UncontrolledTreeEnvironment>
);