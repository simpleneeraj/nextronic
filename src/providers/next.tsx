'use client';

import * as React from 'react';
import { NextUIProvider } from '@nextui-org/react';

function NextUIApp({ children }: React.PropsWithChildren) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

export default NextUIApp;
