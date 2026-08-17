import React from 'react';
import { vi } from 'vitest';

// Mock @expo/vector-icons, sem ele ocorrem erros na importação desses ícones
vi.mock('@expo/vector-icons', () => {
  const MockIcon = React.forwardRef((props: any, ref: any) => {
    return React.createElement('Text', { ref, ...props }, props.name || '');
  });

  const iconFamilies = [
    'AntDesign',
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'FontAwesome5',
    'FontAwesome6',
    'Fontisto',
    'Foundation',
    'Ionicons',
    'MaterialCommunityIcons',
    'MaterialIcons',
    'Octicons',
    'SimpleLineIcons',
    'Zocial',
  ];

  const mockExports: Record<string, any> = {};
  iconFamilies.forEach((family) => {
    mockExports[family] = MockIcon;
  });

  return mockExports;
});
